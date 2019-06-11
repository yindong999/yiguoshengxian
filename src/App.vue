<template>
    <div id="app">
    	<router-view></router-view>
		<tabBar></tabBar>
    </div>
</template>
<script>
	import tabBar from "@/components/tabBar/"
	export default{
		created(){
			this.$router.push("/")
			this.$store.dispatch("initCar")
		},
		components:{
			tabBar
		},
		
	}
</script>
<style lang="scss" scoped>
	#app{
		display:flex;
		flex-direction: column;
	}
</style>
