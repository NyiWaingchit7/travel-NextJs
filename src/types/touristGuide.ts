import { Bus, TouristGuide } from "@prisma/client";
import { BaseOptions } from "./app";

export interface TouristGuideSlice {
  items: TouristGuide[];
  isLoading: boolean;
  error: Error | null;
}

export interface CreateRoom extends BaseOptions {
  name: string;
  price: number;
  language: string;
  isAvailable: boolean;
}
export interface UpdateRoom extends BaseOptions {
  id: number;
  name: string;
  price: number;
  language: string;
  isAvailable: boolean;
}
export interface DeleteRoom extends BaseOptions {
  id: number;
}
