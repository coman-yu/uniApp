<template>
  <view class="u-page">
    <co-header-news :title="'查看完整排名'"></co-header-news>
    <view class="container">
      <view class="top">
        <view class="fw_500 font">热门学校</view>
        <view @click="goBack">
          <u--image
            src="/static/close.png"
            width="60rpx"
            height="60rpx"
            radius="50%"
          ></u--image>
        </view>
      </view>
      <view class="top1 fw_500">中等职业教育前30位专业</view>
      <view class="hot-survey-item">
        <view class="item-left fw_600">03</view>
        <view class="item-right">
          <view>
            <view class="item-right-text1 fw_500">铁道工程技术</view>
            <view class="item-right-text2 fw_400">起始月薪：5000元/月</view>
          </view>
          <view class="pt-17"
            ><u-button
              :customStyle="{
                width: '130rpx',
                height: '58rpx',
                borderRadius: '40rpx',
                background: '#F7F7F7',
              }"
            >
              <text class="fw_400" style="color: '#051C2C'; font-size: 26rpx"
                >查看</text
              >
            </u-button></view
          >
        </view>
      </view>

      <view class="hot-survey-item">
        <view class="item-left fw_600">03</view>
        <view class="item-right">
          <view>
            <view class="item-right-text1 fw_500">铁道工程技术</view>
            <view class="item-right-text2 fw_400">起始月薪：5000元/月</view>
          </view>
          <view class="pt-17"
            ><u-button
              :customStyle="{
                width: '130rpx',
                height: '58rpx',
                borderRadius: '40rpx',
                background: '#F7F7F7',
              }"
            >
              <text class="fw_400" style="color: '#051C2C'; font-size: 26rpx"
                >查看</text
              >
            </u-button></view
          >
        </view>
      </view>
    </view>
    <view class="container-bottom">
      <view class="bottom-btn">
        <co-bottom-btn
          text="返回学校首页"
          :fixed="false"
          @click.native="backToSchool"
          :btnStyle="{
            color: '#fff',
            borderRadius: '40rpx',
            backGround: '#051C2C',
          }"
        ></co-bottom-btn>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  methods: {
    backToSchool() {
      uni.switchTab({ url: '/pages/school/index' });
    },
    goBack() {
      uni.navigateBack();
    },
  },
};
</script>
<style lang="scss" scoped>
.container,
.container-bottom {
  padding: 0 40rpx;
  box-sizing: border-box;
}
.container {
  background-color: #fff;

  padding-bottom: 46rpx;
  .top {
    margin-top: 36rpx;
    font-size: 28rpx;
    line-height: 40rpx;
    display: flex;
    justify-content: space-between;
    .font {
      margin-top: 14rpx;
    }
  }
  .top1 {
    margin-top: 12rpx;
    font-size: 40rpx;
    line-height: 56rpx;
  }
}
.container-bottom {
  background-color: #f5f5f5;
  padding-bottom: 70rpx;
  .bottom-btn {
    padding-top: 40rpx;
  }
}

.hot-survey-item {
  margin-top: 40rpx;
  display: flex;
  .item-left {
    font-size: 40rpx;
    line-height: 56rpx;
    color: #051c2c;
    margin-top: 18rpx;
  }
  .item-right {
    margin-left: 39rpx;
    flex: 1;
    display: flex;
    justify-content: space-between;
    padding-bottom: 35rpx;
    border-bottom: 2rpx solid #dadada;
    .item-right-text1 {
      color: #051c2c;
      font-size: 30rpx;
      line-height: 42rpx;
    }
    .item-right-text2 {
      font-size: 30rpx;

      color: #051c2c;
      line-height: 42rpx;
    }
  }
}

.mt-50 {
  margin-top: 50rpx;
}

.pt-21 {
  padding-top: 21rpx;
}
.pt-17 {
  padding-top: 17rpx;
}
</style>
