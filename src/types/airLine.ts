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
  address: String;
  phoneNumber1: String;
  phoneNumber2?: String;
  cityId: number;
}

export interface UpdateAirLineOptions extends BaseOptions {
  id: number;
  name: string;
  assetUrl?: string;
  to: string;
  address: String;
  phoneNumber1: String;
  phoneNumber2?: String;
  cityId: number;
  isAvailable: boolean;
}

export interface DeleteAirLineOptions extends BaseOptions {
  id: number;
}
