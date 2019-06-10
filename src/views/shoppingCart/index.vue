<template>
  <div class="shoppingCart">
    <!-- 购物车顶部 -->
    <div class="top">
      <p>登录可同步购物车内商品</p>
      <router-link to="login" tag="div">登录</router-link>
    </div>

    <!-- 空购物车提示信息 -->
    <div class="imgBox" v-if="!carsList.length">
      <img src="/shoppingCart.png" alt>
      <span>购物车空空的，快去逛逛吧！</span>
      <router-link to="home" tag="p">去逛逛</router-link>
    </div>
    <!-- 购物车商品信息 -->
    <div class="goodInfo">
      <div v-for="cl in carsList">
        <div class="item">
          <div class='left'>
            <img style="height:1rem;width:1rem;" :src="cl.SmallPic" alt>
          </div>
          <div class="right">
            <p class='fp'>{{cl.CommodityName}}</p>
            <p class='fp'>{{cl.PromotionTag}}</p>
            <p class='fp'>单价：￥{{cl.SellPrice}}</p>
            <span style="margin-left:10px;">数量：</span>
            <my-button @click.prevent="addGoodsToCar(cl)">+</my-button>
            {{cl.num}}
            <my-button @click.prevent="reduceNum(cl)">-</my-button>
            <i class="fa fa-trash-o" @click="deleteGoodInCar(cl)"></i>
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
      <div class="pay" :class="{active:carsList.length}">去结算({{computeTotal.num}})</div>
    </footer>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState({
      carsList: state => state.cars
    }),
    ...mapGetters(["computeTotal"])
  },
  methods: {
    ...mapActions(["addGoodsToCar", "reduceNum", "deleteGoodInCar"])
  },
  created() {
    // console.log(this.carsList);
  }
};
</script>
<style lang="scss" scoped>
.shoppingCart {
  padding-bottom: 0.4rem;
  .top {
    width: 3.2rem;
    height: 0.3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 0.5rem;
    p {
      font-size: 0.12rem;
      color: #999;
    }
    div {
      width: 0.5rem;
      height: 0.2rem;
      font-size: 0.12rem;
      border: 1px solid #ccc;
      border-radius: 0.05rem;
      line-height: 0.2rem;
      text-align: center;
    }
  }
  .imgBox {
    margin-top: 0.5rem;
    width: 3.2rem;
    height: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    img {
      width: 1.5rem;
      height: 1rem;
    }
    span {
      font-size: 0.12rem;
      color: #999;
    }
    p {
      width: 1.2rem;
      height: 0.3rem;
      border: 1px solid #11b57c;
      text-align: center;
      line-height: 0.3rem;
      color: #11b57c;
      border-radius: 0.1rem;
    }
  }
 
    .item {
      border-bottom: 1px solid #ccc;
      background: #fff;
      display:flex;
      flex-direction:row;
      justify-content:flex-start;
      .left {
        
      }

      .right {
       width: 2rem;
        color: #000;
        font-size: 0.12rem;
        .fp {
          margin: 0;
          padding: 0;
		      font-size:0.12rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        i{
          width:0.3rem;height:0.3rem;
          margin-left:0.3rem;
          font-size:0.3rem;
        }
      }
    
  }
  footer {
    display: flex;
    width: 100%;
    height: 0.4rem;
    position: fixed;
    bottom: 0.4rem;
    background: #fff;
    .p1 {
      width: 0.5rem;
      text-align: center;
      font-size: 0.1rem;
      color: #000;
      line-height: 0.4rem;
    }
    .p2 {
      width: 1.7rem;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      font-size: 0.1rem;
      color: #000;
      justify-content: center;
      padding-right: 0.1rem;
    }
    .pay {
      width: 1rem;
      height: 0.4rem;
      background: #ccc;
      color: #fff;
      line-height: 0.4rem;
      text-align: center;
      &.active {
        background: #fb3d3d;
      }
    }
  }
}
</style>