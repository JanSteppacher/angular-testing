import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient){}

  getTodos(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users/1/todos')
  }
}
