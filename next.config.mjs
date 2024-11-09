/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: `@import "./_mantine.scss";`,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
