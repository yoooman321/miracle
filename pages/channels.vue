<template lang="pug">
  .channels
    ul.channels-list
      li.channels-item(v-for="(user, index) in subscriptionList" :key="`${user.userName}-${index}`")
        .channels-image(:style="{backgroundImage: `url('${user.userImage}')`}")
        .channels-text {{ user.userName }}
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      subscriptionList: []
    }
  },
  created () {
    this.getSubscriberList()
  },
  methods: {
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
.channels {
  padding: 40px 0;
  &-list {
    padding: 0;
  }
  &-item {
    list-style-type: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px 0px;
    &:active {
      background-color: #CDCDCD;
    }
  }
  &-image {
    width: 40px;
    height: 40px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    margin: 5px 10px;
  }
}
</style>
