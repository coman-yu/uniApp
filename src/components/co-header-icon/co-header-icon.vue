<template>
  <view class="header_wrapper" :style="[{ height: statusBarHeight + 'rpx' }]">
    <u-navbar :safeAreaInsetTop="true" :border="false" :style="[style]">
      <view class="u-nav-slot header_logo" slot="left">
        <image src="/static/logo.png" class="header_image"></image>
      </view>
    </u-navbar>
  </view>
</template>
<script>
const systemInfo = uni.getSystemInfoSync();
export default {
  name: 'headerIcon',
  data() {
    return {
      statusBarHeight: systemInfo.statusBarHeight,
    };
  },
  computed: {
    // tabbar样式
    style() {
      let statusBarHeight = systemInfo.statusBarHeight;
      let style = {};
      style.height = `${this.customBar}px`;
      style.paddingTop = `${statusBarHeight}px`;
      Object.assign(style, this.background);
      return style;
    },
  },
};
</script>
<style lang="scss" scope>
.header_logo {
  padding-left: 22rpx;
}
.header_image {
  height: 56rpx;
  width: 56rpx;
  border-radius: 56rpx;
}
</style>
