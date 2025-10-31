/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* config options here */
  images: {
    domains: ["images.unsplash.com", "img.clerk.com","ik.imagekit.io"],
  },
};

export default nextConfig;
