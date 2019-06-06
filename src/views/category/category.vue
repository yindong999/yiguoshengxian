<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <form action method="post">
        <div class="left">
          <i class="fa fa-search"></i>
          <input type="text" @blur='getBlur' @focus='loseFocus'  v-model='deleteContext' placeholder="请输入商品名称">
            <div @click='deleteSearch' v-if='showDel'><i class="fa fa-close" ></i></div>
        </div>
        <router-link tag='div' :to="{name:'moreCategoryList',params:{name:deleteContext}}">搜索</router-link>
      </form>
    </div>
    <!-- 中间显示数据的地方 -->
    <div class="allCategory">
      <!-- 左侧选项卡 -->
      <div class="left">
        <categoryItem
          tag="div"
          v-for="fruit in fruits"
          :key="fruit.CategoryId"
          :obj="fruit"
          :class="['tab',fruit.CategoryId === flag ? 'active' : '']"
          @click.native="change(fruit.CategoryId,fruit)"
        ></categoryItem>
      </div>
      <!-- 右侧显示具体类别的区域 -->
      <div class="right">
        <detailCategory :flag="flag" :obj='obj'></detailCategory>
      </div>
    </div>
    <!-- 遮罩层 -->
    <div class='mb' v-if='disappearFlag' @click='disappear'></div>
  </div>
</template>
<script>
import categoryItem from "./categoryItem";
import detailCategory from "./detailCategory";

export default {
  data() {
    return {
      fruits: [],
      flag: "ad7f227d-73c0-44a2-9edd-924006deb134",
      obj:Object,
      deleteContext:'',
      showDel:false,
      disappearFlag:false
    };
  },
  watch:{
    /* 监听搜索框里面的内容，有内容就显示删除按钮，没有就隐藏 */
    deleteContext(){
      if(this.deleteContext != ''){
        this.showDel = true
      }else{
        this.showDel = false
      }
    }
  },
  methods: {
    disappear(){
        this.disappearFlag = false
    },
    /* 输入框获得焦点执行的方法 */
    getBlur(){
       this.disappearFlag = false
    },
    loseFocus(){
       this.disappearFlag = true
    },
    /* 改变侧边选项卡的方法 */
    change(val,obj) {
      this.flag = val;
      //  console.log(obj)
      this.obj = obj
    },
    /* 删除搜索框里面的内容的方法 */
    deleteSearch(){
        this.deleteContext = ''
    }
  },
  components: {
    categoryItem,
    detailCategory
  },
  created() {
    /* 获取页面数据的方法 */
    this.$http.get("/api/yg/category_list").then(res => {
      var arr = res.data.data.object_list;
      var inter = [
        "/api/yg/allFruit_list",
        "/api/yg/homeFruit_list",
        "/api/yg/allMeat_list",
        "/api/yg/egg_list",
        "/api/yg/seaFood_list",
        "/api/yg/niceFood_list",
        "/api/yg/milkCake_list",
        "/api/yg/vegetables_list",
        "/api/yg/fastFood_list",
        "/api/yg/oil_list",
        "/api/yg/wine_list",
        "/api/yg/wine_list"
      ];
      /* 给数组里面的每一个 对象添加一个 interf 属性，属性值是一个接口地址*/
      for (var i = 0; i < inter.length; i++) {
        arr[i].interf = inter[i];
      }

      this.fruits = arr;
    });
  }
};
</script>
<style lang='scss' scoped>
.header {
  height: 0.35rem;
  width: 100%;
  border: 1px solid #ccc;
  background: #fff;
  form {
    display: flex;
    height: 0.35rem;
    flex-direction: row;

    justify-content: space-around;
    align-items: center;
    padding-right: 0.1rem;
    .left {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.1rem;
      font-size: 12px;
      width: 80%;
      height: 0.25rem;
      background: #f4f4f4;
      border-radius: 20px 20px;
      i {
        font-size: 0.2rem;
      }
      input {
        font-size: 0.2rem;
        background: #f4f4f4;
        border: 0;
        width: 90%;
        height: 90%;
        font-size: 12px;
      }
    }
    a {
      font-size: 20px;
      font-size: 14px;
      color: green;
    }
  }
}
.allCategory {
  height: 100%;
  display: flex;
  flex-direction: row;
  .left {
    width: 0.7rem;
    height: 4.9rem;
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: #f4f4f4;
    font-size: 0.14rem;
    .tab {
      height: 0.38rem;
      width: 100%;
      text-align: center;
      line-height: 0.4rem;
    }
  }
  .right {
    // border: 1px solid green;
    flex: 1;
  }
}
.active {
  background: #fff;
}
/* 遮罩层 */
.mb{
  height:94%;
  width:100%;
  background:rgba(0,0,0,0.5);
  position:fixed;
  z-index:11;
  top:0.35rem;
}
</style>