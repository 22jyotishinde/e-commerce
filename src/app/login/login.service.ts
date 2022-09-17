// import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpmethodService } from '../core/http/httpmethod.service';




@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private httpcli:HttpmethodService) { }
  // authenticatelog(data:any){
  //   const params = new HttpParams()
  //                 .set("emailId",data.emailId)
  //                 .set("password",data.password)
  //   return this.httpcli.getdata('users',params)
  // }
  registerUser(data: any) {
    return this.httpcli.postdata('users', data)
  }
  authenticatelogin(data:any){
    const params = new HttpParams()
                   .set("emailId",data.emailId)
                   .set("password",data.password)
 return this.httpcli.getdata('users',params);
  }
 }














// authLogin(data:any){
//   const params = new HttpParams()
//                  .set("emailId",data.email)
//                  .set("password",data.password)
//   return this.httpService.getData('users',params);
// }