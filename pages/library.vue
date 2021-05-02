<template lang="pug">
  .library
    ul.library-list(v-if="isLogin")
      li.library-item
        font-awesome-icon.library-icon(icon="history" size="lg" color="#7D7D7D")
        h4.library-text 觀看紀錄
      li.library-item
        font-awesome-icon.library-icon(icon="play" size="lg" color="#7D7D7D")
        h4.library-text 你的影片
      li.library-item
        font-awesome-icon.library-icon(icon="film" size="lg" color="#7D7D7D")
        h4.library-text 你的電影
      li.library-item
        font-awesome-icon.library-icon(icon="clock" size="lg" color="#7D7D7D")
        h4.library-text 稍後觀看
    .library-notLogin(v-else)
      Login
      h1.library-title 請先登入
</template>
<script>
import Login from '@/components/Login.vue'
export default {
  components: {
    Login
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    },
    userName () {
      return this.$store.state.userName
    }
  }
}
</script>
<style lang="scss">
.library {
  padding: 40px 0;
  &-item {
    list-style-type: none;
    padding: 30px 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    &:active {
      background-color: #CDCDCD;
    }
  }
  &-list {
    padding: 0;
    border-bottom: 1px solid #777;
  }
  &-notLogin {
    padding: 0 20px;
  }
  &-icon {
    margin-right: 40px;
  }
  &-title {
    text-align: center;
  }
}

</style>
