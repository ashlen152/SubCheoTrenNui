/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // webpack5: true,
  // webpack: (config) => {
  //   config.resolve.fallback = {
  //     fs: false,
  //     path: false,
  //     os: false,
  //     stream: false, 
  //     util: false, 
  //     crypto: false, 
  //     events: false, 
  //     net: false, 
  //     tls: false, 
  //     process: false,
  //     buffer: false
  //   };

  //   return config;
  // },
}

module.exports = nextConfig
