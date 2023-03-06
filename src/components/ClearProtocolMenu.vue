<template>
  <div class="menu" :style="'width:' +(!collapsed?200:66)+'px;'">
    <div class="logo-box">
      <img class="logo" src="../assets/logo.svg" alt="" v-show="!collapsed">
      <img class="logo-s" src="../assets/logo_s.png" alt="" v-show="collapsed">
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

      <a-menu-item key="3" class="line2">
        <div class="menu-item-box">
          <a-icon class="menu-item-icon" type="inbox"/>
          <div class="menu-item-name">
            Perpetual<br/>
            Futures
          </div>
        </div>

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
  transition: 0.5s;
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
  .line2{
    height: 56px;
    font-size: 16px;
    font-family: AvertaStd-Regular, AvertaStd;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 20px;
  }
  .menu-item-box{
    display: flex;
    height: 100%;
    align-items: center;

  }
  .menu-item-name{
    font-size: 16px!important;
    line-height: 18px;

  }
  .logo-box{
    padding: 20px 0;
    text-align: center;
    .logo{
      width: 120px;
      margin: 0 auto;
    }
    .logo-s{
      width: 50px;
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
