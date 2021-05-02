<template lang="pug">
  ul.login
    li.login-item(@click="showUserList = !showUserList")
      font-awesome-icon.login-icon(icon="sign-in-alt" color="#595959")
      h4.login-text 登入
    transition(name="slide-fade")
      ul.login-userlist(v-if="showUserList")
        li.login-item(v-if="showUserList" @click="login(0)")
          font-awesome-icon.login-icon(icon="user" color="#595959")
          h4.login-text test01
        li.login-item(v-if="showUserList" @click="login(1)")
          font-awesome-icon.login-icon(icon="user" color="#595959")
          h4.login-text test02
</template>
<script>
import axios from 'axios'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      showUserList: false,
      loginData: [
        {
          account: 'test01',
          password: 'abcd1234'
        },
        {
          account: 'test02',
          password: '1234abcd'
        }
      ]
    }
  },
  methods: {
    ...mapMutations(['changeisLogin', 'setUserName']),
    login (index) {
      axios.post('/login', this.loginData[index])
        .then((response) => {
          if (response.status === 200) {
            this.$emit('closeUserInfoWindow')
            this.changeisLogin(true)
            this.setUserName(this.loginData[index].account)
            this.$router.push({ name: 'index' })
          }
        })
    }
  }
}
</script>
<style lang="scss">
.login {
  padding: 0;
  &-icon {
    margin: 0 20px;
    cursor: pointer;
  }
  &-item {
    list-style-type: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 20px 0px;
    &:active {
      background-color: #CDCDCD;
    }
  }
  &-text {
    color: #595959;
    font-weight: normal
  }
  &-userlist {
    padding: 0;
  }
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  transform: translateY(10px);
}
</style>
