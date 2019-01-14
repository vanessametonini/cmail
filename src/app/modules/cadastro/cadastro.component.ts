import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AsyncValidatorFn, AbstractControl } from '@angular/forms';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { map, catchError, flatMap, switchMap } from "rxjs/operators";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formCadastro: FormGroup;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.formCadastro = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      username: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}-?[0-9]{4}[0-9]?')]),
      avatar: new FormControl('', [], this.validaImagem())
    })
  }

  validaImagem() {

    return (campoDoFormulario: AbstractControl) => {

      let resultado;

      return campoDoFormulario
        .valueChanges
        .subscribe(
          campoValue => {
            resultado = this
                        .httpClient
                        .get(campoValue, {observe: 'response'}
                        )
                        .pipe(
                          map(response => {
                            return response.ok ? null : { urlInvalida: true }
                          })
                        )
          }
        )
    }

    //if (!campoDoFormulario.valid) return new Observable<null>()

    // return this
    //       .httpClient
    //       .head(
    //         campoDoFormulario.value
    //         ,{ observe: "response" }
    //       )
    //       .pipe(
    //         map((response: HttpResponseBase) => {
    //           console.log(response);
    //           return response.ok ? null : { urlInvalida: true }
    //         })
    //         , catchError((error) => {
    //           console.log(error);
    //           return [{ urlInvalida: true }]
    //         })
    //       )
  }

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
    console.log(this.formCadastro.value, 'form valido');
    this.formCadastro.reset();
  }
  else {
    console.log(this.formCadastro.value, 'FORM INVALIDO');
    this.validarTodosOsCamposDoFormulario(this.formCadastro);
  }
}

}
