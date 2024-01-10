import { City } from "@prisma/client";

export interface CitySlice {
  items: City[];
  isLoading: boolean;
  error: Error | null;
}
