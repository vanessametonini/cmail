import { Component } from "@angular/core";
import { PageDataService } from 'src/app/services/page.service';

@Component({
    selector: 'cmail-header',
    templateUrl: './header.component.html',
    styleUrls: [
        './header.component.css',
        './header-search.css'
    ]
})
export class HeaderComponent {
    private _isMenuOpen = false;
    tituloDaPagina = 'CMail';

    constructor(private pageService: PageDataService){
      this.pageService
        .titulo
        .subscribe(
          novoTitulo => {
            this.tituloDaPagina = novoTitulo
            console.log(this.tituloDaPagina);
          });
    }

    get isMenuOpen() {
        return this._isMenuOpen
    }

    toggleMenu() {
        this._isMenuOpen = !this.isMenuOpen
    }

}
