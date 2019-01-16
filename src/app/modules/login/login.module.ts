import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { CommonModule } from '@angular/common';
import { CmailFormModule } from 'src/app/components/cmail-form-group/cmail-form.module';


@NgModule({
  declarations: [
    LoginComponent
  ]
  ,imports: [
    CommonModule,
    LoginRoutingModule,
    CmailFormModule
  ]
  ,exports: [
    LoginComponent
  ]
})
export class LoginModule{}
