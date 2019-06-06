import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./modules/rem.js"
import "@/stylesheets/main.scss"
import "swiper/dist/css/swiper.min.css"
import axios from "axios"
import SIdentify from './views/login/identify.vue'
import { Navbar, TabItem,Lazyload,InfiniteScroll,Cell} from 'mint-ui'

Vue.component("mt-navbar", Navbar);
Vue.component("mt-tab-item", TabItem); 
Vue.use(Lazyload);
Vue.use(SIdentify);
Vue.use(InfiniteScroll );
Vue.component("mt-cell",Cell);

Vue.prototype.$http = axios; 
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
