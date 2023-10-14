/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["newburypublic.s3.amazonaws.com", "newbury-887694351.imgix.net"], 
        minimumCacheTTL: 6000,
      },
}

module.exports = nextConfig
