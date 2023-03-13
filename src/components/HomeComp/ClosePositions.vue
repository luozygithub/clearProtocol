<template>
  <div class="ClosePosition">
    <div class="mask"></div>
    <div class="margin-content">
      <div class="header">
        <div class="title">
          Close
        </div>
        <svg t="1677826899914" @click="$emit('closeClosePosition')" class="icon close" viewBox="0 0 1024 1024"
             version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5251" id="mx_n_1677826899918" width="14"
             height="14">
          <path
              d="M570.514286 512l292.571428-292.571429c14.628571-14.628571 14.628571-43.885714 0-58.514285-14.628571-14.628571-43.885714-14.628571-58.514285 0l-292.571429 292.571428-292.571429-292.571428c-14.628571-14.628571-43.885714-14.628571-58.514285 0-21.942857 14.628571-21.942857 43.885714 0 58.514285l292.571428 292.571429-292.571428 292.571429c-14.628571 14.628571-14.628571 43.885714 0 58.514285 14.628571 14.628571 43.885714 14.628571 58.514285 0l292.571429-292.571428 292.571429 292.571428c14.628571 14.628571 43.885714 14.628571 58.514285 0 14.628571-14.628571 14.628571-43.885714 0-58.514285l-292.571428-292.571429z"
              fill="#0E1D51" p-id="5252"></path>
        </svg>
      </div>
      <div class="content">
        <div class="info-flex">
          <div class="left">
            <div class="title">
              Margin
            </div>
            <div class="value">
              Add Margin
            </div>
          </div>
          <div class="right">
            <div class="title">
              Account Balance
            </div>
            <div class="value">
              {{dealNum(balance)}}
            </div>
          </div>
        </div>
        <div class="title">
          Close
        </div>
        <div class="info-list">
          <div class="row">
            <div class="name">
              Margin Amount
            </div>
            <div class="value">
              {{ positionObj.collateral? positionObj.collateral:0}}
            </div>
          </div>
          <div class="row">
            <div class="name">
              PNL
            </div>
            <div class="value">
              {{ positionObj.pnl? positionObj.pnl:0}}
            </div>
          </div>
          <div class="row">
            <div class="name">
              Fee
            </div>
            <div class="value">
              {{fee}}
            </div>
          </div>
          <div class="row">
            <div class="name">
              Balance
            </div>
            <div class="value">
              {{ dealNum(parseFloat(positionObj.collateral) + parseFloat(positionObj.pnl)) }}
            </div>
          </div>
        </div>
<!--        <div class="title">-->
<!--          Slippage Tolerance-->
<!--        </div>-->
<!--        <div class="slip-box">-->
<!--          <div class="input-box">-->
<!--            <input type="number" v-model="slipValue" placeholder="0.000">-->
<!--            <div class="rate-icon">-->
<!--              %-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="rate-btn" @click="slipValue=1">-->
<!--            1%-->
<!--          </div>-->
<!--          <div class="rate-btn"  @click="slipValue=1.5">-->
<!--            1.5%-->
<!--          </div>-->
<!--          <div class="rate-btn"  @click="slipValue=2">-->
<!--            2%-->
<!--          </div>-->
<!--        </div>-->
        <button class="operate confim" @click="trade">
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import MathCalculator from "../../utils/bigNumberUtil"
import BigNumber from "bignumber.js";
import {USDCDECIMALS,POORACCURACY,DECIMALS18} from "@/utils/constantData";
import addressMap from "@/abi/addressMap";
import {getTranStatus} from "@/api/comon";

var calculator = new MathCalculator();

