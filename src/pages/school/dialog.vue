<template>
  <view class="u-page">
    <co-header-news :title="'广东省野鸡大学反反复复'"></co-header-news>
    <scroll-view :scroll-y="true" :class="isShow ? 'chat1' : 'chat'">
      <view class="receive">
        <u--image
          width="74rpx"
          height="74rpx"
          radius="8rpx"
          src="/static/logo.png"
        ></u--image>
        <view class="receive-text fw_400">
          <view class="triangle"></view
          >fffffffffffffffffffffffffffffffffffffffffffffffffff</view
        >
      </view>
    </scroll-view>
    <view class="bottom">
      <view class="bottom-wrapper">
        <view>
          <input class="input" />
        </view>
        <view class="image-icon" @click="toggle"
          ><u--image
            width="60rpx"
            height="60rpx"
            radius="50%"
            src="/static/dialog/add.png"
          >
          </u--image
        ></view>
      </view>
      <view class="option" v-if="isShow">
        <view>
          <u--image
            width="150rpx"
            height="150rpx"
            src="/static/dialog/school.png"
          ></u--image>
          <view class="fw_400 option-font">学校详情</view>
        </view>
        <view class="ml-24">
          <u--image
            width="150rpx"
            height="150rpx"
            src="/static/dialog/chat.png"
          ></u--image>
          <view class="fw_400 option-font">信息列表</view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow;
    },
  },
};
</script>
<style lang="scss" scoped>
.chat {
  height: calc(100vh - 44px - 171rpx - env(safe-area-inset-bottom));
  padding: 40rpx 22rpx;
  flex-grow: 1;
  box-sizing: border-box;
}
.chat1 {
  height: calc(100vh - 44px - 251rpx - 573rpx - env(safe-area-inset-bottom));
  padding: 40rpx 22rpx;
  flex-grow: 1;
  box-sizing: border-box;
}
.bottom {
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #58bc58;
  &-wrapper {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    border-bottom: 1rpx solid #cacaca;
    padding: 19rpx 26rpx 17rpx 25rpx;
    height: 130rpx;
  }
  .option {
    height: 573rpx;
    padding: 40rpx 40rpx 40rpx 36rpx;
    display: flex;
    &-font {
      font-size: 28rpx;
      line-height: 40rpx;
      color: #5e5e5e;
      margin-top: 18rpx;
      width: 150rpx;
      text-align: center;
    }
  }
  .image-icon {
    padding-top: 16rpx;
  }
  .input {
    height: 94rpx;
    width: 606rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }
}
.ml-24 {
  margin-left: 24rpx;
}

.receive {
  &-text {
    font-size: 30rpx;
    line-height: 42rpx;
    padding: 16rpx 34rpx;
    max-width: 462rpx;
    box-sizing: border-box;
    background-color: #98e165;
    position: relative;
    margin-left: 24rpx;
    word-wrap: break-word;
  }
  display: flex;
}
.triangle {
  width: 0;
  height: 0;
  border-top: 10rpx solid transparent;
  border-bottom: 10rpx solid transparent;
  border-right: 10rpx solid #98e165;
  position: absolute;
  left: -10rpx;
  top: 26rpx;
}
</style>
