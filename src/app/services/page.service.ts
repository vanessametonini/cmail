import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageDataService {

  titulo = new EventEmitter<string>();

  defineTitulo(novoTitulo: string) {
    document.querySelector('title').textContent = novoTitulo;
    this.titulo.emit(novoTitulo);
  }
}
