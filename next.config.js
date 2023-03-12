/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  images:{
    domains:['seeklogo.com']
    // remotePatterns:[{
    //   protocol: 'http://',
    //   hostname:'seeklogo.com',
    //   pathname:"/images/C/chatgpt-logo-02AFA704B5-seeklogo.com.png"
    // }]
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
