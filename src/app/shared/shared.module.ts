import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './components/headers/headers.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    HeadersComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[HeadersComponent,
    FooterComponent]
})
export class SharedModule { }
