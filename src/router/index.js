import Vue from 'vue'
import Router from 'vue-router'
import home from './home'
import shoppingCart from './shoppingCart'
import detail from './detail'
import category from './category'
import moreCategoryList from './moreCategoryList'


Vue.use(Router)

export default new Router({
	routes: [
		{path:"/",redirect:"/home"},
		home,shoppingCart,detail,category,moreCategoryList
	]
})
