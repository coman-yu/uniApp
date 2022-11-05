<template>
  <view class="u-page"
    >user
    <co-home-tabbar :tabList="tabList" :currentVal="'user'"></co-home-tabbar
  ></view>
</template>

<script>
import { mapState } from 'vuex';
export default {
  methods: {},
  computed: {
    ...mapState(['tabList']),
  },
};
</script>

<style lang="scss"></style>
