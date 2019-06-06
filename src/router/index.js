import Vue from 'vue'
import Router from 'vue-router'
import home from './home'
import shoppingCart from './shoppingCart'
import detail from './detail'
import category from './category'
import moreCategoryList from './moreCategoryList'
import eat from './eat'
import mine from './mine'
import login from './login'
import register from './register'
import eatdetail from './eatdetail'
import headerDetail from './headerDetail'
import setcontent from './setcontent'
import AboutUs from './AboutUs'
import business from './business'
import city from './city'
import RegistrationAgreement from './RegistrationAgreement'


Vue.use(Router)

export default new Router({
	routes: [
		{path:"/",redirect:"/home"},
		home,city,shoppingCart,detail,category,moreCategoryList,mine,login,eat,eatdetail,register,headerDetail,setcontent,AboutUs,business,RegistrationAgreement
	]
})

