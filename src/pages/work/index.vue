<template>
  <view class="u-page"
    >work
    <co-home-tabbar :tabList="tabList" :currentVal="'work'"></co-home-tabbar
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
