import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://ifourtechnolabapi.ifour-consultancy.net/api',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ifourtechnolab.ifour-consultancy.net',
      },
      {
        protocol: 'https',
        hostname: 'ifourtechnolabapi.ifour-consultancy.net',
      }
    ],
  },
};

export default nextConfig;
