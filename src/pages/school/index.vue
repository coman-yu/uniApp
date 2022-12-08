<template>
  <view class="u-page">
    <co-header-news
      title="学校"
      :leftIconSize="0"
      :autoBack="false"
    ></co-header-news>
    <view class="page-container">
      <view class="school-container">
        <view class="hi fw_500">你好，陈同学</view>
        <view class="tips fw_500">让我们帮助你找到心仪学校</view>
        <view class="search">
          <co-input-search placeholder="搜索学校名字"></co-input-search>
        </view>

        <view class="school-cotainer">
          <view class="school-text fw_500"> 匹配学校</view>
          <view class="school-text1 fw_500">获取所有适合我升读的学校</view>
          <view class="school-card">
            <view class="school-card-content">
              <view class="school-item">
                <view class="item-text fw_500">目前在读年级</view>
                <view class="item-text1 fw_500 line_break1" @click="selectGrade"
                  >中职学生/中职是啊啊</view
                >
              </view>
              <view class="school-item mt-50">
                <view class="item-text fw_500">目前在读地点</view>
                <view class="item-text1 fw_500 line_break1" @click="selectCity"
                  >请选择 ></view
                >
              </view>
              <view class="bottom-btn mt-50">
                <u-button shape="circle" iconColor="#fff">
                  <text
                    class="fw_500"
                    style="color: '#051C2C'; font-size: 36rpx"
                    >查看可升读的学校</text
                  >
                </u-button>
              </view>
            </view>
            <view class="school-bg"> </view>
          </view>
        </view>

        <!-- 热门学校 -->
        <view class="hot-school-container">
          <view class="hot-school-top">
            <view class="hot-school-text fw_500">热门学校</view>
            <view>
              <u-button :customStyle="btnStyle" color="#051C2C"
                ><text class="text_btn">所有学校</text></u-button
              >
            </view>
          </view>
          <view class="hot-school-card">
            <view class="hot-school-tab">
              <view
                class="tab-item"
                v-for="item in hotSchoolTabs"
                :key="item.name"
                @click="selectTab(item.name)"
                :class="[currentTab === item.name ? 'active' : 'noActive']"
                ><text class="tabs-text fw_500"
                  >{{ item.name }}
                  <text class="tab-line" v-if="currentTab === item.name"></text
                ></text>
              </view>
            </view>
            <view class="hot-school-list">
              <view class="hot-school-item"
                ><view
                  ><u--image
                    src="https://cdn.uviewui.com/uview/swiper/swiper2.png"
                    width="100rpx"
                    height="100rpx"
                    radius="20rpx"
                  ></u--image></view
                ><view class="hot-school-right">
                  <view class="hot-school-text fw_500 line_break">
                    广州市侨光财经职业技术学校 </view
                  ><view class="pt-21"
                    ><u-button
                      :customStyle="{
                        width: '130rpx',
                        height: '58rpx',
                        borderRadius: '40rpx',
                        background: '#F7F7F7',
                      }"
                    >
                      <text style="color: '#051C2C'; font-size: 26rpx"
                        >查看</text
                      >
                    </u-button></view
                  >
                </view></view
              >

              <view class="hot-school-item"
                ><view
                  ><u--image
                    src="https://cdn.uviewui.com/uview/swiper/swiper2.png"
                    width="100rpx"
                    height="100rpx"
                    radius="20rpx"
                  ></u--image></view
                ><view class="hot-school-right">
                  <view class="hot-school-text fw_500 line_break">
                    广州市侨光财经职业技术学校 </view
                  ><view class="pt-21"
                    ><u-button
                      :customStyle="{
                        width: '130rpx',
                        height: '58rpx',
                        borderRadius: '40rpx',
                        background: '#F7F7F7',
                      }"
                    >
                      <text style="color: '#051C2C'; font-size: 26rpx"
                        >查看</text
                      >
                    </u-button></view
                  >
                </view></view
              >

              <view class="hot-school-item"
                ><view
                  ><u--image
                    src="https://cdn.uviewui.com/uview/swiper/swiper2.png"
                    width="100rpx"
                    height="100rpx"
                    radius="20rpx"
                  ></u--image></view
                ><view class="hot-school-right">
                  <view class="hot-school-text fw_500 line_break">
                    广州市侨光财经职业技术学校 </view
                  ><view class="pt-21"
                    ><u-button
                      :customStyle="{
                        width: '130rpx',
                        height: '58rpx',
                        borderRadius: '40rpx',
                        background: '#F7F7F7',
                      }"
                    >
                      <text style="color: '#051C2C'; font-size: 26rpx"
                        >查看</text
                      >
                    </u-button></view
                  >
                </view></view
              >

              <view
                class="hot-school-more fw_500"
                @click="goto('/pages/school/rank')"
                >更多热门学校<view class="more-icon"
                  ><u-icon
                    name="arrow-down"
                    color="#B0B0B0"
                    height="14rpx"
                    width="26rpx"
                  ></u-icon>
                </view>
              </view>
            </view>
          </view>
        </view>

        <!-- 职教专业 -->
        <view class="hot-school-container">
          <view class="hot-school-top">
            <view class="hot-school-text fw_500">职教专业</view>
            <view>
              <u-button
                :customStyle="btnStyle"
                color="#051C2C"
                @click="goto('/pages/school/majorList')"
                ><text class="text_btn fw_400">所有专业</text></u-button
              >
            </view>
          </view>
          <view class="hot-carrer-card">
            <view class="hot-img" @click="goto('/pages/school/majorList')">
              <u--image
                src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/01/0E/ChMkJlbKwgWICgoOAAOr5u2C_KQAALGhgDf6dYAA6v-920.jpg"
                height="800rpx"
                width="100%"
              ></u--image>
            </view>
            <view class="hot-carrer-top fw_500"
              ><view>查看各学科专业</view><view>介绍</view></view
            >
            <view class="hot-carrer-bottom fw_500"
              >专业培养目标｜主要课程｜职业面向</view
            >
          </view>

          <view class="hot-survey-card">
            <view class="hot-survey-top">
              <view class="hot-survey-text1 fw_500">21届高职毕业生</view>
              <view class="hot-survey-text2 fw_500">就业满意度前30位专业 </view>
            </view>
            <view class="hot-survey-item">
              <view class="item-left fw_600">01</view>
              <view class="item-right">
                <view>
                  <view class="item-right-text1 fw_500">铁道机车</view>
                  <view class="item-right-text2 fw_400">就业满意度：84%</view>
                </view>
                <view class="pt-17"
                  ><u-button
                    iconColor="#F7F7F7"
                    :customStyle="{
                      width: '130rpx',
                      height: '58rpx',
                      borderRadius: '40rpx',
                      background: '#F7F7F7',
                    }"
                  >
                    <text
                      class="fw_500"
                      style="color: '#051C2C'; font-size: 26rpx"
                      >查看</text
                    >
                  </u-button></view
                >
              </view>
            </view>

            <view class="hot-survey-item">
              <view class="item-left fw_600">02</view>
              <view class="item-right">
                <view>
                  <view class="item-right-text1 fw_500">铁道供电技术</view>
                  <view class="item-right-text2 fw_400">就业满意度：84%</view>
                </view>
                <view class="pt-17"
                  ><u-button
                    :customStyle="{
                      width: '130rpx',
                      height: '58rpx',
                      borderRadius: '40rpx',
                      background: '#F7F7F7',
                    }"
                  >
                    <text
                      class="fw_400"
                      style="color: '#051C2C'; font-size: 26rpx"
                      >查看</text
                    >
                  </u-button></view
                >
              </view>
            </view>

            <view class="hot-survey-item">
              <view class="item-left fw_600">03</view>
              <view class="item-right">
                <view>
                  <view class="item-right-text1 fw_500">铁道工程技术</view>
                  <view class="item-right-text2 fw_400">就业满意度：84%</view>
                </view>
                <view class="pt-17"
                  ><u-button
                    :customStyle="{
                      width: '130rpx',
                      height: '58rpx',
                      borderRadius: '40rpx',
                      background: '#F7F7F7',
                    }"
                  >
                    <text
                      class="fw_400"
                      style="color: '#051C2C'; font-size: 26rpx"
                      >查看</text
                    >
                  </u-button></view
                >
              </view>
            </view>

            <view class="hot-school-more fw_500"
              >查看完整排名<view class="more-icon"
                ><u-icon
                  name="arrow-down"
                  color="#B0B0B0"
                  height="14rpx"
                  width="26rpx"
                ></u-icon>
              </view>
            </view>
          </view>

          <view class="hot-survey-card">
            <view class="hot-survey-top">
              <view class="hot-survey-text1">21届高职毕业生</view>
              <view class="hot-survey-text2 fw_500">平均起始月薪 </view>
            </view>
            <view class="hot-survey-item">
              <view class="item-left fw_600">01</view>
              <view class="item-right">
                <view>
                  <view class="item-right-text1 fw_500">铁道机车</view>
                  <view class="item-right-text2 fw_400"
                    >起始月薪：5000元/月</view
                  >
                </view>
                <view class="pt-17"
                  ><u-button
                    :customStyle="{
                      width: '130rpx',
                      height: '58rpx',
                      borderRadius: '40rpx',
                      background: '#F7F7F7',
                    }"
                  >
                    <text
                      class="fw_400"
                      style="color: '#051C2C'; font-size: 26rpx"
                      >查看</text
                    >
                  </u-button></view
                >
              </view>
            </view>

            <view class="hot-survey-item">
              <view class="item-left fw_600">02</view>
              <view class="item-right">
                <view>
                  <view class="item-right-text1 fw_500">铁道供电技术</view>
                  <view class="item-right-text2 fw_400"
                    >起始月薪：5000元/月</view
                  >
                </view>
                <view class="pt-17"
                  ><u-button
                    :customStyle="{
                      width: '130rpx',
                      height: '58rpx',
                      borderRadius: '40rpx',
                      background: '#F7F7F7',
                      background: '#F7F7F7',
                    }"
                  >
                    <text
                      class="fw_400"
                      style="color: '#051C2C'; font-size: 26rpx"
                      >查看</text
                    >
                  </u-button></view
                >
              </view>
            </view>

            <view class="hot-survey-item">
              <view class="item-left fw_600">03</view>
              <view class="item-right">
                <view>
                  <view class="item-right-text1 fw_500">铁道工程技术</view>
                  <view class="item-right-text2 fw_400"
                    >起始月薪：5000元/月</view
                  >
                </view>
                <view class="pt-17"
                  ><u-button
                    :customStyle="{
                      width: '130rpx',
                      height: '58rpx',
                      borderRadius: '40rpx',
                      background: '#F7F7F7',
                    }"
                  >
                    <text
                      class="fw_400"
                      style="color: '#051C2C'; font-size: 26rpx"
                      >查看</text
                    >
                  </u-button></view
                >
              </view>
            </view>

            <view class="hot-school-more fw_500"
              >查看完整排名<view class="more-icon"
                ><u-icon
                  name="arrow-down"
                  color="#B0B0B0"
                  height="14rpx"
                  width="26rpx"
                ></u-icon>
              </view>
            </view>
          </view>
        </view>
      </view>

      <!-- <view class="search-list" v-if="false">
        <checkbox-group @change="changeSelect">
          <view class="search-item">
            <label for="checkbox" class="fw_400 checkbox">
              <view class="item-title">
                广州侨光职业技术学校<view class="item-tips">中职</view></view
              >

              <checkbox
                id="checkbox"
                class="input_box1"
                style="padding-top: 10rpx"
              ></checkbox>
            </label>
          </view>

          <view class="search-item">
            <label for="checkbox" class="fw_400 checkbox">
              <view class="item-title">
                广州侨光职业技术学校<view class="item-tips">中职</view></view
              >

              <checkbox
                id="checkbox"
                class="input_box1"
                style="padding-top: 10rpx"
              ></checkbox>
            </label>
          </view>
        </checkbox-group>

        <view class="bottom-btn">
          <u-button shape="circle" color="#051C2C">
            <text class="fw_500" style="color: '#fff'; font-size: 36rpx"
              >确认</text
            >
          </u-button>
        </view>
      </view> -->
    </view>
    <co-grade-picker
      :show="openGradePopup"
      @closePop="closePop"
    ></co-grade-picker>
    <co-city-picker
      title="目前在读城市"
      :show="openCityPopup"
      @closePop="closePop('openCityPopup')"
    ></co-city-picker>
    <co-home-tabbar :tabList="tabList" :currentVal="'school'"></co-home-tabbar>
  </view>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      openCityPopup: false,
      openGradePopup: false,
      currentVal: '',
      currentTab: '中职',
      placeHoelderStyle: {
        marginLeft: '48rpx',
        color: '#F7F7F7',
        fontSize: '30rpx',
        fontWeight: 400,
        fontFamily: 'PingFangSC-Regular',
      },
      btnStyle: {
        width: 'fit-content',
        height: '50rpx',
        borderRadius: '25rpx',
      },
      hotSchoolTabs: [
        {
          name: '中职',
        },
        {
          name: '高职专科',
        },
        {
          name: '高职本科',
        },
      ],
    };
  },
  methods: {
    changeSelect() {},
    selectTab(val) {
      this.currentTab = val;
    },
    selectGrade() {
      this.openGradePopup = true;
    },
    selectCity() {
      this.openCityPopup = true;
    },
    closePop() {
      console.log(11);
      this.openGradePopup = false;
    },
    closePop(item) {
      this[item] = false;
    },
    goto(url) {
      uni.navigateTo({ url });
    },
  },
  computed: {
    ...mapState(['tabList']),
  },
};
</script>

