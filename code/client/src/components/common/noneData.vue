<template>
  <div class="none-data-wrapper">
    <img src="../../images/none-data.png" alt="" />
  </div>
</template>
<script>
export default {
  name: "NoneData",
};
</script>
<style lang="less" scoped>
.none-data-wrapper {
  text-align: center;
  // margin-top: 30%;
  > img {
    width: 50%;
    min-width: 300px;
  }
  .none-data-icon {
    font-size: 100px;
  }
}
</style>