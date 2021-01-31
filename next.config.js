module.exports={
    images: {
        domains: ['images.unsplash.com','firebasestorage.googleapis.com'],
      },
      webpack: (config, { isServer }) => {
        if (isServer) {
          require('./util/generateSiteMap')
        }
    
        return config
      },
}