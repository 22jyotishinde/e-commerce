import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/Authentication/authentication.service';
import { HttpService } from 'src/app/core/http/http.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  submitted = false;
  customer:any
  
  @Input() actionName:string=''
  @Output() signupcompleted = new EventEmitter<boolean>()
  constructor(private fb:FormBuilder,private Auth:AuthenticationService,private service:HttpService) { }

  ngOnInit(): void {
    this.createformsstructure();
    this.customer = this.Auth.getUser();
    if(this.customer != null){
      this.signupForm.patchValue(this.customer);
    }
  }
  ngviewAfterinit(){
    console.log('hideform',this.actionName)
  }
  createformsstructure(){
    this.signupForm = this.fb.group({
      "firstName":['',[Validators.required,Validators.minLength(2),Validators.maxLength(10),Validators.pattern("^[a-zA-z]+$")]],
      "lastName":['',[Validators.required,Validators.minLength(2),Validators.maxLength(10),Validators.pattern("^[a-zA-z]+$")]],
     "mobileNumber":['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
    //  "dateofBirth":[''],
     "emailId":['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
     "password":['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
     "confirmpassword":['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
    //  "isFormAccept":[false,[Validators.required]],
    //  "address":this.fb.group({
    //   "line1":['',],
    //   "line2":['',[]],
    //   "city":['',[]],
    //   "state":['',[]],
    //   "zip":[''],
    //  })
    })
  }
 
  onsubmit(){
    if(this.signupForm.valid){
      this.service.register('users',this.signupForm.value).subscribe(res=>{
        console.log('data',res)
        this.signupcompleted.emit(true) 
      })
      }
     
    console.log("formValue",this.signupForm)
}

  showpage = {
    "firstName":"",
    "LastName":"",
    "mobileNumber":null,
    "dateofBirth":"",
    "emailId":"",
    "password":"",
    "confirmpassword":"",
    "address":"",
      "line1":"",
      "line2":"",
      "city":"",
      "state":"",
      "zipcode":"",
 }
 

}

