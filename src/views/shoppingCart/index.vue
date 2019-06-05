<template>
	<div class="shoppingCart">
		<!-- 购物车顶部 -->
		<div class="top">
			<p>登录可同步购物车内商品</p>
			<router-link to="login" tag="div">登录</router-link>
		</div>

		<!-- 空购物车提示信息 -->
		<div class="imgBox" v-if="!cars.length">
			<img src="/shoppingCart.png" alt="">
			<span>购物车空空的，快去逛逛吧！</span>
			<router-link to="home" tag="p">去逛逛</router-link>
		</div>
		<!-- 购物车商品信息 -->	
		<div class="goodInfo" v-for="data in cars">
		<input type="checkbox">
			<img :src="data.commoditysComponentList[0].pictureUrl" alt="">
			<div class="div1">
				<p class="title">{{data.commoditysComponentList[0].commodityName}}</p>
				<i class="fa fa-trash-o" @click="deleteGoodInCar(data)"></i>
				<div class="div2">
					<p>￥{{data.commoditysComponentList[0].commodityPrice}}</p>
					<div class="changeNum">
						<input type="button" @click="reduceGoodIncar(data)" value="-">
						<p class="num">{{data.num}}</p>
						<input type="button" @click="addGoodInCar(data)" value="+">
					</div>
				</div>
			</div>
		</div>		
		<!-- 购物车底部 -->
		<footer>
			<p class="p1">全选</p>
			<p class="p2">
				<span>合计(不含运费)：￥{{computeTotal.price}}</span>
			</p>
			<div class="pay" :class="{active:cars.length}">去结算({{computeTotal.num}})</div>
		</footer>
	</div>
</template>
<script>
	import {mapState,mapActions,mapGetters} from "vuex"
	export default{
		computed:{
			...mapState({
				cars:state=>state.cars
			}),
			...mapGetters(["computeTotal"])
		},
		methods:{
		      ...mapActions(["addGoodInCar","reduceGoodIncar","deleteGoodInCar"]),
		}	
	}
</script>
<style lang="scss" scoped>
	.shoppingCart{
		padding-bottom: 0.4rem;
		.top{
			width:3.2rem;
			height:0.3rem;
			display:flex;
			justify-content: space-around;
			align-items: center;
			padding:0 0.5rem;
			p{
				font-size: 0.12rem;
				color:#999;
			};
			div{
				width:0.5rem;
				height:0.2rem;
				font-size: 0.12rem;
				border:1px solid #ccc;
				border-radius: 0.05rem;
				line-height: 0.2rem;
				text-align: center;
			}
		};
		.imgBox{
			margin-top: 0.5rem;
			width:3.2rem;
			height:2rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			img{
				width: 1.5rem;
				height:1rem;
			};
			span{
				font-size: 0.12rem;
				color:#999;
			};
			p{
				width:1.2rem;
				height:0.3rem;
				border:1px solid #11b57c;
				text-align: center;
				line-height: 0.3rem;
				color:#11b57c;
				border-radius: 0.1rem;
			}
		};
		.goodInfo{
			width:100%;
			height:0.8rem;
			display: flex;
			input[type="checkbox"]{
				width:0.3rem;
			}
			img{
				width:0.8rem;
				height:0.8rem;
			};
			.div1{
				width:2rem;
				display: flex;
				flex-direction: column;
			};
			.div2{
				display: flex;
				height:0.2rem;
				margin-top: 0.1rem;
				justify-content: space-between;
				p{
					font-size: 0.12rem;
					color:#f00;
				}
				.changeNum{
					width:0.66rem;
					input{
						text-align: center;
						height:0.18rem;
					}
					input:nth-child(1),input:nth-child(3){
						width:0.18rem;
						border:1px solid #ccc;
						color:#666;
					};
					.num{
						width:0.3rem;
						height:0.18rem;
						display: inline-block;
						border-top: 1px solid #ccc;
						border-bottom: 1px solid #ccc;
						color:#000;
						text-align: center;
					}
				}
			};
			.fa{
				display: flex;
				justify-content: flex-end;
			};
			.title{
				height:0.2rem;
				font-size: 0.1rem;
				line-height: 0.3rem;
				color:#000;
			};	
		}
		footer{
			display:flex;
			width:100%;
			height:0.4rem;
			position:fixed;
			bottom:0.4rem;
			background:#fff;
			.p1{
				width:0.5rem;
				text-align: center;
				font-size: 0.1rem;
				color:#000;
				line-height: 0.4rem;
			}
			.p2{
				width:1.7rem;
				display:flex;
				flex-direction: column;
				align-items: flex-end;
				font-size: 0.1rem;
				color:#000;
				justify-content: center;
				padding-right: 0.1rem;
			};
			.pay{
				width:1rem;
				height:0.4rem;
				background: #ccc;
				color:#fff;
				line-height: 0.4rem;
				text-align: center;
				&.active{
					background: #fb3d3d;
				}
			}
		}
	}
</style>