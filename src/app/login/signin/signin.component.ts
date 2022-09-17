import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinform! : FormGroup
  @Output() signincompl= new EventEmitter<boolean>(false)
  constructor(private fb:FormBuilder,private logservice:LoginService) { }

  ngOnInit(): void {
    this.createsigninform();
  }
  createsigninform() {
   this.signinform = this.fb.group({
    "emailId":['',[Validators.required]],
    "password":['',[Validators.required]],
     "isFormAccept":[true,[Validators.required]]
    
   })

  }
  signin(){
    if(this.signinform.valid)
    this.logservice.authenticatelogin(this.signinform.value).subscribe((res:any)=>{
      if(Array.isArray(res) && res.length > 0){
        let user = res[0];
        user['token'] = "gjhgjjggjghg1233445512";
        localStorage.setItem("user",JSON.stringify(user));
        this.signincompl.emit(true);
        alert("Log in successful")
      }else{
        alert("User doesn't exist please go ahead and register")
      }
    })
  
 
}
}