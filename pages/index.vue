<template lang="pug">
  .index
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
      page: 0
    }
  },
  methods: {
    getVideoList () {
      this.page++
      axios.get('/getVideoList', { params: { page: 'home', videoListPage: this.page } }).then((response) => {
        this.videoInformation = [...this.videoInformation, ...response.data.videoList]
      })
    }
  }
}
</script>

<style lang="scss">
.index {
  padding: 40px 0;
}
</style>
