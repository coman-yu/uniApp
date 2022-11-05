<template>
  <view class="u-page"
    >school
    <co-home-tabbar :tabList="tabList" :currentVal="'school'"></co-home-tabbar
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
