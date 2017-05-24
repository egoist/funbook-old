import Vue from 'vue'
import Router from 'vue-router'
import Page from './components/Page.vue'

Vue.use(Router)

export default ({
  routerMode = 'history',
  chapters = [],
  pages = [],
  config = {}
} = {}) => {
  const router = new Router({
    mode: routerMode
  })

  const getComponent = (chapter, chapters) => {
    return async () => {
      if (typeof chapter.content === 'function') {
        chapter.content = await chapter.content()
        if (
          typeof chapter.content === 'object' &&
          !chapter.content.template &&
          !chapter.content.render
        ) {
          // This is a markdown post
          chapter.content = chapter.content.content
        }
      }

      return {
        functional: true,
        render: h => h(Page, {
          props: { chapter, chapters, config }
        })
      }
    }
  }

  const addChapters = (_chapters, parent) => {
    router.addRoutes(_chapters.map(chapter => {
      if (chapter.stories) {
        addChapters(chapter.stories, chapter)
      }
      return {
        path: parent ? `/${parent.id}/${chapter.id}` : `/${chapter.id}`,
        component: getComponent(chapter, chapters)
      }
    }))
  }

  const addPages = _pages => {
    router.addRoutes(_pages.map(page => {
      return {
        path: page.path,
        component: getComponent(page, chapters)
      }
    }))
  }

  addPages(pages)
  addChapters(chapters)

  if (typeof __BROWSER__ !== 'undefined' && __BROWSER__) {
    const progress = require('nprogress')
    require('./css/progress.styl')

    router.beforeEach((to, from, next) => {
      progress.start()
      next()
    })

    router.afterEach(() => {
      progress.done()
    })
  }

  return router
}
