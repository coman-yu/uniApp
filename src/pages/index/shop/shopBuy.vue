<template>
  <view class="u-page">
    <co-header-news :title="title"></co-header-news>
    <view class="buy_container">
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
        >发货信息介绍发货信息介绍发货信息介绍发货发货信息介绍发货信息介绍发货信息介绍发货发货信息介绍发货信息介绍发货信息介绍发货发货信息介绍发货信息介绍发货信息介绍发货</view
      >
      <view class="buy_title fw_500">推荐码</view>
      <view class="buy_tips">备注：没有推荐码的同学可以直接跳过。</view>
      <view class="buy_input">
        <u-input
          placeholder="请输入推荐码"
          shape="circle"
          fontSize="30rpx"
          :customStyle="inputStyle"
          color="#051C2C"
          :placeholderClass="'input_holder'"
          selectionStart="30rpx"
          ><template slot="suffix">
            <u-button @click="getCode" :text="tips" :customStyle="confirmStyle"
              ><text class="confirm_text">确认</text></u-button
            >
          </template></u-input
        >
      </view>
      <view class="buy_bottom"
        ><view class="btn_wrapper">
          <view class="btn_left">
            <view class="btn_text"
              ><text class="price_prefix fw_400">¥ {{ '' }}</text>
              <text class="price fw_500">599</text></view
            >
          </view>
          <view class="btn_right">
            <u-button color="#051C2C" :customStyle="bottomBtn"
              ><text style="font-size: 36rpx" class="fw_500"
                >立即付款</text
              ></u-button
            >
          </view>
        </view></view
      >
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      title: '确认购买',
      inputStyle: {
        height: '81rpx',
        borderRadius: '20rpx',
        backgroundColor: '#fff',
        padding: '0 0 0 40rpx ',
      },
      confirmStyle: {
        width: '170rpx',
        height: '82rpx',
        backgroundColor: '#E4E4E4',
      },
      bottomBtn: {
        width: '270rpx',
        height: '80rpx',
        borderRadius: '40rpx',
        color: '#fff',
      },
      show: false,
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.buy_container {
  background-color: #f5f5f5;
  padding: 0 40rpx;
  .buy_title {
    padding-top: 50rpx;
    font-size: 40rpx;
    line-height: 56rpx;
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
    padding: 30rpx 30rpx 40rpx 30rpx;
    font-size: 30rpx;
    line-height: 50rpx;
    margin-top: 40rpx;
    background-color: #fff;
    border-radius: 20rpx;
  }
  .buy_tips {
    margin-top: 30rpx;
    color: #5e5e5e;
    font-size: 30rpx;
    line-height: 50rpx;
  }
  .buy_input {
    margin-top: 30rpx;
    .confirm_text {
      font-size: 36rpx;
      color: '#051C2C';
    }
  }
  .buy_bottom {
    margin-top: 110rpx;
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
          .price_prefix {
            font-size: 30rpx;
            line-height: 42rpx;
          }

          .price {
            font-size: 40rpx;
            line-height: 60rpx;
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
::v-deep .input_holder {
  font-size: 30rpx;
  line-height: 42rpx;
}
</style>
