<template>
  <div class="header">

    <div class="nav-list">
      <div class="menu" @click="toggleCollapsed">
        <img v-show="$store.state.collapsed" src="../assets/menu_icon.png" alt="">
        <svg v-show="!$store.state.collapsed" t="1678326899021" class="icon" viewBox="0 0 1109 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2298" width="20" height="14"><path d="M0 0h1109.333v170.667H0V0z m0 426.667h682.667v170.666H0V426.667z m0 426.666h1109.333V1024H0V853.333z" fill="#0e1d51" p-id="2299"></path></svg>
      </div>
      <div class="nav-item" @click="$router.push('/')" :class="{'active':$route.path=='/'}">
        Futures
      </div>
      <div class="nav-item" @click="$router.push('/Pool')" :class="{'active':$route.path=='/Pool'}">
        Pool
      </div>
    </div>
    <div class="operate-box">
      <div class="faucet-btn operate" @click="toFaucet">
        <img v-if="currentTheme" src="../assets/images/fa-bath-white.svg" width="22" height="22" alt />
        <img v-else src="@/assets/images/fa-bath.svg" width="22" height="22" alt />
        <span class="pd-l8">Faucet</span>
      </div>
      <a-dropdown :trigger="['click']">

        <button class="operate choose-chain" @click="e => e.preventDefault()">
          {{ curChainName }}
          <a-icon type="down"/>

        </button>
        <a-menu slot="overlay">
<!--          <a-menu-item key="0" @click="chainId=97,chooseChain()">-->
<!--            Binance Smart Chain Testnet-->
<!--          </a-menu-item>-->
          <a-menu-item key="1" @click="chainId=421613,chooseChain()">
            Arbitrum Goerli
          </a-menu-item>

        </a-menu>
      </a-dropdown>
      <Wallet></Wallet>

    </div>
  </div>
</template>

<script>
import { mapState,  } from 'vuex';
import Wallet from "@/components/Wallet";
export default {
  name: "CloearProtocolHeader",
  components:{
    Wallet
  },
  data() {
    return {
      chainId: 0,
      curChainName: "Unsupported"
    }
  },
  computed:{
    ...mapState({
      currentTheme: (state) => state.currentTheme,

    }),
  },
  methods: {
    toFaucet() {
      window.open('/faucet', '_blank');
    },
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
      this.$store.commit("SET_COLLAPSED", this.collapsed)
    },
    async chooseChain() {
      try {
        if (window.ethereum) {
          const chainId = (await window.ethereum.request({method: 'eth_chainId'}))
          if (chainId != this.chainId) {
            const permissions = await window.ethereum.request({
              method: 'wallet_getPermissions',
            });
            const hasPermission = permissions.some((permission) =>
                permission.parentCapability === 'eth_chainId' && permission.caveats.some((caveat) => {
                  const chainId = caveat.type === 'chainId' && caveat.value;
                  console.log(chainId)
                  return chainId === this.chainId;
                }),
            );
            if (hasPermission) {
              await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{chainId: '0x' + parseInt(this.chainId).toString(16).toString()}],
              });

            } else {
              if (this.chainId == "97") {
                await window.ethereum.request({
                  method: 'wallet_addEthereumChain',
                  params: [
                    {
                      chainId: "0x" + parseInt(this.chainId).toString(16),
                      chainName: 'Binance Smart Chain Testnet',
                      nativeCurrency: {
                        name: 'tBNB',
                        symbol: 'tBNB',
                        decimals: 18,
                      },
                      rpcUrls: ["https://endpoints.omniatech.io/v1/bsc/testnet/public"],
                      blockExplorerUrls: ['https://testnet.bscscan.com'],
                    },
                  ],
                });
              } else {
                await window.ethereum.request({
                  method: 'wallet_addEthereumChain',
                  params: [
                    {
                      chainId: "0x" + this.chainId.toString(16),
                      chainName: 'Arbitrum Goerli',
                      rpcUrls: ['https://goerli-rollup.arbitrum.io/rpc'],
                      nativeCurrency: {
                        symbol: "AGOR",
                        name: "AGOR",
                        decimals: 18
                      },
                      blockExplorerUrls: ['https://goerli-rollup-explorer.arbitrum.io'],
                    },
                  ],
                });
              }
            }

          }
        }

      } catch (e) {
        console.log(e)
      }
    }
  },
  watch: {
    chainId(chainId) {
      if (chainId == 421613) {
        this.curChainName = "Arbitrum Goerli"
      } else if (chainId == 97) {
        this.curChainName = "Binance Smart Chain Testnet"
      }else{
        this.curChainName = "Unsupported"
      }
    }
  },
  async mounted() {
    if (window.ethereum) {
      const chainId = (await window.ethereum.request({method: 'eth_chainId'}))

      if (parseInt(chainId).toString(10) == 421613) {
        this.curChainName = "Arbitrum Goerli"
      } else if (parseInt(chainId).toString(10) == 97) {
        this.curChainName = "Binance Smart Chain Testnet"
      }
      let _this = this
      setTimeout(async () => {
        const chainId = (await window.ethereum.request({method: 'eth_chainId'}))

        if (parseInt(chainId).toString(10) == 421613) {
          _this.curChainName = "Arbitrum Goerli"
        } else if (parseInt(chainId).toString(10) == 97) {
          _this.curChainName = "Binance Smart Chain Testnet"
        }
      },100)
      window.ethereum.on('chainChanged', (netWarkId) => {
          this.chainId = parseInt(netWarkId).toString(10)
      });
    }

  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  min-width: 860px;
  overflow: hidden;

  .menu {
    cursor: pointer;
    padding: 10px 20px;

    img ,svg{
      width: 20px;
      height: 14px;
    }
    svg{
      margin-top: 3px;
    }
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
.operate-box{
  display: flex;
}
.operate {
  cursor: pointer;
  padding: 0 20px;
  height: 40px;
  font-size: var(--font-size16);
  background: #63CE63;
  border-radius: 19px;
  color: #fff;
  border: none;
  line-height: 30px;
  text-align: center;
  margin-right: 20px;
  justify-content: center;
  font-family: AvertaStd-Bold, AvertaStd;
  display: flex;
  align-items: center;
  &:active {
    transform: translate(1px, 1px);
  }
}

.choose-chain,.faucet-btn {
  background: none;
  font-weight: 600;
  color: #0E1D51;
  border: 1px solid #0E1D51;
}
.faucet-btn{
  padding: 0 20px;
  width: auto;
}
.connect, {
  background: linear-gradient(135deg, #0E1D51 0%, #093373 0%, #0156A7 32%, #0E1D51 100%);
  border-radius: 20px;
  width: 255px;
}
</style>
