import { clientConfig } from "./client";

export const serverConfig = {
  useSecureCookies: process.env.USE_SECURE_COOKIES === "true",
  firebaseApiKey: process.env.FIREBASE_API_KEY!,
  serviceAccount: process.env.FIREBASE_PRIVATE_KEY
    ? {
        projectId: clientConfig.projectId!,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")!,
      }
    : undefined,
};

export const authConfig = {
  apiKey: serverConfig.firebaseApiKey,
  cookieName: "AuthToken",
  cookieSignatureKeys: [
    process.env.COOKIE_SECRET_CURRENT!,
    process.env.COOKIE_SECRET_PREVIOUS!,
  ],
  cookieSerializeOptions: {
    path: "/",
    httpOnly: true,
    secure: serverConfig.useSecureCookies, // Set this to true on HTTPS environments
    sameSite: "lax" as const,
    maxAge: 12 * 60 * 60 * 24, // twelve days
  },
  serviceAccount: serverConfig.serviceAccount,
  // Set to false in Firebase Hosting environment due to https://stackoverflow.com/questions/44929653/firebase-cloud-function-wont-store-cookie-named-other-than-session
  enableMultipleCookies: true,
  // Set to false if you're not planning to use `signInWithCustomToken` Firebase Client SDK method
  enableCustomToken: true,
  experimental_enableTokenRefreshOnExpiredKidHeader: true,
  debug: true,
  tenantId: clientConfig.tenantId,
};
