import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { CadastroComponent } from './cadastro.component';

const rotasCadastro: Routes = [
  {path: '', component: CadastroComponent}
]
@NgModule({
  imports: [
    RouterModule.forChild(rotasCadastro)
  ],
  exports:[
    RouterModule
  ]
})
export class CadastroRoutingModule {}
