import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const cacheHeaders = [
  {
    key: "Cache-Control",
    value: "public, max-age=31536000, immutable",
  },
];

const nextConfig: NextConfig = {
  // Enable compression
  compress: true,

  // Enable React strict mode
  reactStrictMode: true,

  // Disable x-powered-by header
  poweredByHeader: false,

  // Optimize images
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // Experimental features for performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["react", "react-dom"],
  },

  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  async headers() {
    return [
      {
        // Security headers for all routes
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        // Cache static assets (JS, CSS, images)
        source: "/(.*)\\.(js|css|ico|svg|png|jpg|jpeg|gif|webp|avif|woff|woff2)",
        headers: [...securityHeaders, ...cacheHeaders],
      },
      {
        // Cache HTML pages briefly
        source: "/(.*)",
        headers: [
          ...securityHeaders,
          {
            key: "Cache-Control",
            value: "public, s-maxage=3600, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
