import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns:[
      {
       protocol: 'https',
       hostname: '**' 
      }
    ]
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'spacepolicyonline.com',
    //   },
    //   {
    //     protocol: 'https',
    //     hostname: 'i0.wp.com',
    //   },
    //   {
    //     protocol: 'https',
    //     hostname: 'assets.science.nasa.gov',
    //   },
    //   {
    //     protocol: 'https',
    //     hostname: 'assets.science.nasa.gov',
    //   },
    //   {
    //     protocol: 'https',
    //     hostname: 'www.nasa.gov'
    //   },
    //   {
    //     protocol: 'https',
    //     hostname: 'cdn.arstechnica.net'
    //   }
    // ]
  }
};

export default nextConfig;
