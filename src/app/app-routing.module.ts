import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';

const rotas: Routes = [
  {path: '', loadChildren: 'src/app/modules/login/login.module#LoginModule'},
  {path: 'inbox', component: CaixaDeEntradaComponent, canActivate: [AuthGuard]},
  {path: 'cadastro', loadChildren: 'src/app/modules/cadastro/cadastro.module#CadastroModule'},
  {path: '**', redirectTo: ''}
]

@NgModule({
  imports: [
    RouterModule.forRoot(rotas)
  ],
  exports: [RouterModule],
  providers: [ AuthGuard ]
})
export class ModuloRoteamento { }
