import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

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

  getData(): Observable<any[]> {
    return of(this.data)
  }
}
