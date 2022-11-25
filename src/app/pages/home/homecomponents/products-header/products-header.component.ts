import { Component, EventEmitter, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: 'products-header.component.html',
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();

  sort = 'descending';
  itemsShowCount = 12;
  constructor() { }
  
  ngOnInit(): void {
  }

  onSortUpdate(newSort: string) : void {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }
 onItemsUpdate(count: number) : void {
  this.itemsShowCount = count;
  this.itemsCountChange.emit(count);
 }

 onColumnsUpdate(colsNum: number): void {
 this.columnsCountChange.emit(colsNum);
 }
}
