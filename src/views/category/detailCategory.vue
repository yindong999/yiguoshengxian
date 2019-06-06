<template>
  <div class="all">
    <router-link tag='div'
     class="one"
     v-for="sf in singleFruits"
      :to="{name:'moreCategoryList',params:{id:sf.interf,name:sf.CategoryName}}"
      :key="sf.CategoryId">
      <img :src="sf.PictureUrl" alt>
      <span>{{sf.CategoryName}}</span>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      singleFruits: [],
      url:''
    };
  },
  props: ["flag","obj"],
   
  created() {
   
      this.$http.get("/api/yg/category_list").then(res => {
          // res.data.data.object_list   CategoryId     
          var arr = res.data.data.object_list;
          var result = arr.filter(item => {
            if (item.CategoryId === 'ad7f227d-73c0-44a2-9edd-924006deb134') {
              return item;
            }
          });
         
          var fruits =  result[0].Childs;
          
           fruits.forEach(item=>{
            item.interf = "/api/yg/allFruit_list"
          })
          this.singleFruits =fruits
        
        });
  },
  watch: {
    flag: {
      handler(newValue, oldValue) {
        this.$http.get("/api/yg/category_list").then(res => {
          // res.data.data.object_list   CategoryId
          var arr = res.data.data.object_list;
         
          var result = arr.filter(item => {
            if (item.CategoryId === newValue) {
              return item;
            }
          });
          var arr = result[0].Childs
          arr.forEach(item=>{
            item.interf = this.obj.interf
          })
          this.singleFruits = arr
           
        });
      },
      deep: true
     } ,
    obj:{
      handler(n,o){
        this.url = this.obj.interf
        
      }
    }
  } 
};
</script>
<style lang='scss' scoped>
.all {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  .one {
    width: 0.8rem;
    height: 0.7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 0.5rem;
      height: 0.5rem;
    }
    span{
      font-size:10px;
       }
  }
}
</style>