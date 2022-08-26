import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  getUser(){
    var customer:any;
    customer = localStorage.getItem('user');
    if(customer){
      customer = JSON.parse(customer);
      return customer ;
    }
    return null ;
  }
}
