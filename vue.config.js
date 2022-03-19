const { defineConfig } = require('@vue/cli-service')
const path = require('path');
const HttpRequestMockPlugin = require('http-request-mock/plugin/webpack');

module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      new HttpRequestMockPlugin({
        enable: process.env.NODE_ENV === 'development',
        entry: /src\/main\.js$/,
        dir: path.resolve(__dirname, 'mock/'),
      }),
    ],
  },

  devServer: {
    port: 8080
  },

  transpileDependencies: true
})
