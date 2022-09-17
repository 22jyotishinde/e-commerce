import { Injectable } from '@angular/core';
import { BehaviorSubject, map, take } from 'rxjs';
import { product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  selectedItemsSubject = new BehaviorSubject<product[]>([]);
  selectItems = this.selectedItemsSubject.asObservable();
  constructor() { 
    this.getSelectedProducts();
  }

  emitSelectProduct(products:product[]){
    this.selectedItemsSubject.next(products)
    
  }
  additemTocart(Product:product){
  this.selectItems.pipe(take(1),map((products=>{
    products.push(Product);
    let prodArr = JSON.stringify(products)
    localStorage.setItem("products",prodArr)
  }))).subscribe();
  }
  getSelectedProducts() {
    let productArr: any = [];
    productArr = localStorage.getItem("products");
    // productArr = JSON.parse(productArr);
    if(productArr){
      productArr = JSON.parse(productArr);
      this.emitSelectProduct(productArr);
    }
}
}
