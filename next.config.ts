/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/HTN_login_projects",
  images: {
    unoptimized: true,
  },
  assetPrefix: "/HTN_login_projects/",
  trailingSlash: true, // 추가
};

module.exports = nextConfig;
