import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Xuất thành HTML tĩnh
  images: {
    unoptimized: true, // Tắt tối ưu ảnh vì Shared Hosting không hỗ trợ Image Optimization
  },
};

export default nextConfig;
