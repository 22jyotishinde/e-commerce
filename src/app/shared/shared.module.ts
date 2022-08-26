import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './components/headers/headers.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginModule } from '../login/login.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    HeadersComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LoginModule,
    RouterModule
  
  

  ],
  exports:[HeadersComponent,
    FooterComponent]
})
export class SharedModule { }
