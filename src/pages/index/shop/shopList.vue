<template>
  <view class="u-page">
    <co-header-news :title="title"></co-header-news>
    <co-header-filter :leftText="'销量'" :rightText="'最新'"></co-header-filter>
    <view class="list_container">
      <view class="list_item_outer">
        <list v-for="(item, index) in mockData" :key="index">
          <view
            class="list_item"
            @click="navigator('/pages/index/shop/shopItem')"
          >
            <view>
              <u-image
                width="314rpx"
                height="220rpx"
                :src="item.src"
                radius="20rpx 20rpx 0 0"
              ></u-image>
            </view>
            <view class="list_text">
              <view class="list_title line_break">{{ item.title }}</view>
              <view class="list_bottom">
                <view class="list_price">¥ {{ item.price }}</view>
                <view class="list_num">月销量:{{ item.monthSale }}</view>
              </view>
            </view>
          </view>
        </list>
        <view class="bottom-btn">
          <co-bottom-btn
            :fixed="false"
            @click.native="backToIndex"
            text="返回首页"
          ></co-bottom-btn>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: '职教商城',
      mockData: [
        {
          src: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
          price: 599,
          monthSale: 250,
          title: 'Does ESG really matter-and shy-ss',
        },
        {
          src: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
          price: 599,
          monthSale: 250,
          title: 'Does ESG really matter-and shy-ss',
        },
        {
          src: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
          price: 599,
          monthSale: 250,
          title: 'Does ESG really matter-and shy-ss',
        },
        {
          src: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
          price: 599,
          monthSale: 250,
          title: 'Does ESG really matter-and shy-ss',
        },
        {
          src: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
          price: 599,
          monthSale: 250,
          title: 'Does ESG really matter-and shy-ss',
        },
        {
          src: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
          price: 599,
          monthSale: 250,
          title: 'Does ESG really matter-and shy-ss',
        },
        {
          src: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
          price: 599,
          monthSale: 250,
          title: 'Does ESG really matter-and shy-ss',
        },
        {
          src: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
          price: 599,
          monthSale: 250,
          title: 'Does ESG really matter-and shy-ss',
        },
      ],
      screenHeight: 0,
    };
  },
  methods: {
    backToIndex() {
      uni.switchTab({ url: '/pages/index/index' });
    },
    navigator(route) {
      uni.navigateTo({ url: route });
    },
  },
  mounted() {
    uni.getSystemInfo({
      success: (res) => {
        const screenHeight = res.screenHeight * (750 / res.windowWidth); //将px 转换rpx
        this.screenHeight = screenHeight;
      },
    });
  },
};
</script>

<style lang="scss" scoped>
.u-page {
  background-color: #f5f5f5;
}
.list_container {
  padding: 0 40rpx 40rpx 40rpx;

  /* .list_item:nth-of-type(1) {
    margin-top: 40rpx;
  } */

  .list_item {
    margin-bottom: 40rpx;
    width: 314rpx;
    height: 420rpx;
    border-radius: 20rpx;
    box-sizing: border-box;
    background: #fff;
    float: left;
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
.bottom-btn {
  width: 100%;
}
</style>
