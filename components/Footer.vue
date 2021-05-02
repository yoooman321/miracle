<template lang="pug">
  .footer
    NuxtLink.footer-link(v-for="(item, index) in footerItems" :key="`${item.path}-${index}`" :to="item.path")
      .footer-item
        font-awesome-icon.footer-icon(:icon="item.icon" size="lg" :color="item.path === routePath ?'#000' : '#595959'")
        .footer-text {{ item.text }}
</template>
<script>
export default {
  computed: {
    footerItems () {
      return this.$store.state.isLogin
        ? [
            {
              icon: 'home',
              text: 'Home',
              path: '/'
            },
            {
              icon: 'fire',
              text: 'Trending',
              path: '/trending'
            },
            {
              icon: 'heart',
              text: 'Subscriptions',
              path: '/subscriptions'
            },
            {
              icon: 'play',
              text: 'Library',
              path: '/library'
            }
          ]
        : [
            {
              icon: 'home',
              text: 'Home',
              path: '/'
            },
            {
              icon: 'fire',
              text: 'Trending',
              path: '/trending'
            },
            {
              icon: 'play',
              text: 'Library',
              path: '/library'
            }
          ]
    },
    routePath () {
      return this.$route.path
    }
  }
}
</script>
<style lang="scss">
.footer {
  background-color: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  height: 60px;
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 999;
  &-item {
    cursor: pointer;
    text-align: center;
  }
  &-text {
    font-size: 1rem;
  }
  &-link {
    text-decoration: none;
    color: inherit;
  }
}
</style>
