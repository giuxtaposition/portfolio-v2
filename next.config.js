const debug = process.env.NODE_ENV !== 'production'

// next.js configuration
const nextConfig = {
  assetPrefix: !debug ? '/portfolio-v2/' : '',
}

module.exports = withPlugins([], nextConfig)
