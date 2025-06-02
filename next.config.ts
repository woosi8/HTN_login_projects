import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export", // next-auth API 라우트는 GitHub Pages에서는 불가
  ...(process.env.NODE_ENV === "production"
    ? {
        basePath: "/HTN_login_projects",
      }
    : {}),
};

export default nextConfig;
