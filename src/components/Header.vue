<template>
  <header class="site-header">
    <h1 class="site-title" v-if="config.title">
      <router-link to="/">{{ config.title }}</router-link>
    </h1>
    <ul class="site-nav" v-if="config.nav">
      <li v-for="navItem in config.nav">
        <a
          :href="navItem.path"
          target="_blank"
          v-if="isExternalLink(navItem.path)">
          {{ navItem.title }}
        </a>
        <router-link
          exact
          v-else
          :to="navItem.path">
          {{ navItem.title }}
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
  export default {
    props: ['config'],
    methods: {
      isExternalLink(link) {
        return /^https?:\/\//.test(link)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .site-header {
    padding: 50px 10px;
    margin: 0 auto;
    margin-bottom: 30px;
    max-width: 940px;
    border-bottom: 1px solid #efefef;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .site-title {
    a {
      color: #333;
    }
  }

  .site-nav {
    display: flex;
    list-style: none;
    padding-left: 0;
    li {
      &:not(:first-child) {
        margin-left: 15px;
      }
      a {
        color: #333;
        &:hover {
          opacity: .7;
        }
        &.router-link-active {
          font-weight: bold;
        }
      }
    }
  }
</style>

<style scoped lang="stylus">
  @media screen and (max-width: 768px) {
    .site-header {
      flex-direction: column;
    }
  }
</style>
