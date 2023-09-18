import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './room';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 1,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Free Wifi, Tv, Bathroom',
      price: 1000,
      photos:
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.5
    },
    {
      roomNumber: 2,
      roomType: 'single Room',
      amenities: 'Air Conditioner, Free Wifi, Tv, Bathroom, Kitchen',
      price: 500,
      photos:
        'https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      checkinTime: new Date('15-Nov-2021'),
      checkoutTime: new Date('20-Nov-2021'),
      rating: 8
    },
    {
      roomNumber: 3,
      roomType: 'Private Room',
      amenities:
        'Air Conditioner, Free Wifi, Tv, Bathroom, Kitchen, Car Parking, Food order',
      price: 1500,
      photos:
        'https://images.unsplash.com/photo-1631049552057-403cdb8f0658?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      checkinTime: new Date('25-Nov-2021'),
      checkoutTime: new Date('29-Nov-2021'),
      rating: 9
    },
  ];

  constructor() {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
