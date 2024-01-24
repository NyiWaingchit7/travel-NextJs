interface ConfigType {
  apiBaseUrl: string;
  googleClientId: string;
  googleClientSecret: string;
  spaceEndPoint: string;
}
export const config: ConfigType = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "",
  googleClientId: process.env.GOOGLE_CLIENT_ID || "",
  googleClientSecret: process.env.GOOFLE_CLIENT_SECRET || "",
  spaceEndPoint: process.env.SPACE_END_POINT || "",
};
