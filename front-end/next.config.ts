import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // يسمح بالـ build حتى لو فيه أخطاء ESLint
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
