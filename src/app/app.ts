import { Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms";
import { Rooms } from './rooms/room-interfaces';
import { ContainerComponent } from "./container/container";
import { EmployeeComponent } from "./employee/employee";

@Component({
  selector: 'practice-root',
  imports: [RouterOutlet, RoomsComponent, EmployeeComponent, ContainerComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  protected readonly title = signal('angular-practice');

  // @ViewChild('name', {static: true}) nvr!: ElementRef;

  // ngOnInit(): void {
  //   this.nvr.nativeElement.innerText = "Welcome to Angular Practice";
  // }

  // @ViewChild('user', {read: ViewContainerRef} ) vcr!: ViewContainerRef;

  // ngAfterViewInit() {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);

  //   componentRef.instance.numberOfRooms = 12;
  // }
}