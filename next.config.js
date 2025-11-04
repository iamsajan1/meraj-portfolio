/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 👈 add this line to generate static site in `out/`

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
