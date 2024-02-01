import { AirLine } from "@prisma/client";
import { BaseOptions } from "./app";

export interface AirLineSlice {
  items: AirLine[];
  isLoading: boolean;
  error: Error | null;
}

export interface CreateAirLineOptions extends BaseOptions {
  name: string;
  assetUrl?: string;
  address: string;
  phoneNumber1: string;
  phoneNumber2?: string;
  cityId: number;
  to: number;
  isAvailable: boolean;
}

export interface UpdateAirLineOptions extends BaseOptions {
  id: number;
  name: string;
  assetUrl?: string;
  to: number;
  address: string;
  phoneNumber1: string;
  phoneNumber2?: string | null;
  cityId: number;
  isAvailable: boolean;
}

export interface DeleteAirLineOptions extends BaseOptions {
  id: number;
}
