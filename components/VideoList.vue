<template lang="pug">
  .video-list
    .video(v-for="(video, index) in videoInformation" :key="`${video.videoTitle}-${index}`")
      .video-cover(:style="{backgroundImage: `url('${video.videoCover}')`}")
        .video-time {{ video.videoTime }}
      .video-information
        .video-userImage(:style="{backgroundImage: `url('${video.videoUserImage}')`}")
        .video-text
          h3.video-title {{ video.videoTitle }}
          h4.video-subtitle
            .video-user-name {{ video.videoUserNmae }}
            .video-dot •
            .video-views 觀看次數：{{ video.videoViews }} 次
            .video-dot •
            .video-date {{ video.videoUploadDate }}
</template>
<script>
export default {
  props: {
    videoInformation: {
      type: Array,
      default: () => []
    },
    videoSpecailClass: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss">
.video-list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.video {
  width: calc(25% - (8*2px));
  margin: 0 8px;
  cursor: pointer;
  &-cover {
    background-color: gray;
    width: 100%;
    min-height: 200px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
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
    background-color: gray;
    min-width: 40px;
    min-height: 40px;
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
@media (max-width: 1150px) and (min-width: 870px) {
  .video{
      width: calc(33.3% - (8*2px));
  }
}
@media (max-width: 870px) and (min-width: 590px) {
  .video{
      width: calc(50% - (8*2px));
  }
}
@media (max-width: 590px) {
  .video{
      width: calc(100% - (8*2px));
  }
}
</style>
