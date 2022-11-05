<template>
  <view class="u-page">
    <co-header-news :title="title"></co-header-news>
    <co-header-filter :leftText="'建议'" :rightText="'最新'"></co-header-filter>
    <view class="news_container">
      <co-news-item @handle-scroll="handleScroll"></co-news-item>
    </view>
    <co-bottom-btn
      @click.native="backToIndex"
      v-show="stopScroll"
      :fixed="true"
    ></co-bottom-btn>
    <co-city-picker></co-city-picker>
    <co-grade-picker></co-grade-picker>
  </view>
</template>

<script>
import { debounce } from 'lodash';
export default {
  data() {
    return {
      title: '升学资讯',
      back: false,
      stopScroll: true,
    };
  },
  methods: {
    backToIndex() {
      uni.switchTab({ url: '/pages/index/index' });
    },
    handleScroll() {
      this.stopScroll = false;
      const that = this;
      debounce(function () {
        that.stopScroll = true;
      }, 1 * 1000)();
    },
  },
};
</script>

<style lang="scss" scoped>
.u-page {
  // 适配手机底部塌陷问题
  padding-bottom: env(safe-area-inset-bottom);
}
.news_container {
  background: #f5f5f5;
  padding: 0 40rpx 40rpx 40rpx;
}
/* .bottom-btn {
  padding: 0 40rpx 0 40rpx;
  box-sizing: border-box;
} */
</style>
