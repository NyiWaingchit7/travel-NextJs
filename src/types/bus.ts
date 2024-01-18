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
  to: number;
  address: string;
  phoneNumber1: string;
  phoneNumber2?: string;
  cityId: number;
  isAvailable: boolean;
}

export interface UpdateBusOptions extends BaseOptions {
  id: number;
  name: string;
  assetUrl?: string;
  to: number;
  address: string;
  phoneNumber1: string;
  phoneNumber2?: string;
  cityId: number;
  isAvailable: boolean;
}

export interface DeleteBusOptions extends BaseOptions {
  id: number;
}
