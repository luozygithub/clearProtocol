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
          <div class="input-box">
            <input type="text">
          </div>
          <div class="input-name">
            Amount
          </div>
          <div class="input-box">
            <input type="number" placeholder="0.00">
            <button class="max-btn">
              MAX
            </button>
            <span>
              USDC
            </span>
          </div>
          <div class="input-bottom">
            <div class="left">
              Balance
            </div>
            <div class="right">
              546345.8796
              <span>USDC</span>
            </div>
          </div>
          <button class="operate">
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
                <span>848593584376.8885</span>
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
                <span>0.34</span>
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
                <span>54635645.8796</span>
                USDC
                <div class="info">
                  Add to earn rewaeds
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
                <span>0.0000</span>
                USDC
                <div class="info">
                  <button class="operate">
                    Withdraw
                  </button>
                </div>
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
  name: "PoolView"
}
</script>

<style lang="scss" scoped>
.pool-view {
  width: 100%;
  min-height: 100vh;
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
    background: rgba(14,29,81,0.8);
    border-radius: 19px;
    color: #fff;
    border: none;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    &:active {
      transform: translate(1px, 1px);
    }
  }
  .pool-view-header {
    padding: 15px 20px;
    border-bottom: 1px solid #ECECEE;

    .title {
      font-size: 14px;
      font-family: AvertaStd-Semibold, AvertaStd, sans-serif;
      font-weight: 600;
      color: #0E1D51;
      line-height: 17px;
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
      border-right:1px solid #ECECEE;

      .operate{
        margin-top: 36px;
        width: 260px;
      }
      .input-name {
        margin-top: 20px;
        padding-bottom: 10px;
        font-size: 14px;
        font-family: AvertaStd-Regular, AvertaStd, sans-serif;
        font-weight: 400;
        color: #8F97AA;
        line-height: 17px;
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
        .max-btn{
          border: none;
          position: absolute;
          right: 70px;
          top: 6px;
          text-align: center;
          cursor: pointer;
          width: 44px;
          height: 24px;
          background: #0E1D51;
          border-radius: 5px;
          color: #fff;
        }
        span{
          position: absolute;
          right: 20px ;
          top: 10px;
          font-size: 14px;
          font-family: AvertaStd-Regular, AvertaStd,sans-serif;
          font-weight: 400;
          color: #0E1D51;
          line-height: 17px;
        }
      }
      .input-bottom{
        width: 260px;
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        font-size: 14px;
        font-family: AvertaStd-Regular, AvertaStd;
        font-weight: 400;
        color: #8F97AA;
        line-height: 17px;
        span{
          color: #0E1D51;
        }
      }
    }
    .pool-content-right{
      padding: 20px;
      flex-grow: 1;
      .info-box{
        display: flex;
        .info-item{
          width: 50%;
          .name{
            font-size: 14px;
            font-family: AvertaStd-Regular, AvertaStd;
            font-weight: 400;
            color: #8F97AA;
            line-height: 17px;
          }
          span{
            color: #0E1D51;
            line-height: 17px;
          }
          .add{
            color: #4363CC;
          }
        }
      }
      .info-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 30px;
        width: 100%;
        .list-item{
          margin-top: 15px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 190px;
          height: 122px;
          padding: 20px;
          background: #FFFFFF;
          box-shadow: 0px 2px 15px 10px rgba(229,237,240,0.33);
          border-radius: 12px;
          .name{
            font-size: 14px;
            font-weight: 400;
            color: #8F97AA;
            line-height: 17px;
          }
          .item-content {
            height: 40px;
            font-size: 12px;
            color: #8F97AA;
            line-height: 15px;
            span{
              color: #0E1D51;
            }
            .info{
              margin-top: 8px;
            }
            .operate{
              width: 79px;
              height: 20px;
              border-radius: 12px;
              border: 1px solid #E6E7F0;
              background: none;
              color: #0E1D51;
              font-size: 12px;
              line-height: 18px;
              margin-top: 8px;
            }
          }
        }
      }
    }
  }

}
</style>
