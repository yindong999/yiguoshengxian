<template>
	<div class="tabItem" @click="change">
		<i :class="['fa','fa-'+icon]"></i>
		<div>{{txt}}</div>
	</div>
</template>
<script>
	export default{
		props:["txt","icon","name"],
		methods:{
			change(){
				this.$router.push(this.name)
			}
		}
	}

</script>
<style lang="scss" scoped>
	.tabItem{
		width:0.5rem;
		height:100%;
		font-size: 0.12rem;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		i{
			font-size:0.2rem;
			color:#999;
		};
		div{
			font-size: 0.1rem;
			color:#999;
		}
	}
</style>