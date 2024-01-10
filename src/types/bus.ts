import { Bus } from "@prisma/client";
<<<<<<< HEAD
import { BaseOptions } from "./app";
=======
>>>>>>> 694937cf72b0290a7c9ace03ec62576619805a17

export interface BusSlice {
  items: Bus[];
  isLoading: boolean;
  error: Error | null;
}
<<<<<<< HEAD

export interface CreateBusOptions extends BaseOptions {
  name: string;
  assetUrl?: string;
  price: number;
  to: string;
  seatNum: number;
  time: string;
  isAvailable: boolean;
  cityId: number;
}

export interface UpdateBusOptions extends BaseOptions {
  id: number;
  name: string;
  assetUrl?: string;
  price: number;
  to: string;
  seatNum: number;
  time: string;
  cityId: number;
  isAvailable: boolean;
}

export interface DeleteBus extends BaseOptions {
  id: number;
}
=======
>>>>>>> 694937cf72b0290a7c9ace03ec62576619805a17
