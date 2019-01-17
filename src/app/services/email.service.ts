import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Email } from '../models/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  api = 'http://localhost:3200/emails';
  cabecalho = new HttpHeaders({ 'Authorization': localStorage.getItem('TOKEN')});

  constructor(private http: HttpClient){}

  enviar(email: Email){

    return this
            .http
            .post(this.api, email, { headers: this.cabecalho });
  }

}
