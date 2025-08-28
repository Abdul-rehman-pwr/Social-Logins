/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "static.vecteezy.com",
      "www.google.com",
      "image-processor-storage.s3.us-west-2.amazonaws.com",
      "maresmedia.se",
      "coffective.com",
      "image.similarpng.com",
      "lh3.googleusercontent.com",
    ],
  },
  output: "export",
  trailingSlash: true,
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
