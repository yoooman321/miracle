<template lang="pug">
  .header
    img.header-logo(src="@/assets/images/logo.png")
    .header-icon
      font-awesome-icon.header-search(icon="search" size="lg" color="#595959")
      font-awesome-icon.header-user(icon="user" size="lg" color="#595959")
</template>
<style lang="scss">
.header {
  background-color: #fff;
  box-shadow: 0px 5px 7px #7A7B7D;
  height: 8vh;
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
}
</style>
