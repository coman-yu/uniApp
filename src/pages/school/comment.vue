<template>
  <view class="u-page">
    <co-header-news :title="'评价详情'"></co-header-news>
    <view class="container">
      <view class="top">
        <view class="school">
          <u--image
            width="90rpx"
            height="90rpx"
            radius="10%"
            src="https://tse1-mm.cn.bing.net/th/id/OIP-C.btrojqfS62znfabAM6X7rAAAAA?w=206&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          ></u--image>
          <view class="fw_500 title">广州华成职业技术学校</view>
        </view>
        <view class="list">
          <view class="list-item">
            <view class="fw_500">理论学习满意度：</view>
            <view class="fw_400">98%</view>
          </view>
          <view class="list-item">
            <view class="fw_500">实习实训满意度：</view>
            <view class="fw_400">98%</view>
          </view>
          <view class="list-item">
            <view class="fw_500">校园生活满意度：</view>
            <view class="fw_400">98%</view>
          </view>
        </view>
        <view class="comment">
          <view class="comment-item">
            <view class="comment-top">
              <u-avatar src="/static/logo.png" size="80rpx"></u-avatar>
              <view class="userInfo">
                <view class="userName fw_500">father</view>
                <view class="time fw_400">6天前</view>
              </view></view
            >
            <view class="comment-content">
              <text class="fw_500">整体评价：</text>
              <text class="fw_400"
                >理论学习非常满意，实习实训也很好，校园环境更不用说棒棒的。</text
              >
            </view>
            <view class="comment-img">
              <u--image
                src="https://ts1.cn.mm.bing.net/th?id=OIP-C.n0_p3rYRuofABd3XudbZnAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                width="190rpx"
                height="190rpx"
                radius="5%"
              ></u--image>
              <u--image
                src="https://ts1.cn.mm.bing.net/th?id=OIP-C.n0_p3rYRuofABd3XudbZnAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                width="190rpx"
                height="190rpx"
                radius="5%"
              ></u--image>
              <u--image
                src="https://ts1.cn.mm.bing.net/th?id=OIP-C.n0_p3rYRuofABd3XudbZnAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                width="190rpx"
                height="190rpx"
                radius="5%"
              ></u--image>
            </view>
            <view class="thumb">
              <view class="thumb-item">
                <view class="right">
                  <u--image
                    src="/static/unLikeActive.png"
                    width="40rpx"
                    height="40rpx"
                  ></u--image>
                  <view class="fw_400 text">123</view>
                </view>
                <view class="left">
                  <u--image
                    src="/static/like.png"
                    width="40rpx"
                    height="40rpx"
                  ></u--image>
                  <view class="fw_400 text">2990</view>
                </view>
              </view>
            </view>
          </view>
          <view class="comment-item">
            <view class="comment-top">
              <u-avatar src="/static/logo.png" size="80rpx"></u-avatar>
              <view class="userInfo">
                <view class="userName fw_500">father</view>
                <view class="time fw_400">6天前</view>
              </view></view
            >
            <view class="comment-content">
              <text class="fw_500">整体评价：</text>
              <text class="fw_400"
                >理论学习非常满意，实习实训也很好，校园环境更不用说棒棒的。</text
              >
            </view>
            <view class="comment-img">
              <u--image
                src="https://ts1.cn.mm.bing.net/th?id=OIP-C.n0_p3rYRuofABd3XudbZnAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                width="190rpx"
                height="190rpx"
                radius="5%"
              ></u--image>
              <u--image
                src="https://ts1.cn.mm.bing.net/th?id=OIP-C.n0_p3rYRuofABd3XudbZnAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                width="190rpx"
                height="190rpx"
                radius="5%"
              ></u--image>
              <u--image
                src="https://ts1.cn.mm.bing.net/th?id=OIP-C.n0_p3rYRuofABd3XudbZnAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                width="190rpx"
                height="190rpx"
                radius="5%"
              ></u--image>
            </view>
            <view class="thumb">
              <view class="thumb-item">
                <view class="right">
                  <u--image
                    src="/static/unLikeActive.png"
                    width="40rpx"
                    height="40rpx"
                  ></u--image>
                  <view class="fw_400 text">123</view>
                </view>
                <view class="left">
                  <u--image
                    src="/static/like.png"
                    width="40rpx"
                    height="40rpx"
                  ></u--image>
                  <view class="fw_400 text">2990</view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="bottom-btn">
      <co-bottom-btn
        :fixed="false"
        @click.native="backToSchool"
        text="返回学校详情"
        :btnStyle="{
          color: '#fff',
          borderRadius: '40rpx',
          backGround: '#051C2C',
        }"
      ></co-bottom-btn>
    </view>
  </view>
</template>
<script>
export default {
  methods: {
    backToSchool() {
      uni.navigateTo({ url: '/pages/school/schoolDetail' });
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  padding: 40rpx 40rpx 0rpx 40rpx;
  .top {
    background-color: #fff;
    .school {
      display: flex;
      .title {
        font-size: 50rpx;
        line-height: 70rpx;
        margin-left: 30rpx;
        margin-top: 10rpx;
      }
    }
    .list {
      padding-top: 30rpx;
      &-item {
        margin-top: 30rpx;
        font-size: 30rpx;
        line-height: 50rpx;
        display: flex;
        justify-content: space-between;
      }
    }
    .comment {
      &-item {
        margin-top: 60rpx;
        padding-bottom: 40rpx;
        border-bottom: 2rpx solid #dadada;
        .comment-top {
          display: flex;
          .userInfo {
            margin-left: 20rpx;
            .userName {
              font-size: 30rpx;
              line-height: 42rpx;
            }
            .time {
              font-size: 24rpx;
              line-height: 33rpx;
              color: #5e5e5e;
            }
          }
        }
        .comment-content {
          padding-top: 30rpx;

          font-size: 30rpx;
          line-height: 50rpx;
        }
        .comment-img {
          margin-top: 27rpx;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .thumb {
          margin-top: 40rpx;
          &-item {
            display: flex;
            flex-direction: row-reverse;

            .text {
              margin-left: 12rpx;
              margin-top: 4rpx;
              font-size: 26rpx;
              line-height: 37rpx;
            }
            .left {
              margin-right: 50rpx;
              display: flex;
            }
            .right {
              display: flex;
            }
          }
        }
      }
    }
  }
}
.bottom-btn {
  padding: 60rpx 40rpx;
  background-color: #f5f5f5;
}
</style>
