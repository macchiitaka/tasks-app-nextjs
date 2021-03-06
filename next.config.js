/** @type {import('next/dist/next-server/server/config-shared').NextConfig} */
const config = {
  typescript: {
    ignoreDevErrors: true,
    ignoreBuildErrors: true,
  },
  webpack5: true,
  compress: true,
  poweredByHeader: false,
};

module.exports = config;
