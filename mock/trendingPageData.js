import Cover01 from '@/assets/images/videoCover/cover01.jpg'
import Cover02 from '@/assets/images/videoCover/cover02.jpg'
import Cover03 from '@/assets/images/videoCover/cover03.jpg'
import Cover04 from '@/assets/images/videoCover/cover04.jpg'
import Cover05 from '@/assets/images/videoCover/cover05.jpg'
import Cover06 from '@/assets/images/videoCover/cover06.jpg'
import Cover07 from '@/assets/images/videoCover/cover07.jpg'
import Cover08 from '@/assets/images/videoCover/cover08.jpg'
import Cover09 from '@/assets/images/videoCover/cover09.jpg'
import Cover10 from '@/assets/images/videoCover/cover10.jpg'
import User01 from '@/assets/images/user/user01.jpg'
import User02 from '@/assets/images/user/user02.jpg'
import User03 from '@/assets/images/user/user03.jpg'
import User04 from '@/assets/images/user/user04.jpg'
import User05 from '@/assets/images/user/user05.jpg'
import User06 from '@/assets/images/user/user06.jpg'
import User07 from '@/assets/images/user/user07.jpg'
import User08 from '@/assets/images/user/user08.jpg'
import User09 from '@/assets/images/user/user09.jpg'
import User10 from '@/assets/images/user/user10.jpg'
const coverList = [Cover03, Cover02, Cover01, Cover07, Cover06, Cover04, Cover05, Cover10, Cover08, Cover09]
const userList = [User01, User02, User03, User04, User05, User06, User07, User08, User09, User10]
const videoTypeList = ['game', 'news', 'music']
const trendingVideoList = () => {
  const videoList = []
  for (let i = 0; i < 50; i++) {
    videoList.push({
      videoTitle: `Sample ${i + 1}`,
      videoTime: '22:00',
      videoCover: coverList[i % 10],
      videoUserImage: userList[i % 10],
      videoUserNmae: 'User1',
      videoViews: i * 100,
      videoUploadDate: '2021-04-10',
      videoType: videoTypeList[i % 3]
    })
  }
  return videoList
}
const trendingType = [
  {
    type: 'music',
    icon: 'music'
  },
  {
    type: 'game',
    icon: 'gamepad'
  },
  {
    type: 'news',
    icon: 'newspaper'
  }
]
export {
  trendingVideoList,
  trendingType
}
