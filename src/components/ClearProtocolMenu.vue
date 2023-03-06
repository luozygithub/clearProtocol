<template>
  <div class="menu" :style="'width:' +(!collapsed?200:66)+'px;'">
    <div class="logo-box">
      <img class="logo" src="../assets/logo.svg" alt="">
    </div>
    <a-menu
        :default-selected-keys="['1']"
        :default-open-keys="['sub1']"
        mode="inline"
        theme="dark"
        :inline-collapsed="collapsed"
    >
      <a-menu-item key="2">
        <a-icon class="menu-item-icon" type="appstore"/>
        <span class="menu-item-name">Options</span>
      </a-menu-item>
      <a-menu-item key="1">
        <a-icon class="menu-item-icon" type="pie-chart"/>
        <span class="menu-item-name">Notes</span>
      </a-menu-item>

      <a-menu-item key="3">
        <a-icon class="menu-item-icon" type="inbox"/>
        <span class="menu-item-name">
          Perpetual <br/>
          Futures
        </span>
      </a-menu-item>

      <a-menu-item key="4">
        <a-icon class="menu-item-icon" type="pie-chart"/>
        <span class="menu-item-name">Overview</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: "ClearProtocolMenu",
  data() {
    return {};
  },
  computed: {
    collapsed() {
      return this.$store.state.collapsed
    }
  },
  methods: {
    toggleCollapsed() {
      this.$store.commit("SET_COLLAPSED", this.collapsed)
    },
  }
}
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  overflow: hidden;
  flex-shrink: 0;
  min-height: 100vh;
  background: #0E1D51;
  left: 0;
  top: 0;
  .menu-item-icon{
    width: 30px;
    height: 30px;
    font-size: 20px;
  }
  .menu-item-name{
    font-size: 18px;
  }
  .logo-box{
    padding: 20px 0;
    text-align: center;
    .logo{
      width: 120px;
      margin: 0 auto;
    }
  }

  ::v-deep .ant-menu-dark, .ant-menu-dark .ant-menu-sub {
    background: #0E1D51;

    .ant-menu.ant-menu-dark .ant-menu-item-selected, .ant-menu-item-selected {
      background: #2D3A80;
    }
  }

}
</style>
