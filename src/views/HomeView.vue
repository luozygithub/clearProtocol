<template>
  <div class="home">
    <div class="content-box">
      <div class="left-content-box">
        <div class="left-header">

          <a-dropdown>
            <template #overlay>
              <a-menu @click="handleMenuClick">
                <a-menu-item key="1">
                  <div>
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
                        BTCUSDT
                      </span>
                  </div>

                </a-menu-item>
                <a-menu-item key="2">
                  <div>
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
                        ETHUSDT
                      </span>
                  </div>

                </a-menu-item>

              </a-menu>
            </template>
            <a class="ant-dropdown-link " @click.prevent>
              <div class="coin-box">
                <svg t="1677824350805" class="icon" viewBox="0 0 1029 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="2818" width="20" height="20">
                  <path
                      d="M1024.727025 511.98976c0 282.771945-229.217816 511.98976-511.98976 511.98976-282.766825 0-511.98976-229.217816-511.98976-511.98976 0-282.766825 229.222936-511.98976 511.98976-511.98976 282.771945 0 511.98976 229.222936 511.98976 511.98976"
                      fill="#F7931A" p-id="2819"></path>
                  <path
                      d="M637.048379 661.623888a55.842723 55.842723 0 0 1-27.145697 33.417571 55.858083 55.858083 0 0 1-42.827943 4.444071l-144.181437-42.940581 32.122238-107.840403 144.171196 42.945701h0.00512c29.726125 8.852303 46.713946 40.242395 37.856523 69.973641m48.628787-221.00038a55.929761 55.929761 0 0 1 4.438952 42.833063c-8.857423 29.721006-40.262875 46.698586-69.973641 37.861643h-0.00512l-144.176316-42.940582 32.111998-107.840403 144.181436 42.940581a55.888802 55.888802 0 0 1 33.422691 27.145698m64.54143-34.917702c-16.48095-30.458271-43.836563-52.678626-77.01862-62.560029l-19.076738-5.677966 26.705385-89.669887-68.519589-20.407912-26.705386 89.669887-58.49995-17.423012 26.710506-89.669886-16.414392-4.889503-66.49723-19.803763-25.742845 86.434111-81.037739-24.135197-22.870583 76.798464 81.037739 24.140317-83.254655 279.536169-81.037739-24.135197-22.870583 76.803584 81.03262 24.130077-21.723726 72.953421 16.409272 4.889502 66.49723 19.803764 22.691386-76.189196 58.638188 17.463971-22.691387 76.194316 68.243116 20.325993 22.691386-76.194316 19.209856 5.718926a130.255315 130.255315 0 0 0 37.185816 5.452691c21.247575 0 42.295474-5.278614 61.51045-15.677127 30.458271-16.48095 52.673507-43.831443 62.560028-77.023739 10.393392-34.912582 5.263255-70.777464-11.268894-100.298794 30.01284-15.661767 53.927881-42.935461 64.331513-77.863403 9.886522-33.192296 6.251395-68.243115-10.224435-98.696266"
                      fill="#FFFFFF" p-id="2820"></path>
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
            <button class="operate buy">
              Buy (Long)
            </button>
            <button class="operate  sell">
              Sell (Short)
            </button>
          </div>
          <div class="left-content-item">
            <div class="box-title">Amount</div>
            <div class="input-box">
              <div class="input-part">
                <input type="number">
                <span>BTC</span>
              </div>
              <div class="input-part">
                <input type="number">
                <span>USDC</span>
              </div>
            </div>
          </div>
          <div class="left-content-item">
            <div class="box-title">
              Leverage
            </div>
            <div class="progress-box">
              <a-slider v-model="slideValue" style="width: 100%"/>
              <div class="reset" @click="slideValue=0">
                reset
              </div>
            </div>

          </div>
          <div class="left-content-item">
            <div class="box-title">
              Slippage Tolerance
            </div>
            <div class="slippage-box">
              <div class="slippage-input">
                <input type="number" v-model="slipValue">
                <span>%</span>
              </div>
              <div class="rate-btn" @click="slipValue=1">
                1%
              </div>
              <div class="rate-btn"  @click="slipValue=1.5">
                1.5%
              </div>
              <div class="rate-btn"  @click="slipValue=2">
                2%
              </div>
            </div>

          </div>

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
                  $65,378.91
                </div>
              </div>
              <div class="flex-box">
                <div class="name">
                  Est. Liquidation Price
                </div>
                <div class="value">
                  $65,378.91
                </div>
              </div>
              <div class="flex-box">
                <div class="name">
                  Fee
                </div>
                <div class="value">
                  $65,378.91
                </div>
              </div>
              <div class="flex-box">
                <div class="name">
                  Total Amount
                </div>
                <div class="value">
                  $65,378.91
                </div>
              </div>
            </div>
          </div>
          <button class="operate">
            Trade
          </button>
        </div>
      </div>
      <div class="right-content-box">
        <div class="right-part1">
          <div class="price">
            {{parseInt(coinInfo.index_price).toFixed(2)}}
          </div>
          <div class="funding">
            <div class="name">
              Funding Rate / Next Funding
            </div>
            <div class="value">
              <div class="rate">
                {{parseInt(coinInfo.funding_rate[0]).toFixed(2)}}%
              </div>
              <div class="time">
                {{coinInfo.funding_time }}
              </div>
            </div>
          </div>
          <div class="change">
            <div class="name">
              24h Change
            </div>
            <div class="value">
              {{ parseInt(coinInfo.chg_24h).toFixed(2) }} + {{parseInt(coinInfo.chg_24h_percent).toFixed(2)}}%
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
            <div class="row">
              <div class="col">
                BTC/USDC
              </div>
              <div class="col ">
                <div class="side">
                  Put
                </div>
              </div>
              <div class="col">
                2.5495
              </div>
              <div class="col">
                16X
              </div>
              <div class="col">
                65378.91
              </div>
              <div class="col">
                65214.83
              </div>
              <div class="col">
                6.45 / 56.0%
              </div>
              <div class="col">
                0.00
              </div>
              <div class="col operate-box">
                <button class="operate" @click="isShowMarginManage=true">
                  Margin Manage
                </button>
                <button class="operate" @click="isShowClosePosition=true">
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
            <div class="row">
              <div class="col">
                BTC/USDC
              </div>
              <div class="col ">
                <div class="side">
                  Put
                </div>
              </div>
              <div class="col">
                2.5495
              </div>
              <div class="col">
                65378.91
              </div>
              <div class="col">
                36.14
              </div>
              <div class="col">
                100.00
              </div>
              <div class="col">
                2021-11-20 00:00:00
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
            <div class="row">
              <div class="col">
                2021-11-20 00:00:00 UTC
              </div>
              <div class="col">
                BTC/USDC
              </div>
              <div class="col">
                <div class="side">
                  Put
                </div>
              </div>
              <div class="col">
                2.5495
              </div>
              <div class="col">
                4X
              </div>
              <div class="col">
                65378.91
              </div>
              <div class="col">
                36.14
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
            <div class="row">
              <div class="col">
                BTC/USDC
              </div>
              <div class="col">
                2.5495%
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
    <MarginManage v-show="isShowMarginManage" @closeMarginManage="isShowMarginManage = false"/>
    <ClosePositions  v-show="isShowClosePosition" @closeClosePosition="isShowClosePosition = false"/>
  </div>
