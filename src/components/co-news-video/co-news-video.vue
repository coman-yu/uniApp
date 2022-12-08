<template>
  <view>
    <u-toast ref="uToast"></u-toast>
    <video
      id="videoCpn"
      :src="src"
      :poster="poster"
      object-fit="contain"
      @error="handleError"
      direction="90"
      @timeupdate="getCurrentTime"
      @ended="endVideo"
      :initial-time="initialTime"
      enable-play-gesture="true"
      :style="{ width: videoWidth, height: videoHeight }"
      controls
      play-btn-position="center"
    ></video>
  </view>
</template>
<script>
export default {
  data() {
    return {
      src: 'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4',
      poster:
        'http://wx.qlogo.cn/mmopen/iahdQicCC5VBSiaBc32cq9rHiaMAYsr2Y38TJrYrnyG1Xd9EaVoWAy8zMb8GJhMNEVtsypzuh5DicH3SfQWrEqYLtDNEzRq74uDTI/0',
      initialTime: 0,
      timeStorage: 0,
      videoWidth: '100%',
      videoHeight: '504rpx',
      videoStorage: [],
    };
  },
  methods: {
    handleError() {
      this.$refs.uToast.shadowRoot({
        type: 'error',
        message: '视频播放出错',
      });
    },
    getCurrentTime(e) {
      this.timeStorage = Number(e.detail.currentTime);
    },
    endVideo() {
      this.initialTime = 0;
      this.timeStorage = 0;
    },
  },
  computed: {},
  mounted() {
    try {
      this.videoStorage = uni.getStorageSync('videoList') || [];
      if (this.videoStorage) {
        console.log('videoList', this.videoStorage);
        const videoArr = this.videoStorage;
        const index = videoArr.findIndex((item) => item.src === this.src);
        if (index != -1) {
          const initialTime = Number(videoArr[index].timeStorage);
          console.log('initialTime===>', initialTime);
          if (isNaN(initialTime)) return;
          // 时长小于5s或剩余5s结束，下次初始位置开始播放
          if (initialTime <= 5) {
            this.initialTime = 0;
          } else {
            this.initialTime = initialTime;
          }
        } else {
          console.log('没找到');
        }
      }
    } catch (error) {
      console.log('error', error);
    }
  },

  beforeDestroy() {
    try {
      this.videoStorage = uni.getStorageSync('videoList') || [];
      // 判断缓存中是否存在此视频
      const index = this.videoStorage.findIndex(
        (item) => item.src === this.src,
      );
      if (index === -1) {
        this.videoStorage.push({
          src: this.src, //视频唯一标识
          timeStorage: this.timeStorage, //用户返回时保存的时间
          videoUrl: this.src, //视频播放地址
        });
        uni.setStorage({
          key: 'videoList',
          data: this.videoStorage,
          success: function () {
            console.log('success');
          },
        });
      } else {
        //缓存中已有相同视频，改变已看时间替换缓存
        this.videoStorage[index].timeStorage = this.timeStorage;
        uni.setStorage({
          key: 'videoList',
          data: this.videoStorage,
        });
      }
    } catch (error) {
      console.error('缓存失败', error);
    }
  },
};
</script>
<style lang="scss" scoped></style>
