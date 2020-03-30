import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private service: TodoService) { }

  ngOnInit(): void {
    this.service.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter((todoItem) => todoItem.id !== todo.id);
    this.service.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo) {
    this.service.addTodo(todo).subscribe((response) => this.todos.push(response));
  }

}
