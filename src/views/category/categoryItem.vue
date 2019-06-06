<template>
<div>
{{obj.CategoryName}}
</div>
</template>
<script>
export default {
data () {
return {
    id:''
}
},
props:['obj'],
created(){
    this.id = this.$route.query.id
}
}
</script>
<style scoped>

</style>