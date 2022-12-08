<template>
  <u-popup
    :show="show"
    :round="20"
    mode="bottom"
    :closeOnClickOverlay="true"
    @close="close"
    :safeAreaInsetBottom="false"
    :zIndex="zIndex"
  >
    <view class="grade_picker pop-wrapper">
      <view class="grade_text">
        <view class="text-left">
          <view class="back_icon"
            ><u-icon name="arrow-left" color="#28282E" size="40"></u-icon
          ></view>
          <view class="fw_500 grade_font">{{ title }}</view>
        </view>
        <view>
          <view class="fw_400 reset">重置</view>
        </view>
      </view>
      <view class="grade_area">
        <checkbox-group @change="changeSelect">
          <view class="grade_item" v-for="item in checkList" :key="item.value">
            <label for="checkbox" class="fw_400 grade_checkbox"
              >{{ item.label
              }}<checkbox
                id="checkbox"
                class="input_box"
                :checked="item.isChecked"
                :value="item.value"
            /></label>
          </view>
        </checkbox-group>
      </view>
      <view class="bottom_btn">
        <co-bottom-btn
          :fixed="false"
          text="确认"
          :btnStyle="{
            color: '#fff',
            borderRadius: '40rpx',
            backGround: '#051C2C',
          }"
        ></co-bottom-btn>
      </view>
    </view>
  </u-popup>
</template>

<script>
export default {
  data() {
    return {
      currentSelect: [],
    };
  },
  methods: {
    close() {
      this.$emit('closePop');
    },
    changeSelect(e) {
      if (!this.isMutileple) {
        const checkList = this.checkList.map((item) => {
          if (item.value === e.target.value[e.detail.value.length - 1]) {
            this.$set(item, 'isChecked', true);
            this.currentSelect = [item.value];
            return item;
          }
          const idx = this.currentSelect.findIndex(
            (itm) => itm.value === item.value,
          );
          this.currentSelect.splice(idx, 1);
          this.$set(item, 'isChecked', false);
          return item;
        });
        this.$emit('changeSelect', checkList);
      } else {
        if (e.target.value[e.detail.value.length - 1] === '不限') {
          const checkList = this.checkList.map((item) => {
            if (item.value === '不限') {
              this.$set(item, 'isChecked', true);
              return item;
            }
            this.$set(item, 'isChecked', false);
            return item;
          });

          this.$emit('changeSelect', checkList);
        }

        if (e.target.value[e.detail.value.length - 1] !== '不限') {
          const checkList = this.checkList.map((item) => {
            if (item.value === '不限') {
              this.$set(item, 'isChecked', false);
              return item;
            }
            if (item.value === e.target.value[e.detail.value.length - 1]) {
              this.$set(item, 'isChecked', true);
              return item;
            }
            return item;
          });
          this.$emit('changeSelect', checkList);
        }
      }
    },
  },
  props: {
    title: {
      type: String,
      default: '目前年级',
    },
    checkList: {
      type: Array,
      default: [
        {
          value: '不限',
          label: '不限',
          isChecked: false,
        },
        {
          value: '初三学生/初中毕业生',
          label: '初三学生/初中毕业生',
          isChecked: false,
        },
        {
          value: '中职学生/中职毕业生',
          label: '中职学生/中职毕业生',
          isChecked: false,
        },
        {
          value: '高职专科学生/高职专科毕业生',
          label: '高职专科学生/高职专科毕业生',
          isChecked: false,
        },
        {
          value: '高职本科学生/高职本科毕业生',
          label: '高职本科学生/高职本科毕业生',
          isChecked: false,
        },
      ],
    },
    isMutileple: {
      type: Boolean,
      default: false,
    },
    zIndex: {
      type: String,
      default: '10075',
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.grade_picker {
  width: 100%;

  box-sizing: border-box;
  background-color: #fff;

  .grade_text {
    height: 140rpx;
    display: flex;
    justify-content: space-between;
    .text-left {
      display: flex;
    }
    .back_icon {
      padding-top: 53rpx;
      padding-left: 50rpx;
    }
    .grade_font {
      padding-top: 44rpx;
      font-size: 40rpx;
      line-height: 56rpx;
      margin-left: 12rpx;
    }
    .reset {
      font-size: 30rpx;
      color: #0075b1;
      line-height: 42rpx;
      padding-top: 51rpx;

      padding-right: 56rpx;
    }
  }
  .grade_area {
    padding: 50rpx 50rpx 70rpx 50rpx;
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
    padding-bottom: 60rpx;
    padding-left: 50rpx;

    padding-right: 50rpx;
  }
}
</style>
