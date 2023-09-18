export interface Room {
  totalRooms: 20;
  availableRooms: number;
  bookedRooms: number;
}

export interface RoomList {
  roomNumber: number;
  roomType: string;
  amenities: string;
  price: number;
  photos: string;
  checkinTime: Date;
  checkoutTime: Date;
  rating: number;
}
