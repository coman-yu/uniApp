<template>
  <view class="header_container">
    <view class="header_wrapper">
      <u-navbar
        :border="false"
        :autoBack="true"
        :title="title"
        :titleStyle="titleStyle"
        :leftIconSize="'55rpx'"
      ></u-navbar>
    </view>
  </view>
</template>

<script>
const systemInfo = uni.getSystemInfoSync();
name: 'headerNews';
export default {
  data() {
    return {
      statusBarHeight: systemInfo.statusBarHeight + 44,
      noActiveStyle: {
        width: '170rpx',
        height: '50rpx',
        margin: 0,
        marginRight: '50rpx',
      },
      activeStyle: {
        width: '170rpx',
        height: '50rpx',
        margin: 0,
        marginRight: '50rpx',
        fontColor: '#ffffff',
        background: '#051c2c',
      },
      suggestionFocus: true,
      gradeFocus: false,
      cityFocus: false,
    };
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    titleStyle: {
      type: Object,
      default: {
        fontSize: '34rpx',
        fontWeight: 500,
      },
    },
  },
  computed: {},
  methods: {
    getNews(itemName) {
      if (itemName === 'suggestion') {
        this.suggestionFocus = true;
      }
      if (itemName === 'newest') {
        this.suggestionFocus = false;
      }
    },
    gradeClick() {
      this.gradeFocus = true;
    },
    cityClick() {
      this.cityFocus = true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