export default {
  name: "ClosePosition",
  data() {
    return {
      slipValue: undefined,
      amount:undefined,
      balance:0
    }
  },
  computed: {
    ...mapGetters([
      'isConnected',
      'account'
    ]),
    fee(){
      return BigNumber(calculator.multiply(calculator.multiply(this.positionObj.size,this.feeRate),this.coinInfo.index_price)).toFixed(6)
    }
  },
  watch:{
    account(){
      this.getBalance()
    }
  },
  props:["positionObj","coinInfo","feeRate","updateData","setLoading"],
  created() {
    this.getBalance()
  },

  methods:{
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
    },
    close(){
      if(!this.slipValue||this.slipValue<=0){
        this.$message.info('Please input slip value');
        return
      }
    },
    async trade() {
      if (!this.isConnected) {
        this.$message.info('Please connect');
        return
      }
      let price = await this.$store.dispatch("vault/getPrice", {
        _indexToken: this.positionObj.index_token
      })

      let direction = true, pnl =0
      let newWorth = calculator.multiply(calculator.divide(price,DECIMALS18) , this.positionObj.size)
      let oldWOrth = calculator.multiply(this.positionObj.average_price,this.positionObj.size)
      if(this.positionObj.direction==1){
        direction = true
        pnl = calculator.subtract( newWorth,oldWOrth )
      }else{
        direction = false
        pnl = calculator.subtract( oldWOrth,newWorth )
      }


      // let fee1 = parseInt(this.feeRate * (this.positionObj.size + 10) * price / 10**12)
      let worth = calculator.add(this.positionObj.collateral,pnl)
      let fee = calculator.divide(calculator.multiply(calculator.multiply(this.positionObj.size,this.feeRate),price),POORACCURACY)
      let _collateralDelta = calculator.subtract(calculator.multiply(worth,USDCDECIMALS)  ,fee)

      this.$store.dispatch("vault/updatePosition", {
        _indexToken: this.positionObj.index_token,
        _leverage: this.positionObj.leverage,
        _sizeDelta: BigNumber(this.positionObj.size * 10 ** 6).toFixed(0),
        _collateralDelta: parseInt(_collateralDelta),
        _indexPrice: price,
        _direction: !direction,
        _collateralDeltaInIO: false
      }).then(async (res)=> {
        this.$message.info('Close success');
        let statusRes = await getTranStatus(res.blockHash)
        this.$emit("setLoading", true)
        if (statusRes.data.data == 1) {
          setTimeout(() => {
            this.$emit("updateData")
            this.$emit("setLoading",false)
          }, 2000)
        }
      }).catch((e)=>{
        this.$message.info(e);
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.ClosePosition {
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
    position: fixed;
    padding-bottom: 30px;
    z-index: 10;
    top: 20%;
    left: calc(50% - 200px);
    background: #FFFFFF;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
    border-radius: 18px;
  }

  button {
    user-select: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:focus-visible {
    outline: none;
  }

  input {
    border: none;
    padding: 0 20px;
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

    .slip-box {
      display: flex;
      align-items: center;

      .input-box {
        position: relative;
        flex-grow: 1;

        input {
          height: 34px;
          background: #F2F2F3;
          border-radius: 18px;
          color: #111;
          border: 1px solid #0E1D51;
          width: 100%;
        }

        .rate-icon {
          position: absolute;
          right: 10px;
          top: 6px;
          height: 24px;
          color: #0E1D51;
          border-radius: 12px;
          font-size: 14px;
          font-family: AvertaStd-Regular, AvertaStd;
          font-weight: 400;
          text-align: center;
          cursor: pointer;
          line-height: 24px;
        }
      }

      .rate-btn {
        padding: 0 6px;
        height: 24px;
        margin-left: 6px;
        border-radius: 5px;
        border: 1px solid #0E1D51;
        font-size: 14px;
        font-family: AvertaStd-Regular, AvertaStd;
        font-weight: 400;
        color: #0E1D51;
        text-align: center;
        line-height: 24px;
        cursor: pointer;
      }
    }


    .info-flex {
      display: flex;
      justify-content: space-between;

      .value {
        font-size: 14px;
        font-family: AvertaStd-Regular, AvertaStd;
        font-weight: 400;
        color: #0E1D51;
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
