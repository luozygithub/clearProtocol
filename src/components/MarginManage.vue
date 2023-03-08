<template>
  <div class="MarginManage">
    <div class="mask"></div>
    <div class="margin-content">
      <div class="header">
        <div class="title">
          Margin Manage
        </div>
        <svg t="1677826899914" @click="$emit('closeMarginManage')" class="icon close" viewBox="0 0 1024 1024"
             version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5251" id="mx_n_1677826899918" width="14"
             height="14">
          <path
              d="M570.514286 512l292.571428-292.571429c14.628571-14.628571 14.628571-43.885714 0-58.514285-14.628571-14.628571-43.885714-14.628571-58.514285 0l-292.571429 292.571428-292.571429-292.571428c-14.628571-14.628571-43.885714-14.628571-58.514285 0-21.942857 14.628571-21.942857 43.885714 0 58.514285l292.571428 292.571429-292.571428 292.571429c-14.628571 14.628571-14.628571 43.885714 0 58.514285 14.628571 14.628571 43.885714 14.628571 58.514285 0l292.571429-292.571428 292.571429 292.571428c14.628571 14.628571 43.885714 14.628571 58.514285 0 14.628571-14.628571 14.628571-43.885714 0-58.514285l-292.571428-292.571429z"
              fill="#0E1D51" p-id="5252"></path>
        </svg>
      </div>
      <div class="content">
        <div class="title">
          Margin
        </div>
        <div class="flex-box">
          <button class="operate" :class="{'remove':activeNav!=0}" @click="activeNav=0">
            Add Margin
          </button>
          <button class="operate " :class="{'remove':activeNav!=1}" @click="activeNav=1">
            Remove Margint
          </button>
        </div>
        <div class="title">
          Account Balance
        </div>
        <div class="balance">
          {{ dealNum(balance) }} USDC
        </div>
        <div class="title">
          Margin Amount
        </div>
        <div class="input-box">
          <input type="number" v-model="amount" placeholder="0.000">
          <div class="max-btn" @click="amount=balance">
            MAX
          </div>
        </div>
        <div class="title">
          Positions Update
        </div>
        <div class="info-list">
          <div class="row">
            <div class="name">
              Margin
            </div>
            <div class="value">
              {{ positionObj.collateral? positionObj.collateral:0}}
            </div>
          </div>
          <div class="row">
            <div class="name">
              Margin Ratio
            </div>
            <div class="value">
              {{ dealNum((parseFloat(positionObj.collateral) + parseFloat(positionObj.pnl))/positionObj.collateral)}}%
            </div>
          </div>
          <div class="row">
            <div class="name">
              Leverage
            </div>
            <div class="value">
              {{ positionObj.leverage }}
            </div>
          </div>
        </div>
        <button class="operate confim" @click="confirm">
          Confirm
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import addressMap from "@/abi/addressMap";
import {mapGetters} from "vuex";
import BigNumber from "bignumber.js";

