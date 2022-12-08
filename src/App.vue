<script>
const baseUrl = 'http://1.12.244.170';
export default {
  onLaunch: function () {
    uni.loadFontFace({
      global: true,
      family: 'PingFangSC-Regular',
      source: `url(${baseUrl}/font/typeface/PingFangSC-Regular.ttf)`,
      success() {
        console.log('Regular');
      },
    });
    uni.loadFontFace({
      global: true,
      family: 'PingFangSC-Medium',
      source: `url(${baseUrl}/font/typeface/PingFangSC-Medium.ttf)`,
      success() {
        console.log('Medium');
      },
    });
    uni.loadFontFace({
      global: true,
      family: 'PingFangSC-Semibold',
      source: `url(${baseUrl}/font/typeface/PingFangSC-Semibold.ttf)`,
      success() {
        console.log('Semibold');
      },
    });
  },
  onShow: function () {
    uni.hideTabBar();
    // uni.showModal({
    //   title: '获取信息',
    //   content: '是否授权',
    //   success: () => {
    //     uni.getUserProfile({
    //       desc: '获取你的昵称、头像、地区及性别', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    //       success: (res) => {
    //         console.log(res);
    //       },
    //     });
    //   },
    // });
  },

  onHide: function () {},
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
  border: 1rpx solid #051c2c;
  background-color: #fff;
  border-radius: 50%;
}
checkbox.input_box .wx-checkbox-input-checked::before {
  content: '';
  top: 20rpx;
  left: 20rpx;
  width: 35rpx;
  height: 35rpx;
  background: #051c2c;
  position: absolute;
  border-radius: 50%;
  border: 1rpx solid #051c2c;
  transition: 2s;
}

checkbox.input_box1 .wx-checkbox-input {
  width: 30rpx;
  height: 30rpx;
  border: 1rpx #051c2c solid;
  background-color: #fff;
  border-radius: 50%;
}
checkbox.input_box1 .wx-checkbox-input-checked::before {
  content: '';
  top: 15rpx;
  left: 15rpx;
  width: 25rpx;
  height: 25rpx;
  background: #051c2c;
  position: absolute;
  border-radius: 50%;
  border: 1rpx solid #051c2c;
}
/* global setting style */
.u-page {
  font-family: PingFangSC-Regular;
  color: #051c2c;
}
</style>
