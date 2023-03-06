<template>
  <div class="header">

    <div class="nav-list">
      <div class="menu" @click="toggleCollapsed">
        <img src="../assets/menu_icon.png" alt="">
      </div>
      <div class="nav-item" @click="$router.push('/')" :class="{'active':$route.path=='/'}">
        Futures
      </div>
      <div class="nav-item" @click="$router.push('/Pool')" :class="{'active':$route.path=='/Pool'}">
        Pool
      </div>
    </div>
    <div class="operate-box">
      <a-dropdown :trigger="['click']">

        <button class="operate choose-chain" @click="e => e.preventDefault()">
          {{ curChainName }}
          <a-icon type="down"/>

        </button>
        <a-menu slot="overlay">
          <a-menu-item key="0" @click="chainId=97,chooseChain()">
            Binance Smart Chain Mainnet
          </a-menu-item>
          <a-menu-item key="1" @click="chainId=421613,chooseChain()">
            Arbitrum Goerli
          </a-menu-item>

        </a-menu>
      </a-dropdown>

      <button class="operate connect">
        Connect Wallet
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CloearProtocolHeader",
  data() {
    return {
      chainId: 0,
      curChainName: "Unsupported"
    }
  },
  methods: {
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
        this.curChainName = "Binance Smart Chain Mainnet"
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
        this.curChainName = "Binance Smart Chain Mainnet"
      }
      let _this = this
      setTimeout(async () => {
        const chainId = (await window.ethereum.request({method: 'eth_chainId'}))

        if (parseInt(chainId).toString(10) == 421613) {
          _this.curChainName = "Arbitrum Goerli"
        } else if (parseInt(chainId).toString(10) == 97) {
          _this.curChainName = "Binance Smart Chain Mainnet"
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
  min-width: 800px;
  overflow: hidden;

  .menu {
    cursor: pointer;
    padding: 10px 20px;

    img {
      width: 20px;
      height: 14px;
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

.operate {
  cursor: pointer;
  padding: 0 10px;
  height: 40px;

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
  border: 1px solid #0E1D51;
}

.connect {
  background: linear-gradient(135deg, #0E1D51 0%, #093373 0%, #0156A7 32%, #0E1D51 100%);
  border-radius: 20px;
  width: 255px;
}
</style>
