<template>
  <div class="home-wrapper">
    <div class="home-body">
      <!-- <router-view> </router-view> -->
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>

export default {
  name: "labelComponent",
  components: {},
  props: {},
  computed: {},
  data() {
    return {};
  },
  watch: {
    '$route'(to, from) {
      // 在mounted函数执行的方法，放到该处
      // this.getTableData();
      // require("./bgCanvas");
      // window.location.reload()
    },
  },
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {},
};
</script>

<style lang="less">
</style>
