interface ConfigType {
  apiBaseUrl: string;
  googleClientId: string;
  googleClientSecret: string;
}
export const config: ConfigType = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "",
  googleClientId: process.env.GOOGLE_CLIENT_ID || "",
  googleClientSecret: process.env.GOOFLE_CLIENT_SECRET || "",
};
