<template lang="pug">
  .search
    .search-bar
      font-awesome-icon.search-icon(icon="arrow-left" size="lg" color="#595959" @click="closeSearchWindow")
      input.search-inputField(v-model="searchText" type="text" placeholder="搜尋youtube")
      font-awesome-icon.search-icon(icon="search" size="lg" color="#595959" @click="search")
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  computed: {
    searchText: {
      get () {
        return this.$store.state.searchText
      },
      set (value) {
        this.setSearchText(value)
      }
    }
  },
  methods: {
    ...mapMutations(['setSearchText']),
    closeSearchWindow () {
      this.$parent.searchDialog = false
    },
    search () {
      if (this.searchText !== '') {
        this.$parent.searchDialog = false
        this.$router.push(`/result/${this.searchText}`)
      }
    }
  }
}
</script>
<style lang="scss">
.search {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background-color: rgba(0, 0,0, 0.6);
  &-bar {
    width: 100%;
    background-color: #f1f1f1;
    height: 8vh;
    display: flex;
    align-items: center;
  }
  &-icon {
    margin: 0 20px;
    cursor: pointer;
  }
  &-inputField {
    width: 100%;
    outline: 0;
    border: 0;
    background-color: transparent;
    border-bottom: 2px solid black;
    font-size: 1rem;
    &:focus {
      border-bottom: 2px solid #252483;
    }
  }
}
</style>
