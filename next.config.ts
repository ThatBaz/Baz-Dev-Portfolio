// filepath: next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "./",
  trailingSlash: true,
  reactStrictMode: true,
  assetPrefix: "./",
  distDir: "out",
  images: {
    unoptimized: true,
  },
};
