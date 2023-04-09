<template>
  <div id="app">
    <canvas class="canvas-wrapper" id="bgCanvas"></canvas>
    <Nav></Nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Top></Top>
  </div>
</template>
<script>
import Top from "components/top";
import Nav from "components/nav";
import { mapActions } from "vuex";
export default {
  name: "app",
  components: {
    Top,
    Nav,
  },
  created() {
    this.getLabelList();
  },
  mounted() {
    require("./utils/bgCanvas");
  },
  methods: {
    ...mapActions({
      getLabelList: "label/getLabelList",
    }),
  },
};
</script>
<style lang="less">
.canvas-wrapper {
  // z-index: -1000 !important;
}
</style>