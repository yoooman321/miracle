<template lang="pug">
  .footer
    .footer-item
      font-awesome-icon.footer-icon(icon="home" size="lg" color="#595959")
      .footer-text Home
    .footer-item
      font-awesome-icon.footer-icon(icon="fire" size="lg" color="#595959")
      .footer-text Trending
    .footer-item
      font-awesome-icon.footer-icon(icon="heart" size="lg" color="#595959")
      .footer-text Subscriptions
    .footer-item
      font-awesome-icon.footer-icon(icon="play" size="lg" color="#595959")
      .footer-text Library
</template>
<style lang="scss">
.footer {
  background-color: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  height: 8vh;
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
}
</style>
