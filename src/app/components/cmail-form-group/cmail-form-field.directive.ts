import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[cmailFormField]'
})
export class CmailFormFieldDirective implements OnInit {

  constructor(private campo: ElementRef) { }

  ngOnInit() {
    const campo = this.campo.nativeElement;
    const placeholder = campo.id.replace(campo.id[0], campo.id[0].toUpperCase());

    campo.setAttribute('name', campo.id);
    campo.setAttribute('placeholder', placeholder);
    campo.classList.add('mdl-textfield__input');

  }

}
