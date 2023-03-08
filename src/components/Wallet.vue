<template>
  <div class="connectWallet">

    <button  v-show="isConnected" class="operate connect">
      <template v-if="wrongNetWork">
        <div @click="switchNetwork(desireChainId)" > Wrong Network </div>
      </template>
      <template v-else>
        <a-popover placement="bottomRight">
          <a-button class="account-button" :loading="connectedLoading">
            {{ account | showAddress }}
          </a-button>
          <template slot="content">
            <p @click="disConnect" class="color-0E1D51 ts-16 cursor"><a-icon type="disconnect" /><span class="pd-l8">Disconnect wallet</span></p>
          </template>
        </a-popover>
      </template>
    </button>
    <button size="mini"  v-show="!isConnected" @click="isWalletModal=true" class="operate connect">
      <span>
        Connect Wallet
      </span>
    </button>

    <a-modal title="Connect your wallet" v-model="isWalletModal" :footer="null" class="walletDialog" :width="400">
      <div class="walletDialog-content">
        <a-row  style="z-index: 1001;cursor:pointer;padding: 0 28px;margin-bottom: 26px" type="flex" justify="space-between">
          <div class="connect-item" @click.prevent="  connectWallet(1)">
            <a-col>
              <img src="../assets/mm-logo.svg" height="30" width="30"/>
            </a-col>
            <a-col class="color-0E1D51"> MetaMask</a-col>
          </div>

        </a-row>
        <p class="walletDialog-p mg-t36">Disclaimer: Wallets are provided by External Providers and by selecting you
          agree to Terms of those Providers.</p>
      </div>
    </a-modal>
  </div>
</template>

<script>

import getWeb3 from "../utils/getWeb3"
import {mapGetters} from "vuex"
import { Network } from '@/config/constants';
export default {
  name: "ConnectWallet",
  data() {
    return {
      desireChainId:97,
      connectedLoading:false,
      networkObj: Network,
      curChain: "bscTest",
      connectIdx: 0,
      connectArr: ['', 'MetaMask', 'WalletConnect', 'Fortmatic'],
      isShowConnectStatus: false,
      isLoading: false,
      isShowConnect: false,
      isWalletModal: false,
      wrongNetWork:false
    }
  },
  computed: {
    ...mapGetters([
      'isConnected',
      'account'
    ]),
  },
  filters: {
    showAddress: function (text) {
      return text.substring(0, 6) + '...' + text.substring(38, 42);
    },
  },
  created() {
    const chain = localStorage.getItem('curChain')
    if (chain && chain.length > 0) {
      this.curChain = chain
    }

  },
  mounted(){
    this.connectWallet(1)
  },
  methods: {
    async switchNetwork(value) {
      this.$store.dispatch('updateDesireChainId', value);
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: value }],
        });
      } catch (switchError) {
        console.log({ switchError });
        // This error code indicates that the chain has not been added to MetaMask.
        try {
          let paramsArry = [
            {
              chainId: this.networkObj[value].chainId,
              chainName: this.networkObj[value].chainName,
              rpcUrls: this.networkObj[value].rpcUrls,
              nativeCurrency: this.networkObj[value].nativeCurrency,
              blockExplorerUrls: this.networkObj[value].blockExplorerUrls ? this.networkObj[value].blockExplorerUrls : null,
            },
          ];
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: paramsArry,
          });
        } catch (addError) {
          console.log({ addError });
        }
      }
    },
    loginOut() {
      this.$store.dispatch('app/loginOutWeb3')
    },
    async connectWallet(idx) {
      this.connectIdx = idx
      this.isLoading = true

      if (idx == 1) {
        if (typeof window.ethereum == 'undefined') {
          this.$message.error("down metamask")
        }
        await window.ethereum.enable()
        window.ethereum.on('accountsChanged', (accounts) => {
          this.$store.commit('app/SET_ACCOUNT', accounts[0])
        });

        this.registerWeb3().then(() => {
          this.isWalletModal = false
        })
        this.isWalletModal = false
      }
    },
    registerWeb3(provider) {
      return new Promise(resolve => {
        getWeb3(provider).then(result => {
          localStorage.setItem("daoFactoryAccount", result.account)
          this.$store.commit("app/SET_ACCOUNT", result.account)
          this.$store.commit("app/SET_ISCONNECT", true)
          this.$store.commit("app/SET_Balance", result.ethBalance)
          this.$store.commit("app/SET_Web3", result.web3Instance.web3())
          resolve(result)
        })
      })
    },
    showWallet() {
      if (this.isConnected) {
        this.isShowConnectStatus = false
      } else {
        this.isShowConnect = true
      }
    },
    disConnect() {
      if (this.connectIdx != 1) {
        if (this.provider) this.provider.disconnect()
        this.isShowConnectStatus = false
        this.$store.dispatch("app/loginOutWeb3")
        this.connectIdx = 0
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../styles/variable";
@import "../styles/mixin";

.walletDialog {
  .walletDialog-content{
    .connect-item{
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      align-items: center;
    }
  }
  ::v-deep .ant-row-flex {
    border-radius: 12px;
    border-width: 1px;
    border-style: solid;
    @include border_color($border-color-s4, $border-color-s1);
    @include bg_color_change($background-color-change3, $background-color-change2);
    height: 56px;
    align-items: center;
  }

  .walletDialog-p {
    line-height: 20px;
    @include font_color($font-color-s2, $font-color-s3);
  }

  ::v-deep .ant-modal-content {
    @include bg_color_modal($background-color-change19);
    border-radius: 18px;

    .color-8F97AA {
      @include font_color($font-color-s2, $font-color-s3);
    }

    .color-0E1D51 {
      font-size: 16px;
      @include font-bold;
      @include font_color($font-color-s, $font-color-s1);
    }

    .ant-modal-close {
      color: #ffffff;
    }

    .ant-modal-header {
      border-radius: 18px 18px 0 0 !important;

      @include bg_color_side($background-color-side-theme);
      @include border_color($border-color-s5, $border-color-s3);

      .ant-modal-title {
        color: #ffffff;
        @include font-bold;
      }
    }

    .ant-modal-body {
      padding: 40px 20px;
    }
  }
}

.connectWallet {
  .account-button{
    background: none;
    color: #FFFFFF;
    border: none;
    font-size: var(--font-size16);
  }
  .operate {
    font-weight: 400;
    cursor: pointer;
    padding: 0 10px;
    height: 40px;
    font-family: AvertaStd-Semibold;
    background: #63CE63;
    border-radius: 19px;
    color: #fff;
    border: none;
    line-height: 30px;
    text-align: center;
    margin-right: 20px;
    font-size: var(--font-size16);

    &:active {
      transform: translate(1px, 1px);
    }
  }

  .connect {
    background: linear-gradient(135deg, #0E1D51 0%, #093373 0%, #0156A7 32%, #0E1D51 100%);
    border-radius: 20px;
    width: 196px;
  }
}
</style>
