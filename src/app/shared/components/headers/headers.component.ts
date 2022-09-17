import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartserviceService } from 'src/app/cart/services/cartservice.service';
import { AuthenticationService } from 'src/app/core/Authentication/authentication.service';
import { product } from 'src/app/models/product';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {
  actiontype:string = 'SignIn';
  isuserLoggedin:boolean = false  ;
  store:any
  selecteditems:Observable<product[]> | null = null
  @ViewChild('buttonClose') Closebutton:any;
  constructor(private authentsvc:AuthenticationService,private route:Router,private cart:CartserviceService) { }

  ngOnInit(): void {
    this.getuserdetail();
    this.selecteditems = this.cart.selectItems
      // this.selecteditemcount = res.length;
      // console.log("product Arr",res)

    
  }
  handleAction(){
    this.actiontype = 'SignUp'
  }
  getuserdetail(){
    let resobj = this.authentsvc.getUser();
    if(resobj!=null){
      this.isuserLoggedin = true
      this.store = resobj
    }
  }
signcheck(event:boolean){
    if(event){
      this.actiontype = 'SignIn';
      this.Closebutton.nativeElement.click();
      this.getuserdetail()
    }
  }
  
  // getUserDetails(){
  //   let responseObj = this.authSvc.getUser();
  //   if(responseObj != null){
  //     this.isUserLoggedIn = true ;
  //     this.user = responseObj
  //   }
  // }
 
  signup(event:boolean){
// alert("event data"+event)
if (event)
 this.actiontype = 'SignIn';
  }
  logout(){
    localStorage.removeItem('user')
    this.isuserLoggedin = false
    // location.reload()   //in case your requirement is after logout paget is refresh then use this ()
    this.route.navigateByUrl('product')
  }
}
