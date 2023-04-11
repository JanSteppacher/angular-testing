import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.checkLoggedIn();
  }

  private checkLoggedIn(): boolean {
    if (localStorage.getItem('key') === 'testing-workshop') {
      return true;
    } else {
      window.alert('You need a Access Key to Enter this page!');
      return false;
    }
  }
}
