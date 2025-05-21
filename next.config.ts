import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // output: "export",
  ...(process.env.NODE_ENV === "production"
    ? {
        basePath: "/HTN_login_projects",
      }
    : {}),
};

export default nextConfig;
