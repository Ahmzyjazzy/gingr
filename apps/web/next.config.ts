import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: "/(.*)",
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups", // Adjust as needed
          },
          // You can add other headers here if necessary
        ],
      },
    ];
  },
};

export default nextConfig;
