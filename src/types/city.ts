import { City } from "@prisma/client";
import { BaseOptions } from "./app";

export interface CitySlice {
  items: City[];
  isLoading: boolean;
  error: Error | null;
}

export interface CreateCityOptions extends BaseOptions {
  name: string;
  assetUrl?: string;
  description: string;
}

export interface UpdateCityOptions extends BaseOptions {
  id: number;
  name: string;
  assetUrl?: string;
  description: string;
}

export interface DeleteCityOptions extends BaseOptions {
  id: number;
}
