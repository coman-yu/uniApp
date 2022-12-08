<template>
  <view class="page-wraper">
    <view style="height: 250rpx"></view>
    <view class="header_filter" :style="[{ top: navHeight + 'px' }]">
      <view class="search">
        <co-input-search placeholder="直接搜索学校名字"></co-input-search>
      </view>
      <view class="icon-wrapper">
        <slot></slot>
      </view>
    </view>
    <!-- <view class="search-list">
      <checkbox-group @change="changeSelect">
        <view class="search-item">
          <label for="checkbox" class="fw_400 checkbox">
            <view class="item-title">
              广州侨光职业技术学校<view class="item-tips">中职</view></view
            >

            <checkbox
              id="checkbox"
              class="input_box1"
              style="padding-top: 10rpx"
            ></checkbox>
          </label>
        </view>

        <view class="search-item">
          <label for="checkbox" class="fw_400 checkbox">
            <view class="item-title">
              广州侨光职业技术学校<view class="item-tips">中职</view></view
            >

            <checkbox
              id="checkbox"
              class="input_box1"
              style="padding-top: 10rpx"
            ></checkbox>
          </label>
        </view>
      </checkbox-group>

      <view class="bottom-btn">
        <u-button shape="circle" color="#051C2C">
          <text class="fw_500" style="color: '#fff'; font-size: 36rpx"
            >确认</text
          >
        </u-button>
      </view>
    </view> -->
  </view>
</template>

<script>
import {
  eventBus,
  openMatchPopup,
  openFilterPopup,
  openSortPopup,
  openExplainPopup,
} from '../../utils/eventBus';
const systemInfo = uni.getSystemInfoSync();
export default {
  data() {
    return {
      navHeight: systemInfo.statusBarHeight + 44,
      noActiveStyle: {
        width: 'fit-content',
        height: '60rpx',
        margin: 0,
        marginRight: '40rpx',
      },
      activeStyle: {
        width: 'fit-content',
        height: '60rpx',
        margin: 0,
        marginRight: '40rpx',
        color: '#ffffff',
        background: '#051c2c',
      },
      gradeFocus: false,
      cityFocus: false,
    };
  },
  methods: {},
  props: {
    rightText: {
      type: String,
      default: '最新',
    },
  },
};
</script>

<style lang="scss" scoped>
.page-wraper {
  position: relative;
}
.header_filter {
  height: 250rpx;
  padding: 30rpx 40rpx 40rpx 40rpx;
  box-sizing: border-box;
  position: fixed;
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
    padding-top: 10rpx;
    font-size: 30rpx;
    padding-left: 10rpx;
  }
}
.icon-wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 40rpx;
  .icon {
    display: flex;
  }
}
.search {
  width: 100%;
}

.search-list {
  top: 111rpx;
  position: absolute;
  background: #fff;
  z-index: 999;
  width: 100%;
  border-radius: 20rpx;
  padding: 40rpx 48rpx;
  box-sizing: border-box;
  .search-item {
    margin-bottom: 50rpx;
    .checkbox {
      display: flex;
      justify-content: space-between;
    }
    .item-title {
      font-size: 36rpx;
      line-height: 50rpx;
    }
    .item-tips {
      color: #5e5e5e;
      line-height: 50rpx;
      font-size: 30rpx;
    }
  }
  .bottom-btn {
    padding-top: 36rpx;
  }
}
</style>
