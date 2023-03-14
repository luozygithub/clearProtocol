<template>
  <div class="vault-record">
    <a-spin :spinning="isLoading">
      <div class="right-part3">
        <div class="right-part3-nav">
          <div class="nav-item" :class="{'active':activeNav==0}" @click="activeNav=0">
            Positions
          </div>
          <div class="nav-item" :class="{'active':activeNav==1}" @click="activeNav=1">
            Close Positions
          </div>
          <div class="nav-item" :class="{'active':activeNav==2}" @click="activeNav=2">
            Action History
          </div>
          <div class="nav-item" :class="{'active':activeNav==3}" @click="activeNav=3">
            Funding Rate
          </div>
        </div>
        <div class="nav1-content" v-show="activeNav==0">
          <div class="table-header">
            <div class="col">
              Contract
            </div>
            <div class="col">
              Side
            </div>
            <div class="col">
              Size
            </div>
            <div class="col">
              Leverage
            </div>
            <div class="col">
              Entry Price
            </div>
            <div class="col">
              Liquidation Price
            </div>
            <div class="col">
              Margin/Margin Ratio
            </div>
            <div class="col">
              Unrealized PNL
            </div>
            <div class="col">
              Actions
            </div>
          </div>
          <div class="row" v-show="parseFloat(item.size)>0"
               :class="{'blink': isShowTempPosition && activeTokenName==item.name}"
               v-for="(item,index) in positionArr" :key="index">
            <div class="col">
              {{ item.name }}<span class="usdc">/USDC</span>
            </div>
            <div class="col ">
              <div class="side" :class="{'down':item.direction!=1 }">
                {{ item.direction == 1 ? "Long" : "Short" }}
              </div>
            </div>
            <div class="col">
              {{ dealD6Num(item.size) }}
            </div>
            <div class="col">
              {{ item.leverage }}x
            </div>
            <div class="col">
              {{ dealNum(item.average_price) }}
            </div>
            <div class="col">
              {{ getLQP(item) }}
            </div>

            <div class="col">
                <span>
                     {{ getMargin(item) }}/{{ marginRatio(item) }}%
                </span>
            </div>
            <div class="col">
              {{ getPNL(item) }}
            </div>
            <div class="col operate-box">
              <button class="operate" :disabled="isShowTempPosition && activeTokenName==item.name" :class="{'onOperate': isShowTempPosition && activeTokenName==item.name}" @click="isShowMarginManage=true,clickPosition = item">
                Margin Manage
              </button>
              <button class="operate"  :disabled="isShowTempPosition && activeTokenName==item.name" :class="{'onOperate': isShowTempPosition && activeTokenName==item.name}" @click="isShowClosePosition=true ,clickPosition = item">
                Close
              </button>
            </div>
          </div>
        </div>
        <div class="nav2-content" v-show="activeNav==1">
          <div class="table-header">
            <div class="col">
              Contract
            </div>
            <div class="col">
              Side
            </div>
            <div class="col">
              Size
            </div>
            <div class="col">
              Fill Price
            </div>
            <div class="col">
              Fee
            </div>
            <div class="col">
              Realized PNL
            </div>
            <div class="col">
              Time
            </div>
          </div>
          <div class="row" v-for="(item,index) in profitArr" :key="index">
            <div class="col">
              {{ item.name }}<span class="usdc">/USDC</span>
            </div>
            <div class="col ">
              <div class="side" :class="{'down':item.direction!=1 }">
                {{ item.direction == 1 ? "Long" : "Short" }}
              </div>
            </div>
            <div class="col">
              {{ dealD6Num(item.size_delta) }}
            </div>
            <div class="col">
              {{ dealNum(item.index_price) }}
            </div>
            <div class="col">
              {{ dealFeeNum(item.transaction_fee) }}
            </div>
            <div class="col">
              {{ dealD6Num(item.pnl) }}
            </div>
            <div class="col">
              {{ formatTime(item.updated_at) }}
            </div>
          </div>
          <div class="pagination">
            <a-pagination
                size="small"
                show-size-changer
                v-model="current1"
                :total="total1"
                @showSizeChange="onShowSizeChange1"
            />
          </div>
        </div>
        <div class="nav3-content" v-show="activeNav==2">
          <div class="table-header">
            <div class="col">
              Time
            </div>
            <div class="col">
              Contract
            </div>
            <div class="col">
              Side
            </div>
            <div class="col">
              Size
            </div>
            <div class="col">
              Leverage
            </div>
            <div class="col">
              Fill Price
            </div>
            <div class="col">
              Fee
            </div>
          </div>
          <div class="row" v-for="(item,index) in recordArr" :key="index">
            <div class="col">
              {{ formatTime(item.updated_at)  }}
            </div>
            <div class="col">
              {{ item.name }} <span class="usdc">/USDC</span>
            </div>
            <div class="col">
              <div class="side" :class="{'down':item.direction!=1 }">
                {{ item.direction == 1 ? "Long" : "Short" }}
              </div>
            </div>
            <div class="col">
              {{ dealD6Num(item.size_delta) }}
            </div>
            <div class="col Leverage">
              {{ dealNum(item.leverage) }}x

            </div>
            <div class="col Fill Price">
              {{ dealNum(item.index_price) }}

            </div>
            <div class="col">
              ${{ dealFeeNum(item.transaction_fee / 10 ** 6) }}
            </div>
          </div>
          <div class="pagination">
            <a-pagination
                size="small"
                show-size-changer
                v-model="current2"
                :total="total2"
                @showSizeChange="onShowSizeChange2"
            />
          </div>
        </div>
        <div class="nav4-content" v-show="activeNav==3">
          <div class="table-header">
            <div class="col">
              Contract
            </div>
            <div class="col">
              Funding Rate
            </div>
            <div class="col">
              Funding Payment
            </div>
            <div class="col">
              Time
            </div>
          </div>
          <div class="row" v-for="(item,index) in fundingFeeArr" :key="index">
            <div class="col">
              {{ item.name }}<span class="usdc">/USDC</span>
            </div>
            <div class="col">
              {{ dealD6Num(item.funding_fee_rate) }}%
            </div>
            <div class="col">
              {{ dealNum(item.funding_fee) }}
            </div>
            <div class="col">
              {{item.time }}
            </div>
          </div>
          <div class="pagination">
            <a-pagination
                size="small"
                show-size-changer
                v-model="current3"
                :total="total3"
                @showSizeChange="onShowSizeChange3"
            />
          </div>
        </div>
      </div>
    </a-spin>
    <MarginManage v-show="isShowMarginManage" @setLoading="setLoading" :coin-info="coinInfo" :positionObj="clickPosition"
                  @closeMarginManage="isShowMarginManage = false" @initData="updateData"/>
    <ClosePositions :feeRate="feeRate" v-show="isShowClosePosition" :coin-info="coinInfo" :positionObj="clickPosition"
                    @closeClosePosition="isShowClosePosition = false" @setLoading="setLoading" @updateData="updateData"/>
  </div>
