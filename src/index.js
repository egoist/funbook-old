import Vue from 'vue'
import App from './components/App.vue'
import createRouterFactory from './router'
import { getChapterSlug } from './utils'

export default class FunBook {
  constructor(config = {}) {
    this.chapters = []
    this.pages = []
    this.config = config
  }

  chapter(chapter) {
    this.chapters.push({
      ...chapter,
      id: getChapterSlug(chapter),
      stories: chapter.stories && chapter.stories.map(story => ({
        ...story,
        id: getChapterSlug(story)
      }))
    })
    return this
  }

  page(page) {
    this.pages.push(page)
    return this
  }

  open(root = '#root', {
    routerMode
  } = {}) {
    const routerOptions = {
      routerMode,
      chapters: this.chapters,
      pages: this.pages,
      config: this.config
    }

    if (typeof __IS_REAM__ !== 'undefined' && __IS_REAM__) {
      return {
        createRouter: () => createRouterFactory(routerOptions),
        App,
        root,
        meta: {
          keyName: 'head',
          attribute: 'data-fun-head',
          ssrAttribute: 'data-fun-ssr-attr',
          tagIDKeyName: 'fhid'
        }
      }
    }

    const router = createRouterFactory(routerOptions)

    const app = new Vue({
      router,
      render: h => h(App)
    })

    router.onReady(() => {
      app.$mount(root)
    })

    return { router, app }
  }
}
