// import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../core/http/http.service';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http:HttpService) { }
  authenticatelog(data:any){
    const params = new HttpParams()
                  .set("emailId",data.emailId)
                  .set("password",data.password)
    return this.http.getData('users',params)
  }
 }














// authLogin(data:any){
//   const params = new HttpParams()
//                  .set("emailId",data.email)
//                  .set("password",data.password)
//   return this.httpService.getData('users',params);
// }