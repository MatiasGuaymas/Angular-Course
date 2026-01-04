import { Component } from '@angular/core';

@Component({
  selector: 'hoinv-rooms',
  imports: [],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss',
})
export class Rooms {
  // Interpolation
  hotelname = 'Hilton Hotel'

  // Property Binding
  rooms = 10;

  // Event Binding
  hideRooms = false;
  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
