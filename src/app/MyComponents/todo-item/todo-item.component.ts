import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { Todo } from '../../Todo';
import { NgIf, NgClass,  } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  imports: [ NgClass],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
   @Input() todo!: Todo;
   @Input() i!: number;
   @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
    @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
   onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("OnClick has been triger..");
   }
   onCheckboxClick(todo: Todo){
         this.todoCheckbox.emit(this.todo)
   }
   onToggle() {
  this.todoCheckbox.emit(this.todo);
}
}


