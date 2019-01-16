import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    LoginComponent
  ]
  ,imports: [
    CommonModule,
    LoginRoutingModule
  ]
  ,exports: [
    LoginComponent
  ]
})
export class LoginModule{}
