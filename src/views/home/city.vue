<template>
  <div>
    <div class="hotCity">
      <p>热门城市</p>
      <div
        class="oneCity"
        v-for="hotCity in hotCitys"
        :key="hotCity.AreaId"
        :FirstLetter="hotCity.FirstLetter"
        :AreaCode="hotCity.AreaCode"
        @click="getArea(hotCity)"
      >{{hotCity.AreaName}}</div>
    </div>
    <div class="moreCity">
      <div class="everyCity" v-for="cl in cityLists" :key="cl.FirstLetter">
        <p>{{cl.FirstLetter}}</p>
        <div>
          <span
            v-for="detail in cl.CityList"
            :key="detail.AreaId"
            :AreaCode="detail.AreaCode"
            :FirstLetter="detail.FirstLetter"
            @click="getArea(detail)"
          >{{detail.AreaName}}</span>
        </div>
      </div>
    </div>
    <mt-popup v-model="popupVisible" position="bottom" class="bottom">
      <p class="oneP">{{haveName}}</p>
      <p class="twoP" v-for="hc in haveCity"
       :key="hc.AreaId"
        @click="transfer(hc)">
        {{hc.AreaName}}</p>
    </mt-popup>
  </div>
</template>
<script>
 
export default {
  data() {
    return {
      popupVisible: false,
      hotCitys: [],
      cityLists: [],
      haveCity: [],
      haveName: ""
    };
  },
  created() {
    this.$http.get("/api/yg/city_list").then(res => {
      this.hotCitys = res.data.data.object_list[0].HotCityList[0].CityList;
      this.cityLists = res.data.data.object_list[0].CityList;
    });
  },
  methods: {
     transfer(obj){
       console.log("===================")
        this.$store.dispatch('transfer',obj)
        this.popupVisible = false
        this.$router.push("/")
     },
    getArea(detail) {
      console.log(detail);
      this.$http.get("/api/yg/detailCity").then(res => {
        console.log(res);
        var res = res.data.data.object_list;
        var arr = res.filter(item => {
          if (item.AreaCode === detail.AreaCode) {
            return true;
          } else {
            return false;
          }
        });
        this.haveName = detail.AreaName;
        this.haveCity = arr;
        this.popupVisible = true;
      });
    },
   
  }
};
</script>
<style lang='scss' scoped>
/* 定义公共样式1 */
.publicOne {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
}
/* 定义公共样式2 */
.publicTwo {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  width: 0.6rem;
  height: 0.2rem;
  margin: 0.05rem 0.2rem;
  border: 1px solid #ccc;
  border-radius: 0.3rem;
  font-size:0.12rem;
}
.bottom {
  width: 100%;
  p {
    border-bottom: 1px solid #ccc;
    width: 100%;
    height: 0.22rem;
  }
  .oneP {
    padding-left: 0.1rem;
  }
  .twoP {
    padding-left: 0.2rem;
  }
}
.hotCity {
  @extend .publicOne;
  height: 2.1rem;
  width: 100%;
  background: #f4f4f4;

  p {
    width: 100%;
    padding: 0.1rem 0 0 0.1rem;
  }
  .oneCity {
    @extend .publicTwo;
  }
}
.moreCity {
  .everyCity {
    p {
      width: 100%;
      height: 0.2rem;
      background: #f4f4f4;
      padding-left: 0.1rem;
      line-height: 0.2rem;
    }
    div {
      @extend .publicOne;
      span {
        @extend .publicTwo;
      }
    }
  }
}
</style>