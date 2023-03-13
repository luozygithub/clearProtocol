<template>
  <div class="pool-view">
    <div class="pool-contain">
      <div class="pool-view-header">
        <div class="title">
          Add Liquidity
        </div>
      </div>

      <div class="pool-content">
        <div class="pool-content-left">
          <div class="input-name">
            Asset
          </div>
          <div class="input-box usdc">
            Tether US USDC
          </div>
          <div class="input-name">
            Amount
          </div>
          <div class="input-box">
            <input type="number" step="any" v-model="amount" placeholder="0.00">
            <button class="max-btn" @click="amount=balance">
              MAX
            </button>
            <span>
              USDC
            </span>
          </div>
          <div class="input-bottom">
            <div class="left">
              Wallet
            </div>
            <div class="right">
              {{ balance }}
              <span>USDC</span>
            </div>
          </div>

          <button class="operate " @click="approve" v-show="usdcAllowance<10||usdcAllowance<amount">
            Approve
          </button>
          <button class="operate " v-show="usdcAllowance>10||usdcAllowance>amount"
                  @click="add">
            Add
          </button>
        </div>
        <div class="pool-content-right">
          <div class="info-box">
            <div class="info-item">
              <div class="name">
                Pool Size
              </div>
              <div class="value">
                <span>0.0000</span>
                USDC
              </div>
              <div class="add">
                Adding
              </div>
            </div>
            <div class="info-item">
              <div class="name">
                Rewards/1K
              </div>
              <div class="value">
                <span>0.00</span>
                USDC
              </div>
              <div class="add" style="color: #63CE63;">
                Est. Rewards
              </div>
            </div>
          </div>
          <div class="info-list">
            <div class="list-item">
              <div class="name">
                Total Balance
              </div>
              <div class="item-content">
                <span>0.0000</span>
                USDC
              </div>
            </div>
            <div class="list-item">
              <div class="name">
                PNL
              </div>
              <div class="item-content">
                <span>0.0000</span>
                USDC
                <div class="info">
                  Add to earn rewards
                </div>
              </div>
            </div>
            <div class="list-item">
              <div class="name">
                Executed
              </div>
              <div class="item-content">
                <span>0.0000</span>
                USDC
              </div>
            </div>
            <div class="list-item">
              <div class="name">
                Available
              </div>
              <div class="item-content">
                <span>{{ canWithdrawNum }}</span>
                USDC
                <div class="info">
                  <button class="operate" @click="isShowWithdraw=true" :class="{'active':canWithdrawNum>0}" :disabled="canWithdrawNum<=0">
                    Withdraw
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Withdraw v-show="isShowWithdraw" @getData="getData" :CLPBalance="CLPBalance" :canWN="canWithdrawNum" @closeWithdraw="isShowWithdraw = false"></Withdraw>
  </div>
</template>

<script>
import Withdraw from "@/components/Withdraw";
import {mapGetters} from "vuex";
import addressMap from "@/abi/addressMap";
import {USDCDECIMALS, POORACCURACY} from "../utils/constantData"
import BigNumber from "bignumber.js";
import MathCalculator from "@/utils/bigNumberUtil";

