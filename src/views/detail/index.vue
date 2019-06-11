<template>
	<div class="detail">
		<div @click="goBack"  class="back"><i class="fa fa-arrow-left"></i></div> 
		<img :src="goodInfo.SmallPic" alt="">
		<p class="p1">{{goodInfo.CommodityName}}</p>
		<p class="p2">{{goodInfo.SubTitle}}</p>
		<p class="p3">￥{{goodInfo.SellPrice}}</p> 
		<p class="p5">不支持七天无理由退货</p>
		<span class="span1">规格</span>
		<p class="p4">
			<span>{{goodInfo.Spec}}</span>
		</p>
	 
			<span>{{goodInfo.PromotionTag}}</span>
	 
		<div class="num">
			<span>数量</span>
			<div class="changeNum">
				<input type="button" value="-" @click="reduceNum">
				<input type="text" v-model="num">
				<input type="button" value="+" @click="addNum">
			</div>
		</div>
		<footer>
			<router-link to="home" tag="div"><i class="fa fa-home"></i><span>首页</span></router-link>
			<router-link to="shoppingCart" tag="div"><i class="fa fa-shopping-cart"></i><span>购物车</span></router-link>
			<input type="button" value="加入购物车">
		</footer>
	</div>
</template>
<script>
import {mapState} from 'vuex'

	export default {
		data(){
			return{
				num:1,
				goodInfo:Object,
				path:''
				
			}
		},
		methods:{
			addNum(){
				this.num++;
			},
			reduceNum(){
				if(this.num > 1){
					this.num--;
				}
			},
			getDetailData(){
				var url = this.$route.query.CommodityId
				console.log(url)
				this.$http.get("/api/yg/allCategoryList/" + url).then(res=>{
				console.log(res)
				this.goodInfo = res.data.data.object_list[0]
			})
			},
			goBack(){
				this.$router.push({path:this.path})
			}
		},
		created(){
				this.getDetailData();
		} 
	}
</script>
<style lang="scss" scoped>
	.detail{
		padding:0 0.1rem;
		padding-bottom: 0.5rem;
		.back{
			width:0.3rem;
			height:0.3rem;
			border:3px solid #ccc;
			font-size:0.2rem;
			text-align: left;
			line-height: 0.2rem;
			border-radius: 50%;
			color:#ccc;
			position:fixed;
			left:0.1rem;
			top:0.1rem;
			padding-left: 0.02rem;
		};
		img{
			width:3rem;
			height:3rem;
		};
		.p1{
			height:0.3rem;
			font-size: 0.14rem;
			line-height: 0.3rem;
			color:#333;
		};
		.p2{
			height:0.3rem;
			font-size:0.12rem;
			line-height: 0.3rem;
		};
		.p3{
			color:#fb3d3d;
			font-size: 18px;
		};
		.span1{
			font-size: .1rem;
		};
		.p5{
			font-size: 0.1rem;
			text-align: center;
			height:0.3rem;
			border-top: 1px solid #ccc;
			line-height: 0.4rem;
			margin-top: 0.1rem;
		}
		.p4{
			display:inline-block;
			margin-left: .1rem;
			height:0.3rem;
			border:1px solid #11b57c;
			line-height: 0.3rem;
			text-align: center;
			color:#11b57c;
			border-radius: 0.2rem;
			width:0.8rem;
			margin:0.2rem 0.1rem;
		};
		.num{
			span{
				font-size: 0.1rem;
			};
			.changeNum{
				display:inline-block;
				margin:0 0.1rem;
				border:1px solid #ccc;
				border-radius: 5px;
				width:0.7rem;
				text-align: center;
				background: #f0f0f0;
				input{
					width:0.2rem;
					height:0.2rem;
					border:none;
					text-align: center;
					font-size: 0.12rem;
				}
			}
			
		}
		footer{
			display:flex;
			position:fixed;
			bottom:0;
			width:3.2rem;
			height:0.4rem;
			background: #fff;
			div{
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				width:0.5rem;
				font-size: 10px;
				i{
					font-size: 0.2rem;
				}
			};
			input{
				width:2.2rem;
				background: #fb3d3d;
				border:none;
				color:#fff;
				font-weight: bolder;
				font-size: 16px;
			}
		}
	}
</style>