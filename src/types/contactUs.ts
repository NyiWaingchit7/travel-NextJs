import { ContactUs } from "@prisma/client";
import { BaseOptions } from "./app";

export interface ContactUsSLice {
  items: ContactUs[];
  isLoading: boolean;
  error: Error | null;
}

export interface CreateContactUsOptions extends BaseOptions {
  name: string;
  contact: string;
  advice: string;
}
export interface UpdateContactUsOptions extends BaseOptions {
  id: number;
  isRead: boolean;
}
