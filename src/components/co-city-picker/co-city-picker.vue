<template>
  <u-popup
    :show="show"
    :round="20"
    mode="bottom"
    :closeOnClickOverlay="true"
    @close="close"
  >
    <view class="city_picker">
      <view class="city_text">
        <view class="back_icon"
          ><u-icon name="arrow-left" color="#28282E" size="40"></u-icon
        ></view>
        <view class="fw_500 city_font">所在城市</view>
        <view class="fw_400 reset">重置</view>
      </view>
      <view class="city_area">
        <view class="city_left">
          <u-list height="960rpx">
            <u-list-item v-for="(item, index) in mock" :key="index"
              ><view class="city_item">{{ item.label }}</view>
            </u-list-item>
          </u-list>
        </view>
        <view class="city_right">
          <u-list height="960rpx">
            <view class="city_item">
              <view class="item_box fw_500 fs_36 item_box_active">中国</view>
            </view>

            <view class="city_item">
              <view class="item_box fw_500 fs_36">中国</view>
            </view>

            <view class="city_item">
              <view class="item_box fw_500 fs_36">中国</view>
            </view>
            <view class="city_item">
              <view class="item_box fw_500 fs_36">中国</view>
            </view>
            <view class="city_item">
              <view class="item_box fw_500 fs_36">中国</view>
            </view>

            <view class="city_item">
              <view class="item_box fw_500 fs_36">中国</view>
            </view>

            <view class="city_item">
              <view class="item_box fw_500 fs_36">中国</view>
            </view>
            <view class="city_item">
              <view class="item_box fw_500 fs_36">中国</view>
            </view>
            <view class="city_item">
              <view class="item_box fw_500 fs_36">中国</view>
            </view>

            <view class="city_item">
              <view class="item_box fw_500 fs_36">中国</view>
            </view>

            <view class="city_item">
              <view class="item_box fw_500 fs_36">中国</view>
            </view>
            <view class="city_item">
              <view class="item_box fw_500 fs_36">中国</view>
            </view>
            <view class="city_item">
              <view class="item_box fw_500 fs_36">中国</view>
            </view>

            <view class="city_item">
              <view class="item_box fw_500 fs_36">中国</view>
            </view>

            <view class="city_item">
              <view class="item_box fw_500 fs_36">中国</view>
            </view>
            <view class="city_item">
              <view class="item_box fw_500 fs_36">kkk</view>
            </view>
            <view class="city_item">
              <view class="item_box fw_500 fs_36">中国</view>
            </view>
          </u-list>
        </view>
      </view>
    </view>
  </u-popup>
</template>

<script>
import { eventBus, openCityPopup } from '../../utils/eventBus';
export default {
  props: {
    columns: {
      type: Array,
      default: [
        ['中国', '美国'],
        ['深圳', '厦门', '上海', '拉萨'],
      ],
    },
  },
  data() {
    return {
      show: false,
      columnData: [
        ['深圳', '厦门', '上海', '拉萨'],
        ['得州', '华盛顿', '纽约', '阿拉斯加'],
      ],
      mock: [
        {
          label: '热点城市',
        },
        {
          label: '热恶魔',
        },
        {
          label: '热恶魔',
        },
        {
          label: '热恶魔',
        },
        {
          label: '热恶魔',
        },
        {
          label: '热恶魔',
        },
        {
          label: '热恶魔',
        },
        {
          label: '热恶魔',
        },
        {
          label: '热恶魔',
        },
        {
          label: '热恶魔',
        },
        {
          label: '热恶魔',
        },
        {
          label: '热恶魔',
        },
        {
          label: '热恶魔',
        },
        {
          label: '热恶魔',
        },
        {
          label: '热恶魔',
        },
        {
          label: '热恶魔',
        },

        {
          label: '热恶魔',
        },
        {
          label: 'fuck',
        },
      ],
    };
  },
  methods: {
    handleChange(e) {
      const { index, columnIndex, picker = this.$refs.uPicker } = e;
      console.log(index, columnIndex);
      if (columnIndex === 0) {
        // picker为选择器this实例，变化第二列对应的选项
        picker.setColumnValues(1, this.columnData[index]);
      }
    },
    close() {
      this.show = false;
    },
  },
  mounted() {
    eventBus.$on(openCityPopup, () => {
      this.show = true;
    });
  },
};
</script>

<style lang="scss" scoped>
.city_picker {
  width: 100%;
  height: 1100rpx;
  box-sizing: bor;
  background-color: #fff;
  border-radius: 30rpx 30rpx 0 0;
  .city_text {
    height: 140rpx;
    display: flex;
    .back_icon {
      padding-top: 53rpx;
      padding-left: 30rpx;
    }
    .city_font {
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
  .city_area {
    background-color: #fff;
    height: 960rpx;
    display: flex;
    .city_left {
      width: 248rpx;
      background: #f5f5f5;
      overflow: auto;
      .city_item:nth-of-type(1) {
        border-top: #f5f5f5 1px solid;
      }
      .city_item {
        width: 100%;
        height: 98rpx;
        text-align: center;
        line-height: 98rpx;
        font-size: 36rpx;
        color: #636363;
      }
      .city_item_active {
        background-color: #fff;
        color: #051c2c;
      }
    }
    .city_right {
      width: 100%;
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
        }
      }
    }
  }
}
</style>
