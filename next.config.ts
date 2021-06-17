export const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  assetPrefix: !debug ? '/portofolio-v2/' : '',
}
