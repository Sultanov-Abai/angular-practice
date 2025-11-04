import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms";
import { Rooms } from './rooms/room-interfaces';

@Component({
  selector: 'practice-root',
  imports: [RouterOutlet, RoomsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  protected readonly title = signal('angular-practice');

  data = {
    title: "angular-practice"
  };

  role = 'admin';
}