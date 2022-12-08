<template>
  <view
    class="bottom_btn"
    :class="[{ bottom_btn_fixed: fixed, 'btn-width': fixed }]"
  >
    <u-button :customStyle="btnStyle" :color="btnStyle.backGround">
      <text class="fw_500" style="color: '#051C2C'; font-size: 36rpx">
        {{ text }}</text
      >
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
    btnStyle: {
      type: Object,
      default: {
        borderRadius: '40rpx',
        backGround: '#fff',
        color: '#051C2C',
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.bottom_btn {
  height: 80rpx;
  z-index: 10;

  box-sizing: border-box;
}
.bottom_btn_fixed {
  position: fixed;
  left: 40rpx;
  bottom: 54rpx;
}
.btn-width {
  width: 670rpx;
}
</style>
