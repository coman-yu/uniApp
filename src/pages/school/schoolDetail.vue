<template>
  <view class="u-page">
    <swiper class="swiper_container" @change="swiperChange">
      <swiper-item v-for="(item, index) in swiperList" :key="index">
        <video
          v-if="item.type === 'video'"
          id="videoCpn"
          :src="item.url"
          :poster="item.poster"
          object-fit="contain"
          width="100%"
          height="100%"
          :style="{ width: '100%', height: '100%' }"
          controls
          play-btn-position="center"
          :show-fullscreen-btn="false"
          :show-center-play-btn="true"
        ></video>
        <image class="swiper_img" mode="scaleToFill" :src="item.url" v-else>
        </image>
      </swiper-item>
    </swiper>
    <view class="u-indicator-item-number"
      >{{ swiperCurrent + 1 }}/{{ swiperList.length }}</view
    >
    <view class="container">
      <view class="title fw_500">广州华成职业技术学校</view>
      <view class="fw_400 tag">公办｜广东深圳｜中等职业学校</view>
      <view class="tag1">
        <view>
          <text class="fw_500">数据更新时间：</text>
          <text class="fw_400">2022年9月13日</text>
        </view>
        <view class="fw_400 advice" @click="goto('/pages/school/feedBack')"
          >更正建议</view
        >
      </view>
      <view class="title1 fw_400"
        >重点建设已深圳四大支柱产业之一的高薪技术产业为中心的信息类专业，协同发展区域支柱产业金融、物流、文化产业为中心的各类专业。</view
      >
      <view class="title1">
        <text class="fw_500">最新公告：</text>
        <text class="fw_400"
          >2023年招生现在已经开始，请各位考生携带初中毕业证到学校报名。详情可以对话老师进行咨询。</text
        >
      </view>

      <view class="info">
        <view class="titleSub">
          <view class="titleSub-icon"></view>
          <view class="titleSub-text fw_500">招生信息</view>
        </view>
        <view class="info1">
          <view class="fw_500">目前是否招生：</view>
          <view class="fw_400">是</view>
        </view>
        <view class="info2">
          <view class="fw_500">招生对象：</view>
          <view class="fw_400">中国(含港澳台地区)应届毕业生</view></view
        >
        <view class="info2">
          <view class="fw_500">招生学制：</view>
          <view class="fw_400">普通三年制｜高职高考班｜三二分段学制 </view>
          <view class="fw_400">最低录取分数线：388分</view>
        </view>
        <view class="info2">
          <view class="fw_500">招生办电话：</view>
          <view class="fw_400">0755-3319850</view>
        </view>
        <view class="info2">
          <view class="fw_500">招生专业：</view>
          <view class="fw_400">备注： </view>
          <view class="fw_400">农村和县镇户籍学生每年学费减免3</view>
        </view>
      </view>

      <view class="table">
        <view class="table-header fw_500"> 2023年招生专业 </view>
        <uni-table emptyText="暂无更多数据" border>
          <!-- 表头行 -->
          <uni-tr>
            <uni-th align="center" width="150rpx"
              ><view class="fw_500 table-font">专业名称</view></uni-th
            >
            <uni-th align="center" width="153rpx"
              ><view class="fw_500 table-font">学制</view></uni-th
            >
            <uni-th align="center" width="211rpx"
              ><view class="fw_500 table-font">2022年录取分数</view></uni-th
            >
            <uni-th align="center" width="150rpx"
              ><view class="fw_500 table-font">专业学费</view></uni-th
            >
          </uni-tr>
          <!-- 表格数据行 -->
          <uni-tr>
            <uni-td align="center"
              ><view class="fw_400 table-font underline"
                >动漫与游戏 设计</view
              ></uni-td
            >
            <uni-td align="center"
              ><view class="fw_400 table-font">高职高考班</view></uni-td
            >
            <uni-td align="center"
              ><view class="fw_400 table-font">322分</view></uni-td
            >
            <uni-td align="center"
              ><view class="fw_400 table-font">3500元/年</view></uni-td
            >
          </uni-tr>
          <uni-tr>
            <uni-td align="center"
              ><view class="fw_400 table-font">日期</view></uni-td
            >
            <uni-td align="center"
              ><view class="fw_400 table-font">日期</view></uni-td
            >
            <uni-td align="center"
              ><view class="fw_400 table-font">日期</view></uni-td
            >
            <uni-td align="center"
              ><view class="fw_400 table-font">日期</view></uni-td
            >
          </uni-tr>
          <uni-tr>
            <uni-td align="center"
              ><view class="fw_400 table-font">日期</view></uni-td
            >
            <uni-td align="center"
              ><view class="fw_400 table-font">日期</view></uni-td
            >
            <uni-td align="center"
              ><view class="fw_400 table-font">日期</view></uni-td
            >
            <uni-td align="center"
              ><view class="fw_400 table-font">日期</view></uni-td
            >
          </uni-tr>
          <uni-tr>
            <uni-td align="center"
              ><view class="fw_400 table-font">日期</view></uni-td
            >
            <uni-td align="center"
              ><view class="fw_400 table-font">日期</view></uni-td
            >
            <uni-td align="center"
              ><view class="fw_400 table-font">日期</view></uni-td
            >
            <uni-td align="center"
              ><view class="fw_400 table-font">日期</view></uni-td
            >
          </uni-tr>
        </uni-table>
        <uni-pagination
          :total="total"
          :current="current"
          :page-size="pageSize"
        ></uni-pagination>
      </view>

      <view class="info1">
        <view class="titleSub-wrapper">
          <view class="titleSub">
            <view class="titleSub-icon"></view>
            <view class="titleSub-text fw_500">住宿环境</view>
          </view>
          <view class="fw_400 tips">指标解释</view>
        </view>
        <view class="info-item">
          <view class="fw_500">生师比：</view>
          <view class="fw_400">1:19</view>
        </view>
        <view class="info-item">
          <view class="fw_500">专任老师数量：</view>
          <view class="fw_400">3992人</view>
        </view>
        <view class="info-item">
          <view class="fw_500">硕士教师数量：</view>
          <view class="fw_400">234人</view>
        </view>
        <view class="info-item">
          <view class="fw_500">硕士教师比例：</view>
          <view class="fw_400">35%</view>
        </view>
      </view>

      <view class="info1">
        <view class="titleSub-wrapper">
          <view class="titleSub">
            <view class="titleSub-icon"></view>
            <view class="titleSub-text fw_500">升学就业质量</view>
          </view>
          <view class="fw_400 tips">指标解释</view>
        </view>
        <view class="info-item">
          <view class="fw_500">升学率：</view>
          <view class="fw_400">80%</view>
        </view>
        <view class="info-item">
          <view class="fw_500">对口就业率：</view>
          <view class="fw_400">99%</view>
        </view>
        <view class="info-item">
          <view class="fw_500">毕业生平均起薪：</view>
          <view class="fw_400">8888元/月</view>
        </view>
        <view class="info-item">
          <view class="fw_500">整体就业率：</view>
          <view class="fw_400">99%</view>
        </view>
      </view>

      <view class="info1">
        <view class="titleSub-wrapper">
          <view class="titleSub">
            <view class="titleSub-icon"></view>
            <view class="titleSub-text fw_500">师资力量</view>
          </view>
          <view class="fw_400 tips">指标解释</view>
        </view>
        <view class="info-item">
          <view class="fw_500">生师比：</view>
          <view class="fw_400">1:19</view>
        </view>
        <view class="info-item">
          <view class="fw_500">专任老师数量：</view>
          <view class="fw_400">3992人</view>
        </view>
        <view class="info-item">
          <view class="fw_500">硕士教师数量：</view>
          <view class="fw_400">234人</view>
        </view>
        <view class="info-item">
          <view class="fw_500">硕士教师比例：</view>
          <view class="fw_400">35%</view>
        </view>
      </view>

      <view class="info1">
        <view class="titleSub-wrapper">
          <view class="titleSub">
            <view class="titleSub-icon"></view>
            <view class="titleSub-text fw_500">办学规模</view>
          </view>
          <view class="fw_400 tips">指标解释</view>
        </view>
        <view class="info-item">
          <view class="fw_500">在校学生数量：</view>
          <view class="fw_400">2323人</view>
        </view>
        <view class="info-item">
          <view class="fw_500">学校年度总收入：</view>
          <view class="fw_400">23123万</view>
        </view>
        <view class="info-item">
          <view class="fw_500">生均年度收入：</view>
          <view class="fw_400">12万</view>
        </view>
        <view class="info-item">
          <view class="fw_500">校园占地面积：</view>
          <view class="fw_400">10029平方米%</view>
        </view>
      </view>

      <view class="info1">
        <view class="titleSub-wrapper">
          <view class="titleSub">
            <view class="titleSub-icon"></view>
            <view class="titleSub-text fw_500">师兄师姐评价</view>
          </view>
          <view class="fw_400 tips">全部评价</view>
        </view>
        <view class="info-item">
          <view class="fw_500">理论学习满意度：</view>
          <view class="fw_400">98%</view>
        </view>
        <view class="info-item">
          <view class="fw_500">实习实训满意度：</view>
          <view class="fw_400">98%</view>
        </view>
        <view class="info-item">
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
        </view>
      </view>

      <view class="contact">
        <view class="QrCode">
          <u--image
            src="https://ts4.cn.mm.bing.net/th?id=OIP-C.dHT-OJsfLfX_AVMOB-4rFQHaHa&w=249&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            height="192rpx"
            width="192rpx"
          ></u--image>
        </view>
        <view class="QrText fw_400">长按添加 </view>
        <view class="QrText fw_400">本学校微信交流群</view>
        <view class="bottom-btn">
          <u-button :customStyle="btnStyle">返回</u-button>
          <u-button :customStyle="activeBtnSytle">收藏</u-button>
          <u-button :customStyle="btnStyle">转发</u-button>
          <u-button :customStyle="btnStyle">对话</u-button>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      swiperCurrent: 0,
      swiperList: [
        {
          url: 'https://cdn.uviewui.com/uview/resources/video.mp4',
          title: '昨夜星辰昨夜风，画楼西畔桂堂东',
          poster: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
          type: 'video',
          objectFit: 'contain',
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
      total: 10,
      current: 1,
      pageSize: 4,
      btnStyle: {
        padding: '0 39rpx',
        height: '80rpx',
        lineHeight: '80rpx',
        fontSize: '36rpx',
        color: '#051C2C',
        background: '#fff',
        borderRadius: '40rpx',
        width: 'fit-content',
        margin: 0,
      },
      activeBtnSytle: {
        padding: '0 39rpx',
        height: '80rpx',
        lineHeight: '80rpx',
        fontSize: '36rpx',
        color: '#fff',
        background: '#051C2C',
        borderRadius: '40rpx',
        width: 'fit-content',
        margin: 0,
      },
    };
  },
  methods: {
    swiperChange(e) {
      this.swiperCurrent = e.detail.current;
    },
    goto(url) {
      uni.navigateTo({ url });
    },
  },
};
</script>
<style lang="scss" scoped>
.u-page {
  position: relative;
  .container {
    position: absolute;
    top: 611rpx;
    background: #fff;
    width: 100%;
    border-radius: 40rpx 40rpx 0 0;
    padding: 50rpx 40rpx 0 40rpx;
    box-sizing: border-box;

    .title {
      font-size: 50rpx;
      line-height: 70rpx;
      text-align: center;
    }
    .tag {
      font-size: 30rpx;
      line-height: 42rpx;
      text-align: center;
      margin-top: 26rpx;
    }
    .tag1 {
      display: flex;
      justify-content: space-between;
      font-size: 30rpx;
      line-height: 42rpx;
      text-align: center;
      margin-top: 50rpx;
      .advice {
        color: #0075b1;
        font-size: 24rpx;
        line-height: 44rpx;
      }
    }
    .title1 {
      margin-top: 50rpx;
      font-size: 30rpx;
      line-height: 50rpx;
    }
    .info {
      margin-top: 110rpx;
      font-size: 30rpx;
      line-height: 50rpx;
      .info1 {
        margin-top: 40rpx;
      }
      .info2 {
        margin-top: 30rpx;
      }
    }
    .table {
      margin-top: 30rpx;
      .table-header {
        width: calc(100% + 1px);
        height: 80rpx;
        color: #fff;
        text-align: center;
        font-size: 30rpx;
        line-height: 80rpx;
        background-color: #051c2c;
      }
      .table-font {
        font-size: 22rpx;
        color: #051c2c;
        line-height: 30rpx;
      }
      .underline {
        text-decoration: underline;
        color: #0075b1;
      }
    }
  }

  .contact {
    background-color: #f5f5f5;
    width: calc(100% + 80rpx);
    margin-left: -40rpx;
    padding-bottom: 40rpx;
    box-sizing: border-box;
    .QrCode {
      padding-top: 54rpx;
      margin: 0 auto;
      width: 192rpx;
      height: 192rpx;
    }
    .QrText {
      text-align: center;
      color: #5e5e5e;
      line-height: 33rpx;
      font-size: 24rpx;
    }
    .bottom-btn {
      padding: 0 40rpx;
      margin-top: 54rpx;
      display: flex;
      padding: 0 40rpx;
      justify-content: space-between;
    }
  }
}
.swiper_container {
  width: 100%;
  height: 670rpx;
  .swiper_img {
    width: 100%;
    height: 670rpx;
  }
}
.u-indicator-item-number {
  width: 100rpx;
  height: 50rpx;
  line-height: 50rpx;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 25rpx;
  font-size: 30rpx;
  color: #fff;
  position: absolute;
  right: 47rpx;
  bottom: 76rpx;
  text-align: center;
}
.info1 {
  margin-top: 90rpx;
}
.info-item {
  margin-top: 30rpx;
  font-size: 30rpx;
  line-height: 50rpx;
  display: flex;
  justify-content: space-between;
}
.titleSub-wrapper {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10rpx;
  .tips {
    color: #0075b1;
    font-size: 30rpx;
    line-height: 50rpx;
  }
}
.comment {
  margin-top: 20rpx;
  &-item {
    margin-top: 40rpx;
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
      padding: 30rpx 0;
      border-bottom: 2rpx solid #dadada;
      font-size: 30rpx;
      line-height: 50rpx;
    }
  }
}
.titleSub {
  display: flex;
  .titleSub-icon {
    width: 6rpx;
    height: 32rpx;
    background-color: #051c2c;
    border-radius: 3rpx;
    margin-top: 9rpx;
  }
  .titleSub-text {
    font-size: 40rpx;
    line-height: 50rpx;
    margin-left: 9rpx;
  }
}
</style>
<style lang="scss">
$border-color: #051c2c;
::v-deep .uni-table-tr > .table--border {
  border-right: 1px $border-color solid !important;
  border-bottom: 1px $border-color solid !important;
  vertical-align: middle;
}

::v-deep .uni-table-scroll {
  border: 1px $border-color solid !important;
  border-right: none !important;
  border-bottom: none !important;
  max-width: 750rpx !important;
}
::v-deep .empty-border {
  border-right: 1px $border-color solid !important;
  border-bottom: 1px $border-color solid !important;
}
</style>
