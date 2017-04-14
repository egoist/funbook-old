const glob = require('glob')
const Prism = require('prismjs')
require('prismjs/components/prism-bash')

const routes = glob.sync('**/*.md', { cwd: 'docs' })
.map(v => {
  let url = v.replace(/\.md$/, '/')
    .replace(/^(chapters|pages)/, '')
  if (url === '/home/') {
    url = '/'
  }
  return url
})

module.exports = {
  cwd: './docs',
  entry: './index.js',
  generate: {
    routes
  },
  extendWebpack(config) {
    config.module
      .rule('md')
        .test(/\.md$/)
        .use('post')
          .loader('post-loader')
          .options({
            html: true,
            linkify: true,
            typographer: true,
            highlight(str, lang) {
              return Prism.highlight(str, Prism.languages[lang] || Prism.languages.markup)
            }
          })
  }
}
