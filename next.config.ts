import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns:[{
      hostname: "xotk1fk5qe.ufs.sh"
    }],
    unoptimized: true, // disables next/image optimization
  },
};

export default nextConfig;
