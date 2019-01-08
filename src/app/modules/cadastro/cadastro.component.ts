import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
    telefone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}-?[0-9]{4}[0-9]?')]),
    avatar: new FormControl(),
  })

  constructor() { }

  ngOnInit() {
    console.log(this.formCadastro.controls.nome.errors)
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
    if(this.formCadastro.valid){
      console.log(this.formCadastro.value);
      this.formCadastro.reset();
    }
    else {
      this.validarTodosOsCamposDoFormulario(this.formCadastro);
    }
  }

}
