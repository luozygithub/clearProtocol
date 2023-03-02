<template>
  <div class="home">
    <div class="content-box">
      <div class="left-content-box">
        <div class="left-header">
          <div class="name">
            BTC/USDC
          </div>
          <div class="select-box">
            Contract
          </div>
        </div>
        <div class="left-content">
          <div class="flex-box">
            <button class="operate sell">
              Buy (Long)
            </button>
            <button class="operate buy">
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
              <div class="progress" @dragover.prevent @drop="onDrop">
                <div class="progress-bar" :style="{ width: progress + '%' }"></div>
              </div>
              <div class="reset">
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
                <input type="number">
                <span>%</span>
              </div>
              <div class="rate-btn">
                1%
              </div>
              <div class="rate-btn">
                1.5%
              </div>
              <div class="rate-btn">
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
            65378.91
          </div>
          <div class="funding">
            <div class="name">
              Funding Rate / Next Funding
            </div>
            <div class="value">
              <div class="rate">
                0.02%
              </div>
              <div class="time">
                05:04:19
              </div>
            </div>
          </div>
          <div class="change">
            <div class="name">
              24h Change
            </div>
            <div class="value">
              598 +2.45%
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
                <button class="operate">
                  Margin Manage
                </button>
                <button class="operate">
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
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      progress: 10,
      widgetId: 'tradingview_8c9b3',
      widgetHeight: 500,
      activeNav: 0
    }
  },
  methods: {
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
          symbol: 'BINANCE:BTCUSDT',
          interval: 'D',
          timezone: 'Etc/UTC',
          theme: 'light',
          style: '1',
          locale: 'en',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          container_id: this.widgetId,
        });
      }
    },
    onDrop(e) {
      const progress = e.dataTransfer.getData('progress');
      this.progress = progress;
    }
  },
  mounted() {
    this.loadTradingViewScript();
    const progressElement = document.querySelector('.progress-bar');

    progressElement.addEventListener('dragstart', e => {
      e.dataTransfer.setData('progress', this.progress);
    });

    progressElement.addEventListener('drag', e => {
      const offsetX = e.clientX - progressElement.getBoundingClientRect().left;
      const progress = Math.max(Math.min(Math.round(offsetX / progressElement.offsetWidth * 100), 100), 0);
      this.progress = progress;
    });

    progressElement.addEventListener('dragend', () => {
      // Save progress to server or do something else
    });
  }
}
</script>
<style lang="scss" scoped>
.home {
  background: #F3F7FF;
  button{
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

  .content-box {
    min-height: 100vh;
    width: 100%;
    display: flex;
    padding: 16px;

    .operate {
      cursor: pointer;
      width: 156px;
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
      width: 370px;
      height: 638px;
      background: #FFFFFF;
      box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
      border-radius: 8px;

      .left-header {
        width: 100%;
        padding: 20px 15px;
        border: 1px solid #ECECEE;
        display: flex;
        justify-content: space-between;
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
            padding: 0 15px;
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
              &.down{
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

    .left-content {
      padding: 20px 15px;
    }

    .left-bottom {
      border-top: 1px solid #ECECEE;
      padding: 20px 15px;

      .operate {
        margin-top: 20px;
        width: 100%;
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
        opacity: 0.7;
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

        .progress {
          width: 300px;
          height: 20px;
          background-color: #f0f0f0;
          border-radius: 10px;
          cursor: pointer;
        }

        .progress-bar {
          height: 100%;
          background-color: #00aaff;
          border-radius: 10px;
        }

        .reset {
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
          width: 196px;
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
}
</style>
