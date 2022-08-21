//vue.config.js
module.exports = {
    transpileDependencies: ['uview-ui'],
    configureWebpack: config => {
        runtimeChunk: {
            name: 'manifest'
          }
    }
}