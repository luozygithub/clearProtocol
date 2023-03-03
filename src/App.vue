<template>
  <div id="app">
    <div class="layout">
      <div class="left-nav">

      </div>
      <div class="content">
        <div class="header">
          <div class="nav-list">
            <div class="nav-item" @click="$router.push('/')" :class="{'active':$route.path=='/'}">
              Futures
            </div>
            <div class="nav-item" @click="$router.push('/Pool')" :class="{'active':$route.path=='/Pool'}">
              Pool
            </div>
          </div>
          <div class="operate-box">
            <button class="operate choose-chain">
              Arbitrum Rinkeby
            </button>
            <button class="operate connect">
              Connect Wallet
            </button>
          </div>
        </div>
        <router-view/>

      </div>
    </div>
  </div>
</template>

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
      position: relative;
      left: 200px;
      font-family: AvertaStd-Bold, AvertaStd;
      flex-shrink: 0;
      flex-grow: 1;
      width: calc(100% - 200px);
    }
  }

  .left-nav {
    position: fixed;
    flex-shrink: 0;
    width: 200px;
    min-height: 100vh;
    background: #0E1D51;
    left: 0;
    top: 0;
  }

  .header {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    width: calc(100vw - 200px);
    overflow: hidden;

  }

  .operate {
    cursor: pointer;
    width: 156px;
    height: 36px;
    background: #63CE63;
    border-radius: 19px;
    color: #fff;
    border: none;
    line-height: 30px;
    text-align: center;
    margin-right: 20px;
    font-family: AvertaStd-Bold, AvertaStd;
    &:active {
      transform: translate(1px, 1px);
    }
  }

  .choose-chain {
    background: none;
    font-weight: 600;
    color: #0E1D51;
    border: 1px solid #0E1D51
  }

  .connect {
    background: linear-gradient(135deg, #0E1D51 0%, #093373 0%, #0156A7 32%, #0E1D51 100%);
    border-radius: 20px;
  }
}

.nav-list {
  display: flex;

  .nav-item {
    padding: 10px 20px;
    font-size: 16px;
    font-family: AvertaStd-Semibold, AvertaStd;
    font-weight: 600;
    color: #8F97AA;
    cursor: pointer;
    line-height: 20px;

    &.active {
      font-weight: bold;
      color: #0E1D51;
    }
  }
}
</style>
