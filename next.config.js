/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/analytics/:region",
        destination: "https://:region.google-analytics.com/g/collect",
      }
    ]
  }
}

module.exports = nextConfig