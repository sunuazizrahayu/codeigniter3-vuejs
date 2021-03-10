const path = require('path')

module.exports = {
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/production-sub-path/'
  //   : '/',
  outputDir: path.resolve(__dirname, "public/dist"),
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'client')
      }
    },
    entry: {
      app: path.join(__dirname, 'client', 'main.js')
    }
  },
  // options...
    // devServer: {
    //   disableHostCheck: true,
    //   host: 'localhost',
    //   headers: {
    //       'Access-Control-Allow-Origin': '*',
    //       'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    //   },
    //   watchOptions: {
    //       poll: true
    //   },
    //   proxy: 'http://localhost:8080/api',
    // }
}