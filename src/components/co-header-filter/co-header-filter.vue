<template>
  <view>
    <view style="height: 140rpx"></view>
    <view class="header_filter" :style="[{ top: navHeight + 'px' }]">
      <u-button
        :customStyle="gradeFocus ? activeStyle : noActiveStyle"
        type="primary"
        shape="circle"
        :plain="true"
        color="#051C2C"
        @click="gradeClick"
        ><text
          :class="gradeFocus ? 'button_text_active' : 'button_text'"
          style="margin-right: 10rpx; font-size: 30rpx"
          >年级</text
        ><u-icon
          name="arrow-down-fill"
          size="20"
          class="icon"
          :color="gradeFocus ? '#ffffff' : '#C2C2C2'"
        ></u-icon>
      </u-button>
      <u-button
        :customStyle="cityFocus ? activeStyle1 : noActiveStyle1"
        type="primary"
        shape="circle"
        :plain="true"
        color="#051C2C"
        @click="cityClick"
        ><text
          :class="cityFocus ? 'button_text_active' : 'button_text'"
          style="margin-right: 10rpx; font-size: 30rpx"
          >城市</text
        ><u-icon
          name="arrow-down-fill"
          size="20"
          class="icon"
          :color="cityFocus ? '#ffffff' : '#C2C2C2'"
        ></u-icon
      ></u-button>
      <view
        class="button_right"
        @click="getNews('suggestion')"
        :class="[{ button_right_click: suggestionFocus }]"
        >{{ leftText }}</view
      >
      <view
        class="button_right1"
        @click="getNews('newest')"
        :class="[{ button_right_click: !suggestionFocus }]"
        >{{ rightText }}</view
      >
    </view>
    <co-city-picker
      :show="openCityPopup"
      @closePop="closePop('openCityPopup')"
    ></co-city-picker>
    <co-grade-picker
      :show="openGradePopup"
      @closePop="closePop('openGradePopup')"
    ></co-grade-picker>
  </view>
</template>

<script>
const systemInfo = uni.getSystemInfoSync();
export default {
  data() {
    return {
      openGradePopup: false,
      openCityPopup: false,
      navHeight: systemInfo.statusBarHeight + 44,
      noActiveStyle: {
        width: 'fit-content',
        height: '50rpx',
        margin: 0,
        marginRight: '50rpx',
        padding: '0 40rpx',
      },
      noActiveStyle1: {
        width: 'fit-content',
        height: '50rpx',
        margin: 0,
        padding: '0 37rpx',
      },
      activeStyle: {
        width: 'fit-content',
        height: '50rpx',
        margin: 0,
        color: '#ffffff',
        background: '#051c2c',
        padding: '0 40rpx',
        marginRight: '50rpx',
      },
      activeStyle1: {
        width: 'fit-content',
        height: '50rpx',
        margin: 0,
        color: '#ffffff',
        background: '#051c2c',
        padding: '0 37rpx',
      },
      suggestionFocus: true,
      gradeFocus: false,
      cityFocus: false,
    };
  },
  methods: {
    getNews(itemName) {
      if (itemName === 'suggestion') {
        this.suggestionFocus = true;
      }
      if (itemName === 'newest') {
        this.suggestionFocus = false;
      }
    },
    gradeClick() {
      this.gradeFocus = true;
      this.openGradePopup = true;
    },
    cityClick() {
      this.cityFocus = true;
      this.openCityPopup = true;
    },
    closePop(item) {
      this[item] = false;
    },
  },
  props: {
    leftText: {
      type: String,
      default: '建议',
    },
    rightText: {
      type: String,
      default: '最新',
    },
  },
};
</script>

<style lang="scss" scoped>
.header_filter {
  display: flex;
  height: 140rpx;
  padding: 40rpx 0 0 40rpx;
  box-sizing: border-box;
  position: fixed;
  top: calc(var(--status-bar-height) + 44px);
  width: 100%;
  z-index: 999;
  background-color: #fff;
  .button_text {
    margin-right: 10rpx；;
    color: #051c2c;
  }

  .button_text_active {
    margin-right: 10rpx；;
    color: #ffffff;
  }
  .button_right {
    padding-top: 5rpx;
    margin-left: 110rpx;
    font-size: 30rpx;
    color: #919191;
  }
  .button_right1 {
    padding-top: 5rpx;
    margin-left: 40rpx;
    font-size: 30rpx;
    color: #919191;
  }
  .button_right_click {
    color: #051c2c;
  }
}
</style>