var calculator = new MathCalculator();
export default {
  name: "PoolView",
  components: {Withdraw},
  data() {
    return {
      usdcAllowance: 0,
      amount: undefined,
      balance: 0,
      isShowWithdraw: false,
      CLPTotalSupply: 0,
      CLPBalance: 0,
      Aum: 0
    }
  },
  computed: {
    ...mapGetters([
      'isConnected',
      'account'
    ]),
    canWithdrawNum() {
      let num = 0
      if (this.CLPTotalSupply > 0) {
        num = BigNumber(calculator.divide(calculator.divide(calculator.multiply(this.CLPBalance, this.Aum), POORACCURACY), this.CLPTotalSupply)).toFixed(4)
      }
      return num
    }
  },
  watch: {
    account() {
      this.getData()
    }
  },
  methods: {
    async getAum() {
      let res = await this.$store.dispatch("vaultUtil/getAum",)
      this.Aum = res
    },
    async getTotalSupply() {
      let res = await this.$store.dispatch("CLP/totalSupply",)
      this.CLPTotalSupply = res
    },
    async CLPBalanceOf() {
      let res = await this.$store.dispatch("CLP/balanceOf", {
        account: this.account
      })
      this.CLPBalance = res/ USDCDECIMALS
    },
    async allowance() {
      if (!this.isConnected) {
        return
      }
      let res = await this.$store.dispatch("erc20/allowance", {
        address: addressMap.usdt,
        spender: addressMap.CLP,
        owner: this.account
      })
      if (res > 0) {
        this.usdcAllowance = parseInt(res) / 10 ** 6
      }
    },
    approve() {
      if (!this.isConnected) {
        this.$message.info('Please connect');
        return
      }
      this.$store.dispatch("erc20/approve", {
        address: addressMap.usdt,
        spender: addressMap.CLP,
        amount: this.$store.state.app.web3.utils.toWei((10 ** 10).toString()).toString()
      }).then(() => {
        this.allowance()
      })
    },
    async getBalance() {
      if (!this.isConnected) {
        return
      }
      let res = await this.$store.dispatch("erc20/balanceOf", {
        address: addressMap.usdt,
        account: this.account,
      })
      this.balance = BigNumber(res / USDCDECIMALS).toFixed(2)
    },
    add() {
      if (!this.amount || this.amount <= 0) {
        this.$message.info('Please input amount');
        return
      }
      this.$store.dispatch("CLP/mint", {
        _usdAmount: this.amount * USDCDECIMALS
      }).then(() => {
        this.$message.success('Add success');
        this.getData()
      }).catch((e) => {
        this.$message.info(e);
      })
    },
    getData() {
      if (this.isConnected) {
        this.allowance()
        this.getBalance()
        this.getAum()
        this.getTotalSupply()
        this.CLPBalanceOf()
      }
    }
  },
  created() {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
.pool-view {
  width: 100%;
  min-height: 100vh;

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

  .pool-contain {
    margin: 20px auto;
    width: 756px;
    height: 454px;
    background: #FFFFFF;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
  }

  .operate {
    cursor: pointer;
    width: 156px;
    height: 36px;
    background: rgba(14, 29, 81, 0.8);
    border-radius: 19px;
    color: #fff;
    border: none;
    text-align: center;
    line-height: 30px;
    font-size: var(--font-size14);

    &:active {
      transform: translate(1px, 1px);
    }
  }

  .pool-view-header {
    padding: 15px 20px;
    border-bottom: 1px solid #ECECEE;

    .title {
      font-size: var(--font-size14);
      font-family: AvertaStd-Semibold, AvertaStd, sans-serif;
      font-weight: 600;
      color: #0E1D51;
      line-height: var(--line-height17);
    }
  }

  .pool-content {
    padding: 0 20px;
    height: 100%;
    display: flex;

    .pool-content-left {
      height: 100%;
      overflow: hidden;
      width: 520px;
      border-right: 1px solid #ECECEE;

      .usdc {
        width: 260px;
        height: 36px;
        background: #F5F5F5;
        line-height: 36px;
        border-radius: 18px;
        opacity: 0.7;
        border: 1px solid rgba(205, 208, 227, 0.65);
        text-align: center;
        font-size: var(--font-size14);
        font-family: AvertaStd-Regular, AvertaStd;
        font-weight: 400;
        color: #0E1D51;
        user-select: none;
      }

      .operate {
        margin-top: 36px;
        width: 260px;
        font-family: AvertaStd-Bold, AvertaStd;
        font-weight: bold;
      }

      .input-name {
        margin-top: 20px;
        padding-bottom: 10px;
        font-size: var(--font-size14);
        font-family: AvertaStd-Regular, AvertaStd, sans-serif;
        font-weight: 400;
        color: #8F97AA;
        line-height: var(--font-size14);
      }

      .input-box {
        position: relative;
        width: 260px;

        input {
          width: 260px;
          height: 36px;
          background: #F5F5F5;
          border-radius: 18px;
          opacity: 0.7;
          border: 1px solid rgba(205, 208, 227, 0.65);
          padding: 0 20px;
        }

        .max-btn {
          border: none;
          position: absolute;
          right: 70px;
          top: 6px;
          text-align: center;
          cursor: pointer;
          width: 44px;
          height: 24px;
          font-size: var(--font-size14);
          background: #0E1D51;
          border-radius: 5px;
          color: #fff;
          font-family: AvertaStd-Regular, AvertaStd;
        }

        span {
          position: absolute;
          right: 20px;
          top: 10px;
          font-size: var(--font-size14);
          font-family: AvertaStd-Regular, AvertaStd, sans-serif;
          font-weight: 400;
          color: #0E1D51;
          line-height: var(--font-size14);
        }
      }

      .input-bottom {
        width: 260px;
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        font-size: var(--font-size14);
        font-family: AvertaStd-Regular, AvertaStd;
        font-weight: 400;
        color: #8F97AA;
        line-height: var(--font-size14);

        .right {
          color: #0E1D51;

        }

      }
    }

    .pool-content-right {
      padding: 20px;
      flex-grow: 1;

      .info-box {
        display: flex;

        .info-item {
          width: 50%;
          font-size: var(--font-size14);
          font-family: AvertaStd-Regular, AvertaStd;

          .name {
            font-weight: 400;
            color: #8F97AA;
            line-height: var(--line-height18);
          }

          span {
            margin-right: 5px;
            color: #0E1D51;
          }

          .add {
            color: #4363CC;
          }
        }
      }

      .info-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 30px;
        width: 100%;

        .list-item {
          margin-top: 15px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 190px;
          height: 122px;
          padding: 20px;
          background: #FFFFFF;
          box-shadow: 0px 2px 15px 10px rgba(229, 237, 240, 0.33);
          border-radius: var(--font-size12);

          .name {
            font-size: var(--font-size14);
            font-weight: 400;
            color: #8F97AA;
            line-height: var(--font-size14);
            font-family: AvertaStd-Regular, AvertaStd;
          }

          .item-content {
            height: 40px;
            font-size: var(--font-size12);
            color: #8F97AA;
            line-height: var(--line-height15);
            position: relative;
            font-family: AvertaStd-Regular, AvertaStd;

            span {
              color: #0E1D51;
            }

            .info {
              margin-top: 8px;

            }

            .operate {
              width: 79px;
              height: 20px;
              border-radius: var(--font-size12);
              border: 1px solid #E6E7F0;
              background: none;

              font-size: var(--font-size12);
              line-height: var(--line-height18);
              margin-top: 8px;
              position: absolute;
              right: 0;
              color: #E6E7F0;

              &.active {
                color: #0E1D51;
                border: 1px solid #0E1D51;
              }
            }
          }
        }
      }
    }
  }

  //@media only screen and (-webkit-min-device-pixel-ratio: 2),
  //only screen and (min--moz-device-pixel-ratio: 2),
  //only screen and (min-resolution: 192dpi){
  //  .pool-contain {
  //    width: 1000px;
  //    height: 500px;
  //  }
  //  .input-box {
  //    width: 360px;
  //  }
  //  .info-list {
  //    .list-item {
  //      width: 300px !important;
  //      height: 130px !important;
  //
  //      .operate {
  //        width: 100px !important;
  //        height: 34px !important;
  //        bottom: 6px;
  //
  //      }
  //    }
  //  }
  //
  //}
}
</style>
