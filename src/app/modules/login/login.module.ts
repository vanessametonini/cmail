import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { CommonModule } from '@angular/common';
import { CmailFormModule } from 'src/app/components/cmail-form-group/cmail-form.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent
  ]
  ,imports: [
    CommonModule,
    LoginRoutingModule,
    CmailFormModule,
    FormsModule
  ]
  ,exports: [
    LoginComponent
  ]
})
export class LoginModule{}
