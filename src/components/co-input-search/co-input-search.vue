<template>
  <view>
    <view class="input-wrapper">
      <input
        class="input fw_400"
        :style="[mergeStyle]"
        :placeholder="placeholder"
        placeholder-style="font-size:30rpx;font-weight: 400;font-family: PingFangSC-Regular;"
      />
      <view class="search-icon" v-if="showIcon">
        <u-image
          width="42rpx"
          height="42rpx"
          src="/static/search.png"
        ></u-image>
      </view>
      <!-- 下拉列表 -->
      <!-- <view
        :style="{
          height: isPopup ? listHeight : '',
          position: isPopup ? 'relative' : '',
        }"
      >
        <view class="search-list" :class="[isPopup ? 'popUp' : '']">
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
        </view>
      </view> -->
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      listHeight: 0,
    };
  },
  props: {
    placeholder: {
      default: '',
      type: String,
    },
    isPopup: {
      default: false,
      type: Boolean,
    },
    showIcon: {
      default: true,
      type: Boolean,
    },
    mergeStyle: {
      default: () => {
        return {};
      },
      type: Object,
    },
  },

  mounted() {
    uni
      .createSelectorQuery()
      .in(this)
      .select('.search-list')
      .boundingClientRect((data) => {
        this.listHeight = data?.height + 'px';
      })
      .exec();
  },
};
</script>
<style lang="scss" scoped>
.input-wrapper {
  position: relative;
}
.input {
  height: 80rpx;
  background-color: #f7f7f7;
  padding: 0rpx 90rpx 0rpx 48rpx;
  border-radius: 20rpx;
  width: 100%;
  box-sizing: border-box;
}
.search-icon {
  position: absolute;
  top: 19rpx;
  right: 48rpx;
}

.search-list {
  position: absolute;
  background: #fff;
  z-index: 99999;
  width: 750rpx;
  border-radius: 20rpx;
  padding: 40rpx 48rpx;
  box-sizing: border-box;
  left: -40rpx;
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
.popUp {
  left: -50rpx;
  padding-bottom: 50rpx;
}
.pop-up-wrapper {
}
</style>
