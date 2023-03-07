<template>
  <div id="app">
    <div class="layout">
      <ClearProtocolMenu/>
      <div class="content" :style="'left:'+(!collapsed? 200 : 66) +'px;'+ 'width:calc(100vw - '+(collapsed?66:200)+'px)'">
        <CloearProtocolHeader></CloearProtocolHeader>
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
import ClearProtocolMenu from "@/components/ClearProtocolMenu";
import CloearProtocolHeader from "@/components/CloearProtocolHeader";

export default {
  name: "APP",
  components: {
    ClearProtocolMenu,
    CloearProtocolHeader
  },
  data() {
    return {};
  },
  computed: {
    collapsed() {
      return this.$store.state.collapsed
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

#app {
  font-family: AvertaStd-Regular, AvertaStd;
  background: #F3F7FF;
  width: 100%;
  overflow-x: hidden;

  .layout {

    width: 100%;
    overflow: hidden;

    .content {
      transition: 0.5s;
      position: relative;
      font-family: AvertaStd-Bold, AvertaStd;
      flex-shrink: 0;
      flex-grow: 1;
      width: calc(100% - 200px);
      left: 200px;
    }
  }



}

</style>
