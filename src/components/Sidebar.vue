<template>
  <div class="sidebar">
    <ul class="sidebar-nav">
      <li class="sidebar-nav-item" v-for="chapter in chapters">

        <router-link
          exact
          class="sidebar-chapter-title"
          v-if="chapter.content"
          :to="`/${chapter.id}`">
          {{ chapter.title }}
        </router-link>
        <span
          class="sidebar-chapter-title"
          v-else>
          {{ chapter.title }}
        </span>

        <ul v-if="chapter.stories" class="sidebar-stories">
          <li class="sidebar-story" v-for="story in chapter.stories">
            <router-link
              exact
              class="sidebar-story-title"
              :to="`/${chapter.id}/${story.id}`">
              {{ story.title }}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['chapters']
  }
</script>

<style scoped lang="stylus">
  .sidebar {
    width: 240px;
    padding: 0 15px 0 0;
    margin: 0 15px 0 0;
    border-right: 1px solid #ececec;
  }

  .sidebar-nav, .sidebar-stories {
    list-style: none;
    padding-left: 0;
  }

  .sidebar-nav-item {
    margin-bottom: 15px;
  }

  .sidebar-nav-item a.router-link-active {
    color: #e25e5e;
  }

  .sidebar-chapter-title {
    font-size: 18px;
    color: #333;
    font-weight: bold;
  }

  .sidebar-story-title {
    font-size: 16px;
    color: #444;
  }
</style>
