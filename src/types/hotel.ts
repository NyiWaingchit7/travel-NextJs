import { Hotel } from "@prisma/client";
import { BaseOptions } from "./app";

export interface HotelSLice {
  items: Hotel[];
  isLoading: boolean;
  error: Error | null;
}
export interface CreateHotel extends BaseOptions {
  name: string;
  description: string;
  cityId: number;
}
export interface UpdateHotel extends BaseOptions {
  id: number;
  name: string;
  description: string;
  cityId: number;
}
export interface DeleteHotel extends BaseOptions {
  id: number;
}
