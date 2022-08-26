import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinform! : FormGroup
  constructor(private fb:FormBuilder,private logservice:LoginService) { }

  ngOnInit(): void {
    this.createsigninform();
  }
  createsigninform() {
   this.signinform = this.fb.group({
    "emailId":['',[Validators.required]],
    "password":['',[Validators.required]],
     "isFormAccept":['',[Validators.required]]
    
   })
  }
  signin(){
    this.logservice.authenticatelog(this.signinform.value).subscribe((res:any)=>{
      alert("Login Response" +res)
    })
  }

}
