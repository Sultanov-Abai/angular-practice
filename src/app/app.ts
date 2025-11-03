import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Rooms, RoomsComponent } from "./rooms/rooms";

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