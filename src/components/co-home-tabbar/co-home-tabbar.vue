<template>
  <view class="wrapper">
    <u-tabbar
      :value="currentVal"
      activeColor="#051C2C"
      inactiveColor="#7B7B7B"
      :border="false"
      :fixed="true"
      :customStyle="{
        height: '98rpx',
        padding: '8rpx 48.5rpx 20rpx 48.5rpx',
      }"
    >
      <u-tabbar-item
        v-for="item in tabList"
        :key="item.name"
        :text="item.text"
        @click="navigationTo(item)"
        :name="item.name"
      >
        <image
          class="u-page__item__slot-icon icon_layout"
          slot="active-icon"
          :src="item.activeIcon"
        >
        </image>
        <image
          class="u-page__item__slot-icon icon_layout"
          slot="inactive-icon"
          :src="item.inactiveIcon"
        >
        </image>
      </u-tabbar-item>
    </u-tabbar>
  </view>
</template>

<script>
const systemInfo = uni.getSystemInfoSync();
export default {
  tyleIsolation: 'shared',
  data() {
    return {
      statusBarHeight: systemInfo.statusBarHeight,
    };
  },
  methods: {
    navigationTo(item) {
      console.log(item.pagePath);
      uni.switchTab({ url: item.pagePath });
    },
  },
  props: {
    tabList: {
      default: [],
      type: Array,
    },
    currentVal: {
      default: 'index',
      type: String,
    },
  },
};
</script>
<style lang="scss" scope>
.icon_layout {
  width: 48rpx;
  height: 48rpx;
  padding-bottom: 10rpx;
}

::v-deep .u-tabbar-item {
  .u-tabbar-item__text {
    font-size: 20rpx;
  }
}
</style>
<style lang="scss">
::v-deep .u-tabbar-item__text {
  font-size: 20rpx;
}
</style>
