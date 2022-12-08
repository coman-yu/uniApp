import Vuex from 'vuex';
import Vue from 'vue';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {},
  state: {
    tabList: [
      {
        text: '首页',
        name: 'index',
        inactiveIcon: '/static/Icon/tabbar/home1.png',
        activeIcon: '/static/Icon/tabbar/home2.png',
        pagePath: '/pages/index/index',
      },
      {
        text: '学校',
        name: 'school',
        inactiveIcon: '/static/Icon/tabbar/school1.png',
        activeIcon: '/static/Icon/tabbar/school2.png',
        pagePath: '/pages/school/index',
      },
      {
        text: '工作',
        name: 'work',
        inactiveIcon: '/static/Icon/tabbar/work1.png',
        activeIcon: '/static/Icon/tabbar/work2.png',
        pagePath: '/pages/work/index',
      },
      {
        text: '我的',
        name: 'user',
        inactiveIcon: '/static/Icon/tabbar/me1.png',
        activeIcon: '/static/Icon/tabbar/me2.png',
        pagePath: '/pages/user/index',
      },
    ],
    screenHeight: 0,
    userInfo: {
      token: '',
    },
  },
  actions,
  mutations,
  getters,
});
export default store;
