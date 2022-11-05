<template>
  <u-popup
    :show="show"
    :round="20"
    mode="bottom"
    :closeOnClickOverlay="true"
    @close="close"
    ><view class="grade_picker">
      <view class="grade_text">
        <view class="back_icon"
          ><u-icon name="arrow-left" color="#28282E" size="40"></u-icon
        ></view>
        <view class="fw_500 grade_font">目前年级</view>
        <view class="fw_400 reset">重置</view>
      </view>
      <view class="grade_area">
        <checkbox-group @change="changeSelect">
          <view class="grade_item">
            <label for="checkbox" class="fw_400 grade_checkbox"
              >不限<checkbox id="checkbox" class="input_box"
            /></label>
          </view>

          <view class="grade_item">
            <label for="checkbox" class="fw_400 grade_checkbox"
              >初三学生/初中毕业生<checkbox id="checkbox" class="input_box"
            /></label>
          </view>
          <view class="grade_item">
            <label for="checkbox" class="fw_400 grade_checkbox"
              >中职学生/中职毕业生<checkbox id="checkbox" class="input_box"
            /></label>
          </view>
          <view class="grade_item">
            <label for="checkbox" class="fw_400 grade_checkbox"
              >高职专科学生/高职专科毕业生<checkbox
                id="checkbox"
                class="input_box"
            /></label>
          </view>
          <view class="grade_item">
            <label for="checkbox" class="fw_400 grade_checkbox"
              >高职专科学生/高职专科毕业生<checkbox
                id="checkbox"
                class="input_box"
            /></label>
          </view>
          <view class="grade_item">
            <label for="checkbox" class="fw_400 grade_checkbox"
              >高职专科学生/高职专科毕业生<checkbox
                id="checkbox"
                class="input_box"
            /></label>
          </view>
          <view class="grade_item">
            <label for="checkbox" class="fw_400 grade_checkbox"
              >高职专科学生/高职专科毕业生<checkbox
                id="checkbox"
                class="input_box"
            /></label>
          </view>
        </checkbox-group>
      </view>
      <view class="bottom_btn">
        <u-button shape="circle" color="#051C2C">
          <text class="fw_500" style="color: '#fff'; font-size: 36rpx"
            >确认</text
          >
        </u-button>
      </view>
    </view>
  </u-popup>
</template>

<script>
import { eventBus, openGradePopup } from '../../utils/eventBus';
export default {
  data() {
    return {
      show: false,
      checkList: [
        {
          value: 'any',
          label: '不限',
        },
      ],
    };
  },
  methods: {
    close() {
      this.show = false;
    },
    changeSelect(value) {},
  },
  mounted() {
    eventBus.$on(openGradePopup, () => {
      this.show = true;
    });
  },
};
</script>

<style lang="scss" scoped>
.grade_picker {
  width: 100%;
  height: 936rpx;
  box-sizing: bor;
  background-color: #fff;
  border-radius: 30rpx 30rpx 0 0;
  .grade_text {
    height: 140rpx;
    display: flex;
    .back_icon {
      padding-top: 53rpx;
      padding-left: 50rpx;
    }
    .grade_font {
      padding-top: 44rpx;
      font-size: 40rpx;
      line-height: 56rpx;
      padding-left: 12rpx;
    }
    .reset {
      font-size: 30rpx;
      color: #0075b1;
      line-height: 42rpx;
      padding-top: 51rpx;
      padding-left: 374rpx;
    }
  }
  .grade_area {
    height: 620rpx;
    padding: 50rpx 60rpx 70rpx 60rpx;
    box-sizing: border-box;
    overflow: scroll;
    border-bottom: 1px #dadada solid;
    .grade_item:nth-of-type(1) {
      margin: 0;
    }

    .grade_item {
      margin-top: 60rpx;
      .grade_checkbox {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .bottom_btn {
    padding-top: 60rpx;
    width: 650rpx;
    height: 80rpx;
    padding-left: 50rpx;
  }
}
</style>
