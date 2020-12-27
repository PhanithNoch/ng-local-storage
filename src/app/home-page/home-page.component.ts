import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent implements OnInit {

  lstProduct: any = []; //created for loop in view(UI) 
  lstLocalStorage:any = [];

  objProduct: any = {
    name: "",
    qty: 0,
    price: 0,
  };
  constructor() {}

  ngOnInit() {
   let jsonStr = localStorage.getItem('$product'); // getting data from local storage 
   if(jsonStr)// if has data 
   {
    let products = JSON.parse(jsonStr); // convert from string to json object back 

    this.lstProduct = products;   //
   }
  
  }

  onSaveProduct() {
    this.lstLocalStorage = [];
    this.lstLocalStorage = this.lstProduct;
    this.lstLocalStorage.push(this.objProduct);
    localStorage.setItem("$product", JSON.stringify(this.lstLocalStorage));
  }

  onDelete(index: number) {
    console.log(index);

    this.lstProduct.splice(index);
  }
}
