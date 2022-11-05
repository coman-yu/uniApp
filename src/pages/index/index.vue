<template>
  <view class="u-page">
    <co-header-icon></co-header-icon>
    <view class="main_container">
      <view class="main_title">
        <h2 class="fw_500">职教资讯</h2>
        <h4 class="fw_500">成为大国工匠</h4>
      </view>
      <view class="main_job">
        <view
          class="main_job_image"
          v-for="item in newsList"
          :key="item.title"
          @click="navigator(item.path)"
        >
          <view class="job_item"
            ><image :src="item.imageSrc" class="item_image"></image>
            <view class="job_item_text">
              <h2 class="fw_600">{{ item.title }}</h2>
              <h4 class="fw_500">{{ item.detail }}</h4>
            </view>
          </view>
        </view>
      </view>
      <view class="main_stuffs">
        <view class="main_title"
          ><h2 class="fw_500">商品</h2>
          <h4 class="fw_500">升学规划｜备考课程｜求职辅助</h4>
        </view>
        <view class="stuffs_container">
          <view class="stuffs_item">
            <view class="stuffs_image">
              <image
                src="/static/index/school.jpg"
                class="stuffs_image"
              ></image>
            </view>
            <view class="stuffs_text line_break fw_400"
              >Does ESG really
              mattadadsddddddddddddddddddddddddddddddddddddddddddd</view
            >
          </view>

          <view class="stuffs_item">
            <view class="stuffs_image">
              <image
                src="/static/index/school.jpg"
                class="stuffs_image"
              ></image>
            </view>
            <view class="stuffs_text line_break"
              >Does ESG really
              mattadadsddddddddddddddddddddddddddddddddddddddddddd</view
            >
          </view>

          <view class="stuffs_item">
            <view class="stuffs_image">
              <image
                src="/static/index/school.jpg"
                class="stuffs_image"
              ></image>
            </view>
            <view class="stuffs_text line_break"
              >Does ESG really
              mattadadsddddddddddddddddddddddddddddddddddddddddddd</view
            >
          </view>

          <view
            class="stuffs_item"
            @click="navigator('/pages/index/shop/shopList')"
          >
            <view class="stuffs_image">
              <image src="/static/index/more.jpg" class="stuffs_image"></image>
            </view>
            <view class="stuffs_text line_break text-center"
              >查看<br />更多商品</view
            >
          </view>
        </view>
      </view>
      <view class="main_contact">
        <view class="main_title fw_500">
          <h2>联系我们</h2>
        </view>
        <view class="contact_container">
          <view class="contact_item">
            <view class="contact_img">
              <image
                src="/static/index/subcription.png"
                class="contact_img_loyout"
              ></image>
            </view>
            <view class="contact_text fw_500">
              点击关注<br />新职教公众号
            </view>
          </view>

          <view class="contact_item" style="padding-left: 54rpx">
            <view class="contact_img" @click="show = true">
              <image
                src="/static/index/contact.jpg"
                class="contact_img_loyout"
              ></image>
            </view>
            <view class="contact_text fw_500">
              点击添加 <br />新职教企业微信
            </view>
          </view>
        </view>
      </view>
    </view>
    <co-pop-up :show="show" @pop-close="popClose"></co-pop-up>
    <co-home-tabbar :tabList="tabList" :currentVal="'index'"></co-home-tabbar>
  </view>
</template>

<script>
import { mapState } from 'vuex';

export default {
  styleIsolation: 'shared',
  data() {
    return {
      newsList: [
        {
          imageSrc: '/static/index/school.jpg',
          title: '升学',
          detail: '初中毕业到职业本科',
          path: '/pages/index/educationNews',
        },
        {
          imageSrc: '/static/index/daily.jpg',
          title: '日常',
          detail: '职校生活到国家支持',
          path: '/pages/index/newsDetail',
        },
        {
          imageSrc: '/static/index/people.jpg',
          title: '人物',
          detail: '认识大国工匠',
        },
        {
          imageSrc: '/static/index/job.jpg',
          title: '就业',
          detail: '传承工匠精神',
        },
      ],
      show: false,
    };
  },
  methods: {
    popClose() {
      this.show = false;
    },
    navigator(route) {
      console.log(route);
      uni.navigateTo({ url: route });
    },
  },
  computed: {
    ...mapState(['tabList']),
  },
};
</script>

<style lang="scss">
.u-page {
  .main_container {
    padding: 120rpx 48rpx;
    .main_title {
      h2 {
        font-size: 50rpx;
        line-height: 70rpx;
        color: #051c2c;
      }
      h4 {
        font-size: 28rpx;
        line-height: 40rpx;
        color: #5e5e5e;
      }
      padding-bottom: 60rpx;
    }
    .main_job {
      .main_job_image {
        .job_item {
          margin-bottom: 90rpx;
          width: 654rpx;
          height: 360rpx;
          border-radius: 20rpx;
          position: relative;
          .item_image {
            width: 654rpx;
            height: 360rpx;
            border-radius: 20rpx;
          }

          .job_item_text {
            position: absolute;
            left: 40rpx;
            bottom: 44rpx;
            h2 {
              color: #ffffff;
              line-height: 42rpx;
              font-size: 40rpx;
            }
            h4 {
              color: #ffffff;
              margin-top: 10rpx;
              line-height: 42rpx;
              font-size: 30rpx;
            }
          }
        }
      }
    }
    .main_stuffs {
      margin-top: 70rpx;
      margin-bottom: 10rpx;
      .main_title {
        h2 {
          font-size: 40rpx;
          line-height: 56rpx;
        }
      }
      .stuffs_container {
        display: flex;
        flex-wrap: wrap;
        .stuffs_item:nth-of-type(2n) {
          margin-left: 54rpx;
        }
        .stuffs_item {
          padding-bottom: 50rpx;
          width: 300rpx;
          height: 348rpx;
          .stuffs_image {
            width: 300rpx;
            height: 220rpx;
            border-radius: 20rpx 20rpx 0 0;
          }
          .stuffs_text {
            height: 80rpx;
            padding: 24rpx 38rpx 24rpx 24rpx;
            line-height: 40rpx;
            font-size: 28rpx;
            color: #051c2c;
            background: #f7f7f7;
            border-radius: 0 0 20rpx 20rpx;
          }
          .line_break {
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: normal !important;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .text-center {
            text-align: center;
          }
        }
      }
    }
    .main_contact {
      margin-top: 70rpx;
      .main_title {
        h2 {
          font-size: 40rpx;
        }
        padding-bottom: 40rpx;
      }
      .contact_container {
        display: flex;
        flex-wrap: wrap;
        .contact_item {
          .contact_img {
            width: 300rpx;
            height: 314rpx;
            padding: 69rpx 0 0 63rpx;
            background: #f7f7f7;
            border-radius: 20rpx;
            box-sizing: border-box;
          }
          .contact_img_loyout {
            width: 174rpx;
            height: 174rpx;
            border-radius: 174rpx;
          }
          .contact_text {
            padding-top: 17rpx;
            text-align: left;
            font-size: 26rpx;
            line-height: 37rpx;
          }
        }
      }
    }
  }
}
</style>
