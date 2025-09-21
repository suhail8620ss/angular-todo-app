import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';

}
