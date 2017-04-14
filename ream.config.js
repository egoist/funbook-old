module.exports = {
  cwd: './example',
  entry: './index.js',
  extendWebpack(config) {
    config.module
      .rule('md')
        .test(/\.md$/)
        .use('post')
          .loader('post-loader')
  }
}
