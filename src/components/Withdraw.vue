<template>
  <div class="withdraw">
    <div class="mask"></div>
    <div class="margin-content">
      <div class="header">
        <div class="title">
          Withdraw
        </div>
        <svg t="1677826899914" @click="$emit('closeWithdraw')" class="icon close" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5251" id="mx_n_1677826899918" width="14" height="14"><path d="M570.514286 512l292.571428-292.571429c14.628571-14.628571 14.628571-43.885714 0-58.514285-14.628571-14.628571-43.885714-14.628571-58.514285 0l-292.571429 292.571428-292.571429-292.571428c-14.628571-14.628571-43.885714-14.628571-58.514285 0-21.942857 14.628571-21.942857 43.885714 0 58.514285l292.571428 292.571429-292.571428 292.571429c-14.628571 14.628571-14.628571 43.885714 0 58.514285 14.628571 14.628571 43.885714 14.628571 58.514285 0l292.571429-292.571428 292.571429 292.571428c14.628571 14.628571 43.885714 14.628571 58.514285 0 14.628571-14.628571 14.628571-43.885714 0-58.514285l-292.571428-292.571429z" fill="#0E1D51" p-id="5252"></path></svg>
      </div>
      <div class="content">

        <div class="input-box">
          <input type="number" v-model="amount" placeholder="0.000">
          <div class="max-btn" @click="amount=balance">
            MAX
          </div>
        </div>
        <div class="balance">
          Max:{{ balance }}
        </div>
        <button class="operate confim" @click="withdraw">
          Confirm
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "withdrawView",
  data(){
    return {
      amount:undefined,
      balance:0
    }
  },
  methods:{
    withdraw(){
      if(!this.amount||this.amount<=0){
        this.$message.info('Please input amount');
        return
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.withdraw{
  .mask{
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0,0,0,0.3);
  }
  .margin-content{
    width: 400px;
    height: 227px;
    position: fixed;
    z-index: 10;
    top: 20%;
    left: calc(50% - 200px);
    background: #FFFFFF;
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.1);
    border-radius: 18px;
  }
  .header{
    display: flex;
    justify-content: space-between;
    padding: 18px 20px;
    border-bottom: 1px solid #ECECEE;
    .close{
      cursor: pointer;
    }
    .title{
      font-weight: 600;
      color: #0E1D51;
      line-height: 17px;
      font-size: 14px
    }

  }
  .content{
    padding: 30px 24px 0;

    .input-box{
      position: relative;
      input{
        height: 34px;
        background: #F2F2F3;
        border-radius: 18px;
        color: #111;
        width: 100%;
      }
      .max-btn{
        position: absolute;
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
    .balance{
      text-align: right;
      font-family: AvertaStd-Regular, AvertaStd;
      font-weight: 400;
      color: #0E1D51;
      padding-top: 6px;
      line-height: 17px;
      font-size: var(--font-size14);
    }
    .operate.confim {
      width: 100%;
      cursor: pointer;
      margin-top: 30px;
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
</style>
