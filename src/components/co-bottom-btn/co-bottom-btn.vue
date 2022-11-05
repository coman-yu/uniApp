<template>
  <view class="bottom_btn" :class="[{ bottom_btn_fixed: fixed }]">
    <u-button shape="circle">
      <text class="fw_500" style="color: '#051C2C'; font-size: 36rpx">{{
        text
      }}</text>
    </u-button>
  </view>
</template>

<script>
export default {
  props: {
    fixed: {
      type: Boolean,
      default: true,
    },
    text: {
      type: String,
      default: '返回首页',
    },
  },
};
</script>

<style lang="scss" scoped>
.bottom_btn {
  width: 670rpx;
  height: 80rpx;
  z-index: 10;
  padding: 0 40rpx 0 40rpx;
  box-sizing: border-box;
}
.bottom_btn_fixed {
  position: fixed;
  left: 40rpx;
  bottom: 54rpx;
}
</style>
