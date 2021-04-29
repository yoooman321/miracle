<template lang="pug">
  .index
    .video(v-for="(video, index) in videoInformation" :key="`${video.videoTitle}-${index}`")
      .video-cover(:style="{backgroundImage: `url('${video.videoCover}')`}")
        .video-time {{ video.videoTime }}
      .video-information
        .video-userImage(:style="{backgroundImage: `url('${video.videoUserImage}')`}")
        .video-text
          h3.video-title {{ video.videoTitle }}
          h4.video-subtitle
            div.video-user-name {{ video.videoUserNmae }}
            div.video-dot •
            div.video-views 觀看次數：{{ video.videoViews }} 次
            div.video-dot •
            div.video-date {{ video.videoUploadDate }}
</template>

<script>
import Cover01 from '@/assets/images/videoCover/cover01.jpg'
import Cover02 from '@/assets/images/videoCover/cover02.jpg'
import User01 from '@/assets/images/user/user01.jpg'
import User02 from '@/assets/images/user/user02.jpg'
export default {
  data () {
    return {
      videoInformation: [
        {
          videoTitle: 'Sample 1',
          videoTime: '22:00',
          videoCover: Cover01,
          videoUserImage: User01,
          videoUserNmae: 'User1',
          videoViews: 1000,
          videoUploadDate: '2021-04-10'
        },
        {
          videoTitle: 'Sample 2',
          videoTime: '10:00',
          videoCover: Cover02,
          videoUserImage: User02,
          videoUserNmae: 'User2',
          videoViews: 1300,
          videoUploadDate: '2021-04-20'
        },
        {
          videoTitle: 'Sample 2',
          videoTime: '10:00',
          videoCover: Cover02,
          videoUserImage: User02,
          videoUserNmae: 'User2',
          videoViews: 1300,
          videoUploadDate: '2021-04-20'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.index {
  padding: 5vh 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.video {
  width: calc(33.3% - (8*2px));
  margin: 0 8px;
  &-cover {
    width: 100%;
    min-height: 200px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    cursor: pointer;
  }
  &-time {
    position: absolute;
    right: 5px;
    bottom: 5px;
    background-color: #2F2F2F;
    border-radius: 5px;
    padding: 5px;
    color: #fff;
  }
  &-information {
    display: flex;
    margin-top: 10px;
    margin-bottom: 15px;
    align-items: flex-start;
    flex-direction: row;
  }
  &-userImage {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0 10px;
  }
  &-title {
    height: 40px;
    line-height: 40px;
    font-weight: 500;
    font-size: 1.4rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  &-subtitle {
    font-size: 1rem;
    color: #8E8E8E;
    font-weight: 200;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  &-dot {
    margin: 0 8px;
    font-weight: 500;
  }
}
</style>
