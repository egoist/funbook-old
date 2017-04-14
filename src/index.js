import Vue from 'vue'
import App from './components/App.vue'
import createRouter from './router'
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
    const router = createRouter({
      routerMode,
      chapters: this.chapters,
      pages: this.pages,
      config: this.config
    })

    if (typeof __IS_REAM__ !== 'undefined' && __IS_REAM__) {
      return { router, App, meta: false, root }
    }

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
