<template>
  <div class="home" :style="'left:'+(!collapsed? 200 : 66) +'px;'+ 'width:calc(100vw - '+(collapsed?66:200)+'px)'">
    <div class="content-box">
      <div class="left-content-box">
        <div class="left-content-container">
          <div class="left-header">
            <a-dropdown>
              <template #overlay>
                <a-menu @click="handleMenuClick">
                  <a-menu-item key="1" >
                    <div class="coin-info">
                      <div class="coin-name">
                        <svg t="1677824350805" class="icon" viewBox="0 0 1029 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="2818" width="20" height="20">
                          <path
                              d="M1024.727025 511.98976c0 282.771945-229.217816 511.98976-511.98976 511.98976-282.766825 0-511.98976-229.217816-511.98976-511.98976 0-282.766825 229.222936-511.98976 511.98976-511.98976 282.771945 0 511.98976 229.222936 511.98976 511.98976"
                              fill="#F7931A" p-id="2819"></path>
                          <path
                              d="M637.048379 661.623888a55.842723 55.842723 0 0 1-27.145697 33.417571 55.858083 55.858083 0 0 1-42.827943 4.444071l-144.181437-42.940581 32.122238-107.840403 144.171196 42.945701h0.00512c29.726125 8.852303 46.713946 40.242395 37.856523 69.973641m48.628787-221.00038a55.929761 55.929761 0 0 1 4.438952 42.833063c-8.857423 29.721006-40.262875 46.698586-69.973641 37.861643h-0.00512l-144.176316-42.940582 32.111998-107.840403 144.181436 42.940581a55.888802 55.888802 0 0 1 33.422691 27.145698m64.54143-34.917702c-16.48095-30.458271-43.836563-52.678626-77.01862-62.560029l-19.076738-5.677966 26.705385-89.669887-68.519589-20.407912-26.705386 89.669887-58.49995-17.423012 26.710506-89.669886-16.414392-4.889503-66.49723-19.803763-25.742845 86.434111-81.037739-24.135197-22.870583 76.798464 81.037739 24.140317-83.254655 279.536169-81.037739-24.135197-22.870583 76.803584 81.03262 24.130077-21.723726 72.953421 16.409272 4.889502 66.49723 19.803764 22.691386-76.189196 58.638188 17.463971-22.691387 76.194316 68.243116 20.325993 22.691386-76.194316 19.209856 5.718926a130.255315 130.255315 0 0 0 37.185816 5.452691c21.247575 0 42.295474-5.278614 61.51045-15.677127 30.458271-16.48095 52.673507-43.831443 62.560028-77.023739 10.393392-34.912582 5.263255-70.777464-11.268894-100.298794 30.01284-15.661767 53.927881-42.935461 64.331513-77.863403 9.886522-33.192296 6.251395-68.243115-10.224435-98.696266"
                              fill="#FFFFFF" p-id="2820"></path>
                        </svg>
                        <span>
                        BTCUSDC
                      </span>
                      </div>
                      <div class="right" :class="{'down':dealNum(configeInfo.tokens[1].chg_24h)<0}">
                        {{ configeInfo.tokens ? dealNum(configeInfo.tokens[0].index_price) : "" }}
                        {{ configeInfo.tokens ? dealNum(configeInfo.tokens[0].chg_24h) : "" }}
                      </div>
                    </div>

                  </a-menu-item>
                  <a-menu-item key="2">
                    <div class="coin-info">
                      <div class="coin-name" >
                        <svg t="1677824451359" class="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="3915" width="20" height="20">
                          <path
                              d="M512.099961 0.399844c282.689574 0 511.800078 229.110504 511.800078 511.800078s-229.110504 511.800078-511.800078 511.800078S0.299883 794.889496 0.299883 512.199922 229.510348 0.399844 512.099961 0.399844z"
                              fill="#3E5BF2" p-id="3916"></path>
                          <path
                              d="M512.199922 147.242483v510.000781l224.112456-134.34752zM512.199922 877.15736l224.112456-321.774307-224.112456 135.547052zM512.199922 147.242483v510.000781L287.987505 522.895744z"
                              fill="#FFFFFF" p-id="3917"></path>
                          <path d="M512.199922 690.930105v186.227255L287.987505 555.383053z" fill="#FFFFFF"
                                p-id="3918"></path>
                        </svg>
                        <span>
                        ETHUSDC
                      </span>
                      </div>
                      <div class="right" :class="{'down':dealNum(configeInfo.tokens[1].chg_24h)<0}">
                        {{ configeInfo.tokens ? dealNum(configeInfo.tokens[1].index_price) : "" }}
                        {{ configeInfo.tokens ? dealNum(configeInfo.tokens[1].chg_24h) : "" }}
                      </div>
                    </div>

                  </a-menu-item>

                </a-menu>
              </template>
              <a class="ant-dropdown-link " @click.prevent>
                <div class="coin-box" style="display: flex">
                  <svg v-show="activeTokenName=='BTC'" t="1677824350805" class="icon" viewBox="0 0 1029 1024"
                       version="1.1"
                       xmlns="http://www.w3.org/2000/svg" p-id="2818" width="20" height="20">
                    <path
                        d="M1024.727025 511.98976c0 282.771945-229.217816 511.98976-511.98976 511.98976-282.766825 0-511.98976-229.217816-511.98976-511.98976 0-282.766825 229.222936-511.98976 511.98976-511.98976 282.771945 0 511.98976 229.222936 511.98976 511.98976"
                        fill="#F7931A" p-id="2819"></path>
                    <path
                        d="M637.048379 661.623888a55.842723 55.842723 0 0 1-27.145697 33.417571 55.858083 55.858083 0 0 1-42.827943 4.444071l-144.181437-42.940581 32.122238-107.840403 144.171196 42.945701h0.00512c29.726125 8.852303 46.713946 40.242395 37.856523 69.973641m48.628787-221.00038a55.929761 55.929761 0 0 1 4.438952 42.833063c-8.857423 29.721006-40.262875 46.698586-69.973641 37.861643h-0.00512l-144.176316-42.940582 32.111998-107.840403 144.181436 42.940581a55.888802 55.888802 0 0 1 33.422691 27.145698m64.54143-34.917702c-16.48095-30.458271-43.836563-52.678626-77.01862-62.560029l-19.076738-5.677966 26.705385-89.669887-68.519589-20.407912-26.705386 89.669887-58.49995-17.423012 26.710506-89.669886-16.414392-4.889503-66.49723-19.803763-25.742845 86.434111-81.037739-24.135197-22.870583 76.798464 81.037739 24.140317-83.254655 279.536169-81.037739-24.135197-22.870583 76.803584 81.03262 24.130077-21.723726 72.953421 16.409272 4.889502 66.49723 19.803764 22.691386-76.189196 58.638188 17.463971-22.691387 76.194316 68.243116 20.325993 22.691386-76.194316 19.209856 5.718926a130.255315 130.255315 0 0 0 37.185816 5.452691c21.247575 0 42.295474-5.278614 61.51045-15.677127 30.458271-16.48095 52.673507-43.831443 62.560028-77.023739 10.393392-34.912582 5.263255-70.777464-11.268894-100.298794 30.01284-15.661767 53.927881-42.935461 64.331513-77.863403 9.886522-33.192296 6.251395-68.243115-10.224435-98.696266"
                        fill="#FFFFFF" p-id="2820"></path>
                  </svg>
                  <svg v-show="activeTokenName=='ETH'" t="1677824451359" class="icon" viewBox="0 0 1024 1024"
                       version="1.1"
                       xmlns="http://www.w3.org/2000/svg" p-id="3915" width="20" height="20">
                    <path
                        d="M512.099961 0.399844c282.689574 0 511.800078 229.110504 511.800078 511.800078s-229.110504 511.800078-511.800078 511.800078S0.299883 794.889496 0.299883 512.199922 229.510348 0.399844 512.099961 0.399844z"
                        fill="#3E5BF2" p-id="3916"></path>
                    <path
                        d="M512.199922 147.242483v510.000781l224.112456-134.34752zM512.199922 877.15736l224.112456-321.774307-224.112456 135.547052zM512.199922 147.242483v510.000781L287.987505 522.895744z"
                        fill="#FFFFFF" p-id="3917"></path>
                    <path d="M512.199922 690.930105v186.227255L287.987505 555.383053z" fill="#FFFFFF"
                          p-id="3918"></path>
                  </svg>
                  {{ curSymbol }}


                </div>
                <div class="contract">
                  Contract
                  <a-icon type="down"/>
                </div>
              </a>

            </a-dropdown>
          </div>
          <div class="left-content">
            <div class="flex-box">
              <button class="operate " :class="{'sell':operateNav!=0}" @click="operateNav=0">
                Buy (Long)
              </button>
              <button class="operate  " :class="{'sell':operateNav!=1}" @click="operateNav=1">
                Sell (Short)
              </button>
            </div>
            <div class="left-content-item">
              <div class="box-title">Amount</div>
              <div class="input-box">
                <div class="input-part">
                  <input type="number" step="any" v-model="amount" @input="updateUSDCAmount" placeholder="0.0000">
                  <span>{{ activeTokenName }}</span>
                </div>
                <div class="input-part">
                  <input type="number" step="any" v-model="usdcAmount" @input="updateAmount" placeholder="0.0000">
                  <span>USDC</span>
                  <div class="tip-box" v-show="usdcAmount<10">
                    Amount is not less than 10U.
                  </div>
                </div>
              </div>
            </div>
            <div class="left-content-item">
              <div class="box-title">
                Leverage
              </div>
              <div class="progress-box" style="position: relative">
                <a-slider :min="2" :max="50" style="position: relative;width: 100%" :tipFormatter="formatTip"
                          tooltipPlacement="bottom" v-model="slideValue"/>
                <div class="reset" @click="slideValue=2">
                  Reset
                </div>
                <div class="multi">
                  {{ slideValue }}x
                </div>
              </div>

            </div>
            <!--            <div class="left-content-item">-->
            <!--              <div class="box-title">-->
            <!--                Slippage Tolerance-->
            <!--              </div>-->
            <!--              <div class="slippage-box">-->
            <!--                <div class="slippage-input">-->
            <!--                  <input type="number" v-model="slipValue">-->
            <!--                  <span>%</span>-->
            <!--                </div>-->
            <!--                <div class="rate-btn" @click="slipValue=1">-->
            <!--                  1%-->
            <!--                </div>-->
            <!--                <div class="rate-btn" @click="slipValue=1.5">-->
            <!--                  1.5%-->
            <!--                </div>-->
            <!--                <div class="rate-btn" @click="slipValue=2">-->
            <!--                  2%-->
            <!--                </div>-->
            <!--              </div>-->

            <!--            </div>-->

          </div>
          <div class="left-bottom">
            <div class="left-content-item">
              <div class="box-title">
                Transaction
              </div>
              <div class="transaction-info">
                <div class="flex-box">
                  <div class="name">
                    Entry Price
                  </div>
                  <div class="value">
                    ${{ dealNum(coinInfo.index_price) }}
                  </div>
                </div>
                <div class="flex-box">
                  <div class="name">
                    Est. Liquidation Price
                  </div>
                  <div class="value">
                    {{ liquidationPrice }}
                  </div>
                </div>
                <div class="flex-box">
                  <div class="name">
                    Fee
                  </div>
                  <div class="value">
                    ${{ feeRate && usdcAmount ? feeRate * usdcAmount : 0 }}
                  </div>
                </div>
                <div class="flex-box">
                  <div class="name">
                    <span v-show="payValue>=0">Income Amount</span>
                    <span v-show="payValue<0">Pay Amount </span>
                  </div>
                  <div class="value">
                    ${{ Math.abs(payValue) }}
                  </div>
                </div>
              </div>
            </div>
            <button class="operate approve" @click="approve" v-show="usdcAllowance<10||usdcAllowance<amount">
              Approve
            </button>
            <!--            :disabled="!tradeActive"-->
            <button class="operate trade" v-show="usdcAllowance>10||usdcAllowance>amount" :class="{'active':tradeActive}" @click="trade">
              Trade
            </button>
          </div>
        </div>
      </div>
      <div class="right-content-box">
        <div class="right-part1">
          <div class="price" :class="{'down':dealNum(coinInfo.chg_24h_percent) <0}">
            {{ dealNum(coinInfo.index_price) }}
          </div>
          <div class="funding">
            <div class="name">
              Funding Rate / Next Funding
            </div>
            <div class="value">
              <div class="rate">
                {{ coinInfo.funding_rate ? dealNum(coinInfo.funding_rate[0]) : 0 }}%
              </div>
              <div class="time">
                {{ dealNum(coinInfo.funding_time) }}
              </div>
            </div>
          </div>
          <div class="change">
            <div class="name">
              24h Change
            </div>
            <div class="value" :class="{'down':dealNum(coinInfo.chg_24h_percent) <0}">
              {{ dealNum(coinInfo.chg_24h) }} +
              {{ dealNum(coinInfo.chg_24h_percent) }}%
            </div>
          </div>
        </div>
        <div class="right-part2">
          <div :id="widgetId" :style="{ height: widgetHeight + 'px' }"/>
        </div>
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
            <div class="row" :class="{'blink':direction && activeTokenName==item.name}"
                 v-for="(item,index) in positionArr" :key="index">
              <div class="col">
                {{ item.name }}/USDC
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
                {{ item.leverage }}X
              </div>
              <div class="col">
                {{ dealNum(item.average_price) }}
              </div>
              <div class="col">
                {{ dealNum(item.collateral) }}
              </div>
              <div class="col">
                <span v-if="item.name=='BTC'">
                     {{
                    dealNum(Math.abs(originalBtcValue))
                  }} /{{ marginRatio(item) }}%
                </span>
                <span v-if="item.name=='ETH'">
                     {{
                    dealNum(Math.abs(originalEthValue))
                  }} /{{ marginRatio(item) }}%
                </span>
              </div>
              <div class="col">
                {{ dealNum(item.pnl) }}
              </div>
              <div class="col operate-box">
                <button class="operate" @click="isShowMarginManage=true,clickPosition = item,getPositionData">
                  Margin Manage
                </button>
                <button class="operate" @click="isShowClosePosition=true ,clickPosition = item,getPositionData">
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
                {{ item.name }}/USDC
              </div>
              <div class="col ">
                <div class="side" :class="{'down':item.direction!=1 }">
                  {{ item.direction == 1 ? "Long" : "Short" }}
                </div>
              </div>
              <div class="col">
                {{ dealNum(item.size_delta) }}
              </div>
              <div class="col">
                {{ dealNum(item.index_price) }}
              </div>
              <div class="col">
                {{ dealNum(item.index_price) }}
              </div>
              <div class="col">
                {{ dealNum(item.pel) }}
              </div>
              <div class="col">
                {{ item.updated_at }}
              </div>
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
                {{ item.updated_at }}
              </div>
              <div class="col">
                {{ item.name }}/USDC
              </div>
              <div class="col">
                <div class="side" :class="{'down':item.direction!=1 }">
                  {{ item.direction == 1 ? "Long" : "Short" }}
                </div>
              </div>
              <div class="col">
                {{ dealD6Num(item.size_delta) }}
              </div>
              <div class="col">
                {{ dealNum(item.index_price) }}X
              </div>
              <div class="col">
                {{ dealNum(item.leverage) }}
              </div>
              <div class="col">
                {{ dealNum(item.transaction_fee) / 10 ** 6 }}$
              </div>
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
                {{ item.name }}/USDC
              </div>
              <div class="col">
                {{ dealNum(item.funding_fee) }}%
              </div>
              <div class="col">
                0.0005
              </div>
              <div class="col">
                2021-11-20 00:00:00 UTC
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MarginManage v-show="isShowMarginManage" :coin-info="coinInfo" :positionObj="clickPosition"
                  @closeMarginManage="isShowMarginManage = false"/>
    <ClosePositions :feeRate="feeRate" v-show="isShowClosePosition" :coin-info="coinInfo" :positionObj="clickPosition"
                    @closeClosePosition="isShowClosePosition = false"/>
  </div>
