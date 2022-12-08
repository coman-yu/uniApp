<template>
  <u-popup
    :show="show"
    :round="20"
    mode="bottom"
    :closeOnClickOverlay="true"
    @close="close"
  >
    <view class="city_picker pop-wrapper">
      <view class="city_text">
        <view class="left-text">
          <view class="back_icon"
            ><u-icon name="arrow-left" color="#28282E" size="40"></u-icon
          ></view>
          <view class="fw_500 city_font">{{ title }}</view>
        </view>
        <view class="fw_400 reset">重置</view>
      </view>
      <view class="city_area">
        <view class="city_left">
          <view>
            <view v-for="(item, index) in mock" :key="index"
              ><view class="city_item">{{ item.label }}</view>
            </view>
          </view>
        </view>
        <view class="city_right">
          <view>
            <view class="city_item">
              <view class="item_box fw_500 fs_36 item_box_active">
                <view class="image-icon">
                <u--image
                    src="/static/check1.png"
                    width="40rpx"
                    height="40rpx"
                  ></u--image
                ></view><view class="fw_500">中国</view></view></view>
            </view>

            <view class="city_item">
              <view class="item_box fw_500 fs_36">中国</view>
            </view>
            <view class="city_item">
              <view class="item_box fw_500 fs_36">中国</view>
            </view>
          </view>
        </view>
      </view>
      <view class="bottom-btn" v-if="isMultiple">
        <co-bottom-btn
          :fixed="false"
          text="确定"
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
  props: {
    columns: {
      type: Array,
      default: [
        ['中国', '美国'],
        ['深圳', '厦门', '上海', '拉萨'],
      ],
    },
    isMultiple: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '所在城市',
    },
    show: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      columnData: [
        ['深圳', '厦门', '上海', '拉萨'],
        ['得州', '华盛顿', '纽约', '阿拉斯加'],
      ],
      mock: [
        {
          label: '热点城市11111111111',
        },
        {
          label: '上海',
        },
      ],
    };
  },
  methods: {
    handleChange(e) {
      const { index, columnIndex, picker = this.$refs.uPicker } = e;
      if (columnIndex === 0) {
        // picker为选择器this实例，变化第二列对应的选项
        picker.setColumnValues(1, this.columnData[index]);
      }
    },
    close() {
      this.$emit('closePop');
    },
    confirm() {},
  },
};
</script>

<style lang="scss" scoped>
.city_picker {
  padding-bottom: 50rpx;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  .city_text {
    height: 140rpx;
    display: flex;
    justify-content: space-between;
    padding-right: 56rpx;
    .left-text {
      display: flex;
    }
    .back_icon {
      padding-top: 53rpx;
      padding-left: 30rpx;
    }
    .city_font {
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
    }
  }
  .city_area {
    background-color: #fff;

    display: flex;
    .city_left {

      background: #f5f5f5;
      .city_item:nth-of-type(1) {
        border-top: #f5f5f5 1px solid;
      }
      .city_item {
        max-width: 300rpx;
        height: 98rpx;
        text-align: center;
        line-height: 98rpx;
        font-size: 36rpx;
        color: #636363;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .city_item_active {
        background-color: #fff;
        color: #051c2c;
      }
    }
    .city_right {
      width: 100%;
      padding-top: 10rpx;
      .city_item {
        padding: 10rpx 0 16rpx 77rpx;
        height: 98rpx;
        box-sizing: border-box;

        .item_box {
          text-align: center;
          line-height: 72rpx;
          border: #979797 1px solid;
          border-radius: 35rpx;
          height: 72rpx;
          width: 348rpx;

        }
        .item_box_active {
          background: #051c2c;
          color: #fff;
          display: flex;
          align-content: center;

        }
      }
    }
  }
}
.bottom-btn {
  padding: 50rpx 40rpx 0rpx 40rpx;
}
.image-icon {
  margin:10rpx 55rpx 0 44rpx;
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
