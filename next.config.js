/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },

  //new option config
};

module.exports = nextConfig;
//export default nextConfig;
