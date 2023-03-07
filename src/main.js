import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css';
import './styles/common.scss'
import './styles/commons.scss'
import './styles/overrideAntd.scss'
import './styles/variable.scss'
import './styles/mixin.scss'
import "./styles/font.css"
Vue.config.productionTip = false
import Antd from 'ant-design-vue'
Vue.use(Antd)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
