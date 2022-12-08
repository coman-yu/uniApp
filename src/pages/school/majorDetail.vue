<template>
  <view class="u-page">
    <co-header-news :title="'专业详情'"></co-header-news>
    <view class="main-container">
      <view class="main-wrapper">
        <view class="header">
          <view class="title fw_500">家庭农场生产经营</view>
          <view class="tag fw_400">中职</view>
        </view>
        <view class="level">
          <view class="fw_500">教育层次：</view>
          <view class="fw_400">中等职业教育</view>
        </view>
        <view class="level-2"
          ><view class="fw_500" @click="open('time')">基本修业年限：</view>
          <view class="fw_400">三年</view></view
        >
        <view class="level-3">
          <view class="title">
            <view class="title-icon"></view>
            <view class="title-text fw_500">职业面向</view>
          </view>
          <view class="text fw_400"
            >面向农业经理人等职业，家庭农场创建、生产管理、农资管理、产品销售、财务核算等岗位(群)。</view
          >
        </view>
        <view class="level-4">
          <view class="title">
            <view class="title-icon"></view>
            <view class="title-text fw_500">培养目标定位</view>
          </view>
          <view class="text fw_400"
            >本专业培养德智体美劳全面发展，掌握扎实的科学文化基础和现代农业概论、农业生物技术、会计基础等知识，具备家庭农场生产经营项目选择、农业机械设备操作、农场运营等能力，具有工匠精神和信息素养，能够从家庭农场创建、畜禽生产、作物生产、农资采购与使用、农业机械作业、农产品及农资营销、财务核算等工作的技术技能人才。</view
          >
        </view>

        <view class="level-5">
          <view class="title">
            <view class="title-icon"></view>
            <view class="title-text fw_500">主要专业能力要求</view>
          </view>
          <view class="text fw_400"></view>
          <view
            >1、具有准确理解“三农”政策和法律法规，并为农场生产经营服务的能力；</view
          >
          <view>2、具有农产品市场调研和经济数据分析应用的能力；</view>
          <view>3、具有家庭农场经营项目选择、农业生产运行管理的能力；</view>
          <view
            >4、具有作物栽培与病虫害绿色防治、畜禽养殖与疫病防治的能力；</view
          >
          <view
            >5、具有农资采购与使用、农产品线上线下销售、成本与收益核算的能力;</view
          >
          <view>6、具有绿色生产、环境保护、安全防护的能力;</view>
          <view
            >7、具有适应农业数字化发展需求的数字农业生产、智慧农牧场运行、智能农机作业的能力；</view
          >
          <view> 8、具有终身学习和可持续发展的能力。</view>
        </view>
        <view class="level-6">
          <view class="title">
            <view class="title-icon"></view>
            <view class="title-text fw_500">主要专业课程与实习实训</view>
          </view>
          <view class="text fw_400">
            <view class="fw_500">专业基础课程:</view>
            <view class="fw_400">现代农业概论、农业生物技</view></view
          >
        </view>

        <view class="level-7">
          <view class="title">
            <view class="title-icon"></view>
            <view class="title-text fw_500">职业类证书举例</view>
          </view>
          <view class="text fw_400"
            >职业技能等级证书:家庭农场粮食生产经营、家庭农场畜禽养殖。</view
          >
        </view>

        <view class="level-8">
          <view class="title">
            <view class="title-icon"></view>
            <view class="title-text fw_500">接续专业举例</view>
          </view>
          <view class="text-non-border fw_400"
            >职业技能等级证书:家庭农场粮食生产经营、家庭农场畜禽养殖。</view
          >
        </view>
      </view>

      <view class="bottom_btn"
        ><view class="first_btn"
          ><u-button
            shape="circle"
            :customStyle="btnStyle"
            :plain="true"
            color="#051C2C"
            @click="pageBack"
          >
            <u-icon name="arrow-leftward" color="#051C2C" size="40"></u-icon>
            <text
              class="fw_500"
              style="color: '#051C2C'; font-size: '36rpx'; margin-left: 5rpx"
              >返回</text
            >
          </u-button></view
        ><view class="first_btn"
          ><u-button
            shape="circle"
            :customStyle="activeBtnStyle"
            :plain="true"
            color="#051C2C"
          >
            <u-icon name="bookmark" color="#ffffff" size="40"></u-icon>
            <text class="fw_500" style="font-size: '36rpx'; margin-left: 5rpx"
              >收藏</text
            >
          </u-button></view
        ><view class="first_btn"
          ><u-button
            shape="circle"
            :customStyle="btnStyle"
            :plain="true"
            color="#051C2C"
            openType="share"
          >
            <u-icon name="share-square" color="#051C2C" size="40"></u-icon>
            <text class="fw_500" style="color: '#051C2C'; font-size: '36rpx'"
              >分享</text
            >
          </u-button></view
        ></view
      >
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      btnStyle: {
        width: '188rpx',
        height: '80rpx',
      },
      activeBtnStyle: {
        width: '188rpx',
        height: '80rpx',
        color: '#ffffff',
        background: '#051c2c',
      },
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.main-container {
  padding: 50rpx 40rpx;
  .main-wrapper {
    background-color: #fff;
    .header {
      display: flex;
      .title {
        font-size: 50rpx;
        line-height: 70rpx;
      }
      .tag {
        padding: 0 26rpx;
        border-radius: 0 20rpx 0 20rpx;
        height: 50rpx;
        line-height: 50rpx;
        font-size: 24rpx;
        margin-left: 30rpx;
        width: fit-content;
        background-color: #051c2c;
        color: #fff;
        margin-top: 10rpx;
      }
    }

    .level {
      margin-top: 50rpx;
      font-size: 30rpx;
      line-height: 50rpx;
      display: flex;
    }
    .level-2 {
      margin-top: 40rpx;
      font-size: 30rpx;
      line-height: 50rpx;
      display: flex;
    }
    .level-3 {
      margin-top: 60rpx;
    }
    .level-4,
    .level-5,
    .level-6,
    .level-7,
    .level-8 {
      margin-top: 40rpx;
    }
  }
}
.title {
  display: flex;
  .title-icon {
    width: 6rpx;
    height: 32rpx;
    background-color: #051c2c;
    border-radius: 3rpx;
    margin-top: 9rpx;
  }
  .title-text {
    font-size: 40rpx;
    line-height: 50rpx;
    margin-left: 9rpx;
  }
}
.text {
  padding: 40rpx 0;
  font-size: 30rpx;
  line-height: 50rpx;
  border-bottom: 4rpx solid #f5f5f5;
}
.text-non-border {
  padding: 40rpx 0;
  font-size: 30rpx;
  line-height: 50rpx;
}

.bottom_btn {
  padding-top: 30rpx;
  display: flex;
  justify-content: space-between;
}
</style>
