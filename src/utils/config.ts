interface ConfigType {
  apiBaseUrl: string;
}
export const config: ConfigType = {
  apiBaseUrl: process.env.NEXR_PUBLIC_API_BASE_URL || "",
};
