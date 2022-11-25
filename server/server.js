const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")

const app = express()
app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors({ origin: true, credentials:true }));

const stripe = require("stripe")("sk_test_51M7q4jH2dumVHfbArK2KClLee89fVsqwXVm4SDGMr2jPWW57dfVy4JEeTNSvbHNMj3Vwq7LgQNC7pCFyGEqZXXOR00PuWDdCZ4");

app.post("/checkout", async (req, res, next ) => {
    try {
        const session = await stripe.checkout.sessions.create({
            line_items: req.body.items.map((item) => ({
            currency: "usd",
            product_data: {
                name: item.name,
                images: [item.product]
            },
            //unit amount is priced in cents so multiplied by 100 for dollar
            unit_amount: item.price * 100 
            })),
            mode: "payment",
            success_url:"http://localhost:4200/success.html",
            cancel_url:"http://localhost:4200/cancel.html"
        });
        res.status(200).json(session);
    }catch (error) {
      next(error);
    }
});

app.listen(4200, () => console.log('app is running on 4200'));