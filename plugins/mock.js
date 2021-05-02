import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import { homeVideoList } from '@/mock/homePageData.js'
import { subscriptionsVideoList, subscriberList } from '@/mock/subscriptionsPageData.js'
import { loginAccountList } from '@/mock/loginData.js'
import { trendingVideoList, trendingType } from '@/mock/trendingPageData.js'
const mock = new MockAdapter(axios)
const homeVideo = homeVideoList()
const trendingVideo = trendingVideoList()
mock.onGet('/getVideoList').reply((data) => {
  return new Promise((resolve, reject) => {
    const { page, userId, videoListPage, videoType } = data.params
    switch (page) {
      case 'home':
        resolve([200, {
          videoList: homeVideo.slice(12 * (videoListPage - 1), videoListPage * 12)
        }])
        break
      case 'trending':
        resolve([200, {
          videoList: trendingVideo.slice(12 * (videoListPage - 1), videoListPage * 12).filter((ele) => {
            return videoType !== '' ? ele.videoType === videoType : true
          })
        }])
        break
      case 'subscriptions':
        resolve([200, {
          videoList: subscriptionsVideoList[userId].slice(12 * (videoListPage - 1), videoListPage * 12)
        }])
        break
      default:
        break
    }
  })
})
// subscriber depends on which user you login
mock.onGet('/getSubscriberList').reply((config) => {
  return new Promise((resolve, reject) => {
    resolve([200, {
      subscriberList: subscriberList[config.params.userId]
    }])
  })
})
mock.onGet('/getTrendingType').reply(200, {
  trendingType
})
// search
mock.onGet('/searchVideo').reply((data) => {
  return new Promise((resolve, reject) => {
    const { searchText, videoListPage } = data.params
    const searchList = homeVideo.filter(ele => ele.videoTitle.includes(searchText))
    resolve([200, {
      videoList: searchList.slice(12 * (videoListPage - 1), videoListPage * 12)
    }])
  })
})
// login
mock.onPost('/login').reply((config) => {
  return new Promise((resolve, reject) => {
    const { account, password } = JSON.parse(config.data)
    const userAccount = loginAccountList.find(user => user.account === account)
    if (!userAccount) {
      resolve([401, {
        status: 401,
        result: 'FAILED',
        message: 'User not found'
      }])
      return
    }
    userAccount.password === password
      ? resolve([200, {
        status: 200,
        result: 'SUCCESS',
        message: 'Login successfully'
      }])
      : resolve([401, {
        status: 401,
        result: 'FAILED',
        message: 'Wrong password'
      }])
  })
})
