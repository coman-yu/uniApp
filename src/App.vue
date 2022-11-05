<script>
export default {
  onLaunch: function () {
    uni.loadFontFace({
      global: true,
      family: 'PingFangSC-regular',
      source:
        'url("https://img2.misssixty.com.cn/rs/lib/fonts/PingFangSC-regular.ttf")',
      success() {
        console.log('first');
      },
    });
  },
  onShow: function () {
    uni.hideTabBar();
  },
  onHide: function () {
    console.log('App Hide');
  },
  globalData: {
    //全局数据管理
    navBarHeight: 0, // 导航栏高度
    menuBotton: 0, // 胶囊距底部间距（保持底部间距一致）
    menuRight: 0, // 胶囊距右方间距（方保持左、右间距一致）
    menuHeight: 0, // 胶囊高度（自定义内容可与胶囊高度保证一致）
  },
};
</script>

<style lang="scss">
@import 'uview-ui/index.scss';
@import './common/common.scss';
checkbox.input_box .wx-checkbox-input {
  width: 40rpx;
  height: 40rpx;
  border: 2px #051c2c solid;
  background-color: #fff;
  border-radius: 40rpx;
}
checkbox.input_box .wx-checkbox-input-checked::before {
  content: '';
  width: 30rpx;
  height: 30rpx;
  background: #051c2c;
  position: absolute;
  border-radius: 30rpx;
  border: 1px solid #051c2c;
}
/* global setting style */
.u-page {
  font-family: 'PingFangSC-regular';
  color: '#051C2C';
}
</style>
