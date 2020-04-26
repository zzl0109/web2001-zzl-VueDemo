import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/index.css'
import './assets/js/flexible.min.js'

Vue.config.productionTip = false


//引入Vant组件
// import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
