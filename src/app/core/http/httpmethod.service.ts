import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { product } from '../modelsproduct.ts/interface';

@Injectable({
  providedIn: 'root'
})
export class HttpmethodService {
  // url= "http://localhost:3000/";
  BaseUrl:string = environment.baseurl ;
 
  httpHeaderOptions = {
    "headers":new HttpHeaders()
              .set("Content-type","application/json")
              .set("Allow-All-origin","*")
  }
 
    
  constructor(private http:HttpClient) { }


  getdata(lastdata:string,params:HttpParams=new HttpParams()){
    let url = this.BaseUrl+lastdata;
   return this.http.get<any>(url,{params})
  }
  

  postdata(lastdata:string,body:product){
      const url = this.BaseUrl + lastdata;
      return this.http.post<any>(url,body);
    }
  // getData(endPoint: string, params: HttpParams = new HttpParams()) {
  //   const url = this.BaseUrl + endPoint;
  //   return this.http.get<any>(url, { params });
  // }
 
 
  
  
  }






























































































// httpHeaderoptions = {
//   "headers":new HttpHeaders()
//   .set("Content-type","application/json")
//   .set("Allow-All-origin","*")
//  }