<template lang="pug">
  .result
    videoList.videoList(:videoInformation="videoInformation")
    Observer(@getVideoList="getVideoList")
</template>

<script>
import Observer from '@/components/Observer.vue'
import VideoList from '@/components/VideoList.vue'
import axios from 'axios'
export default {
  components: {
    VideoList,
    Observer
  },
  data () {
    return {
      videoInformation: [],
      page: 0,
      searchText: this.$route.params.searchText
    }
  },
  methods: {
    getVideoList () {
      this.page++
      axios.get('/searchVideo', { params: { searchText: this.searchText, videoListPage: this.page } }).then((response) => {
        this.videoInformation = [...this.videoInformation, ...response.data.videoList]
      })
    }
  }
}
</script>

<style lang="scss">
.result {
  padding: 5vh 0;
}
</style>
