import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  getAccessKey() {
    localStorage.setItem('key', 'testing-workshop')
    window.alert('Zugangsschlüssel erfolgreich erhalten');
  }

  removeAccessKey() {
    localStorage.removeItem('key')
    window.alert('Zugangsschlüssel erfolgreich entfernt');
  }
}
