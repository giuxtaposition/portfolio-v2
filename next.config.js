const debug = process.env.NODE_ENV !== 'production'
const path = require('path')

module.exports = {
  assetPrefix: !debug ? '/portfolio-v2/' : '',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
