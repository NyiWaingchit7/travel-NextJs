import { Bus } from "@prisma/client";

export interface BusSlice {
  items: Bus[];
  isLoading: boolean;
  error: Error | null;
}
