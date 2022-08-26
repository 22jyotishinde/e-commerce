import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpmethodService {

  BaseUrl:string = environment.baseurl ;
  httpHeaderOptions = {
    "headers":new HttpHeaders()
              .set("Content-type","application/json")
              .set("Allow-All-origin","*")
  }
    
  constructor(private http:HttpClient) { }


  getdata(lastdata:string){
    let url = this.BaseUrl+lastdata;
   return this.http.get(this.BaseUrl+lastdata)
  }

  postdata(lastdata:string,body:any){
      const url = this.BaseUrl + lastdata;
      return this.http.post<any>(url,body,this.httpHeaderOptions);
    }
  
  }






























































































// httpHeaderoptions = {
//   "headers":new HttpHeaders()
//   .set("Content-type","application/json")
//   .set("Allow-All-origin","*")
//  }