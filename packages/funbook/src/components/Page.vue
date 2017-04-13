<template>
  <div class="page">

    <site-header v-if="config.title" :config="config" />

    <section class="main">

      <sidebar :chapters="chapters" />

      <div class="content">
        <div class="content-header" v-if="chapter.title">
          <h2 class="content-title">
            {{ chapter.title }}
          </h2>
        </div>
        <component
          :is="chapter.content"
          v-if="isComponent" />
        <div
          class="markdown-body"
          v-else
          v-html="chapter.content">
        </div>
      </div>

    </section>
  </div>
</template>

<script>
  import SiteHeader from './Header.vue'
  import Sidebar from './Sidebar.vue'

  export default {
    props: ['chapter', 'chapters', 'config'],
    head() {
      const title = [this.chapter.title, this.config.title].filter(v => Boolean(v))

      return {
        title: title.join(' - ')
      }
    },
    computed: {
      isComponent() {
        return typeof this.chapter.content === 'object' || typeof this.chapter.content === 'function'
      }
    },
    components: {
      SiteHeader,
      Sidebar
    }
  }
</script>

<style src="github-markdown-css/github-markdown.css"></style>
<style src="../css/markdown.css"></style>

<style scoped>
  .main {
    display: flex;
    max-width: 940px;
    margin: 0 auto;
    padding-top: 30px;
  }

  .content {
    padding: 0 0 0 15px;
    width: 100%;
  }

  .content-header {
    margin-bottom: 30px;
  }

  .content-title {
    font-size: 1.7em;
    font-weight: 800;
    line-height: 1;
  }
</style>
