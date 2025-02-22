import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";
import {
  authMiddleware,
  redirectToHome,
  redirectToLogin,
} from "next-firebase-auth-edge";
import { authConfig } from "@gingr/firebase";

const PUBLIC_PATHS = ["/auth/login", "/auth/signup", "/auth/reset-password"];

export async function middleware(request: NextRequest) {
  return authMiddleware(request, {
    loginPath: "/api/login",
    logoutPath: "/api/logout",
    refreshTokenPath: "/api/refresh-token",
    debug: authConfig.debug,
    enableMultipleCookies: authConfig.enableMultipleCookies,
    enableCustomToken: authConfig.enableCustomToken,
    apiKey: authConfig.apiKey,
    cookieName: authConfig.cookieName,
    cookieSerializeOptions: authConfig.cookieSerializeOptions,
    cookieSignatureKeys: authConfig.cookieSignatureKeys,
    serviceAccount: authConfig.serviceAccount,
    experimental_enableTokenRefreshOnExpiredKidHeader:
      authConfig.experimental_enableTokenRefreshOnExpiredKidHeader,
    tenantId: authConfig.tenantId,
    dynamicCustomClaimsKeys: ["someCustomClaim"],
    handleValidToken: async ({ token, decodedToken, customToken }, headers) => {
      // Authenticated user should not be able to access /login, /register and /reset-password routes
      if (PUBLIC_PATHS.includes(request.nextUrl.pathname)) {
        return redirectToHome(request);
      }

      return NextResponse.next({
        request: {
          headers,
        },
      });
    },
    handleInvalidToken: async (_reason) => {
      return redirectToLogin(request, {
        path: "/auth",
        publicPaths: PUBLIC_PATHS,
      });
    },
    handleError: async (error) => {
      console.error("Unhandled authentication error", { error });

      return redirectToLogin(request, {
        path: "/auth",
        publicPaths: PUBLIC_PATHS,
      });
    },
  });
}

export const config = {
  matcher: [
    "/",
    "/((?!_next|favicon.ico|__/auth|__/firebase|api|static|auth|images|assets|icons|.*\\.).*)",
    "/api/login",
    "/api/logout",
    "/api/refresh-token",
  ],
};
