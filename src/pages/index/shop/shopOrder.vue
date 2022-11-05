<template>
  <view class="u-page">
    <co-header-news :title="title"></co-header-news>
    <view class="buy_container" :style="{ paddingTop: navHeight + 'px' }">
      <view class="buy_title fw_500">商品详情</view>
      <view class="buy_item">
        <view class="item_left">
          <u--image
            src="/static/index/job.jpg"
            width="202rpx"
            height="202rpx"
            radius="20rpx"
          ></u--image>
        </view>
        <view class="item_right">
          <view class="item_name fw_500 line_break"
            >商品名称商品名称商品名称商品名称</view
          >
          <view class="item_tag fw_400">学校选择指导｜教学课程</view>
          <view class="item_price fw_500">¥ 599</view>
        </view>
      </view>
      <view class="buy_title fw_500">发货与服务流程</view>
      <view class="buy_progress"
        ><view class="fw_500">百度网盘链接</view
        ><view class="fw_400">链接: http://baidu.com</view
        ><view>验证码: 0123</view
        ><view class="buy_two"
          ><view class="fw_500">如何获取商品</view
          ><view class="fw_400"> 步骤一：步骤一步骤一步骤</view></view
        ></view
      >
      <view class="buy_title fw_500">推荐商品</view>
      <view class="shop_list">
        <view class="list_item">
          <view>
            <u-image
              width="314rpx"
              height="220rpx"
              src="/static/index/school.jpg"
              radius="20rpx 20rpx 0 0"
            ></u-image>
          </view>
          <view class="list_text">
            <view class="list_title line_break"
              >Does ESG really matter-and shy-ss</view
            >
            <view class="list_bottom">
              <view class="list_price">¥ 599</view>
            </view>
          </view>
        </view>

        <view class="list_item">
          <view>
            <u-image
              width="314rpx"
              height="220rpx"
              src="/static/index/school.jpg"
              radius="20rpx 20rpx 0 0"
            ></u-image>
          </view>
          <view class="list_text">
            <view class="list_title line_break"
              >Does ESG really matter-and shy-ss</view
            >
            <view class="list_bottom">
              <view class="list_price">¥ 599</view>
            </view>
          </view>
        </view>

        <view class="list_item">
          <view>
            <u-image
              width="314rpx"
              height="220rpx"
              src="/static/index/school.jpg"
              radius="20rpx 20rpx 0 0"
            ></u-image>
          </view>
          <view class="list_text">
            <view class="list_title line_break"
              >Does ESG really matter-and shy-ss</view
            >
            <view class="list_bottom">
              <view class="list_price">¥ 599</view>
            </view>
          </view>
        </view>
      </view>
      <view class="buy_bottom"
        ><view class="btn_wrapper">
          <view class="btn_left">
            <view class="btn_text"
              ><u-icon name="arrow-leftward" size="40rpx" bold="true"></u-icon>
              <text class="price fw_500">商城</text></view
            >
          </view>
          <view class="btn_right">
            <u-button
              color="#051C2C"
              :customStyle="bottomBtn"
              @click="show = true"
              >人工客服</u-button
            >
          </view>
        </view></view
      >
    </view>
    <co-pop-up :show="show" @pop-close="popClose"></co-pop-up>
  </view>
</template>
<script>
const systemInfo = uni.getSystemInfoSync();
export default {
  data() {
    return {
      navHeight: systemInfo.statusBarHeight + 44,
      title: '发货详情',
      bottomBtn: {
        width: '270rpx',
        height: '80rpx',
        borderRadius: '40rpx',
        color: '#fff',
      },
      show: false,
    };
  },
  methods: {
    popClose() {
      this.show = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.buy_container {
  background-color: #f5f5f5;
  padding: 0 40rpx;
  padding-top: var(--status-bar-height) rpx;
  .buy_title {
    padding-top: 50rpx;
    font-size: 40rpx;
    line-height: 56rpx;
  }
  .shop_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .list_item {
      margin-top: 40rpx;
      width: 314rpx;
      height: 420rpx;
      border-radius: 20rpx;
      box-sizing: border-box;
      background: #fff;
      .list_text {
        padding: 24rpx 0 30rpx 24rpx;
        .list_title {
          padding-right: 52rpx;
          font-size: 28rpx;
          line-height: 40rpx;
        }
        .list_bottom {
          padding-right: 24rpx;
          padding-top: 24rpx;
          display: flex;
          justify-content: space-between;
          .list_price {
            font-size: 30rpx;
            line-height: 42rpx;
          }

          .list_num {
            padding-top: 8rpx;
            font-size: 20rpx;
            line-height: 28rpx;
          }
        }
      }
    }
  }
  .buy_item {
    display: flex;
    justify-content: space-between;
    margin-top: 40rpx;
    width: 100%;
    height: 262rpx;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 20rpx;
    .item_left {
      padding: 30rpx 0 30rpx 30rpx;
    }
    .item_right {
      margin-left: 30rpx;
      .item_name {
        padding: 30rpx 30rpx 0 0;
        font-size: 30rpx;
        line-height: 42rpx;
        max-height: 84rpx;
      }
      .item_tag {
        font-size: 24rpx;
        line-height: 33rpx;
        margin-top: 20rpx;
      }
      .item_price {
        font-size: 30rpx;
        line-height: 42rpx;
        margin-top: 23rpx;
      }
    }
  }
  .buy_progress {
    padding: 40rpx 30rpx 40rpx 30rpx;
    font-size: 30rpx;
    line-height: 50rpx;
    margin-top: 40rpx;
    background-color: #fff;
    border-radius: 20rpx;
    .buy_two {
      margin-top: 40rpx;
    }
  }
  .buy_tips {
    margin-top: 30rpx;
    color: #5e5e5e;
    font-size: 30rpx;
    line-height: 50rpx;
  }
  .buy_bottom {
    margin-top: 40rpx;
    padding-bottom: 84rpx;
    .btn_wrapper {
      width: 100%;
      height: 100rpx;
      background: #ffffff;
      box-shadow: 0px 0px 10rpx 0rpx rgba(105, 105, 105, 0.5);
      border-radius: 50rpx;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      .btn_left {
        display: flex;

        .btn_text {
          padding: 22rpx 0rpx 22rpx 40rpx;
          display: flex;
          .price_prefix {
            font-size: 30rpx;
            line-height: 42rpx;
          }

          .price {
            font-size: 40rpx;
            line-height: 60rpx;
            margin-left: 14rpx;
          }
        }
      }
      .btn_right {
        padding: 10rpx 10rpx 10rpx 0;
      }
    }
  }
}

.line_break {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
