import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

// import { SignupComponent } from '../login/signup/signup.component';







@NgModule({
  declarations: [
    HomeComponent,
  
 ],
  imports: [
    CommonModule,
    HomeRoutingModule,
   
    
  ]
})
export class HomeModule { }