</template>

<script>

import MarginManage from "@/components/MarginManage";
import ClosePositions from "@/components/ClosePositions";
import { getTokenInfo} from "@/api/coinApi";
let getPriceInterval = null
export default {
  name: 'HomeView',
  components: {
    MarginManage,
    ClosePositions
  },
  data() {
    return {
      tokenInfo:{},
      isShowClosePosition:false,
      isShowMarginManage:false,
      slideValue: 0,
      slipValue:undefined,
      progress: 10,
      widgetId: 'tradingview_8c9b3',
      widgetHeight: 500,
      activeNav: 0,
      curTVSymbol: "BINANCE:BTCUSDT",
      curSymbol: "BTC/USDT",
      activeTokenName:"BTC",
      coinInfo: {

      }
      //  BINANCE:ETHUSDT
    }
  },
  methods: {
    handleMenuClick(e) {
      let curTVSymbol = "", curSymbol = "",coinName=""
      if (e.key == 1) {
        curTVSymbol = "BINANCE:BTCUSDT"
        curSymbol = "BTC/USDT"
        coinName = "BTC"
      } else if (e.key == 2) {
        curTVSymbol = "BINANCE:ETHUSDT"
        curSymbol = "ETH/USDT"
        coinName = "ETH"
      }
      if (curTVSymbol != this.curTVSymbol) {
        this.curTVSymbol = curTVSymbol
        this.curSymbol = curSymbol
        this.activeTokenName =coinName

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
    async getData(){
      try{
        // let priceRes = await getTokenPrices()
        // let priceArr = priceRes.data.data
        // console.log(priceArr)
        let tokenInfoRes = await getTokenInfo()
        let tokenInfo = tokenInfoRes.data.data
        this.tokenInfo = tokenInfo
        if(tokenInfo&&tokenInfo.tokens){
          tokenInfo.tokens.forEach(token=>{
            if(token.name==this.activeTokenName){
              this.coinInfo=token
            }
          })
        }
      }catch (e) {
        console.log(e)
      }


    }
  },
  mounted() {
    this.loadTradingViewScript();
    this.getData()
    getPriceInterval = setInterval(()=>{
      this.getData()
    },3000)
  },
  beforeDestroy() {
    clearInterval(getPriceInterval)
    getPriceInterval = null
  }
}
</script>
<style lang="scss" scoped>
.home {
  background: #F3F7FF;

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
    color: #111;
  }

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
    min-height: 100vh;
    width: 100%;
    display: flex;
    padding: 10px;

    .operate {
      cursor: pointer;
      width: 40%;
      height: 36px;
      background: #63CE63;
      border-radius: 19px;
      color: #fff;
      border: none;

      &:active {
        transform: translate(1px, 1px);
      }
    }

    .flex-box {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .left-content-box {
      height: 650px;
      background: #FFFFFF;
      box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
      border-radius: 8px;

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

        .ant-dropdown-link {
          width: 100%;
          display: flex;

          align-items: center;
          justify-content: space-between;

          .contract {
            font-size: 14px;
            font-weight: 400;
            color: #0E1D51;
            line-height: 17px;
          }
        }

        ::v-deep .coin-box {
          height: 100%;
          border: none;
          display: flex !important;
          align-items: center !important;
          font-size: 20px;
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
          font-size: 14px;
          font-family: AvertaStd-Regular, AvertaStd, sans-serif;
          font-weight: 400;
          color: #8F97AA;
          line-height: 17px;
          padding-bottom: 6px;
        }

        .input-box {
          width: 100%;
          height: 72px;
          background: #F2F2F3;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid #0E1D51;

          .input-part {
            width: 100%;
            position: relative;
            height: 50%;

            input {
              height: 100%;

              width: 100%;
              padding: 0 20px;
            }

            &:nth-child(1) {
              input {
                border-radius: 18px 18px 0 0;
                border-bottom: 1px solid #0E1D51;;
              }
            }

            &:nth-child(2) {
              input {
                border-radius: 0 0 18px 18px;
              }
            }

            span {
              position: absolute;
              right: 10px;
              font-size: 14px;
              font-family: AvertaStd-Regular, AvertaStd, sans-serif;
              top: 10px;
              font-weight: 400;
              color: #0E1D51;
              line-height: 17px;
            }
          }
        }

        .progress-box {
          display: flex;
          align-items: center;


          .reset {
            margin-left: 6px;
            width: 52px;
            height: 20px;
            border-radius: 13px;
            border: 1px solid #0E1D51;
            font-weight: 400;
            color: #0E1D51;
            line-height: 15px;
            text-align: center;
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
              font-size: 14px;
              font-family: AvertaStd-Regular, AvertaStd, sans-serif;
              top: 10px;
              font-weight: 400;
              color: #0E1D51;
              line-height: 17px;
              cursor: pointer;

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

        .transaction-info {
          .flex-box {
            padding: 4px 0;

            .name {
              font-size: 12px;
              font-family: AvertaStd-Regular, AvertaStd;
              font-weight: 400;
              color: #8F97AA;
              line-height: 15px;
            }

            .value {
              font-size: 12px;
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
          font-size: 20px;
          font-family: AvertaStd-Bold, AvertaStd;
          font-weight: bold;
          color: #63CE63;
          line-height: 25px;
          padding-right: 15px;
          border-right: 1px solid #ECECEE;
        }

        .funding, .change {
          padding-left: 30px;

          .name {
            font-size: 14px;
            font-family: AvertaStd-Regular, AvertaStd;
            font-weight: 400;
            color: #8F97AA;
            line-height: 16px;
          }

          .value {
            display: flex;
            margin-top: 4px;

            .rate {
              font-size: 16px;
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
            font-size: 16px;
            font-family: AvertaStd-Regular, AvertaStd;
            font-weight: 400;
            color: #63CE63;
            line-height: 20px;
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
            font-size: 14px;
            font-family: AvertaStd-Regular, AvertaStd, sans-serif;
            font-weight: 400;
            color: rgba(14, 29, 81, 0.5);
            line-height: 17px;
            cursor: pointer;

            &:first-child {
              //padding-left: 0;
            }

            &.active {
              font-weight: bold;
              color: #0E1D51;
              line-height: 17px;
            }
          }
        }

        .nav1-content, .nav2-content, .nav3-content, .nav4-content {
          .col {
            padding: 0 0px;
            text-align: center;

            &:nth-child(1) {
              padding-left: 0;
              text-align: left;
            }

            &:last-child {
              text-align: left;
            }

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
              width: 60px;
            }

            &:nth-child(5) {
              width: 95px;
            }

            &:nth-child(6) {
              width: 128px;
            }

            &:nth-child(7) {
              width: 155px;
            }

            &:nth-child(8) {
              width: 120px;
            }

            &:nth-child(9) {
              min-width: 120px;
            }
          }

          .row {
            border-bottom: 1px solid #ECECEE;
            padding: 6px 15px;
            display: flex;
            font-size: 12px;
            font-family: AvertaStd-Regular, AvertaStd, sans-serif;
            font-weight: 400;
            color: #0E1D51;
            line-height: 15px;

            &:last-child {
              border-bottom: none
            }

            .side {
              width: 28px;
              text-align: center;
              height: 16px;
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
                font-size: 12px;
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
              font-size: 12px;
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
</style>
