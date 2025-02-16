interface Config {
  mailjet: {
    api_key: string;
    secret_key: string;
  };
  signup_list_id: number;
  env: "production" | "staging" | "preview" | "development";
}

const getEnv = () => {
  switch (process.env.NEXT_PUBLIC_APP_ENV) {
    case "production":
      return "production";
    case "preview":
      return "preview";
    default:
      return "development";
  }
};

const config: Config = {
  mailjet: {
    api_key: process.env.MAILJET_API_KEY || "test-key",
    secret_key: process.env.MAILJET_SECRET_KEY || "test-secret",
  },
  signup_list_id: 78531,
  env: getEnv(),
};


export const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export default config;
