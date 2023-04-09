<template>
  <div class="nav-wrapper" :class="{ 'not-nav': showNav }" ref="header">
    <nav>
      <h2>vivi's planet</h2>
      <ul>
        <li
          v-for="(item, index) in navList"
          :key="item.title"
          :class="{ active: currentPath && currentPath.indexOf(item.path) !== -1 }"
          @click="goto(index, item.path)"
        >
          {{ item.title }}
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "navComponent",
  components: {},
  props: {},
  computed: {},
  data() {
    return {
      currentIndex: -1,
      currentPath: null,
      showNav: false,
      navList: [
        { title: "着陆点", path: "/index" },
        { title: "部落阁", path: "/label/all" },
        { title: "小画廊", path: "/drawings" },
        { title: "关于我", path: "/myself" },
      ],
    };
  },
  watch: {},
  created() { },
  mounted() {
    document.addEventListener("scroll", this.onScroll);
    this.currentPath = window.location.hash;
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    goto(index, path) {
      this.currentIndex = index;
      this.currentPath = path;
      this.$router.push(path);
    },
    onScroll() {
      const scrollTop =
        document.documentElement.scrollTop + document.body.scrollTop;
      this.showNav = scrollTop >= 120;
    },
  },
};
</script>

<style lang="less" scoped>
.nav-wrapper {
  // min-height: 50px;
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  // background-color: #05004c;
  background-color: #110E19;
  color: #fff;
  z-index: 100;
  transition: all 1.2s ease;
  transform: translate3d(0, 0, 0);
  box-shadow: 0 1px 1px #000;
  &.not-nav {
    transform: translate3d(0, -50px, 0);
    opacity: 0;
  }
  nav {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      height: 98%;
      object-fit: contain;
    }
    ul {
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      color: #fff;
      li {
        padding: 10px 0 10px 22px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        cursor: pointer;
        &:hover {
          cursor: pointer;
          color: #6e74e0;
        }
      }
      .active {
        color: @highlightColor;
        position: relative;
        &::before {
          content: "";
          width: 67%;
          height: 4px;
          background-color: @highlightColor;
          position: absolute;
          top: 0;
        }
      }
    }
  }
}
</style>