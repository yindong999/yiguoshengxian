<template>
	<div class="tabBar" v-if="isShow">
		<tabItem :flag="flag" @changeColor="changeColor" name="home" icon="home" txt="首页"></tabItem>
		<tabItem :flag="flag" @changeColor="changeColor" name="category" icon="plus-square-o" txt="分类"></tabItem>
		<tabItem :flag="flag" @changeColor="changeColor" name="eat" icon="cutlery" txt="吃饭吧"></tabItem>
		<tabItem :flag="flag" @changeColor="changeColor" name="shoppingCart" icon="shopping-cart" txt="购物车"></tabItem>
		<tabItem :flag="flag" @changeColor="changeColor" name="mine" icon="user" txt="我的易果"></tabItem>
	</div>
</template>
<script>
	import router from "@/router"
	import tabItem from "./tabItem.vue"
	export default{
		data(){
			return{
				isShow:true,
				flag:"home"
			}
		},
		methods:{
			changeColor(data){
				this.flag = data;
			}
		},
		components:{
			tabItem
		},
		created(){
        //全局前置路由钩子
        router.beforeEach((to,from,next)=>{
            switch (to.name) {
                case "home":
                    this.isShow = true
                    break;
                case "category":
                    this.isShow = true
                    break;
                case "shoppingCart":                  
                    this.isShow = true
                    break;
                case "moreCategoryList":                  
                    this.isShow = true
                    break;
                case "mine":                   
                    this.isShow = true
                    break;
                default:
                    this.isShow = false
                    break;
            }
            next();
        })
    }
	}
</script>
<style lang="scss" scoped>
	.tabBar{
		display:flex;
		position:fixed;
		bottom:0;
		width:100%;
		height:0.4rem;
		justify-content: space-around;
		background: #fff;
		padding-top: 0.04rem;
	}
</style>