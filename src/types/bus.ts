import { Bus } from "@prisma/client";
import { BaseOptions } from "./app";

export interface BusSlice {
  items: Bus[];
  isLoading: boolean;
  error: Error | null;
}

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
