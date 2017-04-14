import FunBook from '../src'
import 'prismjs/themes/prism.css'

const book = new FunBook({
  title: 'FunBook',
  nav: [{
    title: 'Home',
    path: '/'
  }, {
    title: 'GitHub',
    path: 'https://github.com/egoist/funbook'
  }]
})

book.page({
  path: '/',
  content: () => import('./pages/home.md')
})

book.chapter({
  title: 'Basics',
  id: 'basics',
  stories: [{
    title: 'Install',
    content: () => import('./chapters/basics/install.md')
  }, {
    title: 'Use CDN',
    content: () => import('./chapters/basics/use-cdn.md')
  }, {
    title: 'Use Webpack',
    content: () => import('./chapters/basics/use-webpack.md')
  }]
})

book.chapter({
  title: 'Advanced',
  stories: [{
    title: 'Use Markdown File',
    content: () => import('./chapters/advanced/use-markdown-file.md')
  }, {
    title: 'Use Vue Component',
    content: () => import('./chapters/advanced/use-vue-component.md')
  }, {
    title: 'Server-side Rendering',
    content: () => import('./chapters/advanced/server-side-rendering.md')
  }]
})

book.chapter({
  title: 'API',
  stories: [{
    title: 'Initialize',
    content: () => import('./chapters/api/initialize.md')
  }, {
    title: 'Add Chapter',
    content: () => import('./chapters/api/add-chapter.md')
  }, {
    title: 'Add Page',
    content: () => import('./chapters/api/add-page.md')
  }]
})

export default book.open()
