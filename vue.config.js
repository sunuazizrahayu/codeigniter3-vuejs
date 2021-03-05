const path = require('path')

module.exports = {
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/production-sub-path/'
  //   : '/',
  // outputDir: path.resolve(__dirname, "public/dist"),
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'client')
      }
    },
    entry: {
      app: path.join(__dirname, 'client', 'main.js')
    }
  }
}