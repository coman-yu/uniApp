<template>
  <view class="u-page">
    <co-header-news :title="title"></co-header-news>
    <co-header-filter :leftText="'建议'" :rightText="'最新'"></co-header-filter>
    <scroll-view :scroll-y="true" class="news_container">
      <co-news-item></co-news-item>
    </scroll-view>
    <co-bottom-btn
      @click.native="backToIndex"
      v-show="stopScroll"
      :fixed="true"
    ></co-bottom-btn>
  </view>
</template>

<script>
const systemInfo = uni.getSystemInfoSync();
export default {
  data() {
    return {
      statusBarHeight: systemInfo.statusBarHeight + 44,
      title: '就业资讯',
      back: false,
      stopScroll: true,
      timer: null,
    };
  },
  methods: {
    backToIndex() {
      uni.switchTab({ url: '/pages/index/index' });
    },
    scrolltolower() {
      console.log('bottom');
    },
    scroll() {
      console.log('scroll');
    },
  },
  onReachBottom() {
    console.log('asdasdasd');
  },
  onPageScroll() {
    clearTimeout(this.timer);
    this.stopScroll = false;
    const that = this;
    this.timer = setTimeout(() => {
      that.stopScroll = true;
    }, 500);
  },
};
</script>

<style>
page {
  height: 100%;
}
</style>

<style lang="scss" scoped>
.news_container {
  background: #f5f5f5;
  padding: 0 40rpx 40rpx 40rpx;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
  display: none;
}
</style>
