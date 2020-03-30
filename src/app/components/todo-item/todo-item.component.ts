import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private service: TodoService) { }

  ngOnInit(): void {
  }

  // Set Dynamic Classes

  setClasses() {
    return {
      todo: true,
      'is-complete': this.todo.completed
    };
  }

  onToggle(todo: Todo) {
    todo.completed = ! todo.completed;
    this.service.toggleCompleted(todo).subscribe((responseTodo) => {
      console.log(responseTodo);
    });
  }

  onDelete(todo: Todo) {
    this.deleteTodo.emit(todo);
  }

}
