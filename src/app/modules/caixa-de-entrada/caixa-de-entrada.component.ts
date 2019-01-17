import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: [`
    ul, li {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
  `]
})
export class CaixaDeEntradaComponent implements OnInit{

  private _isNewEmailFormOpen = false;

  emailList = [];
  email = { destinatario: '', assunto: '', conteudo: ''};

  constructor(private emailService: EmailService){}

  ngOnInit(){
    this.emailService
        .listar()
        .subscribe(
          (lista) => {
            this.emailList = lista;
        })
  }

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }

  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this.isNewEmailFormOpen
  }

  handleNewEmail(formEmail: NgForm) {

    if (formEmail.invalid) return;

    this.emailService
        .enviar(this.email)
        .subscribe(
          emailApi => {
            console.log(emailApi);
            this.emailList.push(emailApi);
            this.email = { destinatario: '', assunto: '', conteudo: '' };
            formEmail.reset();
          }
          ,erro => console.error(erro)
        )
  }

}
