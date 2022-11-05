<template>
  <u-sticky
    :offsetTop="statusBarHeight + 'px'"
    :customNavHeight="statusBarHeight + 'px'"
  >
    <view class="header_filter">
      <u-button
        :customStyle="gradeFocus ? activeStyle : noActiveStyle"
        type="primary"
        shape="circle"
        :plain="true"
        color="#051C2C"
        @click="gradeClick"
        ><text
          :class="gradeFocus ? 'button_text_active' : 'button_text'"
          style="margin-right: 10rpx"
          >年级</text
        ><u-icon
          name="arrow-down-fill"
          size="20"
          class="icon"
          :color="gradeFocus ? '#ffffff' : '#C2C2C2'"
        ></u-icon>
      </u-button>
      <u-button
        :customStyle="cityFocus ? activeStyle : noActiveStyle"
        type="primary"
        shape="circle"
        :plain="true"
        color="#051C2C"
        @click="cityClick"
        ><text
          :class="cityFocus ? 'button_text_active' : 'button_text'"
          style="margin-right: 10rpx"
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
        class="button_right"
        @click="getNews('newest')"
        :class="[{ button_right_click: !suggestionFocus }]"
        >{{ rightText }}</view
      >
    </view>
  </u-sticky>
</template>

<script>
import { eventBus, openCityPopup, openGradePopup } from '../../utils/eventBus';
const systemInfo = uni.getSystemInfoSync();
export default {
  data() {
    return {
      statusBarHeight: systemInfo.statusBarHeight + 44,
      noActiveStyle: {
        width: '170rpx',
        height: '50rpx',
        margin: 0,
        marginRight: '50rpx',
      },
      activeStyle: {
        width: '170rpx',
        height: '50rpx',
        margin: 0,
        marginRight: '50rpx',
        color: '#ffffff',
        background: '#051c2c',
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
      eventBus.$emit(openGradePopup);
    },
    cityClick() {
      this.cityFocus = true;
      eventBus.$emit(openCityPopup);
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
  background: #fff;
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
    margin-left: 40rpx;
    font-size: 30rpx;
    color: #919191;
  }
  .button_right_click {
    color: #051c2c;
  }
}
</style>
