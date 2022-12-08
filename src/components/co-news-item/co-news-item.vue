<template>
  <list :loadmoreoffset="10">
    <view class="news_list">
      <view v-for="(item, index) in mockData" :key="index">
        <view class="list_item" @click="navigator('/pages/news/newsDetail')">
          <view class="item_container">
            <view class="item-text">
              <view class="item_tag fw_400">{{ item.tag }}</view>
              <view class="item_title line_break fw_500">{{ item.title }}</view
              ><view class="item_time fw_400">{{ item.date }}</view>
            </view>
            <view class="item_pic">
              <view
                ><u-image
                  :src="item.src"
                  width="160rpx"
                  height="220rpx"
                ></u-image
              ></view>
              <view class="item_icon">
                <view>
                  <u-icon
                    name="bookmark"
                    size="50rpx"
                    color="#051C2C"
                    :hoverClass="icon_click"
                  ></u-icon>
                </view>
                <u-button
                  :custom-style="btnStyle"
                  @tap.stop="share"
                  open-type="share"
                  ><u-icon
                    name="share-square"
                    size="50rpx"
                    color="#051C2C"
                    :hoverClass="icon_click"
                  ></u-icon
                ></u-button>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </list>
</template>

<script>
export default {
  name: 'newsItem',
  props: {},
  data() {
    return {
      mockData: [
        {
          tag: '广东 | 初三学生/初中毕业生',
          title: '2023年广东省五年一贯制政策解读｜报名和考核',
          src: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
          date: '2022年8月31日',
        },
        {
          tag: '广东 | 初三学生/初中毕业生',
          title: '2023年广东省五年一贯制政策解读｜报名和考核',
          src: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
          date: '2022年8月31日',
        },
        {
          tag: '广东 | 初三学生/初中毕业生',
          title: '2023年广东省五年一贯制政策解读｜报名和考核',
          src: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
          date: '2022年8月31日',
        },
        {
          tag: '广东 | 初三学生/初中毕业生',
          title: '2023年广东省五年一贯制政策解读｜报名和考核',
          src: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
          date: '2022年8月31日',
        },
        {
          tag: '广东 | 初三学生/初中毕业生',
          title: '2023年广东省五年一贯制政策解读｜报名和考核',
          src: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
          date: '2022年8月31日',
        },
        {
          tag: '广东 | 初三学生/初中毕业生',
          title: '2023年广东省五年一贯制政策解读｜报名和考核',
          src: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
          date: '2022年8月32日',
        },
        {
          tag: '广东 | 初三学生/初中毕业生',
          title: '2023年广东省五年一贯制政策解读｜报名和考核',
          src: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
          date: '2022年8月32日',
        },
        {
          tag: '广东 | 初三学生/初中毕业生',
          title: '2023年广东省五年一贯制政策解读｜报名和考核',
          src: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
          date: '2022年8月32日',
        },
      ],
      scrollHeight: '0',
      btnStyle: {
        margin: 0,
        padding: 0,
        outline: 'none',
        borderRadius: 0,
        backgroundColor: 'transparent',
        lineHeight: 'inherit',
        width: 'max-content',
        height: 'fit-content',
        marginLeft: '34rpx',
        borderWidth: 0,
      },
    };
  },
  methods: {
    scrolltolower() {
      console.log('bottom');
    },
    refresh() {
      console.log('refresh');
    },
    navigator(route) {
      uni.navigateTo({ url: route });
    },

    scroll() {
      console.log('scroll');
    },
    share() {
      uni.share({
        provider: 'weixin',
        scene: 'WXSceneSession',
        type: 5,

        success: function (res) {
          console.log('success:' + JSON.stringify(res));
        },
        fail: function (err) {
          console.log('fail:' + JSON.stringify(err));
        },
      });
    },
  },
  props: {
    renderList: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped>
.list_item {
  width: 670rpx;
  height: 400rpx;
  background-color: #fff;
  border-radius: 20rpx;
  padding: 40rpx 40rpx 54rpx 40rpx;
  box-sizing: border-box;
  margin-bottom: 60rpx;
  .item_container {
    display: flex;
    .item-text {
      width: 390rpx;
      .item_tag {
        font-size: 24rpx;
      }
      .item_title {
        padding-top: 21rpx;
        font-size: 36rpx;
        line-height: 50rpx;
        min-height: 150rpx;
      }
      .item_time {
        padding-top: 69rpx;
        font-size: 24rpx;
        color: #5e5e5e;
      }
    }
    .item_pic {
      margin-left: 40rpx;
      .item_icon {
        display: flex;
        padding-top: 51rpx;
        padding-left: 26rpx;
        .icon_click {
          color: '#1E60EA';
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
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.news_list {
  margin-top: 40rpx;
}
</style>
