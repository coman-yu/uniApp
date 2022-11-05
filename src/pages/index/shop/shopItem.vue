<template>
  <view class="u-page">
    <u-swiper
      :list="swiperList"
      keyName="url"
      :autoplay="false"
      height="670rpx"
      :imgMode="'heightFix'"
      indicatorStyle="right:47rpx;bottom:76rpx"
      @change="(e) => (currentNum = e.current)"
    >
      <view slot="indicator" class="indicator-num">
        <text class="indicator-num__text"
          >{{ currentNum + 1 }}/{{ swiperList.length }}</text
        >
      </view></u-swiper
    >
    <view class="shop_container">
      <view class="shop_title fw_500">商品名称</view>
      <view class="shop_price fw_400">¥ 599</view>

      <view class="shop_second">
        <view class="shop_detail"
          >商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍</view
        >
        <view class="shop_tag">
          <text class="fw_500">适宜人群: {{ ' ' }}</text
          ><text class="fw_400"> 广东｜初三学生/初三毕业生</text></view
        >
        <view class="shop_buy">
          <view class="shop_buy_label">购买选项一</view>
          <view class="shop_select fw_500">
            <view class="button_wrapper"
              ><u-button :customStyle="activeBtn" :color="activeBtnColor"
                ><text class="fw_500">学校选择指导</text></u-button
              >
            </view>
            <view class="button_wrapper">
              <u-button :customStyle="noActiveBtn" :color="noActiveBtnColot"
                ><text class="fw_500">教学课程</text>
              </u-button></view
            >
            <view class="button_wrapper">
              <u-button :customStyle="noActiveBtn" :color="noActiveBtnColot"
                ><text class="fw_500">教学课程</text>
              </u-button></view
            >
          </view>
        </view>

        <view class="shop_buy">
          <view class="shop_buy_label">购买选项一</view>
          <view class="shop_select fw_500">
            <view class="button_wrapper"
              ><u-button :customStyle="activeBtn" :color="activeBtnColor"
                ><text class="fw_500">学校选择指导</text></u-button
              >
            </view>
            <view class="button_wrapper">
              <u-button :customStyle="noActiveBtn" :color="noActiveBtnColot"
                ><text class="fw_500">教学课程</text>
              </u-button></view
            >
            <view class="button_wrapper">
              <u-button :customStyle="noActiveBtn" :color="noActiveBtnColot"
                ><text class="fw_500">教学课程</text>
              </u-button></view
            >
          </view>
        </view>
      </view>

      <view class="shop_image">
        <view class="shop_title1 fw_500">商品详情</view>
        <view class="sho_img"
          ><u--image
            :showLoading="true"
            src="/static/index/people.jpg"
            width="100%"
            height="1720rpx"
            :mode="heightFix"
          ></u--image
        ></view>
      </view>
      <view class="bottom_btn">
        <view class="btn_wrapper">
          <view class="btn_left">
            <view class="icon">
              <u--image
                src="/static/Icon/other/custom.png"
                width="60rpx"
                height="60rpx"
                @click="show = true"
              ></u--image
            ></view>
            <view class="btn_text fw_400">客服</view>
          </view>
          <view class="btn_right">
            <u-button color="#051C2C" :customStyle="bottomBtn"
              >立即购买</u-button
            >
          </view>
        </view>
      </view>
    </view>
    <co-pop-up :show="show" @pop-close="popClose"></co-pop-up>
  </view>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      currentNum: 0,
      swiperList: [
        {
          url: 'https://cdn.uviewui.com/uview/resources/video.mp4',
          title: '昨夜星辰昨夜风，画楼西畔桂堂东',
          poster: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
        },
        {
          url: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
          title: '身无彩凤双飞翼，心有灵犀一点通',
        },
        {
          url: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',
          title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳',
        },
      ],
      activeBtn: {
        borderRadius: '14rpx',
        height: '70rpx',
        color: '#fff',
        display: 'inline-block',
        width: 'fit-content',
        lineHeight: '70rpx',
        padding: '0 30rpx 0 30rpx',
      },
      noActiveBtn: {
        borderRadius: '14rpx',
        height: '70rpx',
        color: '#051C2C',
        display: 'inline-block',
        width: 'fit-content',
        lineHeight: '70rpx',
        padding: '0 30rpx 0 30rpx',
      },
      bottomBtn: {
        width: '270rpx',
        height: '80rpx',
        borderRadius: '40rpx',
        color: '#fff',
      },
      activeBtnColor: '#051C2C',
      noActiveBtnColot: '#F5F5F5',
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
.indicator-num {
  padding: 4rpx 0;
  background-color: rgba(0, 0, 0, 0.4);

  width: 100rpx;
  height: 50rpx;
  border-radius: 50rpx;
  @include flex;
  justify-content: center;

  &__text {
    color: #ffffff;
    font-size: 30rpx;
  }
}
.u-page {
  position: relative;
  .shop_container {
    position: absolute;
    top: 614rpx;
    background: #fff;
    width: 100%;
    height: 100rpx;
    border-radius: 40rpx 40rpx 0 0;
    .shop_title {
      padding-top: 50rpx;
      text-align: center;
      font-size: 50rpx;
      line-height: 70rpx;
    }

    .shop_price {
      padding-top: 20rpx;
      font-size: 30rpx;
      text-align: center;
      line-height: 42rpx;
    }

    .shop_second {
      padding: 0 40rpx 0 40rpx;
      .shop_detail {
        font-size: 30rpx;
        line-height: 50rpx;
        padding-top: 40rpx;
      }
      .shop_tag {
        padding-top: 50rpx;
        font-size: 30rpx;
        line-height: 50rpx;
      }
      .shop_buy {
        padding-top: 50rpx;
        font-size: 30rpx;
        .shop_buy_label {
          line-height: 50rpx;
        }
        .shop_select {
          display: flex;
          flex-wrap: wrap;
          .button_wrapper {
            margin-top: 30rpx;
            margin-right: 40rpx;
          }
        }
      }
    }

    .shop_image {
      padding-top: 70rpx;
      .shop_title1 {
        font-size: 40rpx;
        line-height: 50rpx;
        padding-left: 40rpx;
      }
      .sho_img {
        margin-top: 50rpx;
      }
    }
    .bottom_btn {
      padding: 22rpx 40rpx 70rpx 40rpx;
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
          .icon {
            padding: 20rpx 0rpx 20rpx 39rpx;
          }
          .btn_text {
            padding: 25rpx 0 25rpx 10rpx;
            font-size: 36rpx;
            line-height: 50rpx;
          }
        }
        .btn_right {
          padding: 10rpx 10rpx 10rpx 0;
        }
      }
    }
  }
}
</style>
