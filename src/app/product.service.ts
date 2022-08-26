
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

// import { product } from './models/product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
 BaseUrl:string = "http://localhost:3000/"
  constructor(private http:HttpClient) { 
   
  }
  getdata(lastdata:string){
    return this.http.get(this.BaseUrl+lastdata)
  }
  // postdata(lastdata:string,body:product){
  //   return this.http.post<product>(this.BaseUrl+lastdata,body)
  // }


  // ----------------------XXXXXXXXX-----------------------------
   
  // loginpost(lastdata:string,data:login){
  //   return this.http.post<login>(this.BaseUrl+lastdata,data)
  //  }
  //  authLogin(data:any){
  //   const params = new HttpParams()
  //                  .set("emailId",data.email)
  //                  .set("password",data.password)
  //   return this.http.get('users');
  // }
}



















































// productdetails(Product1:product){
  //   let headers = new HttpHeaders();
  //   headers = headers.set("Content-type","apication/json");
  //   return this.http.post(this.BaseUrl,Product1,{'headers':headers});
  // }