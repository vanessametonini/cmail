import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { CmailListItemComponent } from './cmail-list-item/cmail-list-item.component';

@NgModule({
  declarations: [HeaderComponent, CmailListItemComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, CmailListItemComponent]
})
export class SharedComponentModule{}
