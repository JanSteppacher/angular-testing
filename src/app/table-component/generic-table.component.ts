import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";
import {Todo} from "../entities/todo.interface";

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})
export class GenericTableComponent implements OnInit {

  todos: Todo[] | undefined

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getTodos().subscribe(data => {
      this.todos = data
    })
  }
}
