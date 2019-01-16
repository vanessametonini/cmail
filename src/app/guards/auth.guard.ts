import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private roteador: Router){}

  canActivate(
      rotaAtual: ActivatedRouteSnapshot
      ,state: RouterStateSnapshot
    )
    : Observable<boolean> | boolean {

      if(localStorage.getItem('TOKEN')){
        return true;
      }
      else {
        this.roteador.navigate([''])
        return false
      }
  }
}