</template>

<script>
import {formatTime} from "@/utils/timeUtil";
import {getFundingFee, getProfit, getRecord} from "@/api/vault";
import {mapGetters} from "vuex";
import MathCalculator from "@/utils/bigNumberUtil";

const calculator = new MathCalculator();
import ClosePositions from "@/components/HomeComp/ClosePositions";
import MarginManage from "@/components/HomeComp/MarginManage";
import {MARGINRATIO} from "@/utils/constantData";
import BigNumber from "bignumber.js";

export default {
  name: "vaultReacord",
  props: ["positionArr", "coinInfo", "feeRate", "configInfo", "activeTokenName", "isShowTempPosition","updatePosition"],
  components: {
    ClosePositions,
    MarginManage
  },
  data() {
    return {
      formatTime,
      total1:10,
      total2:10,
      total3:10,
      current1:0,
      pageSize1:10,
      current2:0,
      pageSize2:10,
      current3:0,
      pageSize3:10,
      isLoading: false,
      isShowClosePosition: false,
      isShowMarginManage: false,
      activeNav: 0,
      recordArr: [],
      fundingFeeArr: [],
      profitArr: [],
      clickPosition: {},
    }
  },
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
    account() {
      this.initData()
    },
    current1(val) {
      this.getProfitData(val)
    },
    current2(val) {
      this.getRecordData(val)
    },
    current3(val) {
      this.getFundingFeeData(val)
    },
  },
  mounted() {
    this.initData()
  },
  methods: {
    onShowSizeChange1(current, pageSize){
      this.pageSize1 = pageSize
      this.getProfitData(current)
    },
    onShowSizeChange2(current, pageSize){
      this.pageSize2 = pageSize
      this.getRecordData(current)
    },
    onShowSizeChange3(current, pageSize){
      this.pageSize3 = pageSize
      this.getFundingFeeData(current)
    },
    updateData(){
      this.$emit("updatePosition")
      this.initData()
    },
    setLoading(val) {
      this.isLoading = val
    },
    getPNL(item) {
      const price = this.tokenPriceMap[item.index_token]
      const worth = calculator.multiply(item.average_price, item.size)//抵押物价值 (*杠杆)
      const positionWorth = calculator.multiply(item.size, price) //仓位价值（*杠杆）
      let pnl = 0
      if (item.direction == 1) {
        pnl = BigNumber(calculator.subtract(positionWorth, worth)).toFixed(2)
      } else {
        pnl = BigNumber(calculator.subtract(worth, positionWorth)).toFixed(2)
      }
      item.pnl = pnl
      return pnl
    },
    getMargin(item) {
      let margin = calculator.add(item.collateral, item.pnl)
      return this.dealNum(margin)
    },
    marginRatio(item) { //计算保证金
      const price = this.tokenPriceMap[item.index_token]
      let worth = calculator.add(item.collateral, item.pnl)
      return this.dealNum(worth / (price * item.size / item.leverage) * 100)
    },
    async getProfitData(val) {
      if(val){
        this.current1 = val
      }
      let res = await getProfit(this.account,this.current1*this.pageSize1,this.pageSize1)
      this.profitArr = res.data.data
      this.total1 = res.data.extra.total
    },

    getLQP(item) {
      // const price = this.tokenPriceMap[item.index_token]
      const worth = calculator.multiply(item.average_price, item.size) //抵押物价值 开仓价*size
      const positionWorth = calculator.multiply(item.size, item.average_price) //仓位价值 (当时)
      const LQSize = calculator.divide(calculator.multiply(item.size, MARGINRATIO), item.leverage)
      if (item.direction == 1) { //多 Long
        let data1 = calculator.subtract(calculator.divide(worth, item.leverage), positionWorth)
        let data2 = calculator.subtract(LQSize, item.size)
        let liqV = calculator.divide(data1, data2)
        return liqV >= 0 ? BigNumber(liqV).toFixed(2) : 0
      } else {//空 Short
        let data1 = calculator.add(calculator.divide(worth, item.leverage), positionWorth)
        let data2 = calculator.add(LQSize, item.size)
        let liqV = calculator.divide(data1, data2)
        return liqV >= 0 ? BigNumber(liqV).toFixed(2) : 0
      }
    },
    async getRecordData(val) {
      if(val){
        this.current2 = val
      }
      let res = await getRecord(this.account,this.current2*this.pageSize2,this.pageSize2)
      this.recordArr = res.data.data
      this.total2 = res.data.extra.total
    },
    async getFundingFeeData(val) {
      if(val){
        this.current3 = val
      }
      let res = await getFundingFee(this.account,this.current3*this.pageSize3,this.pageSize3)
      this.fundingFeeArr = res.data.data
      this.total3 = res.data.extra.total
    },
    initData() {
      this.getRecordData()
      this.getFundingFeeData()
      this.getProfitData()
    },
    dealD6Num(val) {
      if ((val)) {
        return val ? (parseInt(Number(val) * 1000000) / 1000000) : 0
      }
      return 0
    },
    dealFeeNum(val) {
      if (val == 0) {
        return 0
      }
      if (val < 0.00001) {
        return "<0.00001"
      }
      if ((val)) {
        return val ? (parseInt(Number(val) * 1000000) / 1000000) : 0
      }
      return 0
    },
    dealNum(val) {
      if ((val)) {
        return val ? (parseInt(Number(val) * 100) / 100) : 0
      }
      return 0
    },
  }
}
</script>

