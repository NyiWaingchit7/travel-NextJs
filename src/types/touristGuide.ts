import { TouristGuide } from "@prisma/client";
import { BaseOptions } from "./app";

export interface TouristGuideSlice {
  items: TouristGuide[];
  isLoading: boolean;
  error: Error | null;
}

export interface CreateTouristGuide extends BaseOptions {
  name: string;
  price: number;
  phoneNumber: string;
  language: string;
  isAvailable: boolean;
}
export interface UpdateTouristGuide extends BaseOptions {
  id: number;
  name: string;
  phoneNumber: string;
  price: number;
  language: string;
  isAvailable: boolean;
}
export interface DeleteTouristGuide extends BaseOptions {
  id: number;
}
