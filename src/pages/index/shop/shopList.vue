<template>
  <view class="u-page">
    <co-header-news :title="title"></co-header-news>
    <co-header-filter :leftText="'销量'" :rightText="'最新'"></co-header-filter>
    <view class="list_container">
      <view>
        <u-list>
          <view class="list_item_outer">
            <u-list-item>
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
                    <view class="list_num">月销量:250</view>
                  </view>
                </view>
              </view>
            </u-list-item>

            <u-list-item>
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
                    <view class="list_num">月销量:250</view>
                  </view>
                </view>
              </view>
            </u-list-item>

            <u-list-item>
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
                    <view class="list_num">月销量:250</view>
                  </view>
                </view>
              </view>
            </u-list-item>

            <u-list-item>
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
                    <view class="list_num">月销量:250</view>
                  </view>
                </view>
              </view>
            </u-list-item>

            <u-list-item>
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
                    <view class="list_num">月销量:250</view>
                  </view>
                </view>
              </view>
            </u-list-item>

            <u-list-item>
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
                    <view class="list_num">月销量:250</view>
                  </view>
                </view>
              </view>
            </u-list-item>

            <u-list-item>
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
                    <view class="list_num">月销量:250</view>
                  </view>
                </view>
              </view>
            </u-list-item>
          </view>
          <co-bottom-btn
            :fixed="false"
            @click.native="backToIndex"
          ></co-bottom-btn>
        </u-list>
      </view>
    </view>

    <co-city-picker></co-city-picker>
    <co-grade-picker></co-grade-picker>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: '职教商城',
    };
  },
  methods: {
    backToIndex() {
      uni.switchTab({ url: '/pages/index/index' });
    },
  },
};
</script>

<style lang="scss" scoped>
.u-page {
  background-color: #f5f5f5;
}
.list_container {
  padding: 130rpx 40rpx 40rpx 40rpx;

  .list_item {
    margin-bottom: 40rpx;
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
.line_break {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.list_item_outer {
  margin-top: 40rpx;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
