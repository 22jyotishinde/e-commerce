
import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cart/services/cartservice.service';
import { HttpmethodService } from '../core/http/httpmethod.service';
import { product } from '../models/product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productArray:product[]=[];
  filterproductArray:product[]=[]
  constructor(private httpsev:HttpmethodService,private cart:CartserviceService ,private prosev:ProductService) { }
  
   ngOnInit(): void {
     this.httpsev.getdata('productsitem').subscribe((res:product[])=>{
      if(Array.isArray(res)&& res.length>0){
        this.productArray =res;
        console.log('productArray')
        this.filterproduct('all');

      console.log(res)
      }
   this.filterproduct('all')
     })
    //  this.prosev.getdata('productsitem').subscribe((res:any)=>{
    //   this.productArray=res
    //   console.log(this.productArray)
    //   this.filterproduct('all')
    //  })
   
    this.filterproductArray = this.productArray
    }
  filterproduct(type:any){
    if(type == 'all'){
      this.filterproductArray = this.productArray;
    }else{
      this.filterproductArray = this.productArray.filter((res:any)=>(res.category == type));
    }}
   

    AddTocart(Product:product){
      this.cart.additemTocart(Product);
    }
}

