<template lang="pug">
  .subscriptions
    .subscriptions-list
      .subscriptions-item(v-for="(user, index) in subscriptionList" :key="`${user.userName}-${index}`")
        .subscriptions-userImage(:style="{backgroundImage: `url('${user.userImage}')`}")
    NuxtLink.subscriptions-link(to="/channels")
      font-awesome-icon.subscriptions-more(icon="chevron-right" size="lg" color="#3456AB")
    videoList.subscriptions-videoList(:videoInformation="videoInformation")
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
  middleware: ['routerAuth'],
  data () {
    return {
      videoInformation: [],
      page: 0,
      subscriptionList: []
    }
  },
  created () {
    this.getVideoList()
    this.getSubscriberList()
  },
  methods: {
    getVideoList () {
      this.page++
      const userId = this.$store.state.userName
      axios.get('/getVideoList', { params: { userId, page: 'subscriptions', videoListPage: this.page } })
        .then((response) => {
          this.videoInformation = [...this.videoInformation, ...response.data.videoList]
        })
    },
    getSubscriberList () {
      const userId = this.$store.state.userName
      axios.get('/getSubscriberList', { params: { userId } })
        .then((response) => {
          this.subscriptionList = response.data.subscriberList
        })
    }
  }
}
</script>
<style lang="scss">
.subscriptions {
  padding: 40px 0;
  position: relative;
  &-list {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    width: calc(100% - 1em - 20px);
    height: 50px;
  }
  &-userImage {
    width: 40px;
    height: 40px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    margin: 5px 10px;
  }
  &-item {
    cursor: pointer;
  }
  &-more {
    position: absolute;
    right: 20px;
    top: 50px;
    width: 10px;
  }
  &-videoList {
    margin-top: 10px;
  }
  &-link {
    text-decoration: none;
    color: inherit;
  }
}
</style>
