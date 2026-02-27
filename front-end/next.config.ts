import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // يسمح بالـ build حتى لو فيه أخطاء ESLint
    ignoreDuringBuilds: true,
  },
   async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8000/api/:path*' // يروح للباك
      }
    ]
  }
};

export default nextConfig;