</template>

<script>

import MarginManage from "@/components/MarginManage";
import ClosePositions from "@/components/ClosePositions";
import {getTokenInfo,} from "@/api/coinApi";
import addressMap from "@/abi/addressMap";
import {getPositions, getRecord, getProfit, getFundingFee} from "@/api/vault";
import {mapGetters} from "vuex";
import MathCalculator from "../utils/bigNumberUtil"
import BigNumber from "bignumber.js";
import {MARGINRATIO} from "../utils/constantData"
let getPriceInterval = null
var calculator = new MathCalculator();
export default {
  name: 'HomeView',
  components: {
    MarginManage,
    ClosePositions
  },
  data() {
    return {
      usdcAllowance: 0,
      clickPosition: {},
      amount: undefined,
      tokenInfo: {},
      configeInfo: {},
      isShowClosePosition: false,
      isShowMarginManage: false,
      slideValue: 2,
      slipValue: 1,
      progress: 10,
      widgetId: 'tradingview_8c9b3',
      widgetHeight: 500,
      activeNav: 0,
      operateNav: 0,//操作方向 0Long 1Short
      feeRate: 0,
      curTVSymbol: "BINANCE:BTCUSDT",
      curSymbol: "BTC/USDC",
      activeTokenName: "BTC",
      coinInfo: {},
      positionArr: [],
      recordArr: [],
      fundingFeeArr: [],
      profitArr: [],
      originalBtcValue: 0,//原有仓位价值
      originalEthValue: 0,//原有仓位价值
      originalBtcObj: 0,//原有仓位方向
      originalEthObj: 0,//原有仓位方向
      usdcAmount: undefined
      //  BINANCE:ETHUSDT
    }
  },
  filters: {},
  watch: {
    account() {
      this.initData()
    }
  },
  computed: {


    curValue() { //当前下单价值
      if (this.usdcAmount > 0 && this.amount > 0) {
        return this.usdcAmount / this.slideValue
      }
      return 0
    },
    totalAmount() { // 总价值
      if (this.usdcAmount > 0 && this.amount > 0) {
        if (this.operateNav == 0) {
          return this.usdcAmount / this.slideValue + this.originalBtcValue
        } else {
          return this.usdcAmount / this.slideValue + this.originalEthValue
        }
      }
      return 0
    },
    payValue() {//需要支付或者获得 u
      if (this.usdcAmount > 0 && this.amount > 0) {
        switch (this.activeTokenName) {
          case "BTC":
            if (!this.originalBtcValue) {
              return this.curValue
            }

            if (this.originalBtcObj.direction == this.direction) {//direction：方向相同
              const totalSize = calculator.add(this.originalBtcObj.size, this.amount)
              const totalValue = calculator.divide(calculator.multiply(totalSize, this.coinInfo.index_price), this.slideValue)
              const payV = calculator.subtract(this.originalBtcValue, totalValue)

              return payV
            } else  {//direction：方向不同
              let payV=0
              const totalSize = calculator.subtract(this.originalBtcObj.size, this.amount)
              if(totalSize<0){//反方向开仓
                const totalValue = calculator.divide(calculator.multiply(totalSize, this.coinInfo.index_price), this.slideValue)
                payV = totalValue
              }else{//减仓
                const totalValue = calculator.divide(calculator.multiply(totalSize, this.coinInfo.index_price), this.slideValue)
                payV = calculator.subtract(this.originalBtcValue, totalValue)
              }
              return payV
            }
          case "ETH":
            if (!this.originalEthValue) {
              return this.curValue
            }
            if (this.originalEthObj.direction == this.direction) { //direction：方向相同
              const totalSize = calculator.add(this.originalEthObj.size, this.amount)
              const totalValue = calculator.divide(calculator.multiply(totalSize, this.coinInfo.index_price), this.slideValue)
              const payV = calculator.subtract(this.originalEthValue, totalValue)
              return payV
            } else {//direction：方向不同
              let payV=0
              const totalSize = calculator.subtract(this.originalEthObj.size, this.amount)
              if(totalSize<0){//反方向开仓
                const totalValue = calculator.divide(calculator.multiply(totalSize, this.coinInfo.index_price), this.slideValue)
                payV = totalValue
              }else{//减仓
                const totalValue = calculator.divide(calculator.multiply(totalSize, this.coinInfo.index_price), this.slideValue)
                payV = calculator.subtract(this.originalEthValue, totalValue)
              }

              return payV
            }
        }


      }
      return 0
    },
    liquidationPrice() { //爆仓价格
      if (this.usdcAmount > 0 && this.amount > 0) {
        switch (this.activeTokenName) {
          case "BTC":
            if (!this.originalBtcValue) {
              return this.calculatLiq(1)
            }
            return this.calculatLiq(2,this.originalBtcObj)
          case "ETH":
            if (!this.originalEthValue) {
              return this.calculatLiq(1)
            }
            return this.calculatLiq(2,this.originalEthObj)
        }
      }
      return 0
    },
    direction() {//下单后方向
      if (this.amount > 0 && this.slideValue) {
        if (this.operateNav == 0) {
          return true
        } else {
          return false
        }
      }
      return 0
    },
    collapsed() {
      return this.$store.state.collapsed
    },
    tradeActive() {
      if (!this.amount || this.amount <= 0) {
        return false
      }
      return true
    },
    ...mapGetters([
      'isConnected',
      'account'
    ]),
  },
  methods: {
    calculatLiq(type,originObj){
      if (type===1) {
        if (this.operateNav == 0) {
          let data1 = this.usdcAmount / this.slideValue - this.amount * this.coinInfo.index_price
          let data2 = this.amount * MARGINRATIO / this.slideValue - this.amount
          let liqV = calculator.divide(data1, data2)
          return liqV >= 0 ? liqV : 0
        } else {
          let data1 = this.usdcAmount / this.slideValue + this.amount * this.coinInfo.index_price
          let data2 = this.amount * MARGINRATIO / this.slideValue + this.amount
          let liqV = calculator.divide(data1, data2)
          return liqV >= 0 ? liqV : 0
        }
      }else{
        let data1,data2
        if (originObj.direction == this.direction) { //direction：方向相同

          const totalSize = calculator.add(originObj.size, this.amount)
          const totalValue = calculator.divide(calculator.multiply(totalSize, this.coinInfo.index_price), this.slideValue)
          if(originObj.direction==1){//long 多
            data1= totalValue - totalSize * this.coinInfo.index_price
            data2 = totalSize * MARGINRATIO / this.slideValue - totalSize
          }else{//short 空
            console.log(totalValue,totalSize)
            data1= calculator.add(totalValue , totalSize * this.coinInfo.index_price)
            data2 = calculator.add(calculator.divide(totalSize * MARGINRATIO , this.slideValue) , totalSize)
          }
          let liqV = calculator.divide(data1, data2)
          return liqV >= 0 ? liqV : 0
        } else {//方向不同
          let totalSize = calculator.subtract(originObj.size, this.amount)
          let directionRES = totalSize>0 ?originObj.direction:this.direction
          totalSize = Math.abs(totalSize)
          const totalValue = calculator.divide(calculator.multiply(totalSize, this.coinInfo.index_price), this.slideValue)
          if(directionRES){//long
            data1= totalValue - totalSize * this.coinInfo.index_price
            data2 = totalSize * MARGINRATIO / this.slideValue - totalSize
          }else{//short
            data1= calculator.add(totalValue , calculator.multiply(totalSize, this.coinInfo.index_price))
            data2 = calculator.add(calculator.divide(totalSize * MARGINRATIO , this.slideValue) , totalSize)
          }

          let liqV = calculator.divide(data1, data2)
          return liqV >= 0 ? liqV : 0
        }
      }
    },
    marginRatio(item) {
      if (!this.configeInfo.tokens) {
        return
      }
      let price = 0
      this.configeInfo.tokens.forEach(coin => {
        if (coin.name == item.name) {
          price = coin.index_price
        }
      })
      let worth = calculator.add(item.collateral, item.pnl)
      return this.dealNum(worth / (price * item.size / item.leverage) * 100)

    },
    async getProfitData() {
      let res = await getProfit(this.account)
      this.profitArr = res.data.data
    },
    async getRecordData() {
      let res = await getRecord(this.account)
      this.recordArr = res.data.data
    },
    async getFundingFeeData() {
      let res = await getFundingFee(this.account)
      this.fundingFeeArr = res.data.data
      console.log(this.fundingFeeArr)
    },
    async getPositionData() {
      let positionArr = await getPositions(this.account)
      this.positionArr = positionArr.data.data
      this.positionArr.forEach(item => {
        if (item.name == "BTC") {
          this.originalBtcValue = parseFloat(item.collateral) + parseFloat(item.pnl)
          this.originalBtcObj = item
        }
        if (item.name == "ETH") {
          this.originalEthValue = parseFloat(item.collateral) + parseFloat(item.pnl)
          this.originalEthObj = item
        }
      })
    },
    dealD6Num(val) {
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
    formatTip(value) {
      return (
          <span style="position: 'absolute';top: '-24px'; left: '50%'; transform: 'translateX(-50%)' ">
             {value} x
          </span>
      )
    },
    updateUSDCAmount() {
      this.usdcAmount = BigNumber(this.amount * this.coinInfo.index_price).toFixed(2)
    },
    updateAmount() {
      this.amount = (calculator.divide(this.usdcAmount  ,this.coinInfo.index_price))
    },
    async allowance() {
      if (!this.isConnected) {
        return
      }
      let res = await this.$store.dispatch("erc20/allowance", {
        address: addressMap.usdt,
        spender: addressMap.vault,
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
        spender: addressMap.vault,
        amount: this.$store.state.app.web3.utils.toWei((10 ** 10).toString()).toString()
      })
    },
    async trade() {
      if (!this.isConnected) {
        this.$message.info('Please connect');
        return
      }
      if (!this.amount || this.amount <= 0) {
        this.$message.info('Please input amount');
        return
      }
      if (!this.slideValue || this.slideValue <= 0) {
        this.$message.info('Please input slideValue');
        return
      }
      if (this.usdcAmount < 10) {
        this.$message.info('Amount less than 10u');
        return
      }
      /*eslint-disable*/
      let price = await this.$store.dispatch("vault/getPrice", {
        _indexToken: this.coinInfo.contract_address
      })
      let sizeDelta = BigNumber((this.usdcAmount * (1 + parseFloat(this.feeRate))) * 10 ** 6 / this.slideValue).toFixed(0)
      this.$store.dispatch("vault/updatePosition", {
        _indexToken: this.coinInfo.contract_address,
        _leverage: this.slideValue,
        _sizeDelta: BigNumber(this.amount * 10 ** 6).toFixed(0),
        _collateralDelta: sizeDelta,
        _indexPrice: price,
        _direction: this.direction,
        _collateralDeltaInIO: true
      }).then(() => {
        this.initData()
        this.$message.info('Trade success');
        this.amount = undefined
        this.usdcAmount = undefined
      }).catch((e) => {
        this.$message.info(e);
      })
    },
    handleMenuClick(e) {
      let curTVSymbol = "", curSymbol = "", coinName = ""
      if (e.key == 1) {
        curTVSymbol = "BINANCE:BTCUSDT"
        curSymbol = "BTC/USDC"
        coinName = "BTC"
      } else if (e.key == 2) {
        curTVSymbol = "BINANCE:ETHUSDT"
        curSymbol = "ETH/USDC"
        coinName = "ETH"
      }
      if (curTVSymbol != this.curTVSymbol) {
        this.curTVSymbol = curTVSymbol
        this.curSymbol = curSymbol
        this.activeTokenName = coinName
        this.getData()
        this.createWidget()
      }
    },
    loadTradingViewScript() {
      if (document.getElementById('tradingview-widget-loading-script')) {
        this.createWidget();
        return;
      }

      const script = document.createElement('script');
      script.id = 'tradingview-widget-loading-script';
      script.src = 'https://s3.tradingview.com/tv.js';
      script.type = 'text/javascript';
      script.onload = () => this.createWidget();

      document.head.appendChild(script);
    },
    createWidget() {
      if (document.getElementById(this.widgetId) && window.TradingView) {
        new window.TradingView.widget({
          autosize: true,
          symbol: this.curTVSymbol,
          interval: 'D',
          timezone: 'Etc/UTC',
          theme: 'light',
          style: '1',
          locale: 'en',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          container_id: this.widgetId,
        });
        // symbol: "CME:ETH1!",

      }
    },
    initData() {
      this.getPositionData()
      this.getRecordData()
      this.getFundingFeeData()
      this.getProfitData()
      if (this.isConnected) {
        this.allowance()
      }
    },
    async getData() {
      try {
        // let priceRes = await getTokenPrices()
        // let priceArr = priceRes.data.data
        // console.log(priceArr)
        this.getPositionData()
        let tokenInfoRes = await getTokenInfo()
        // console.log(price.data.data)
        let tokenInfo = tokenInfoRes.data.data
        this.feeRate = Number(tokenInfo.transaction_fee_rate)
        this.tokenInfo = tokenInfo
        this.configeInfo = tokenInfo
        if (tokenInfo && tokenInfo.tokens) {
          tokenInfo.tokens.forEach(token => {
            if (token.name == this.activeTokenName) {
              this.coinInfo = token
            }
          })
        }
      } catch (e) {
        console.log(e)
      }
    }
  },
  mounted() {
    this.loadTradingViewScript();
    this.getData()
    this.initData()
    getPriceInterval = setInterval(() => {
      this.getData()
    }, 10000)
  },
  beforeDestroy() {
    clearInterval(getPriceInterval)
    getPriceInterval = null
  }
}
</script>
<style lang="scss" scoped>
:root {
}

.home {
  overflow: auto;
  background: #F3F7FF;
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

  //@media only screen and (-webkit-min-device-pixel-ratio: 2),
  //only screen and (min--moz-device-pixel-ratio: 2),
  //only screen and (min-resolution: 192dpi) {
  //
  //  --line-height17: 24px;
  //  .icon {
  //    width: 32px;
  //    height: 32px;
  //    font-size: 30px;
  //  }
  //  .table-header {
  //    padding: 16px 15px !important;
  //  }
  //  .row {
  //    padding: 12px 15px !important;
  //  }
  //  .nav1-content {
  //    .col {
  //      &:nth-child(1) {
  //        width: 80px !important;
  //      }
  //
  //      &:nth-child(2) {
  //        width: 80px !important;
  //      }
  //
  //      &:nth-child(3) {
  //        width: 80px !important;
  //      }
  //
  //      &:nth-child(4) {
  //        width: 80px !important;
  //      }
  //
  //      &:nth-child(5) {
  //        width: 120px !important;
  //      }
  //
  //      &:nth-child(6) {
  //        width: 160px !important;
  //      }
  //
  //      &:nth-child(7) {
  //        width: 220px !important;
  //      }
  //
  //      &:nth-child(8) {
  //        width: 160px !important;
  //      }
  //
  //      &:nth-child(9) {
  //        min-width: 180px !important;
  //      }
  //    }
  //
  //  }
  //  .nav2-content {
  //    .col {
  //      &:nth-child(1) {
  //        width: 120px !important;
  //      }
  //
  //      &:nth-child(2) {
  //        width: 100px !important;
  //      }
  //
  //      &:nth-child(3) {
  //        width: 100px !important;
  //      }
  //
  //      &:nth-child(4) {
  //        width: 160px !important;
  //      }
  //
  //      &:nth-child(5) {
  //        width: 160px !important;
  //      }
  //
  //      &:nth-child(6) {
  //        width: 180px !important;
  //      }
  //
  //      &:nth-child(7) {
  //        width: 220px !important;
  //      }
  //
  //      &:nth-child(8) {
  //        width: 160px !important;
  //      }
  //
  //      &:nth-child(9) {
  //        min-width: 230px !important;
  //      }
  //    }
  //  }
  //
  //  .nav3-content {
  //    .col {
  //      &:nth-child(1) {
  //        width: 300px !important;
  //      }
  //
  //      &:nth-child(2) {
  //        width: 120px !important;
  //      }
  //
  //      &:nth-child(3) {
  //        width: 120px !important;
  //      }
  //
  //      &:nth-child(4) {
  //        width: 120px !important;
  //      }
  //
  //      &:nth-child(5) {
  //        width: 120px !important;
  //      }
  //
  //      &:nth-child(6) {
  //        width: 160px !important;
  //      }
  //
  //      &:nth-child(7) {
  //        width: 180px !important;
  //      }
  //
  //      &:nth-child(8) {
  //        width: 160px !important;
  //      }
  //
  //      &:nth-child(9) {
  //        min-width: 180px !important;
  //      }
  //    }
  //  }
  //
  //  .nav4-content {
  //    .col {
  //      &:nth-child(1) {
  //        width: 120px !important;
  //      }
  //
  //      &:nth-child(2) {
  //        width: 150px !important;
  //      }
  //
  //      &:nth-child(3) {
  //        width: 200px !important;
  //      }
  //
  //      &:nth-child(4) {
  //        width: 300px;
  //      }
  //
  //    }
  //  }
  //}


  /*reset antdv */
  ::v-deep .ant-slider-track {
    background-color: #0E1D51 !important;
  }



  ::v-deep .ant-slider-handle {
    border: solid 2px #0E1D51;
  }

  ::v-deep .ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open) {
    border-color: #0E1D51;
  }

  /*end reset antdv*/
  .content-box {
    min-width: 1200px;


    min-height: 100vh;
    width: 100%;
    display: flex;
    padding: 10px 0;
    justify-content: center;

    .operate {
      cursor: pointer;
      height: 36px;
      background: #63CE63;
      border-radius: 19px;
      color: #fff;
      border: none;
      font-family: AvertaStd-Bold, AvertaStd;


      &:active {
        transform: translate(1px, 1px);
      }
    }

    .trade {
      background: rgba(99, 206, 99, 0.7);

      &.active {
        background: #63CE63;
      }
    }

    .flex-box {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .operate {
        width: 45%;
      }
    }

    .left-content-box {
      width: 370px;
      display: flex;
      flex-direction: column;

      .left-content-container {
        box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        background: #FFFFFF;
      }

      .operate {
        font-family: AvertaStd-Regular, AvertaStd;
      }

      .sell.operate {
        background: #FFFFFF;
        color: #E32A20;
        border: 1px solid #E32A20;
      }

      .left-header {
        width: 100%;
        padding: 20px 15px;
        border: 1px solid #ECECEE;
        display: flex;
        justify-content: space-between;
        ::v-deep .ant-dropdown-menu{
          .coin-box {
            height: 100%;
            border: none;
            display: flex !important;
            align-items: center !important;
            font-size: var(--font-size20);
            font-family: AvertaStd-Regular, AvertaStd;
            font-weight: 400;
            color: #0E1D51;
            line-height: 25px;
          }
        }
        .icon {
          margin-right: 6px;
        }
        .menu-box{
          background: #000;
        }

        ::v-deep .ant-dropdown-link {
          width: 100%;
          display: flex;

          align-items: center;
          justify-content: space-between;

          .contract {
            font-family: AvertaStd-Regular, AvertaStd;
            font-size: var(--font-size14);
            font-weight: 400;
            color: #0E1D51;
            line-height: var(--line-height17);
          }
        }

        ::v-deep .coin-box {
          height: 100%;
          border: none;
          display: flex !important;
          align-items: center !important;
          font-size: var(--font-size20);
          font-family: AvertaStd-Regular, AvertaStd;
          font-weight: 400;
          color: #0E1D51;
          line-height: 25px;
        }
      }

      .left-content {
        padding: 20px 15px;
      }

      .left-bottom {
        border-top: 1px solid #ECECEE;
        padding: 20px 15px;

        .operate {
          margin-top: 20px;
          width: 100%;
          min-width: 220px;
        }
      }

      .left-content-item {
        margin-top: 16px;
        width: 100%;

        .box-title {
          font-size: var(--font-size14);
          font-family: AvertaStd-Regular, AvertaStd, sans-serif;
          font-weight: 400;
          color: #8F97AA;
          line-height: var(--line-height17);
          padding-bottom: 6px;
        }

        .input-box {
          width: 100%;
          height: 72px;
          border-radius: 18px;
          overflow: hidden;

          .input-part {
            width: 100%;
            position: relative;
            height: 50%;
            font-family: AvertaStd-Regular, AvertaStd;

            .tip-box {
              padding: 0 6px;
              left: 80px;
              top: 6px;
              position: absolute;
              font-size: var(--font-size12);
              display: flex;
              align-items: center;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: rgba(14, 29, 81, 0.5);
              height: 24px;
              background: rgba(14, 29, 81, 0.1);
              border-radius: 5px
            }

            input {
              height: 100%;
              background: #F2F2F3;
              border: 1px solid #0E1D51 !important;

              width: 100%;
              padding: 0 20px;
            }

            &:nth-child(1) {
              input {
                border-radius: 18px 18px 0 0;
                border-bottom: 1px solid #0E1D51 !important;
              }
            }

            &:nth-child(2) {
              input {
                border-top: none;
                border-radius: 0 0 18px 18px;
              }
            }

            span {
              position: absolute;
              right: 10px;
              font-size: var(--font-size14);
              font-family: AvertaStd-Regular, AvertaStd, sans-serif;
              top: 10px;
              font-weight: 400;
              color: #0E1D51;
              line-height: var(--line-height17);
            }
          }
        }

        .progress-box {
          display: flex;
          position: relative;
          padding-bottom: 30px;
          align-items: center;

          ::v-deep .ant-tooltip-content {

          }

          .multi {
            position: absolute;
            left: 2px;
            bottom: 10px;
          }

          .reset {
            display: flex;
            align-items: center;
            margin-left: 6px;
            text-align: center;
            justify-content: center;
            width: 54px;
            height: 20px;
            border-radius: 13px;
            border: 1px solid #0E1D51;
            font-family: AvertaStd-Regular, AvertaStd;
            font-weight: 400;
            color: #0E1D51;
            font-size: var(--font-size12);
            cursor: pointer;
          }
        }

        .slippage-box {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .slippage-input {
            position: relative;
            width: 100%;
            height: 34px;
            background: #F6F6F7;
            border-radius: 18px;
            opacity: 0.7;
            border: 1px solid #0E1D51;

            input {
              border-radius: 18px;
              width: 100%;
              height: 100%;
            }

            span {
              position: absolute;
              right: 10px;
              font-size: var(--font-size14);
              font-family: AvertaStd-Regular, AvertaStd, sans-serif;
              top: 10px;
              font-weight: 400;
              color: #0E1D51;
              line-height: var(--line-height17);
              cursor: pointer;

            }
          }

          .rate-btn {
            padding: 0 6px;
            height: 24px;
            margin-left: 6px;
            border-radius: 5px;
            border: 1px solid #0E1D51;
            font-size: var(--font-size14);
            font-family: AvertaStd-Regular, AvertaStd;
            font-weight: 400;
            color: #0E1D51;
            text-align: center;
            line-height: 24px;
            cursor: pointer;
          }
        }

        .transaction-info {
          .flex-box {
            padding: 4px 0;

            .name {
              font-size: var(--font-size12);
              font-family: AvertaStd-Regular, AvertaStd;
              font-weight: 400;
              color: #8F97AA;
              line-height: var(--line-height17);
            }

            .value {
              font-size: var(--font-size12);
              font-family: AvertaStd-Regular, AvertaStd;
              font-weight: 400;
              color: #0E1D51;
              line-height: 20px;
            }
          }
        }
      }
    }

    .right-content-box {
      padding-left: 15px;
      min-width: 900px;

      .right-part1, .right-part2, .right-part3 {
        border-radius: 8px;
        background: #FFFFFF;
        box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
      }

      .right-part1 {
        width: 100%;
        padding: 16px 15px;
        display: flex;
        align-items: center;

        .price {
          font-size: var(--font-size20);
          font-family: AvertaStd-Bold, AvertaStd;
          font-weight: bold;
          color: #63CE63;
          line-height: 25px;
          padding-right: 15px;
          border-right: 1px solid #ECECEE;
          &.down{
            color: #E32A20;
          }
        }

        .funding, .change {
          padding-left: 30px;

          .name {
            font-size: var(--font-size14);
            font-family: AvertaStd-Regular, AvertaStd;
            font-weight: 400;
            color: #8F97AA;
            line-height: var(--line-height17);
          }

          .value {
            display: flex;
            margin-top: 4px;

            .rate {
              font-size: var(--font-size16);
              font-family: AvertaStd-Regular, AvertaStd;
              font-weight: 400;
              color: #3D5ECB;
              line-height: 20px;
              padding-right: 30px;
            }
          }
        }

        .change {
          .value {
            font-size: var(--font-size16);
            font-family: AvertaStd-Regular, AvertaStd;
            font-weight: 400;
            color: #63CE63;
            line-height: 20px;
          }
          .down{
            color: #E32A20;
          }
        }
      }

      .right-part2 {
        margin-top: 15px;
        overflow: hidden;

        .tradingview_8c9b3 {
          border-radius: 8px;
          height: 500px;
        }
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

                &:last-child {
                  margin-left: 6px;
                }
              }

            }
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
    }


  }

}

/* 针对 Retina 屏幕 */

</style>
