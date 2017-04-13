import Vue from 'vue'
import App from './components/App.vue'
import createRouter from './router'

export default class Pen {
  constructor(config = {}) {
    this.chapters = []
    this.pages = []
    this.config = config
  }

  chapter(chapter) {
    this.chapters.push(chapter)
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

    const app = new Vue({
      router,
      render: h => h(App)
    })

    if (typeof IS_SERVER === 'undefined') {
      router.onReady(() => {
        app.$mount(root)
      })
    }

    return { app, router }
  }
}
