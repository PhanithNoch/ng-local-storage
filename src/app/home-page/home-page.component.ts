import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
// step 1 

// create a list for add to local storage 
  lstProduct:any = [];
  
  // create object of product 
  objProduct:any = {
    name:"",
    qty:0,
    price:0
    
  };
  constructor() { }

  ngOnInit() {
  }

  onSaveProduct()
  {
    this.lstProduct.push(this.objProduct);
    console.log(this.objProduct);
  }

}
