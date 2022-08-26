import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {
  actiontype:string = 'SignIn';
  isUserLoggedIn:boolean = false  ;
  constructor() { }

  ngOnInit(): void {
  }
  handleAction(){
    this.actiontype = 'SignUp'
  }
  signUpHandler(event:boolean){
    if(event){
      this.actiontype = 'SignIn';
    }
  }
  // getUserDetails(){
  //   let responseObj = this.authSvc.getUser();
  //   if(responseObj != null){
  //     this.isUserLoggedIn = true ;
  //     this.user = responseObj
  //   }
  // }

}
