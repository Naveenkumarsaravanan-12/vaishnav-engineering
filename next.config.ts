import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    cpus: 2,
  },
  async redirects() {
    return [
      {
        source: "/lander",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
