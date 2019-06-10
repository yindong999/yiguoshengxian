<template>
  <div>
   
    <div class="header">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1" @click.native="sortSell">销量</mt-tab-item>
        <mt-tab-item id="2" @click.native="sortNewPro">新品</mt-tab-item>
        <mt-tab-item id="3" class="th" @click.native="changeColor">
          <div class="three" @click="sortPrice">
            <span>价格</span>
            <div class="threeIn">
              <i class="fa fa-chevron-up"></i>
              <i class="fa fa-chevron-down"></i>
            </div>
          </div>
        </mt-tab-item>
      </mt-navbar>
    </div>
    <div class="content" >
      <div class="eveFruit" v-for="f in fruits" :key="f._id">
        <img :src="f.SmallPic" alt>
        <div class="txt">
          <p>{{f.CommodityName}}</p>
          <p>{{f.SubTitle}}</p>
          <div class="bott">
            <span>￥{{f.SellPrice}}</span>
            <span>{{f.Spec}}</span>
            <span>
              <i class="fa fa-plus-circle" @click='addGoodsToCar(f)'></i>
            </span>
          </div>
        </div>
      </div>
    </div>
    <router-link tag='div' to='/shoppingCart'  class="cart">
      <i class="fa fa-shopping-cart"></i>
   </router-link>
    <div class="backTop" @click="backTop" v-if="backFlag">
      <i class="fa fa-arrow-up"></i> 
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import {mapState} from 'vuex'
import { Toast } from 'mint-ui';
export default {
  computed:{
    ...mapState(['cars'])
     
  },
  data() {
    return {
      selected: "1",
      fruits: [],
      resultFruit:[],
      flag: true,
      num: 1,
      backFlag: true,
      url: "",
       limit: 6,
       topp:0,
      page: 1,
      hasMore:true, // 判断是否有更多数据的标志
      loading: false // 默认是false, 触发无限滚动
    };
  },
  methods: {
    addGoodsToCar(val){
      // console.log(val)
				this.$store.dispatch('addGoodsToCar',val)
				Toast({
					message: '加入购物车成功',
					duration: 1000
					});
			},
    getMsg(url,likeName){
        this.$http.get(url).then(res => {
      // console.log(res.data.data.object_list);
      if (likeName === "全部") {
        this.fruits = res.data.data.object_list;
      } else {
        var arrFruit = res.data.data.object_list;
        var resFruit = arrFruit.filter(item => {
          if (item.CommodityName.indexOf(likeName) !== -1) {
            return true;
          } else {
            return false;
          }
        });
        this.fruits = resFruit;
      }
    });
    },
    backTop() {
      window.scrollTo(0, 0);
    },
    changeColor() {},
    /* 按新品排序的方法 */
    sortNewPro() {
      function compare3(property) {
        return function(a, b) {
          var value1 = a[property];
          var value2 = b[property];
          return value1 - value2;
        };
      }
      this.fruits.sort(compare3("CommodityCode"));
    },
    /* 按销量进行排序的方法 */
    sortSell() {
      function compare5(property) {
        return function(a, b) {
          var value1 = a[property];
          var value2 = b[property];
          var v1 = value1.substr(0, 1).charCodeAt(0);
          var v2 = value2.substr(0, 1).charCodeAt(0);
          return v1 - v2;
        };
      }
      this.fruits.sort(compare5("CommodityId"));
    },
    /* 按价格进行排序的方法 */
    sortPrice() {
      /* 该方法执行升序排序 */
      function compare(property) {
        return function(a, b) {
          var value1 = a[property];
          var value2 = b[property];
          return value1 - value2;
        };
      }
      /* 该方法执行降序排序 */
      function compare2(property) {
        return function(a, b) {
          var value1 = a[property];
          var value2 = b[property];
          return value2 - value1;
        };
      }
      this.num = this.num + 1;

      if (this.num % 2 == 0) {
        this.fruits.sort(compare("SellPrice"));
      } else {
        this.fruits.sort(compare2("SellPrice"));
      }
      if (this.num == 100) {
        this.num = 1;
      }
    }
  },
  created() {
    
    /* 添加窗口滚动事件监听 */
    window.addEventListener("scroll", function() {
      var topo = document.documentElement.scrollTop;
       this.topp = topo
      
    });
    // console.log(this.$route.params.id, this.$route.params.name);
    var url = this.$route.params.id;
    var likeName = this.$route.params.name;
   
    /* 用于存放结果的数据 */
    if (url == undefined) {
       this.$http.get("/api/yg/allCategoryData").then(res => {
      // console.log(res.data.data.object_list);
        var arrFruit = res.data.data.object_list;
          var resFruit = arrFruit.filter(item => {
          if (item.CommodityName.indexOf(likeName) !== -1) {
            return true;
          } else {
            return false;
          }
        });
        this.fruits = resFruit
      }
    );
    }else{
      this.getMsg(url,likeName)
    }
    // 加载完数据执行  按销量排序的方法
    this.sortSell();
  }
};
</script>
<style lang='scss' scoped>
.header {
  border-bottom: 1px solid #ccc;
  position: fixed;
  width: 100%;
  top: 0;
  .th {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .mint-tab-item {
    font-size: 0.14rem;
    .three {
      display: flex;
      flex-direction: row;

      .threeIn {
        display: flex;
        flex-direction: column;
        i {
          height: 0.05rem;
        }
      }
    }
  }
}

.content {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  .eveFruit {
    display: flex;
    flex-direction: row;
    height: 1.2rem;
    align-items: center;
    border-bottom: 1px solid #ccc;
    img {
      width: 0.8rem;
      height: 0.8rem;
    }
    .txt {
      display: flex;
      height: 1.2rem;
      flex-direction: column;
      justify-content: space-around;
      padding: 0.1rem 0;
      width: 2.3rem;
      p:nth-of-type(1) {
        font-size: 0.14rem;
      }
      .bott {
        span:first-of-type {
          color: red;
        }
        span:nth-of-type(2) {
          margin-left: 0.1rem;
        }
        span:last-of-type {
          float: right;
          i {
            color: green;
            width: 0.2rem;
            height: 0.2rem;
            font-size: 0.2rem;
          }
        }
      }
    }
  }
}
.cart {
  position: fixed;
  bottom: 0.8rem;
  width: 0.3rem;
  height: 0.3rem;
  right: 0.2rem;
  z-index: 10;
  border: 1px solid #ccc;
  display: flex;

  justify-content: center;
  align-items: center;
  i {
    font-size: 0.2rem;
  }
}
.backTop {
  background: #fff;
  position: fixed;
  bottom: 0.4rem;
  width: 0.3rem;
  height: 0.3rem;
  right: 0.2rem;
  z-index: 10;
  border: 1px solid #ccc;
  display: flex;

  justify-content: center;
  align-items: center;
  i {
    font-size: 0.2rem;
  }
}
.show{
  display:block;
}
.appear{
  display:none;
}
</style>