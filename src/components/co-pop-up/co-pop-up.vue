<template>
  <u-popup :show="show" :round="20" mode="center" duration="500">
    <view class="pop_container">
      <view class="close_icon" @click="closePopup"
        ><image
          src="/static/index/close.png"
          style="width: 43rpx; height: 43rpx"
        ></image
      ></view>
      <view class="pop_image">
        <image src="/static/index/contact.jpg"></image>
      </view>
      <view class="pop_second">
        <view class="pop_text">
          <text class="pop_title fw_500">新职教</text>
          <view class="pop_detail fw_400">
            <text>遇到再小的问题</text><br />
            <text>新职教的在线导师</text> <br />
            <text>都可以为您提供帮助</text>
          </view>
        </view>
        <view class="pop_code">
          <view class="pop_qr">
            <image src="/static/index/Qrcode.png"></image>
          </view>
          <view class="pop_qr_text fw_400">
            <text>长按添加导师微信</text>
          </view>
        </view>
      </view>
    </view>
  </u-popup>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    show: {
      default: false,
      type: Boolean,
    },
  },
  methods: {
    closePopup() {
      this.$emit('popClose');
    },
  },
};
</script>
<style lang="scss" scoped>
.pop_container {
  width: 582rpx;
  height: 740rpx;
  position: relative;
  .close_icon {
    position: absolute;
    right: 26rpx;
    top: 26rpx;
  }
  .pop_image {
    image {
      width: 100%;
      height: 410rpx;
      border-radius: 20rpx 20rpx 0 0;
    }
  }
  .pop_second {
    display: flex;
    .pop_text {
      padding: 60rpx 0 0 40rpx;
      .pop_title {
        font-size: 36rpx;
        line-height: 50rpx;
      }
      .pop_detail {
        padding-top: 18rpx;
        font-size: 24rpx;
        line-height: 40rpx;
        letter-spacing: 4rpx;
      }
    }
    .pop_code {
      padding: 50rpx 0 0 80rpx;
      .pop_qr {
        image {
          width: 190rpx;
          height: 190rpx;
        }
      }
      .pop_qr_text {
        font-size: 24rpx;
        color: #5e5e5e;
      }
    }
  }
}
</style>
