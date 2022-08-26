
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../core/http/http.service';
import { product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
pro:any
  constructor(private service:ProductService,private http:HttpService) { }
  productArray:any;
  filterproductArray:product[] = [];

  ngOnInit(): void {
    // this.service.getdata('productsitem').subscribe((res:any)=>{
    //   this.productArray=res
    //   console.log(this.productArray)
    //   this.filterproduct('all')
    // })
    this.http.getData('productsitem').subscribe((res:any)=>{
      this.productArray=res
      console.log(this.productArray)
      this.filterproduct('all')
    })
    }
  filterproduct(type:any){
    if(type == 'all'){
      this.filterproductArray = this.productArray;
    }else{
      this.filterproductArray = this.productArray.filter((res:any)=>(res.category == type));
    }}

}
