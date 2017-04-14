import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import Page from './components/Page.vue'

Vue.use(Router)
Vue.use(Meta, {
  keyName: 'head',
  attribute: 'data-fun-head',
  ssrAttribute: 'data-fun-ssr-attr',
  tagIDKeyName: 'fhid'
})

export default ({
  routerMode = 'history',
  chapters = [],
  pages = [],
  config = {}
} = {}) => {
  const router = new Router({
    mode: routerMode
  })

  const addChapters = (_chapters, parent) => {
    router.addRoutes(_chapters.map(chapter => {
      if (chapter.stories) {
        addChapters(chapter.stories, chapter)
      }
      return {
        path: parent ? `/${parent.id}/${chapter.id}` : `/${chapter.id}`,
        component: Page,
        props: { chapter, chapters, config }
      }
    }))
  }

  const addPages = _pages => {
    router.addRoutes(_pages.map(page => {
      return {
        path: page.path,
        component: Page,
        props: { chapter: page, chapters, config }
      }
    }))
  }

  addPages(pages)
  addChapters(chapters)

  return router
}
