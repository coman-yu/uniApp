<template>
  <view>
    <u-popup :show="show" :round="20" mode="center">
      <view class="popup"></view>
      <co-bottom-btn
        text="关闭解释"
        @click.native="close"
        :fixed="true"
        :btnStyle="{
          color: '#051C2C',
          borderRadius: '40rpx',
          backGround: '#fff',
          width: '582rpx',
        }"
      ></co-bottom-btn>
    </u-popup>
  </view>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit('closePop');
    },
  },
  props: {
    show: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.popup {
  height: 1000rpx;
  overflow: auto;
  background-color: #fff;
  width: 582rpx;
  border-radius: 20rpx;
}
</style>
