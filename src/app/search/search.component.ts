
import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl:'search.component.html' 
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  enteredSearchValue:string ='';
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  
  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
}
