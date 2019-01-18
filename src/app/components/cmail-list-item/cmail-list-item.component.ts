import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cmail-list-item',
  templateUrl: './cmail-list-item.component.html',
  styles: []
})
export class CmailListItemComponent implements OnInit {

  @Input() destinatario = '';
  @Input() assunto = '';
  @Input() introducaoDoConteudo = '';
  @Input() dataDeEnvio = '';
  @Output('eventoVaiRemover') vaiRemover = new EventEmitter()

  constructor() {}

  ngOnInit() {}

  removeEmail(click: Event){
    if (confirm('Tem certeza?')) {
      this.vaiRemover.emit({ status: 'removing' })
    }
  }

}
