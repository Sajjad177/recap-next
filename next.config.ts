// import type { NextConfig } from "next";
// import path from "path";

// const nextConfig: NextConfig = {
//   reactCompiler: true,

//   turbopack: {
//     root: path.join(__dirname),
//     // loader rules
//     rules: {
//       // SVG -> React component
//       "*.svg": {
//         loaders: [
//           {
//             loader: "@svgr/webpack",
//             options: { icon: true },
//           },
//         ],
//         as: "*.js",
//       },
//       // MDX example (if you set up mdx loader)
//       "*.mdx": {
//         loaders: ["@mdx-js/loader"],
//         as: "*.js",
//       },
//     },
//     resolveAlias: {
//       // alias underscore -> lodash
//       underscore: "lodash",
//       // conditional alias example
//       mocha: { browser: "mocha/browser-entry.js" },
//     },
//     resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".mjs", ".json"],
//     debugIds: false,
//   },
//   // other Next config
//   reactStrictMode: true,
//   images: {
//     domains: ["localhost", "res.cloudinary.com"],
//   },
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Enable filesystem caching for `next dev`
    turbopackFileSystemCacheForDev: true,
    // Enable filesystem caching for `next build`
    // turbopackFileSystemCacheForBuild: true,
  },
};

export default nextConfig;