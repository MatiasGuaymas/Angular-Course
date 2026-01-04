import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Rooms } from './rooms/rooms';

@Component({
  selector: 'hoinv-root',
  imports: [RouterOutlet, Rooms],
  templateUrl: './app.html',
  // template: `<h1> Hola mundo! </h1>
  // <p> Angular es asombroso </p> `,
  styleUrl: './app.scss'
  // styles: [`h1 { color:red }]
})
export class App {
  protected readonly title = signal('hotelinventoryapp');
}
