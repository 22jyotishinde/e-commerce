import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { users } from 'src/app/models/loginuser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  postdata(arg0: string, data: users) {
    throw new Error('Method not implemented.');
  }
  get(arg0: string) {
    throw new Error('Method not implemented.');
  }
  baseUrl:string = environment.baseurl ;
 httpHeaderOptions = {
    "headers":new HttpHeaders()
              .set("Content-type","application/json")
              .set("Allow-All-origin","*")
  }
  constructor(private http:HttpClient) { }
  getData(lastdata:string,params:HttpParams=new HttpParams()){
   const url = this.baseUrl + lastdata;
    return this.http.get<any>(url, {params});

  }
  register(lastdata:string,data:any){
return this.http.post<any>(lastdata,data,this.httpHeaderOptions);
  }
}
