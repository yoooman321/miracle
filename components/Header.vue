<template lang="pug">
  .header
    NuxtLink.header-link(:to="{name: 'index'}")
      img.header-logo(src="@/assets/images/logo.png")
    .header-icon
      font-awesome-icon.header-search(icon="search" size="lg" color="#595959" @click="searchDialog = true")
      font-awesome-icon.header-user(icon="user" size="lg" color="#595959" @click="userInfoDialog = true")
    Search(v-if="searchDialog")
    UserInfo(v-if="userInfoDialog")
</template>
<script>
import Search from '@/components/Search.vue'
import UserInfo from '@/components/UserInfo.vue'
export default {
  components: {
    Search,
    UserInfo
  },
  data () {
    return {
      searchDialog: false,
      userInfoDialog: false
    }
  }
}
</script>
<style lang="scss">
.header {
  background-color: #fff;
  box-shadow: 0px 5px 7px #7A7B7D;
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  z-index: 999;
  &-logo {
    height: 5vh;
    cursor: pointer;
  }
  &-search {
    cursor: pointer;
    margin-right: 20px;
  }
  &-user {
    cursor: pointer;
  }
  &-link {
    text-decoration: none;
    color: inherit;
  }
}
</style>
