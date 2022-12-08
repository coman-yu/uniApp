<template>
  <view class="u-page">
    <co-header-news title="资讯详情"></co-header-news>
    <u-sticky
      :offsetTop="statusBarHeight + 'px'"
      :customNavHeight="statusBarHeight + 'px'"
    >
      <u-line-progress
        :percentage="percentage"
        :showText="false"
        height="6rpx"
        activeColor="#1E60EA"
      ></u-line-progress>
    </u-sticky>
    <co-news-video></co-news-video>
    <view class="title_container">
      <view class="title_sub">
        <view class="title_weight fw_500"
          ><text>2023年广东省五年一贯制政策解读｜报名和考核</text
          ><view class="title-icon"
            ><image
              src="/static/check.png"
              style="width: 50rpx; height: 50rpx; padding-top: 10rpx"
            ></image>
          </view>
          <view class="title_small"><text>资讯已核验</text></view></view
        >

        <view class="title_tag">
          <view class="tag_left fw_400">广东｜初三学生/初三毕业生</view>
          <view class="tag_right fw_400">2022年8月31日</view>
        </view>
      </view>
    </view>
    <view class="image_container"
      ><u-image
        src="https://cdn.uviewui.com/uview/album/1.jpg"
        width="100%"
        height="400rpx"
        class="icon"
      ></u-image
    ></view>
    <view class="bottom_btn"
      ><view class="first_btn"
        ><u-button
          shape="circle"
          :customStyle="btnStyle"
          :plain="true"
          color="#051C2C"
          @click="pageBack"
        >
          <u-icon name="arrow-leftward" color="#051C2C" size="40"></u-icon>
          <text
            class="fw_500"
            style="color: '#051C2C'; font-size: '36rpx'; margin-left: 5rpx"
            >返回</text
          >
        </u-button></view
      ><view class="first_btn"
        ><u-button
          shape="circle"
          :customStyle="activeBtnStyle"
          :plain="true"
          color="#051C2C"
        >
          <u-icon name="bookmark" color="#ffffff" size="40"></u-icon>
          <text class="fw_500" style="font-size: '36rpx'; margin-left: 5rpx"
            >收藏</text
          >
        </u-button></view
      ><view class="first_btn"
        ><u-button
          shape="circle"
          :customStyle="btnStyle"
          :plain="true"
          color="#051C2C"
          openType="share"
        >
          <u-icon name="share-square" color="#051C2C" size="40"></u-icon>
          <text class="fw_500" style="color: '#051C2C'; font-size: '36rpx'"
            >分享</text
          >
        </u-button></view
      ></view
    >
  </view>
</template>

<script>
const systemInfo = uni.getSystemInfoSync();
export default {
  methods: {
    pageBack() {
      uni.navigateBack({
        success: () => [console.log('success')],
      });
    },
  },
  data() {
    return {
      btnStyle: {
        width: '188rpx',
        height: '80rpx',
      },
      activeBtnStyle: {
        width: '188rpx',
        height: '80rpx',
        color: '#ffffff',
        background: '#051c2c',
      },
      percentage: '0',
      statusBarHeight: systemInfo.statusBarHeight + 44,
      pageHeight: 0,
    };
  },
  onPageScroll(e) {
    this.percentage =
      (e.scrollTop / (this.pageHeight - this.screenHeight)).toFixed(2) * 100;
  },

  computed: {
    screenHeight() {
      return uni.getSystemInfoSync().windowHeight;
    },
  },
  mounted() {
    const query = uni.createSelectorQuery().in(this);
    query
      .select('.u-page')
      .boundingClientRect((data) => {
        this.pageHeight = data.height;
      })
      .exec();
  },
};
</script>

<style lang="scss" scoped>
.title_container {
  height: 380rpx;
  box-sizing: border-box;
  background: #f5f5f5;
  position: relative;
  .title_sub {
    padding: 70rpx 40rpx 68rpx 40rpx;
    .title_weight {
      color: #000000;
      font-size: 50rpx;
      line-height: 70rpx;
      max-height: 480rpx;
    }
    .title-icon {
      position: absolute;
      top: 140rpx;
      right: 242rpx;
    }
    .title_small {
      color: #0173ae;
      font-size: 30rpx;
      line-height: 42rpx;
      padding-bottom: 20rpx;
      position: absolute;
      top: 154rpx;
      right: 80rpx;
    }
    .title_tag {
      padding-top: 60rpx;
      display: flex;
      justify-content: space-between;
      .tag_left {
        font-size: 30rpx;
        color: #5e5e5e;
      }
      .tag_right {
        font-size: 30rpx;
        color: #5e5e5e;
      }
    }
  }
}
.image_container {
  width: 100%;
  height: 4000rpx;
}
.bottom_btn {
  padding: 30rpx 40rpx 114rpx 40rpx;
  display: flex;
  justify-content: space-between;
}
.icon {
  margin-left: 44rpx;
}
</style>
