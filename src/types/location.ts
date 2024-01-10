import { Location } from "@prisma/client";
import { BaseOptions } from "./app";

export interface LocationSlice {
  items: Location[];
  isLoading: boolean;
  error: Error | null;
}

export interface CreateLocation extends BaseOptions {
  name: string;
  title: string;
  description: string;
  cityId: number;
}
export interface UpdateLocation extends BaseOptions {
  id: number;
  name: string;
  title: string;
  description: string;
  cityId: number;
}
export interface DeleteLocation extends BaseOptions {
  id: number;
}
