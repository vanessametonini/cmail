import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { Email } from 'src/app/models/email';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: []
})
export class CaixaDeEntradaComponent {

  private _isNewEmailFormOpen = false;

  emailList = [];
  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }

  constructor(private emailService: EmailService){}

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }

  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this.isNewEmailFormOpen
  }

  handleNewEmail(formEmail: NgForm) {

    if (formEmail.invalid) return;

    const email = new Email(this.email);

    this.emailService
        .enviar(email)
        .subscribe(
          () => {
            this.emailList.push(this.email)

            this.email = {
              destinatario: '',
              assunto: '',
              conteudo: ''
            }

            formEmail.reset();
          }
          ,erro => console.error(erro)
        )
  }

}
