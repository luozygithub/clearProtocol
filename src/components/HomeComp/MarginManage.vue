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
            Remove Margin
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
          <input type="number" step="any" v-model="amount" placeholder="0.000" @input="updateAmount">
          <div class="max-btn" @click="setMax">
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
              {{getMargin(positionObj)}}
            </div>
          </div>
          <div class="row">
            <div class="name">
              Margin Ratio
            </div>
            <div class="value">
              {{ marginRatio(positionObj) }}%
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
        <a-button :loading="tradeOnloading" class="operate confim" @click="confirm">
          Confirm
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>
import addressMap from "@/abi/addressMap";
import {mapGetters} from "vuex";
import BigNumber from "bignumber.js";
import {USDCDECIMALS,MARGINRATIO} from "@/utils/constantData";
import {getTranStatus} from "@/api/comon";
import MathCalculator from "@/utils/bigNumberUtil";
import {message} from "ant-design-vue";
const calculator = new MathCalculator();
export default {
  name: "MarginManage",
  data() {
    return {
      tradeOnloading:false,
      amount: undefined,
      balance: 0,
      activeNav: 0
    }
  },
  props: ["positionObj", "coinInfo", "initData", "setLoading","closeMarginManage"],
  computed: {
    ...mapGetters([
      'isConnected',
      'account'
    ]),
    tokenPriceMap() {
      return this.$store.state.perpetual.priceMap
    },
  },
  watch: {
    isConnected(){
      this.getBalance()
    },
    account() {
      this.getBalance()
    }
  },
  methods: {
    updateAmount() {
      let value = this.amount.replace(/[^\d.]/g, '');
      const parts = value.split('.');
      let integerPart = parts[0];
      let decimalPart = parts[1];
      if (decimalPart && decimalPart.length > 2) {
        decimalPart = decimalPart.slice(0, 2);
      }
      value = decimalPart ? `${integerPart}.${decimalPart}` : integerPart;
      this.amount = value;
    },
    getMargin(item) {
      let amount = 0
      if(this.amount){
        amount = this.amount
      }
      if(this.activeNav==1){
        amount = -amount
      }
      let margin = calculator.add(item.collateral, item.pnl)
      margin = calculator.add(margin,amount)
      return this.dealNum(margin)
    },
    marginRatio(item) { //???????????????
      let amount = 0
      if(this.amount){
        amount = this.amount
      }
      if(this.activeNav==1){
        amount = -amount
      }
      const price = this.tokenPriceMap[item.index_token]
      let worth = calculator.add(item.collateral, item.pnl)
      worth = calculator.add(worth, amount)

      return this.dealNum(worth / (price * item.size / item.leverage) * 100)
    },
    async getBalance() {
      if (!this.isConnected) {
        return
      }
      let res = await this.$store.dispatch("erc20/balanceOf", {
        address: addressMap.usdt,
        account: this.$store.state.app.account,
      })
      this.balance = res / USDCDECIMALS
    },
    dealNum(val) {
      if ((val)) {
        return val ? (parseInt(Number(val) * 100) / 100) : 0
      }
      return 0
    },
    setMax() {
      this.amount = 0
      if(this.activeNav==0){
        this.amount = BigNumber(this.balance).toFixed(2,BigNumber.ROUND_DOWN)
      }else{
        const price = this.tokenPriceMap[this.positionObj.index_token]
        const worth = calculator.divide(calculator.multiply(price ,this.positionObj.size),this.positionObj.leverage)* MARGINRATIO
        this.amount= BigNumber(calculator.subtract(this.getMargin(this.positionObj) , worth)).toFixed(2,BigNumber.ROUND_DOWN)
      }
    },
    async trade() {
      if(this.marginRatio(this.positionObj) < MARGINRATIO*100){
        message.error("Margin Ratio should > "+ MARGINRATIO*100)
        return
      }
      this.tradeOnloading = true
      this.$store.dispatch("vault/updateCollateral", {
        _indexToken: this.positionObj.index_token,
        _collateralDelta: BigNumber(this.amount * USDCDECIMALS).toFixed(0),
        _collateralDeltaInIO: this.activeNav == 0 ? true : false,
      }).then(async (res) => {
        this.tradeOnloading = false

        this.$message.info((this.activeNav == 0 ? 'Add' : 'Remove') + ' success');
        this.amount = 0
        let statusRes = await getTranStatus(res.blockHash)
        this.$emit("setLoading", true)
        if (statusRes.data.data == 1) {
          setTimeout(() => {
            this.$emit("initData")
            this.$emit("setLoading", false)
            this.$emit("closeMarginManage")
          }, 2000)
        }
      }).catch((e) => {
        console.log(e)
        this.tradeOnloading = false
        if(e&&e.message){
          this.$message.info(e.message);
        }else{
          this.$message.info(e);
        }
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
