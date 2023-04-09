<template>
  <div class="blackhole-wrapper">
    <div id="blackhole">
      <div class="centerHover"><span>建设中</span></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "myselfComponent",
  components: {},
  props: {},
  computed: {},
  data() {
    return {};
  },
  watch: {},
  created() {},
  mounted() {
    require("./enter")
  },
  beforeDestroy() {},
  methods: {},
};
</script>
<style lang="less">
.blackhole-wrapper {
  height: 100vh;
	background-color: #110E19;
}
#blackhole {
	height: 100%;
	width: 100%;
	position: relative;
	display: flex;
	canvas {
		position: relative;
		z-index: 1;
		width: 100%;
		height: 100%;
		margin: auto;
	}
}

.centerHover {
	width: 255px;
	height: 255px;
	background-color: transparent;
	border-radius: 50%;
	position: absolute;
	left: 50%;
	top: 50%;
	margin-top: -128px;
	margin-left: -128px;
	z-index: 2;
	cursor: pointer;
	line-height: 255px;
	text-align: center;
	transition: all 500ms;
	
	&.open  {
		// opacity: 0;
		pointer-events: none;
	}
	
	&:hover span {
		color: #DDD;
		
		&:before { background-color: #DDD; }
		&:after { background-color: #DDD; }
	}
	
	span {
		color: #666;
		font-family: serif;
		font-size: 18px;
		position: relative;
		transition: all 500ms;
		
		&:before {
			content: '';
			display: inline-block;
			height: 1px;
			width: 16px;
			margin-right: 12px;
			margin-bottom: 4px;
			background-color: #666;
			transition: all 500ms;
		}
		&:after {
			content: '';
			display: inline-block;
			height: 1px;
			width: 16px;
			margin-left: 12px;
			margin-bottom: 4px;
			background-color: #666;
			transition: all 500ms;
		}
	}
}

</style>