import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import "./modules/rem.js"
import "@/stylesheets/main.scss"
import "swiper/dist/css/swiper.min.css"
import axios from "axios"
import SIdentify from './views/login/identify.vue'
import {Checklist, Navbar, TabItem,Lazyload,InfiniteScroll,Cell,Popup,Button} from 'mint-ui'

Vue.component("my-checklist", Checklist);

Vue.component("mt-popup", Popup);
Vue.component("mt-navbar", Navbar);
Vue.component("mt-tab-item", TabItem); 
Vue.component("my-button", Button); 
 

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
