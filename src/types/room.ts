import { Room, RoomType } from "@prisma/client";
import { BaseOptions } from "./app";

export interface RoomSlice {
  items: Room[];
  isLoading: boolean;
  error: Error | null;
}
export interface CreateRoom extends BaseOptions {
  type: RoomType;
  hotelId: number;
  price: number;
  isAvailable: boolean;
}
export interface UpdateRoom extends BaseOptions {
  id: number;
  type: RoomType;
  hotelId: number;
  price: number;
  isAvailable: boolean;
}
export interface DeleteRoom extends BaseOptions {
  id: number;
}
