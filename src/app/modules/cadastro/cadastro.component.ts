import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import { User } from "../../models/user";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: ['']
})
export class CadastroComponent implements OnInit {

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
    telefone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}-?[0-9]{4}[0-9]?')]),
    avatar: new FormControl('', [Validators.required], this.validaImagem.bind(this))
  })

  mensagensErro;

  constructor(private httpClient: HttpClient
              ,private roteador: Router){}

  ngOnInit() {}

  validaImagem(campoDoFormulario: FormControl) {
    return this.httpClient
            .head(campoDoFormulario.value, {
              observe: 'response'
            })
            .pipe(
              map((response: HttpResponseBase) => {
                return response.ok ? null : { urlInvalida: true }
              }),
              catchError((error) => {
                return [{ urlInvalida: true }]
              })
            )
  }

  // validaImagem() {

  //   return (campoDoFormulario) => {
  //     return this
  //             .httpClient
  //             .head(campoDoFormulario.value, { observe: 'response' })
  //             .pipe(
  //               map((response: HttpResponseBase) => {
  //                 console.log(response);
  //                 return response.ok
  //                   ? null
  //                   : { urlInvalida: true, statusText: response.statusText }
  //               })
  //               ,
  //               catchError((error) => {
  //                 console.log(error);
  //                 return [{ urlInvalida: true, statusText: error.statusText }]
  //               })
  //             )
  //   }
  // }

  validarTodosOsCamposDoFormulario(form: FormGroup) {
    // for(let field in form.controls){
    //   const campo = form.get(field);
    //   campo.markAsTouched({ onlySelf: true });
    // }

    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      control.markAsTouched({ onlySelf: true });
    });

  }

  handleCadastrarUsuario() {
    if (this.formCadastro.valid) {

      // const userData = {...this.formCadastro.value, ...{
      //   name: this.formCadastro.get('nome').value,
      //   phone: this.formCadastro.get('telefone').value
      // }}

      const userData = new User(this.formCadastro.value);

      this.httpClient
          .post('http://localhost:3200/users',userData)
          .subscribe(
            (response) => {
              console.log(`Cadastrado com sucesso`);
              console.log(response);

              this.formCadastro.reset()

              setTimeout(() => {
                this.roteador.navigate(['']);
              }, 1000);
            }
            ,(responseError: HttpErrorResponse) => {
              this.mensagensErro = responseError.error.body
            }
          )
    }
    else {
      this.validarTodosOsCamposDoFormulario(this.formCadastro);
    }
  }

}
