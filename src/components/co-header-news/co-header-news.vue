<template>
  <u-navbar
    :border="false"
    :autoBack="autoBack"
    :title="title"
    :titleStyle="titleStyle"
    :leftIconSize="leftIconSize"
    placeholder="true"
    titleWidth="310rpx"
  ></u-navbar>
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
        fontFamily: 'PingFangSC-Medium',
      },
    },

    leftIconSize: {
      type: String,
      default: '55rpx',
    },
    autoBack: {
      type: Boolean,
      default: true,
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
