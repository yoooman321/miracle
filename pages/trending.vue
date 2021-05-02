<template lang="pug">
  .trending
    .trending-type(v-if="showVideoType")
      .trending-item(v-for="(type, index) in videoTypeList" :key="`${type.type}`" @click="classifyByType(type.type)")
        .trending-icon--background
          font-awesome-icon.trending-icon(:icon="type.icon" size="lg" color="#fff")
        .trending-text {{ type.type }}
    videoList(:videoInformation="videoInformation")
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
      videoTypeList: [],
      showVideoType: true,
      page: 0,
      videoType: ''
    }
  },
  created () {
    this.getVideoList()
    this.getVideoTypeList()
  },
  methods: {
    classifyByType (type) {
      this.showVideoType = false
      this.videoType = type
      this.videoInformation = this.videoInformation.filter(ele => ele.videoType === type)
      this.getVideoList()
      // this.videoInformation = this.videoInformation.filter(ele => ele.videoType === type)
    },
    getVideoList () {
      this.page++
      axios.get('/getVideoList', { params: { page: 'trending', videoListPage: this.page, videoType: this.videoType } })
        .then((response) => {
          this.videoInformation = [...this.videoInformation, ...response.data.videoList]
        })
    },
    getVideoTypeList () {
      axios.get('/getTrendingType')
        .then((response) => {
          this.videoTypeList = response.data.trendingType
        })
    }
  }
}
</script>
<style lang="scss">
.trending {
  padding: 40px 0;
  &-type {
    display: flex;
    margin: 5px 0 10px;
  }
  &-item {
    text-align: center;
    cursor: pointer;
  }
  &-icon--background {
    background-color: #454545;
    border-radius: 50%;
    text-align: center;
    padding: 10px;
    margin: 0 5px;
  }
  &-text {
    font-size: 0.8rem;
  }
}
</style>
