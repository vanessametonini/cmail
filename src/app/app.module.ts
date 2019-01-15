import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from "@angular/forms";
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { LoginComponent } from './modules/login/login.component';
import { ModuloRoteamento } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { CadastroModule } from './modules/cadastro/cadastro.module';
import { SharedComponentModule } from './components/shared-components.module';

@NgModule({
  declarations: [
    AppComponent,
    CaixaDeEntradaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CadastroModule,
    ModuloRoteamento,
    SharedComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
