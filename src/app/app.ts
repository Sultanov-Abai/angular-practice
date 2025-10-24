import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  protected readonly title = signal('angular-practice');

  data = {
    title: "angular-practice"
  };

  onLogoClicked() {
  alert('Hello World!');
  }

  onKeyUp(newTitle:string) {
    this.data.title = newTitle;
  }

}

