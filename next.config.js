/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  pwa: {
    dest: 'public',
    disable: false, //process.env.NODE_ENV === 'development',
  },
};

module.exports = withPWA(nextConfig);
