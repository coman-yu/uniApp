<template>
  <view class="u-page">
    <view
      :style="{ zIndex: showSearchList ? '200' : '', position: 'relative' }"
    >
      <co-header-news :title="'更正建议'"></co-header-news>
    </view>
    <view class="container">
      <view
        class="search-area"
        :style="{ zIndex: showSearchList ? '200' : '', position: 'relative' }"
      >
        <view class="fw_500 label">选择学校</view>
        <view class="search">
          <co-input-search
            :mergeStyle="{
              height: '60rpx',
              border: '1rpx #5E5E5E solid',
              background: '#fff',
              borderRadius: '35rpx',
            }"
            inputHeight="60rpx"
            placeholder="请输入学校名字"
            :showIcon="false"
          ></co-input-search
        ></view>
      </view>
      <view class="rest-area">
        <view class="feedback">
          <view class="fw_500 label">建议：</view>
          <view style="margin-top: 20rpx">
            <u--textarea
              height="240rpx"
              v-model="feedBackVal"
              placeholder="请输入您对学校数据信息方面的更正意见"
              placeholder-style="font-size:30rpx;font-weight: 400;font-family: PingFangSC-Regular;"
            ></u--textarea>
          </view>
        </view>
        <view class="bottom-btn">
          <co-bottom-btn
            @click.native="submit"
            :fixed="false"
            text="提交"
            :btnStyle="{
              color: '#fff',
              borderRadius: '40rpx',
              backGround: '#051C2C',
            }"
          ></co-bottom-btn>
        </view>
      </view>
    </view>
    <view class="search-list">
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
    <view class="pop-up" v-if="showSearchList"></view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      feedBackVal: '',
      showSearchList: true,
    };
  },
  methods: {
    submit() {},
  },
};
</script>
<style lang="scss" scoped>
.u-page {
  position: relative;
}
.rest-area {
  padding: 0 40rpx 40rpx 40rpx;
}
.container {
  .search {
    padding-top: 20rpx;
  }

  .label {
    font-size: 30rpx;
    line-height: 50rpx;
  }
  .feedback {
    margin-top: 50rpx;
  }
}
.bottom-btn {
  margin-top: 80rpx;
}
.search-area {
  padding: 40rpx 40rpx 0 40rpx;
  background-color: #fff;
  box-sizing: border-box;
}
::v-deep .u-textarea {
  padding: 30rpx 40rpx !important;
  border: 1rpx solid #5e5e5e;
}

.search-list {
  top: 298rpx;
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
.pop-up {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 100vh;
  z-index: 100;
  background-color: rgba($color: #000000, $alpha: 0.4);
}
</style>
