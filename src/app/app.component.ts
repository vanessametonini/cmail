import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private isNewEmailFormOpen = false;
  emailList = [];
  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }

  toggleNewEmailForm() {
    this.isNewEmailFormOpen = !this.isNewEmailFormOpen
  }

  handleNewEmail(event: Event) {
    event.preventDefault();

    this.emailList.push(this.email)

    this.email = {
      destinatario: '',
      assunto: '',
      conteudo: ''
    }

  }

}