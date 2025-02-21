import { NextRequest, NextResponse } from "next/server";

import { admin } from "./lib";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("__session")?.value; // Get Firebase Auth token

  if (!token) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  try {
    await admin.auth().verifyIdToken(token); // Validate the token

    return NextResponse.next(); // Allow the request
  } catch (error) {
    console.error("Invalid token:", error);

    return NextResponse.redirect(new URL("/signin", req.url));
  }
}

// Apply middleware to all protected routes
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"], // Change paths as needed
};
