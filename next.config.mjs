/** @type {import('next').NextConfig} */
// Static export for Cloudflare Pages (scripts/deploy.sh uploads out/). Images
// are served as-is: there is no image optimizer on Pages.
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "source.unsplash.com" },
    ],
  },
};
export default nextConfig;
