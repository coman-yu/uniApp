<template>
  <view class="u-page">
    <co-header-news :title="'学校列表'"></co-header-news>
    <co-header-search>
      <view class="icon">
        <u-button
          :customStyle="gradeFocus ? activeStyle : noActiveStyle"
          type="primary"
          shape="circle"
          :plain="true"
          color="#051C2C"
          @click="filterClick('show', false)"
          ><text
            :class="gradeFocus ? 'button_text_active' : 'button_text'"
            style="margin-right: 10rpx; font-size: 30rpx"
            >匹配</text
          ><u-icon
            name="arrow-down-fill"
            size="20"
            class="icon"
            :color="gradeFocus ? '#ffffff' : '#C2C2C2'"
          ></u-icon>
        </u-button>
        <u-button
          :customStyle="cityFocus ? activeStyle : noActiveStyle"
          type="primary"
          shape="circle"
          :plain="true"
          color="#051C2C"
          @click="filterClick('showFilter', false)"
          ><text
            :class="cityFocus ? 'button_text_active' : 'button_text'"
            style="margin-right: 10rpx; font-size: 30rpx"
            >筛选</text
          ><u-icon
            name="arrow-down-fill"
            size="20"
            class="icon"
            :color="cityFocus ? '#ffffff' : '#C2C2C2'"
          ></u-icon
        ></u-button>
        <u-button
          :customStyle="cityFocus ? activeStyle : noActiveStyle"
          type="primary"
          shape="circle"
          :plain="true"
          color="#051C2C"
          @click="filterClick('showSort', false)"
          ><text
            :class="cityFocus ? 'button_text_active' : 'button_text'"
            style="margin-right: 10rpx; font-size: 30rpx"
            >排序</text
          ><u-icon
            name="arrow-down-fill"
            size="20"
            class="icon"
            :color="cityFocus ? '#ffffff' : '#C2C2C2'"
          ></u-icon
        ></u-button>
      </view>
      <view class="button_right"
        ><u--image
          src="/static/ask.png"
          width="40rpx"
          height="40rpx"
          radius="50%"
          @click="filterClick('showExplain')"
        ></u--image
      ></view>
    </co-header-search>
    <scroll-view :scroll-y="true" class="school-container">
      <list :loadmoreoffset="10">
        <view class="school-list">
          <view class="school-item">
            <view class="item-left">
              <u--image
                src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/01/0E/ChMkJlbKwgWICgoOAAOr5u2C_KQAALGhgDf6dYAA6v-920.jpg"
                width="220rpx"
                height="270rpx"
              ></u--image>
            </view>
            <view class="item-right">
              <view class="item-tag">公办｜广东广州｜中等职业学校</view>
              <view class="item-title line_break fw_500"
                >广州侨光财经职业技术学校公办学校</view
              >
              <view class="item-last">毕业生平均起始月薪：5000元</view>
            </view>
          </view>

          <view class="school-item">
            <view class="item-left">
              <u--image
                src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/01/0E/ChMkJlbKwgWICgoOAAOr5u2C_KQAALGhgDf6dYAA6v-920.jpg"
                width="220rpx"
                height="270rpx"
              ></u--image>
            </view>
            <view class="item-right">
              <view class="item-tag">公办｜广东广州｜中等职业学校</view>
              <view class="item-title line_break fw_500"
                >广州侨光财经职业技术学校公办学校</view
              >
              <view class="item-last">毕业生平均起始月薪：5000元</view>
            </view>
          </view>

          <view class="school-item">
            <view class="item-left">
              <u--image
                src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/01/0E/ChMkJlbKwgWICgoOAAOr5u2C_KQAALGhgDf6dYAA6v-920.jpg"
                width="220rpx"
                height="270rpx"
              ></u--image>
            </view>
            <view class="item-right">
              <view class="item-tag">公办｜广东广州｜中等职业学校</view>
              <view class="item-title line_break fw_500"
                >广州侨光财经职业技术学校公办学校</view
              >
              <view class="item-last">毕业生平均起始月薪：5000元</view>
            </view>
          </view>
          <view class="school-item">
            <view class="item-left">
              <u--image
                src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/01/0E/ChMkJlbKwgWICgoOAAOr5u2C_KQAALGhgDf6dYAA6v-920.jpg"
                width="220rpx"
                height="270rpx"
              ></u--image>
            </view>
            <view class="item-right">
              <view class="item-tag">公办｜广东广州｜中等职业学校</view>
              <view class="item-title line_break fw_500"
                >广州侨光财经职业技术学校公办学校</view
              >
              <view class="item-last">毕业生平均起始月薪：5000元</view>
            </view>
          </view>
          <view class="school-item">
            <view class="item-left">
              <u--image
                src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/01/0E/ChMkJlbKwgWICgoOAAOr5u2C_KQAALGhgDf6dYAA6v-920.jpg"
                width="220rpx"
                height="270rpx"
              ></u--image>
            </view>
            <view class="item-right">
              <view class="item-tag">公办｜广东广州｜中等职业学校</view>
              <view class="item-title line_break fw_500"
                >广州侨光财经职业技术学校公办学校</view
              >
              <view class="item-last">毕业生平均起始月薪：5000元</view>
            </view>
          </view>
        </view>
      </list>
    </scroll-view>
    <co-bottom-btn
      v-show="stopScroll"
      text="返回学校首页"
      @click.native="backToSchool"
      :btnStyle="{
        color: '#fff',
        borderRadius: '40rpx',
        backGround: '#051C2C',
      }"
    ></co-bottom-btn>
    <u-popup
      :show="show"
      :round="20"
      mode="bottom"
      @close="close('show')"
      :closeOnClickOverlay="true"
      :zIndex="firstIndex"
    >
      <!-- 匹配 -->
      <view class="filter pop-wrapper"
        ><view class="filter_text">
          <view class="filter-left">
            <view class="back_icon"
              ><u-icon name="arrow-left" color="#28282E" size="45"></u-icon
            ></view>
            <view class="fw_500 filter_font">匹配学校</view>
          </view>
          <view class="reset-wrapper">
            <view class="fw_400 reset">重置</view></view
          >
        </view>
        <view class="filter-icon">
          <view class="filter-text fw_500">
            如果您是非应届学生，请点亮按钮
          </view>
          <view class="filter-switch"
            ><u-switch
              v-model="value"
              activeColor="#0075B1"
              inactiveColor="#dcdcdc"
              size="44"
            >
            </u-switch
          ></view>
        </view>
        <view class="filter-item">
          <view class="filter-label fw_500">目前在读年级</view>
          <view
            class="filter-label-right"
            @click.stop="filterClick('openGradePopup')"
            >编辑</view
          >
        </view>

        <view class="filter-item">
          <view class="filter-label fw_500">目前在读地点</view>
          <view
            class="filter-label-right"
            @click.stop="filterClick('openCityPopup')"
            >编辑</view
          >
        </view>
        <view class="filter-btn">
          <co-bottom-btn
            :fixed="false"
            text="显示结果"
            :btnStyle="{
              color: '#fff',
              borderRadius: '40rpx',
              backGround: '#051C2C',
            }"
          ></co-bottom-btn>
        </view>
      </view>
    </u-popup>

    <!-- 排序 -->
    <u-popup
      :show="showSort"
      :round="20"
      mode="bottom"
      @close="close('showSort')"
      :closeOnClickOverlay="true"
      :zIndex="firstIndex"
    >
      <view class="filter pop-wrapper"
        ><view class="filter_text">
          <view class="filter-left">
            <view class="back_icon"
              ><u-icon name="arrow-left" color="#28282E" size="45"></u-icon
            ></view>
            <view class="fw_500 filter_font">排序学校</view>
          </view>
          <view class="reset-wrapper">
            <view class="fw_400 reset">重置</view></view
          >
        </view>
        <view style="padding-top: 40rpx"></view>
        <view class="filter-item">
          <view class="filter-label fw_500"
            >招生事项<view class="fw_400 select-item"></view
          ></view>
          <view
            class="filter-label-right"
            @click.stop="filterClick('openZsPopup')"
            >编辑</view
          >
        </view>
        <view class="filter-item">
          <view class="filter-label fw_500"
            >师资力量<view class="fw_400 select-item"></view
          ></view>
          <view
            class="filter-label-right"
            @click.stop="filterClick('openSzPopup')"
            >编辑</view
          >
        </view>

        <view class="filter-item">
          <view class="filter-label fw_500"
            >学校办学规模<view class="fw_400 select-item"></view
          ></view>
          <view
            class="filter-label-right"
            @click.stop="filterClick('openBxPopup')"
            >编辑</view
          >
        </view>

        <view class="filter-item">
          <view class="filter-label fw_500"
            >升学就业质量<view class="fw_400 select-item"></view
          ></view>
          <view
            class="filter-label-right"
            @click.stop="filterClick('openSxPopup')"
            >编辑</view
          >
        </view>

        <view class="filter-btn">
          <co-bottom-btn
            :fixed="false"
            text="显示结果"
            :btnStyle="{
              color: '#fff',
              borderRadius: '40rpx',
              backGround: '#051C2C',
            }"
          ></co-bottom-btn>
        </view>
      </view>
    </u-popup>

    <!-- 筛选 -->
    <u-popup
      :show="showFilter"
      :round="20"
      mode="bottom"
      @close="close('showFilter')"
      :closeOnClickOverlay="true"
      :zIndex="firstIndex"
    >
      <view class="filter pop-wrapper"
        ><view class="filter_text">
          <view class="filter-left">
            <view class="back_icon"
              ><u-icon name="arrow-left" color="#28282E" size="45"></u-icon
            ></view>
            <view class="fw_500 filter_font">筛选学校</view>
          </view>
          <view class="reset-wrapper">
            <view class="fw_400 reset">重置</view></view
          >
        </view>
        <view class="filter-icon">
          <view class="filter-text fw_500"> 仅展示匹配我背景的学校 </view>
          <view class="filter-switch"
            ><u-switch
              v-model="value"
              activeColor="#0075B1"
              inactiveColor="#dcdcdc"
              size="44"
            >
            </u-switch
          ></view>
        </view>

        <view class="filter-item">
          <view class="filter-label fw_500"
            >学校性质<view class="fw_400 select-item">公立学校</view></view
          >
          <view
            class="filter-label-right"
            @click.stop="filterClick('openGradePopup')"
            >编辑</view
          >
        </view>
        <view class="filter-item">
          <view class="filter-label fw_500"
            >就读学制<view class="fw_400 select-item">公立学校</view></view
          >
          <view
            class="filter-label-right"
            @click.stop="filterClick('showSystem')"
            >编辑</view
          >
        </view>

        <view class="filter-item">
          <view class="filter-label fw_500"
            >招生专业<view class="fw_400 select-item">公立学校</view></view
          >
          <view
            class="filter-label-right"
            @click.stop="filterClick('showMajor')"
            >编辑</view
          >
        </view>

        <view class="filter-item">
          <view class="filter-label fw_500"
            >住宿环境<view class="fw_400 select-item">公立学校</view></view
          >
          <view
            class="filter-label-right"
            @click.stop="filterClick('openEnPopup')"
            >编辑</view
          >
        </view>

        <view class="filter-item">
          <view class="filter-label fw_500"
            >学校地点<view class="fw_400 select-item">公立学校</view></view
          >
          <view
            class="filter-label-right"
            @click.stop="filterClick('openLocationPopup')"
            >编辑</view
          >
        </view>

        <view class="filter-btn">
          <co-bottom-btn
            :fixed="false"
            text="显示结果"
            :btnStyle="{
              color: '#fff',
              borderRadius: '40rpx',
              backGround: '#051C2C',
            }"
          ></co-bottom-btn>
        </view>
      </view>
    </u-popup>

    <!-- 就读学制 -->
    <u-popup
      :show="showSystem"
      :round="20"
      mode="bottom"
      @close="close('showSystem')"
      :closeOnClickOverlay="true"
      :zIndex="'10076'"
    >
      <view class="filter pop-wrapper"
        ><view class="filter_text">
          <view class="filter-left">
            <view class="back_icon"
              ><u-icon name="arrow-left" color="#28282E" size="45"></u-icon
            ></view>
            <view class="fw_500 filter_font">就读学制</view>
          </view>
          <view class="reset-wrapper">
            <view class="fw_400 reset" @click="reset('system')"
              >重置</view
            ></view
          >
        </view>
        <view class="filter-system">
          <checkbox-group @change="changeSelect">
            <view
              class="grade_item"
              v-for="item in checkList"
              :key="item.value"
            >
              <label for="checkbox" class="fw_400 grade_checkbox"
                >{{ item.label
                }}<checkbox
                  id="checkbox"
                  class="input_box1"
                  :checked="item.isChecked"
                  :value="item.value"
              /></label>
            </view>
          </checkbox-group>
        </view>
        <view
          class="filter-system-item"
          v-for="(item, itemName) in checkSystemList"
          :key="itemName"
        >
          <view class="filter-title fw_500">{{ itemName }}</view>
          <view class="filter-btn-wrapper">
            <view class="filter-btn-item" v-for="itm in item" :key="itm.value">
              <u-button
                :customStyle="noActiveBtn"
                v-if="!itm.isChecked"
                @click="handleClick(itm.value)"
                ><text class="fw_400 fs_30">{{ itm.name }}</text></u-button
              >
              <u-button
                :customStyle="activeBtn"
                v-if="itm.isChecked"
                @click="handleClick(itm.value)"
                ><view class="image-icon"
                  ><u--image
                    src="/static/check1.png"
                    width="32rpx"
                    height="24rpx"
                  ></u--image
                ></view>
                <text class="fw_400 fs_30">{{ itm.name }}</text>
              </u-button>
            </view>
          </view>
        </view>

        <view class="filter-btn-1">
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
    <!-- 招生专业 -->
    <u-popup
      :show="showMajor"
      :round="20"
      mode="bottom"
      @close="close('showMajor')"
      :closeOnClickOverlay="true"
      :zIndex="'10076'"
    >
      <view class="pop-wrapper">
        <view class="filter"
          ><view class="filter_text">
            <view class="filter-left">
              <view class="back_icon"
                ><u-icon name="arrow-left" color="#28282E" size="45"></u-icon
              ></view>
              <view class="fw_500 filter_font">招生专业</view>
            </view>
            <view class="reset-wrapper">
              <view class="fw_400 reset" @click="reset('system')"
                >重置</view
              ></view
            >
          </view>
          <view class="input-container">
            <co-input-search
              placeholder="输入专业名字，添加专业"
              :isPopup="true"
            ></co-input-search>
          </view>
          <view class="tips fw_400"
            >备注：请注意选择对应⾃身教学层次的专业。
            如：初三毕业生即将进入中等职业学校，应选择中职层次专业</view
          >
          <view class="btn-wrapper">
            <!-- <view class="btn-item">
              <u-button :customStyle="noActiveBtn"
                ><text class="fw_400 fs_30"
                  >种⼦⽣产与经营 - ⾼职专科</text
                ></u-button
              >
            </view>
            <view class="btn-item">
              <u-button :customStyle="activeBtn"
                ><view class="image-icon"
                  ><u--image
                    src="/static/check1.png"
                    width="32rpx"
                    height="24rpx"
                  ></u--image
                ></view>
                <text class="fw_400 fs_30">作物⽣产与经营管理 - ⾼职专科</text>
              </u-button>
            </view>

            <view class="btn-item">
              <u-button :customStyle="activeBtn"
                ><view class="image-icon"
                  ><u--image
                    src="/static/check1.png"
                    width="32rpx"
                    height="24rpx"
                  ></u--image
                ></view>
                <text class="fw_400 fs_30">作物⽣产与经营管理 - ⾼职专科</text>
              </u-button>
            </view>

            <view class="btn-item">
              <u-button :customStyle="activeBtn"
                ><view class="image-icon"
                  ><u--image
                    src="/static/check1.png"
                    width="32rpx"
                    height="24rpx"
                  ></u--image
                ></view>
                <text class="fw_400 fs_30">作物⽣产与经营管理 - ⾼职专科</text>
              </u-button>
            </view>

            <view class="btn-item">
              <u-button :customStyle="activeBtn"
                ><view class="image-icon"
                  ><u--image
                    src="/static/check1.png"
                    width="32rpx"
                    height="24rpx"
                  ></u--image
                ></view>
                <text class="fw_400 fs_30">作物⽣产与经营管理 - ⾼职专科</text>
              </u-button>
            </view> -->
          </view>

          <view style="margin-top: 60rpx">
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
      </view>
    </u-popup>
    <!-- 住宿环境pop -->
    <co-grade-picker
      :checkList="environmentList"
      @closePop="closePop('openEnPopup')"
      :show="openEnPopup"
      @changeSelect="changeSelectEnv"
      :isMutileple="true"
    >
    </co-grade-picker>
    <!-- 招生事项 pop -->
    <co-grade-picker
      :show="openZsPopup"
      @closePop="closePop('openZsPopup')"
      :checkList="zsList"
    >
    </co-grade-picker>
    <!-- 师资力量 pop -->
    <co-grade-picker
      :show="openSzPopup"
      @closePop="closePop('openSzPopup')"
      :checkList="szList"
    >
    </co-grade-picker>
    <!-- 学校办学规模 -->
    <co-grade-picker
      :show="openBxPopup"
      @closePop="closePop('openBxPopup')"
      :checkList="bxList"
      title="学校办学规模"
    >
    </co-grade-picker>
    <!-- 升学就业质量 -->
    <co-grade-picker
      :show="openSxPopup"
      @closePop="closePop('openSxPopup')"
      :checkList="sxList"
      title="升学就业质量"
    >
    </co-grade-picker>
    <co-city-picker
      :isMultiple="true"
      @closePop="closePop('openLocationPopup')"
      :show="openLocationPopup"
      title="学校地点"
    >
    </co-city-picker>
    <co-grade-picker
      :checkList="gradeList"
      @closePop="closePop('openGradePopup')"
      :show="openGradePopup"
    ></co-grade-picker>
    <co-city-picker
      title="目前在读城市"
      :show="openjxPopup"
      @closePop="closePop('openjxPopup')"
    ></co-city-picker>

    <co-explain-pop
      :show="showExplain"
      @closePop="closePop('showExplain')"
    ></co-explain-pop>
  </view>
