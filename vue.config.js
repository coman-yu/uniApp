const path = require('path');
//vue.config.js
module.exports = {
  transpileDependencies: ['uview-ui'],
  configureWebpack: (config) => {
    runtimeChunk = {
      name: 'manifest',
    };
  },
};
