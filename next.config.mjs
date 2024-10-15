import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tecdn.**",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default withNextVideo(nextConfig, { folder: "./public/videos" });
