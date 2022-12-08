<template>
  <view class="u-page">
    <co-header-news :title="'专业列表'"></co-header-news>
    <co-header-search>
      <view class="icon">
        <u-button
          :customStyle="gradeFocus ? activeStyle : noActiveStyle"
          type="primary"
          shape="circle"
          :plain="true"
          color="#051C2C"
          @click="open('level')"
          ><text
            :class="gradeFocus ? 'button_text_active' : 'button_text'"
            style="margin-right: 10rpx; font-size: 30rpx"
            >教育层次</text
          ><u-icon
            name="arrow-down-fill"
            size="20"
            class="icon"
            :color="gradeFocus ? '#ffffff' : '#C2C2C2'"
          ></u-icon>
        </u-button>
        <u-button
          :customStyle="cityFocus ? activeStyle : noActiveStyle"
          type="primary"
          shape="circle"
          :plain="true"
          color="#051C2C"
          @click="open('time')"
          ><text
            :class="cityFocus ? 'button_text_active' : 'button_text'"
            style="margin-right: 10rpx; font-size: 30rpx"
            >专业类目</text
          ><u-icon
            name="arrow-down-fill"
            size="20"
            class="icon"
            :color="cityFocus ? '#ffffff' : '#C2C2C2'"
          ></u-icon
        ></u-button>
      </view>
      <view class="button_right"
        ><u--image
          src="/static/ask.png"
          width="40rpx"
          height="40rpx"
          radius="50%"
          @click="filterClick('showExplain')"
        ></u--image
      ></view>
    </co-header-search>
    <scroll-view :scroll-y="true" class="container">
      <view class="list">
        <view class="list-item">
          <view class="list-tag fw_400">中职</view>
          <view class="list-title fw_500"> 循环农业余再生资源利用 </view>
          <view class="list-content fw_400 line_break3"
            >面向农业经理人等职业，家庭农场创建、生产管理、农资管理、产品销售、财务核算等岗位(群)。</view
          >
          <view class="list-bottom">
            <view class="list-bottom-text fw_400">城乡规划与管理类</view>
            <view class="icon-wrapper">
              <view class="mr-30">
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
                ></u-icon></u-button
            ></view>
          </view>
        </view>

        <view class="list-item">
          <view class="list-tag fw_400">中职</view>
          <view class="list-title fw_500"> 循环农业余再生资源利用 </view>
          <view class="list-content fw_400 line_break3"
            >面向农业经理人等职业，家庭农场创建、生产管理、农资管理、产品销售、财务核算等岗位(群)。</view
          >
          <view class="list-bottom">
            <view class="list-bottom-text fw_400">城乡规划与管理类</view>
            <view class="icon-wrapper">
              <view class="mr-30">
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
                ></u-icon></u-button
            ></view>
          </view>
        </view>

        <view class="list-item">
          <view class="list-tag fw_400">大学生</view>
          <view class="list-title fw_500"> 循环农业余再生资源利用 </view>
          <view class="list-content fw_400 line_break3"
            >面向农业经理人等职业，家庭农场创建、生产管理、农资管理、产品销售、财务核算等岗位(群)。</view
          >
          <view class="list-bottom">
            <view class="list-bottom-text fw_400">城乡规划与管理类</view>
            <view class="icon-wrapper">
              <view class="mr-30">
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
                ></u-icon></u-button
            ></view>
          </view>
        </view>
      </view>
    </scroll-view>
    <view class="bottom-btn"
      ><co-bottom-btn
        :fixed="false"
        @click.native="backToSchool"
        text="返回学校主页"
        :btnStyle="{
          color: '#fff',
          borderRadius: '40rpx',
          backGround: '#051C2C',
        }"
      ></co-bottom-btn
    ></view>
    <co-grade-picker
      :checkList="list"
      @closePop="closePop('level')"
      :show="level"
      title="专业教育层次"
    ></co-grade-picker>
    <co-city-picker
      title="专业类目"
      :show="time"
      @closePop="closePop('time')"
      :isMultiple="true"
    ></co-city-picker>
  </view>
</template>
<script>
export default {
  data() {
    return {
      level: false,
      time: false,
      list: [
        {
          value: '不限',
          label: '不限',
          isChecked: false,
        },
        {
          value: '中等职业教育',
          label: '中等职业教育',
          isChecked: false,
        },
        {
          value: '高等职业专科教育',
          label: '高等职业专科教育',
          isChecked: false,
        },
        {
          value: '高等职业本科教育',
          label: '高等职业本科教育',
          isChecked: false,
        },
      ],
      noActiveStyle: {
        width: 'fit-content',
        height: '60rpx',
        margin: 0,
        marginRight: '40rpx',
      },
      activeStyle: {
        width: 'fit-content',
        height: '60rpx',
        margin: 0,
        marginRight: '40rpx',
        color: '#ffffff',
        background: '#051c2c',
      },
      btnStyle: {
        margin: 0,
        padding: 0,
        outline: 'none',
        borderRadius: 0,
        backgroundColor: 'transparent',
        lineHeight: 'inherit',
        width: 'max-content',
        height: 'fit-content',

        borderWidth: 0,
      },
    };
  },
  methods: {
    backToSchool() {
      uni.navigateTo('/pages/school/index');
    },
    open(item) {
      this[item] = true;
    },
    closePop(item) {
      this[item] = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.icon {
  display: flex;
}
.button_right {
  padding-top: 10rpx;
  font-size: 30rpx;
  padding-left: 10rpx;
}
.container {
  background: #f5f5f5;
  padding: 0 40rpx 40rpx 40rpx;
  box-sizing: border-box;
  .list {
    margin-top: 40rpx;
    &-item {
      width: 670rpx;
      height: 394rpx;
      background-color: #fff;
      border-radius: 20rpx;
      padding: 40rpx 30rpx;
      box-sizing: border-box;
      margin-bottom: 60rpx;
      position: relative;
      .list-tag {
        width: fit-content;
        height: 51rpx;
        background-color: #000;
        border-radius: 0 20rpx 0 20rpx;
        position: absolute;
        top: 0;
        right: 0;
        padding: 0 26rpx;
        line-height: 51rpx;
        color: #fff;
        font-size: 24rpx;
      }
      .list-title {
        font-size: 36rpx;
        line-height: 50rpx;
      }
      .list-content {
        font-size: 30rpx;
        line-height: 48rpx;
        margin-top: 30rpx;
        color: #434343;
      }
      .list-bottom {
        margin-top: 40rpx;
        display: flex;
        justify-content: space-between;
        &-text {
          color: #434343;
          font-size: 30rpx;
          line-height: 42rpx;
          margin-top: 8rpx;
        }
        .icon-wrapper {
          margin-right: 10rpx;
          display: flex;
        }
      }
    }
  }
}
.mr-30 {
  margin-right: 30rpx;
}
.bottom-btn {
  padding: 0 40rpx 40rpx 40rpx;
}
</style>
