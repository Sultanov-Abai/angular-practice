import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomList } from '../room-interfaces';

@Component({  
  selector: 'practice-rooms-list',
  imports: [CommonModule],
  templateUrl: './rooms-list.html',
  styleUrl: './rooms-list.scss'
})

export class RoomsList implements OnInit {

  @Input() rooms: RoomList[] = [];

  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() {}

  ngOnInit(): void {

  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }

}
