import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data = [
    {country: 'Germany', leader: 'Olaf Scholz'},
    {country: 'France', leader: 'Emmanuel Macron'},
    {country: 'Romania', leader: 'Nicolae Ciucă'},
    {country: 'Sweden', leader: 'Ulf Kristersson'},
    {country: 'China', leader: 'Xi Jinping'},
    {country: 'United States of America', leader: 'Joe Biden'}
  ]

  getData() {
    return this.data
  }
}
