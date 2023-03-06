<!--  -->
<template>
  <a-layout-sider
    class="layout-x"
    id="sideMenu"
    :collapsible="true"
    :style="{
      overflow: 'auto',
      height: '100vh',
      position: 'fixed',
      left: 0,
      zIndex: 100,
      background: '#0E1D51',
    }"
    width="220px"
  >
    <a-menu
      theme="dark"
      :default-selected-keys="[$route.name]"
      mode="inline"
      :open-keys="openKeys"
      @openChange="onOpenChange"
    >
      <a-sub-menu key="sub1">
        <span slot="title">
          <span>{{ $t("OptionTrade.optionManagement") }}</span>
        </span>
        <a-menu-item key="margin">
          <router-link to="/maker" tag="div">{{
            $t("OptionTrade.optionSummary")
          }}</router-link>
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item key="profit">
        <router-link to="/maker/profit" tag="span">{{
          $t("OptionTrade.marketMakerProfit")
        }}</router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      collapsed: false,
      openKeys: ["sub1"],
      rootSubmenuKeys: ["sub1"],
    };
  },
  computed: {},
  watch: {},
  methods: {
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        (key) => this.openKeys.indexOf(key) === -1
      );
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
  },
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
};
</script>
<style lang="scss">
.layout-x {
  .ant-layout-sider-trigger {
    display: none !important;
  }
  .ant-menu-submenu-title {
    padding-left: 40px !important;
  }
}
</style>
<style lang='scss' scoped>
.ant-menu-dark .ant-menu-inline.ant-menu-sub {
  background: #0e1d51 !important;
}
.ant-menu,
.ant-menu-sub,
.ant-menu-item {
  background: #0e1d51 !important;
}
.ant-menu-item {
  margin: 0 !important;
}
.ant-layout-sider-trigger {
  display: none !important;
}
.ant-menu-item {
  padding-left: 40px !important;
}
.ant-menu-sub .ant-menu-item {
  padding-left: 60px !important;
}
</style>
