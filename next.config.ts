import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/sv',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
