import { AirLine } from "@prisma/client";

export interface AirLineSlice {
  items: AirLine[];
  isLoading: boolean;
  error: Error | null;
}
