import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from "@angular/forms";
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { ModuloRoteamento } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedComponentModule } from './components/shared-components.module';
import { FiltroPorAssunto } from './modules/caixa-de-entrada/filtro-por-assunto.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CaixaDeEntradaComponent,
    FiltroPorAssunto
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedComponentModule,
    ModuloRoteamento
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