export default {
  name: "MarginManage",
  data() {
    return {
      amount: undefined,
      balance: 0,
      activeNav: 0
    }
  },
  props:["positionObj","coinInfo"],
  computed: {
    ...mapGetters([
      'isConnected',
      'account'
    ]),
  },
  watch:{
    account(){
      this.getBalance()
    }
  },
  methods: {
    async getBalance() {
      if (!this.isConnected) {
        return
      }
      let res = await this.$store.dispatch("erc20/balanceOf", {
        address: addressMap.usdt,
        account: this.$store.state.app.account,
      })
      this.balance = res / 10**6
    },
    dealNum(val) {
      if ((val)) {
        return val ? (parseInt(Number(val) * 100) / 100) : 0
      }
      return 0
    },
    async trade() {
      /*eslint-disable*/
      let price = await this.$store.dispatch("vault/getPrice", {
        _indexToken: this.positionObj.index_token
      })
      console.log(this.positionObj)
      let direction = true
      if(this.positionObj.direction==1){
        direction = true
      }else{
        direction = false
      }
      this.$store.dispatch("vault/updatePosition", {
        _indexToken: this.positionObj.index_token,
        _leverage: this.positionObj.leverage,
        _sizeDelta: BigNumber(this.amount  * 10 ** 6 / price).toFixed(0),
        _collateralDelta: BigNumber(this.amount*10**6).toFixed(0),
        _indexPrice: price,
        _direction: direction,
        _collateralDeltaInIO: this.activeNav==0?true:false
      }).then(()=> {
        this.$message.info(this.activeNav==0? 'Add':'Remove'+ ' success');
        this.amount = 0
      }).catch((e)=>{
        this.$message.info(e);
      })
    },
    confirm() {
      if (!this.isConnected) {
        this.$message.info('Please connect');
        return
      }
      if (!this.amount || this.amount <= 0) {
        this.$message.info('Please input amount');
        return
      }
      this.trade()
    },
  },
  created() {
    this.getBalance()
  }
}
</script>

<style lang="scss" scoped>
.MarginManage {
  .mask {
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.3);
  }

  .margin-content {
    width: 400px;
    height: 424px;
    position: fixed;
    z-index: 10;
    top: 20%;
    left: calc(50% - 200px);
    background: #FFFFFF;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
    border-radius: 18px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    padding: 18px 20px;
    border-bottom: 1px solid #ECECEE;

    .close {
      cursor: pointer;
    }

    .title {
      font-weight: 600;
      color: #0E1D51;
      line-height: 17px;
      font-size: 14px
    }

    .balance {
      font-size: 14px;
      font-weight: 400;
      color: #0E1D51;
      line-height: 17px;
    }
  }

  .content {
    padding: 10px 20px;

    .info-list {
      .row {
        display: flex;
        justify-content: space-between;
        line-height: 20px;

        .name {
          font-size: 12px;
          font-family: AvertaStd-Regular, AvertaStd, sans-serif;
          font-weight: 400;
          color: #8F97AA;
        }

        .value {
          font-size: 12px;
          font-family: AvertaStd-Regular, AvertaStd, sans-serif;
          font-weight: 400;
          color: #0E1D51;
        }
      }
    }

    .title {
      font-size: 14px;
      font-family: AvertaStd-Regular, AvertaStd, sans-serif;
      font-weight: 400;
      color: #8F97AA;
      line-height: 17px;
      padding: 10px 0;
    }

    .input-box {
      position: relative;

      input {
        height: 34px;
        background: #F2F2F3;
        border-radius: 18px;
        color: #111;
        border: 1px solid #0E1D51;
        width: 100%;
      }

      .max-btn {
        position: absolute;
        user-select: none;
        width: 44px;
        right: 10px;
        top: 6px;
        height: 24px;
        background: #0E1D51;
        border-radius: 12px;
        font-size: 14px;
        font-family: AvertaStd-Regular, AvertaStd;
        font-weight: 400;
        color: #FFFFFF;
        text-align: center;
        cursor: pointer;
        line-height: 24px;
      }
    }

    .flex-box {
      display: flex;
      justify-content: space-between;

      .operate {
        cursor: pointer;
        width: 40%;
        height: 36px;
        background: #0E1D51;
        border-radius: 19px;
        color: #fff;
        border: none;

        &.remove {
          border: 1px solid #0E1D51;
          background: none;
          color: #0E1D51;
        }

        &:active {
          transform: translate(1px, 1px);
        }
      }
    }
  }

  .operate.confim {
    width: 100%;
    cursor: pointer;
    margin-top: 10px;
    height: 36px;
    background: #0E1D51;
    border-radius: 19px;
    color: #fff;
    border: none;

    &.remove {
      border: 1px solid #0E1D51;
      background: none;
      color: #0E1D51;
    }

    &:active {
      transform: translate(1px, 1px);
    }
  }
}
</style>
