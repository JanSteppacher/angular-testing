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

  checkLoggedIn(): boolean {
    if (localStorage.getItem('key') === 'testing-workshop') {
      return true;
    } else {
      window.alert('Du brauchst einen Zugangsschlüssel um diese Seite betreten zu können!');
      return false;
    }
  }
}
