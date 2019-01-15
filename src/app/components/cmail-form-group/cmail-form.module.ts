import { NgModule } from '@angular/core';
import { CmailFormGroupComponent } from './cmail-form-group.component';
import { CmailFormFieldDirective } from './cmail-form-field.directive';

@NgModule({
  declarations:[
    CmailFormGroupComponent,
    CmailFormFieldDirective
  ],
  exports:[
    CmailFormGroupComponent,
    CmailFormFieldDirective
  ]
})
export class CmailFormModule{}
