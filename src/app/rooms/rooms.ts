import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Rooms, RoomList } from './room-interfaces';
import { RoomsList } from "./rooms-list/rooms-list";

@Component({
  selector: 'practice-rooms',
  imports: [CommonModule, RoomsList],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss',
})

export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = false;

  rooms: Rooms = {  
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [];


  selectedRoom!: RoomList;

  constructor() {}

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amentities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 500,
        photos: 'https://example.com/deluxe-room.jpg',
        checkInTime: new Date('11-Nov-2025 14:00:00'),
        checkOutTime: new Date('11-Nov-2025 22:00:00'),
        rating: 4.5943,
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe Room',
        amentities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen, Sea View',
        price: 800, 
        photos: 'https://example.com/premium-room.jpg',
        checkInTime: new Date('12-Dec-2025 14:00:00'),
        checkOutTime: new Date('12-Dec-2025 22:00:00'),
        rating: 3.8443,
      },
      {
        roomNumber: 3,
        roomType: 'Private Room',
        amentities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen, Sea View, Living Area',
        price: 1200,
        photos: 'https://example.com/suite-room.jpg',
        checkInTime: new Date('15-Jan-2026 14:00:00'),
        checkOutTime: new Date('15-Jan-2026 22:00:00'),
        rating: 2.9754,
      }
    ]
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }
}
