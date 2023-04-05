import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  getAccessKey() {
    localStorage.setItem('key', 'testing-workshop')
    window.alert('Getting Access Key was successful');
  }

  removeAccessKey() {
    localStorage.removeItem('key')
    window.alert('Removing Access Key was successful');
  }
}
