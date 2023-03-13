"use strict";(self["webpackChunkclearprotocol"]=self["webpackChunkclearprotocol"]||[]).push([[443],{88196:function(t,a,s){s.r(a),s.d(a,{default:function(){return b}});var i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"pool-view"},[a("div",{staticClass:"pool-contain"},[t._m(0),a("div",{staticClass:"pool-content"},[a("div",{staticClass:"pool-content-left"},[a("div",{staticClass:"input-name"},[t._v(" Asset ")]),a("div",{staticClass:"input-box usdc"},[t._v(" Tether US USDC ")]),a("div",{staticClass:"input-name"},[t._v(" Amount ")]),a("div",{staticClass:"input-box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{type:"number",step:"any",placeholder:"0.00"},domProps:{value:t.amount},on:{input:function(a){a.target.composing||(t.amount=a.target.value)}}}),a("button",{staticClass:"max-btn",on:{click:function(a){t.amount=t.balance}}},[t._v(" MAX ")]),a("span",[t._v(" USDC ")])]),a("div",{staticClass:"input-bottom"},[a("div",{staticClass:"left"},[t._v(" Wallet ")]),a("div",{staticClass:"right"},[t._v(" "+t._s(t.balance)+" "),a("span",[t._v("USDC")])])]),a("button",{directives:[{name:"show",rawName:"v-show",value:t.usdcAllowance<10||t.usdcAllowance<t.amount,expression:"usdcAllowance<10||usdcAllowance<amount"}],staticClass:"operate",on:{click:t.approve}},[t._v(" Approve ")]),a("button",{directives:[{name:"show",rawName:"v-show",value:t.usdcAllowance>10||t.usdcAllowance>t.amount,expression:"usdcAllowance>10||usdcAllowance>amount"}],staticClass:"operate",on:{click:t.add}},[t._v(" Add ")])]),a("div",{staticClass:"pool-content-right"},[t._m(1),a("div",{staticClass:"info-list"},[t._m(2),t._m(3),t._m(4),a("div",{staticClass:"list-item"},[a("div",{staticClass:"name"},[t._v(" Available ")]),a("div",{staticClass:"item-content"},[a("span",[t._v(t._s(t.canWithdrawNum))]),t._v(" USDC "),a("div",{staticClass:"info"},[a("button",{staticClass:"operate",class:{active:t.canWithdrawNum>0},attrs:{disabled:t.canWithdrawNum<=0},on:{click:function(a){t.isShowWithdraw=!0}}},[t._v(" Withdraw ")])])])])])])])]),a("Withdraw",{directives:[{name:"show",rawName:"v-show",value:t.isShowWithdraw,expression:"isShowWithdraw"}],attrs:{CLPBalance:t.CLPBalance,canWN:t.canWithdrawNum},on:{getData:t.getData,closeWithdraw:function(a){t.isShowWithdraw=!1}}})],1)},e=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"pool-view-header"},[a("div",{staticClass:"title"},[t._v(" Add Liquidity ")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"info-box"},[a("div",{staticClass:"info-item"},[a("div",{staticClass:"name"},[t._v(" Pool Size ")]),a("div",{staticClass:"value"},[a("span",[t._v("0.0000")]),t._v(" USDC ")]),a("div",{staticClass:"add"},[t._v(" Adding ")])]),a("div",{staticClass:"info-item"},[a("div",{staticClass:"name"},[t._v(" Rewards/1K ")]),a("div",{staticClass:"value"},[a("span",[t._v("0.00")]),t._v(" USDC ")]),a("div",{staticClass:"add",staticStyle:{color:"#63CE63"}},[t._v(" Est. Rewards ")])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"list-item"},[a("div",{staticClass:"name"},[t._v(" Total Balance ")]),a("div",{staticClass:"item-content"},[a("span",[t._v("0.0000")]),t._v(" USDC ")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"list-item"},[a("div",{staticClass:"name"},[t._v(" PNL ")]),a("div",{staticClass:"item-content"},[a("span",[t._v("0.0000")]),t._v(" USDC "),a("div",{staticClass:"info"},[t._v(" Add to earn rewards ")])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"list-item"},[a("div",{staticClass:"name"},[t._v(" Executed ")]),a("div",{staticClass:"item-content"},[a("span",[t._v("0.0000")]),t._v(" USDC ")])])}],n=function(){var t=this,a=t._self._c;return a("div",{staticClass:"withdraw"},[a("div",{staticClass:"mask"}),a("div",{staticClass:"margin-content"},[a("div",{staticClass:"header"},[a("div",{staticClass:"title"},[t._v(" Withdraw ")]),a("svg",{staticClass:"icon close",attrs:{t:"1677826899914",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5251",id:"mx_n_1677826899918",width:"14",height:"14"},on:{click:function(a){return t.$emit("closeWithdraw")}}},[a("path",{attrs:{d:"M570.514286 512l292.571428-292.571429c14.628571-14.628571 14.628571-43.885714 0-58.514285-14.628571-14.628571-43.885714-14.628571-58.514285 0l-292.571429 292.571428-292.571429-292.571428c-14.628571-14.628571-43.885714-14.628571-58.514285 0-21.942857 14.628571-21.942857 43.885714 0 58.514285l292.571428 292.571429-292.571428 292.571429c-14.628571 14.628571-14.628571 43.885714 0 58.514285 14.628571 14.628571 43.885714 14.628571 58.514285 0l292.571429-292.571428 292.571429 292.571428c14.628571 14.628571 43.885714 14.628571 58.514285 0 14.628571-14.628571 14.628571-43.885714 0-58.514285l-292.571428-292.571429z",fill:"#0E1D51","p-id":"5252"}})])]),a("div",{staticClass:"content"},[a("div",{staticClass:"input-box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{step:"any",type:"number",placeholder:"0.000"},domProps:{value:t.amount},on:{input:function(a){a.target.composing||(t.amount=a.target.value)}}}),a("div",{staticClass:"max-btn",on:{click:function(a){t.amount=t.canWN}}},[t._v(" MAX ")])]),a("div",{staticClass:"balance"},[t._v(" Max:"+t._s(t.canWN)+" ")]),a("button",{staticClass:"operate confim",on:{click:t.withdraw}},[t._v(" Confirm ")])])])])},c=[],o=s(91097),l=s(86717),d=s(12873),u=new l.Z,r={name:"withdrawView",data(){return{amount:void 0,balance:0}},props:["canWN","CLPBalance","getData"],methods:{withdraw(){if(!this.amount||this.amount<=0)return void this.$message.info("Please input amount");let t=u.divide(u.multiply(this.CLPBalance,this.amount),this.canWN)*d.gQ;this.$store.dispatch("CLP/burn",{_clpAmount:(0,o.Z)(t).toFixed(0)}).then((()=>{this.$message.success("Withdraw success"),this.amount=0,this.$emit("getData")})).catch((t=>{console.log(t),this.$message.info(t)}))}}},v=r,h=s(1001),m=(0,h.Z)(v,n,c,!1,null,"7623cd6e",null),p=m.exports,C=s(63822),w=s(65946),_=new l.Z,f={name:"PoolView",components:{Withdraw:p},data(){return{usdcAllowance:0,amount:void 0,balance:0,isShowWithdraw:!1,CLPTotalSupply:0,CLPBalance:0,Aum:0}},computed:{...(0,C.Se)(["isConnected","account"]),canWithdrawNum(){let t=0;return this.CLPTotalSupply>0&&(t=(0,o.Z)(_.divide(_.divide(_.multiply(this.CLPBalance,this.Aum),d.PL),this.CLPTotalSupply)).toFixed(4)),t}},watch:{account(){this.getData()}},methods:{async getAum(){let t=await this.$store.dispatch("vaultUtil/getAum");this.Aum=t},async getTotalSupply(){let t=await this.$store.dispatch("CLP/totalSupply");this.CLPTotalSupply=t},async CLPBalanceOf(){let t=await this.$store.dispatch("CLP/balanceOf",{account:this.account});this.CLPBalance=t/d.gQ},async allowance(){if(!this.isConnected)return;let t=await this.$store.dispatch("erc20/allowance",{address:w.Z.usdt,spender:w.Z.CLP,owner:this.account});t>0&&(this.usdcAllowance=parseInt(t)/10**6)},approve(){this.isConnected?this.$store.dispatch("erc20/approve",{address:w.Z.usdt,spender:w.Z.CLP,amount:this.$store.state.app.web3.utils.toWei((10**10).toString()).toString()}).then((()=>{this.allowance()})):this.$message.info("Please connect")},async getBalance(){if(!this.isConnected)return;let t=await this.$store.dispatch("erc20/balanceOf",{address:w.Z.usdt,account:this.account});this.balance=(0,o.Z)(t/d.gQ).toFixed(2)},add(){!this.amount||this.amount<=0?this.$message.info("Please input amount"):this.$store.dispatch("CLP/mint",{_usdAmount:this.amount*d.gQ}).then((()=>{this.$message.success("Add success"),this.getData()})).catch((t=>{this.$message.info(t)}))},getData(){this.isConnected&&(this.allowance(),this.getBalance(),this.getAum(),this.getTotalSupply(),this.CLPBalanceOf())}},created(){this.getData()}},g=f,A=(0,h.Z)(g,i,e,!1,null,"761c6d64",null),b=A.exports}}]);
//# sourceMappingURL=about.598ee48e.js.map