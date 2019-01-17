export class Email {

  to = '';
  subject = '';
  content = '';

  constructor(email?: { destinatario, assunto, conteudo}){
    this.to = email.destinatario;
    this.subject = email.assunto;
    this.content = email.conteudo;
  }

}
