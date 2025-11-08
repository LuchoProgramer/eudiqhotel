import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Ignorar errores de ESLint durante el build
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'firebasestorage.googleapis.com' },
      { protocol: 'https', hostname: 'www.eudiqhotel.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
    ],
  },
  allowedDevOrigins: [
    'http://localhost:3000',
    'http://192.168.0.5:3000',
    'http://192.168.0.5',
  ],
};

export default nextConfig;
