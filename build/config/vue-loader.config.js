module.exports = (isDev) => {
  return {
    preserveWhitepace: true,
    extractCSS: !isDev,
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true
    },
    loaders: {
      less: 'vue-style-loader?sourceMap!css-loader?sourceMap!less-loader?sourceMap'.split('!'),
      css: 'vue-style-loader?sourceMap!css-loader?sourceMap'.split('!')
    }
    // hotReload: false, // 根据环境变量生成
  }
}
