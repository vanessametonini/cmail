import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensagemErro;
  login = {email: '', password: ''};

  constructor(private loginService: LoginService
              ,private roteador: Router ) { }

  ngOnInit() {}

  handleLogin(formLogin: NgForm){

    if(formLogin.valid) {
      this.loginService
          .logar(this.login)
          .subscribe(
            () => this.roteador.navigate(['/inbox'])
            ,(responseError: HttpErrorResponse) => this.mensagemErro = responseError.error
          )
    }
  }
}