<style lang="scss" scoped>
.u-page {
  .page-container {
    position: relative;
    padding-bottom: 50rpx;
    .search-list {
      top: 298rpx;
      position: absolute;
      background: #fff;
      z-index: 999;
      width: 100%;
      border-radius: 20rpx;
      padding: 40rpx 48rpx;
      box-sizing: border-box;
      .search-item {
        margin-bottom: 50rpx;
        .checkbox {
          display: flex;
          justify-content: space-between;
        }
        .item-title {
          font-size: 36rpx;
          line-height: 50rpx;
        }
        .item-tips {
          color: #5e5e5e;
          line-height: 50rpx;
          font-size: 30rpx;
        }
      }
      .bottom-btn {
        padding-top: 36rpx;
      }
    }
  }
}
.school-container {
  padding: 0 48rpx;

  .hi {
    padding-top: 51rpx;
    font-size: 30rpx;
    line-height: 42rpx;
    color: #5e5e5e;
  }
  .tips {
    font-size: 46rpx;
    line-height: 65rpx;
    margin-top: 14rpx;
  }
  .search {
    margin-top: 51rpx;
  }
  .school-cotainer {
    margin-top: 70rpx;

    .school-text {
      font-size: 40rpx;
      line-height: 56rpx;
    }
    .school-text1 {
      color: #5e5e5e;
      font-size: 28rpx;
      line-height: 40rpx;
    }
    .school-card {
      margin-top: 50rpx;
      height: 362rpx;

      box-sizing: border-box;
      position: relative;
      .school-bg {
        background: #051c2c;
        position: absolute;
        height: 362rpx;
        width: 100%;
        border-radius: 40rpx;
        z-index: -1;
        top: 0;
        box-shadow: 0px 14rpx 16rpx 0px rgba(175, 175, 175, 0.6);
      }
      .school-card-content {
        padding: 48rpx 48rpx 50rpx 48rpx;
        .school-item {
          display: flex;
          justify-content: space-between;
          .item-text,
          .item-text1 {
            color: #ffffff;
            font-size: 30rpx;
            line-height: 42rpx;
            max-width: 8em;
            overflow: hidden;
            text-overflow: ellipsis; //超出部分以省略号显示
            white-space: nowrap;
          }
        }
      }
    }
  }

  .hot-school-container {
    margin-top: 70rpx;
    .hot-school-top {
      display: flex;
      justify-content: space-between;
      .hot-school-text {
        font-size: 40rpx;
        line-height: 56rpx;
      }
      .text_btn {
        font-size: 20rpx;
        color: #fff;
        line-height: 50rpx;
      }
    }
    .hot-carrer-card {
      margin-top: 50rpx;
      height: 800rpx;
      border-radius: 20rpx;
      box-sizing: border-box;
      box-shadow: 0px 0px 26rpx 0px rgba(196, 196, 196, 0.5);
      position: relative;
      padding: 40rpx 0 40rpx 40rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
      .hot-img {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
      }
      .hot-carrer-top {
        line-height: 65rpx;
        color: #fff;
        font-size: 46rpx;
        z-index: 2;
      }
      .hot-carrer-bottom {
        font-size: 26rpx;
        color: #fff;
        line-height: 37rpx;
        z-index: 2;
      }
    }

    .hot-survey-card {
      margin-top: 50rpx;
      height: 774rpx;
      background: #ffffff;
      box-shadow: 0px 0px 54rpx 0px rgba(196, 196, 196, 0.6);
      border-radius: 40rpx;
      padding: 40rpx;
      box-sizing: border-box;
      .hot-survey-top {
        .hot-survey-text1 {
          font-size: 28rpx;
          line-height: 40rpx;
          color: #5e5e5e;
        }
        .hot-survey-text2 {
          margin-top: 12rpx;
          font-size: 40rpx;
          line-height: 56rpx;
          color: #051c2c;
        }
      }

      .hot-survey-item {
        margin-top: 40rpx;
        display: flex;
        .item-left {
          font-size: 40rpx;
          line-height: 56rpx;
          color: #051c2c;
          margin-top: 18rpx;
        }
        .item-right {
          margin-left: 39rpx;
          flex: 1;
          display: flex;
          justify-content: space-between;
          padding-bottom: 35rpx;
          border-bottom: 2rpx solid #dadada;
          .item-right-text1 {
            color: #051c2c;
            font-size: 30rpx;
            line-height: 42rpx;
          }
          .item-right-text2 {
            font-size: 30rpx;

            color: #051c2c;
            line-height: 42rpx;
          }
        }
      }
    }
    .hot-school-more {
      margin-top: 40rpx;
      margin-left: 179rpx;
      color: #5e5e5e;
      font-size: 30rpx;
      line-height: 42rpx;
      position: relative;
      .more-icon {
        position: absolute;
        left: 190rpx;
        top: 6rpx;
      }
    }
    .hot-school-card {
      margin-top: 50rpx;
      height: 784rpx;
      background-color: #fff;
      box-shadow: 0px 0px 54rpx 0px rgba(196, 196, 196, 0.6);
      border-radius: 40rpx;
      box-sizing: border-box;

      .hot-school-tab {
        height: 83.3rpx;
        border-radius: 40rpx 40rpx 0 0;
        display: flex;
        justify-content: space-between;
        overflow: hidden;
        .active {
          background-color: #fff;
          transition: 0.5s;
        }
        .noActive {
          background-color: #f7f7f7;
          color: #5e5e5e;
          transition: 0.5s;
        }

        .tab-item {
          text-align: center;
          flex-grow: 1;

          .tabs-text {
            line-height: 83.3rpx;
            color: #051c2c;
            font-size: 28rpx;
            position: relative;
            .tab-line {
              position: absolute;
              bottom: -14rpx;
              width: 100%;
              height: 4rpx;
              left: 0;
              background-color: #051c2c;
            }
          }
        }
      }

      .hot-school-list {
        padding: 33rpx 40rpx 40rpx 40rpx;
        .hot-school-item {
          margin-top: 40rpx;
          display: flex;

          .hot-school-right {
            margin-left: 30rpx;
            display: flex;
            justify-content: space-between;
            flex: 1;
            padding-bottom: 48rpx;
            border-bottom: 2rpx solid #dadada;
            .hot-school-text {
              padding-top: 8rpx;
              color: #2a2833;
              font-size: 30rpx;
              width: 276rpx;
            }
          }
        }
      }
    }
  }
}
.pop-up {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 100vh;
  z-index: 9998;
  background-color: rgba($color: #000000, $alpha: 0.4);
}
.mt-50 {
  margin-top: 50rpx;
}

.pt-21 {
  padding-top: 21rpx;
}
.pt-17 {
  padding-top: 17rpx;
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