</template>
<script>
export default {
  data() {
    return {
      openEnPopup: false,
      openCityPopup: false,
      openGradePopup: false,
      openLocationPopup: false,
      openjxPopup: false,

      openZsPopup: false,
      openSzPopup: false,
      openBxPopup: false,
      openSxPopup: false,

      gradeFocus: false,
      cityFocus: false,

      stopScroll: true,
      timer: null,
      show: false,
      showFilter: false,
      showSystem: false,
      showSort: false,
      showExplain: false,
      showMajor: false,
      value: true,
      environmentList: [
        {
          value: '不限',
          label: '不限',
          isChecked: true,
        },
        {
          value: '提供空调',
          label: '提供空调',
          isChecked: false,
        },
        {
          value: '提供独立卫生间',
          label: '提供独立卫生间',
          isChecked: false,
        },
        {
          value: '提供上床下桌设施',
          label: '提供上床下桌设施',
          isChecked: false,
        },
      ],
      gradeList: [
        {
          value: '不限',
          label: '不限',
          isChecked: true,
        },
        {
          value: '公立学校',
          label: '公立学校',
          isChecked: false,
        },
        {
          value: '私立学校',
          label: '私立学校',
          isChecked: false,
        },
      ],

      zsList: [
        {
          value: '学费由高到低',
          label: '学费由高到低',
          isChecked: false,
        },
        {
          value: '学费由低到高',
          label: '学费由低到高',
          isChecked: false,
        },
        {
          value: '录取分数线由高到低',
          label: '录取分数线由高到低',
          isChecked: false,
        },
        {
          value: '录取分数线由低到高',
          label: '录取分数线由低到高',
          isChecked: false,
        },
      ],
      szList: [
        {
          value: '生师比由低到高',
          label: '生师比由低到高',
          isChecked: false,
        },
        {
          value: '专任教师数量由高到低',
          label: '专任教师数量由高到低',
          isChecked: false,
        },
        {
          value: '硕士教师数量由高到低',
          label: '硕士教师数量由高到低',
          isChecked: false,
        },
        {
          value: '硕士教师比例由高到低',
          label: '硕士教师比例由高到低',
          isChecked: false,
        },
        {
          value: '双师型教师数量由高到低',
          label: '双师型教师数量由高到低',
          isChecked: false,
        },
        {
          value: '双师型教师比例由高到低',
          label: '双师型教师比例由高到低',
          isChecked: false,
        },
        {
          value: '高级职称教师数量由高到低',
          label: '高级职称教师数量由高到低',
          isChecked: false,
        },
        {
          value: '高级职称教师比例由高到低',
          label: '高级职称教师比例由高到低',
          isChecked: false,
        },
      ],

      bxList: [
        {
          value: '在校学生数量由高到低',
          label: '在校学生数量由高到低',
          isChecked: false,
        },
        {
          value: '学校年度总收入由高到低',
          label: '学校年度总收入由高到低',
          isChecked: false,
        },
        {
          value: '生均学校年度总收入由高到低',
          label: '生均学校年度总收入由高到低',
          isChecked: false,
        },
        {
          value: '校园占地面积由高到低',
          label: '校园占地面积由高到低',
          isChecked: false,
        },
        {
          value: '生均校园占地面积由高到低',
          label: '生均校园占地面积由高到低',
          isChecked: false,
        },
        {
          value: '教学仪器设备值由高到低',
          label: '教学仪器设备值由高到低',
          isChecked: false,
        },
        {
          value: '生均教学仪器设备值由高到低',
          label: '生均教学仪器设备值由高到低',
          isChecked: false,
        },
        {
          value: '校内实训教学工位数由高到低',
          label: '校内实训教学工位数由高到低',
          isChecked: false,
        },
        {
          value: '生均校内实训教学工位数由高到低',
          label: '生均校内实训教学工位数由高到低',
          isChecked: false,
        },
      ],

      sxList: [
        {
          value: '毕业生升学率由高到低',
          label: '毕业生升学率由高到低',
          isChecked: false,
        },
        {
          value: '毕业生总体就业率由高到低',
          label: '毕业生总体就业率由高到低',
          isChecked: false,
        },
        {
          value: '毕业生对口就业率由高到低',
          label: '毕业生对口就业率由高到低',
          isChecked: false,
        },
        {
          value: '毕业生平均起薪由高到低',
          label: '毕业生平均起薪由高到低',
          isChecked: false,
        },
      ],
      firstIndex: '10075',
      activeBtn: {
        borderRadius: '37rpx',
        height: '60rpx',
        color: '#fff',
        width: 'fit-content',
        lineHeight: '60rpx',
        padding: '0 30rpx 0 40rpx',
        margin: 0,
        backgroundColor: '#0075B1',
        border: '1rpx solid #0075B1',
      },
      noActiveBtn: {
        borderRadius: '37rpx',
        height: '60rpx',
        color: '#051C2C',
        width: 'fit-content',
        lineHeight: '60rpx',
        margin: 0,
        padding: '0 40rpx 0 40rpx',
        border: '1rpx solid #051C2C',
        backgroundColor: '#fff',
      },
      noActiveStyle: {
        width: 'fit-content',
        height: '60rpx',
        margin: 0,
        marginRight: '40rpx',
      },
      activeStyle: {
        width: 'fit-content',
        height: '60rpx',
        margin: 0,
        marginRight: '40rpx',
        color: '#ffffff',
        background: '#051c2c',
      },
      checkList: [
        {
          label: '不限',
          value: '不限',
        },
      ],
      checkSystemList: {
        '⾯向初三学⽣的学制': [
          {
            name: '五年一贯制',
            value: '五年一贯制',
            isChecked: false,
          },
          {
            name: '普通三年制',
            value: '普通三年制',
            isChecked: false,
          },
          {
            name: '高职高考班',
            value: '高职高考班',
            isChecked: false,
          },
          {
            name: '三二分段',
            value: '三二分段',
            isChecked: false,
          },
          {
            name: '企业订单班',
            value: '企业订单班',
            isChecked: false,
          },
        ],
        '⾯向中职毕业生的学制': [
          {
            name: '专职三年制',
            value: '专职三年制',
            isChecked: false,
          },
          {
            name: '本科四年制',
            value: '本科四年制',
            isChecked: false,
          },
        ],
        面向高职专科毕业生的学制: [
          {
            name: '本科两年制',
            value: '本科两年制',
            isChecked: false,
          },
        ],
      },
    };
  },
  methods: {
    close(item) {
      this.firstIndex = '10075';
      this[item] = false;
    },
    backToSchool() {
      uni.switchTab({ url: '/pages/school/index' });
    },
    filterClick(item, showModal = true) {
      if (showModal) {
        this.firstIndex = '10069';
      }
      this[item] = true;
    },
    closePop(item) {
      this[item] = false;
      this.firstIndex = '10075';
    },
    handleClick(val) {
      Object.values(this.checkSystemList).forEach((item) => {
        item.map((itm) => {
          if (itm.value === val) {
            itm.isChecked = !itm.isChecked;
          }
          return itm;
        });
      });
    },
    reset(val) {
      if (val === 'system') {
      }
    },
    changeSelectEnv(payload) {
      this.environmentList = payload;
    },
  },
  onReachBottom() {
    console.log('asdasdasd');
  },
  onPageScroll() {
    clearTimeout(this.timer);
    this.stopScroll = false;
    const that = this;
    this.timer = setTimeout(() => {
      that.stopScroll = true;
    }, 500);
  },
};
</script>
<style lang="scss" scoped>
.school-container {
  background: #f5f5f5;
  padding: 0 40rpx 40rpx 40rpx;
  box-sizing: border-box;
  .school-list {
    margin-top: 40rpx;
    .school-item {
      height: 270rpx;
      background-color: #fff;
      box-sizing: border-box;
      overflow: hidden;
      border-radius: 20rpx;
      display: flex;
      margin-bottom: 40rpx;
      .item-right {
        padding: 30rpx 40rpx 30rpx 30rpx;
        .item-tag {
          font-size: 24rpx;
          color: #051c2c;
          line-height: 33rpx;
        }
        .item-title {
          margin-top: 24rpx;
          font-size: 30rpx;
          line-height: 42rpx;
        }
        .item-last {
          margin-top: 36rpx;
          font-size: 24rpx;
          line-height: 33rpx;
          color: #0075b1;
        }
      }
    }
  }
}
.line_break {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.filter {
  padding: 50rpx;

  .filter-icon {
    padding: 54rpx 0 44rpx 0;
    display: flex;
    justify-content: space-between;
    .filter-text {
      font-size: 30rpx;
      line-height: 42px;
    }
    .filter-switch {
      padding-top: 14rpx;
    }
  }

  .filter-system {
    padding: 41rpx 0 50rpx 0;
  }
  .filter-system-item {
    margin-bottom: 50rpx;
    .filter-title {
      font-size: 36rpx;
      line-height: 50rpx;
    }
    .filter-btn-wrapper {
      margin-top: 40rpx;
    }
  }
  .image-icon {
    display: inline-block;
    padding-right: 10rpx;
  }
  .filter-btn {
    padding-top: 60rpx;
    border-top: #dadada solid 2rpx;
  }
  .filter-btn-1 {
    margin-top: 50rpx;
  }
  .filter-container {
    overflow: auto;
    max-height: 700rpx;
  }
  .filter-item {
    padding: 40rpx 0 40rpx 0;
    justify-content: space-between;
    display: flex;
    border-top: #dadada solid 2rpx;

    .filter-label {
      font-size: 30rpx;
      line-height: 42rpx;
      .select-item {
        color: #0075b1;
        font-size: 26rpx;
        line-height: 37rpx;
      }
    }
    .filter-label-right {
      font-size: 30rpx;
      line-height: 42rpx;
      color: #5e5e5e;
    }
  }
  .filter_text {
    display: flex;
    justify-content: space-between;

    .filter-left {
      display: flex;
    }
    .back_icon {
      padding-top: 7rpx;
    }
    .filter_font {
      font-size: 40rpx;
      line-height: 56rpx;
      margin-left: 12rpx;
    }

    .reset-wrapper {
      position: relative;
      width: 100rpx;
      .reset {
        font-size: 30rpx;
        color: #0075b1;
        line-height: 42rpx;
        top: 7rpx;
        right: 13rpx;
        position: absolute;
      }
    }
  }
}
.filter-btn-wrapper {
  display: flex;
  flex-wrap: wrap;
  .filter-btn-item {
    margin-right: 40rpx;
    margin-bottom: 30rpx;
  }
}
::v-deep.u-mode-center-box {
  background-color: transparent !important;
}

.grade_item {
  .grade_checkbox {
    display: flex;
    justify-content: space-between;
  }
}

.input-container {
  margin-top: 40rpx;
}
.tips {
  margin-top: 35rpx;
  color: #0075b1;
  font-size: 24rpx;
  line-height: 33rpx;
}
.btn-wrapper {
  .btn-item {
    margin-top: 50rpx;
  }
}
.icon {
  display: flex;
}
.button_right {
  padding-top: 10rpx;
  font-size: 30rpx;
  padding-left: 10rpx;
}
</style>
