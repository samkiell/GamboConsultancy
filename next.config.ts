import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: '/master-class',
        destination: '/masterclass',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
