import marked from 'marked3'
import FunBook from '../src'

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
  content: 'Home Page'
})

book.chapter({
  title: 'Basics',
  id: 'basics',
  content: '<h2>Basic Usage!!</h2>',
  stories: [{
    title: 'Install',
    id: 'install',
    content: marked(`
\`\`\`bash
npm i --save funbook
# or
yarn add funbook
\`\`\`

## CDN

\`\`\`html
<script src="https://unpkg.com/funbook/dist/funbook.umd.js"></script>
\`\`\`

    `)
  }, {
    title: 'Getting Started',
    id: 'getting-started',
    content: () => import('./getting-started.vue')
  }]
})

book.chapter({
  title: 'Advanced',
  id: 'advanced',
  content: {
    render(h) {
      return h('h2', null, ['You can use component as page content!'])
    }
  }
})

book.open('#app')