<style lang="scss" scoped>
@keyframes blink {
  0% {
    background-color: #fff;
    transform: scale(1);
  }
  50% {
    background-color: #ccc;
    transform: scale(0.99);
    box-shadow: 0 0 3px inset;
  }
  100% {
    background-color: #fff;
    transform: scale(1);
  }
}

.blink {
  animation: blink 10s ease forwards;
}

.right-part3 {
  border-radius: 8px;
  background: #FFFFFF;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
}

.right-part3 {
  margin-top: 15px;

  .right-part3-nav {
    display: flex;
    padding: 15px 0 10px;

    .nav-item {
      padding: 6px 15px;
      font-size: var(--font-size14);
      font-family: AvertaStd-Regular, AvertaStd, sans-serif;
      font-weight: 400;
      color: rgba(14, 29, 81, 0.5);
      line-height: var(--line-height17);
      cursor: pointer;

      &:first-child {
        //padding-left: 0;
      }

      &.active {
        font-weight: bold;
        color: #0E1D51;
      }
    }
  }

  .nav1-content, .nav2-content, .nav3-content, .nav4-content {
    .col {
      text-align: center;

      &:nth-child(1) {
        padding-left: 0;
        text-align: left;
      }

      &:last-child {
        text-align: left;
      }

      &:nth-child(1) {
        width: 60px;
      }

      &:nth-child(2) {
        width: 50px;
      }

      &:nth-child(3) {
        width: 50px;
      }

      &:nth-child(4) {
        width: 50px;
      }

      &:nth-child(5) {
        width: 95px;
      }

      &:nth-child(6) {
        width: 126px;
      }

      &:nth-child(7) {
        width: 152px;
      }

      &:nth-child(8) {
        width: 110px;
      }

      &:nth-child(9) {
        min-width: 110px;
      }
    }

    .row {
      border-bottom: 1px solid #ECECEE;
      padding: 6px 15px;
      display: flex;
      align-items: center;
      font-size: var(--font-size12);
      font-family: AvertaStd-Regular, AvertaStd, sans-serif;
      font-weight: 400;
      color: #0E1D51;
      line-height: 15px;

      &:last-child {
        border-bottom: none
      }
      .usdc{
        transform: scale(0.8);
        color: #aaa;
      }
      .side {
        width: 40px;
        margin: 0 auto;
        text-align: center;
        padding: 2px 4px;
        background: #63CE63;
        border-radius: 2px;
        color: #fff;

        &.down {
          background: #E32A20;
        }
      }

      .operate-box {
        display: flex;

        .operate {
          width: auto;
          padding: 3px 6px;
          height: auto;
          border-radius: 10px;
          border: 1px solid #0E1D51;
          font-size: var(--font-size12) !important;
          font-family: AvertaStd-Regular, AvertaStd;
          font-weight: 400;
          color: #0E1D51;
          line-height: 15px;
          background: #fff;
          &.onOperate{
            border: 1px solid #eee!important;
            color: #aaa;
          }
          &:last-child {
            margin-left: 6px;
          }
        }

      }
    }
    .pagination{
      padding: 10px 0;
      text-align: center;
    }
    .table-header {
      display: flex;
      padding: 10px 15px;
      border-bottom: 1px solid #ECECEE;

      .col {
        font-size: var(--font-size12);
        font-family: AvertaStd-Regular, AvertaStd, sans-serif;
        font-weight: 400;
        color: #9CA3B4;
        line-height: 15px;

        &:last-child {
          text-align: left;
        }
      }
    }
  }

  .nav2-content {
    .col {
      &:nth-child(1) {
        width: 70px;
      }

      &:nth-child(2) {
        width: 60px;
      }

      &:nth-child(3) {
        width: 60px;
      }

      &:nth-child(4) {
        width: 100px;
      }

      &:nth-child(5) {
        width: 100px;
      }

      &:nth-child(6) {
        width: 130px;
      }

      &:nth-child(7) {
        width: 160px;
      }

      &:nth-child(8) {
        width: 120px;
      }

      &:nth-child(9) {
        min-width: 160px;
      }
    }
  }

  .nav3-content {
    .col {
      &:nth-child(1) {
        width: 200px;
      }

      &:nth-child(2) {
        width: 80px;
      }

      &:nth-child(3) {
        width: 60px;
      }

      &:nth-child(4) {
        width: 100px;
      }

      &:nth-child(5) {
        width: 100px;
      }

      &:nth-child(6) {
        width: 130px;
      }

      &:nth-child(7) {
        width: 160px;
      }

      &:nth-child(8) {
        width: 120px;
      }

      &:nth-child(9) {
        min-width: 160px;
      }
    }
  }

  .nav4-content {
    .col {
      &:nth-child(1) {
        width: 80px;
      }

      &:nth-child(2) {
        width: 120px;
      }

      &:nth-child(3) {
        width: 160px;
      }

      &:nth-child(4) {
        width: 300px;
      }

    }
  }
}
</style>
