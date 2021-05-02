<template lang="pug">
  .userInfo
    .userInfo-bar
      font-awesome-icon.userInfo-icon(icon="times" size="lg" color="#595959" @click="closeUserInfoWindow")
      .userInfo-textField 帳戶
    .userInfo-selection
      ul.userInfo-isLogin(v-if="isLogin")
        li.userInfo-item
          font-awesome-icon.userInfo-icon(icon="user" color="#595959")
          .userInfo-text {{ userName }}
        li.userInfo-item(@click="logOut")
          font-awesome-icon.userInfo-icon(icon="sign-in-alt" color="#595959")
          h4.userInfo-text 登出
      Login(v-else @closeUserInfoWindow="closeUserInfoWindow")
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
  },
  methods: {
    closeUserInfoWindow () {
      this.$parent.userInfoDialog = false
    },
    logOut () {
      location.reload()
    }
  }
}
</script>
<style lang="scss">
.userInfo {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background-color: rgba(0, 0,0, 0.6);
  &-bar {
    width: 100%;
    background-color: #fff;
    height: 8vh;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #999;
  }
  &-icon {
    margin: 0 20px;
    cursor: pointer;
  }
  &-textField {
    width: 100%;
    font-size: 1rem;
    margin-right: 20px;
  }
  &-selection {
    background-color: #fff;
  }
  &-item {
    list-style-type: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 20px 0px;
  }
  &-isLogin {
    padding: 0;
  }
  &-text {
    color: #595959;
    font-weight: normal
  }
}
</style>
