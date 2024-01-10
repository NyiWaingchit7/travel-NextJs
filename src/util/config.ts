interface config {
  apiBaseUrl: string;
}
export const config: config = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "",
};
