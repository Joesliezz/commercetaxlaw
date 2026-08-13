import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true
  }
};

export default nextConfig;
