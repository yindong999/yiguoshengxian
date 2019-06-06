<template>
    <div class="eat"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
    >
        <mt-cell
            title="返回"
            href="home"
        >
        </mt-cell>
        <router-link 
            class="title"
            tag="div"
            to="headerDetail"
        >
            <div class="title-icon">
                <aside class="title-content"
                    v-for="title in titles"
                    :key="title.id"
                >
                    <img :src="title.PictureUrl" alt="">
                    <span>{{title.BannerName}}</span>
                </aside>
            </div>
        </router-link>
        <div class="loading" v-if="!contents"></div>
        <router-link 
            class="content"
            tag="div"
            to="./eatdetail"
            v-else
            v-for="content in contents"
            :key="content.id"
           
        >
            <div class="img-box">
                <span class="txt-live">{{content.OtherCategoryName}}</span>
                <span class="num">
                   <i class="fa fa-compass"></i> 
                    {{content.TotalReadNum}}
                </span>
                <img v-lazy="content.PictureUrl" alt="">
            </div>
            <div class="tit1">
                <p>{{content.EfruitArticleTitle}}</p>
            </div>
            <div class="time">
                <img :src="content.AuthorPicture" alt="">
                <span class="name">易果君</span>
                <span class="time-new">{{content.PublishedTimed}}</span>
            </div>
        </router-link>
         <!-- <eatDetail></eatDetail> -->
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import eatDetail from "./eatDetail";
 
export default {
    data(){
        return {
            // contents:null,
            titles:[],
            contents:[],
            loading:false,//默认触发无限滚动
            limit:6,
            page:1,
            hasMore:true //默认有更多的数据
        }
    },
    components:{
        eatDetail
    },
   
    methods:{
        loadMore(){
           
            if(!this.hasMore){
                //关闭无线滚动
                this.loading = true;
                return false;
            }
            this.getMovies()
        },
        getMovies(){
            let {page,limit} = this;
            let instance = Toast({
                message:"正在加载中...",
                iconClass:"fa fa-spinner fa-pulse",
                duration:-1
            })
            this.loading = true;//请求数据的时候关闭无线滚动
            this.$http.get("/api/yg/eatMore_list",{
                params:{
                    limit,
                    page
                }
            }).then(res=>{
            this.contents = this.contents.concat(res.data.data.object_list)
            this.loading = false//开启无线滚动
            instance.close();
            if(this.page * this.limit >= res.data.data.total){
                this.hasMore = false //没有更多数据了

                return false
            }
            this.page++;
        })
        }
    },
    created(){
        this.$http.get("/api/yg/eat").then(res=>{
            // console.log(res)
            this.titles = res.data.data.object_list;
        })
    }
}
</script>

<style>
    .mint-cell{
        height: 30px !important;
        /* background: red; */
        min-height:0px;
        border-bottom:1px solid #f0f0f0;
    }
    .mint-cell-wrapper{
        height: 30px;
    }
    .eat{
        background: #f0f0f0;
    }
    .title{
        width:100%;
        height: 0.9rem;
        background: #fff;
        display: flex;
        justify-content: space-around;
    }
    .title .title-icon{
        width: 92%;
        height: 0.9rem;
        background:#fff;
        display: flex;
        align-items: center;
        /* justify-content:space-between */
    }
    .title-icon .title-content{
        float: left;
        width: 20%;
        display: flex;
        align-items: center;
        flex-flow: wrap;
        justify-content: space-around
    }
    .title-icon .title-content img{
        width: 40px;
        height: 32px;
    }
    .title-icon .title-content span{
        margin-top: 0.05rem;
    }
    .content{
        width: 100%;
        height: 2.8rem;
        background:#fff;
        margin-top:0.05rem;
        border-bottom:1px solid #f0f0f0;
        border-top:1px solid #f0f0f0;
        padding: 2.6% 2.6% 0 2.6%;
    }
    .content .img-box{
        width: 100%;
        height: 1.3rem;
        background: #fff;
        position: relative;
    }
    .content .img-box .txt-live{
        position: absolute;
        top: 10px;
        left: 0;
        padding: 2px 9px 0px 4px;
        box-sizing: border-box;
        height: 23px;
        line-height: 20px;
        background: #ff6b22;
        text-align: left;
        color: #fff;
        border-radius: 0 15px 15px 0;
        font-size: 13px;
        opacity: 0.90;
    }
    .content .img-box .num{
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 2px 8px 0px 20px;
        height: 17px;
        line-height: 16px;
        box-sizing: border-box;
        background: rgba(255,255,255,.85);
        border-radius: 20px;
        text-align: center;
        color: #656565;
        font-size: 12px;
    }
    .content .img-box .num .fa-compass{
        position: absolute;
        left: 6px;
        top: 4px;
        background-position: 0px 0;
        width: 12px;
        height: 9px;
    }

    .content .img-box img{
        width: 100%;
        height: 100%;
    }
    .content .tit1{
        width: 100%;
        height: 0.8rem;
        background: #fff;
        border-bottom:1px solid #f0f0f0;
    } 
    .content .tit1 p{
        padding: 14px 0 0px;
        font-size: 18px;
        color: #000;
        line-height: 22px;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .content .time{
        width: 100%;
        height: 0.6rem;
        background:#fff;
        position: relative;
        padding: 0px 80px 0px 45px;
        box-sizing: border-box;
    } 
    .content .time img{
        position: absolute;
        left: 0px;
        top: 50%;
        margin-top: -17px;
        width: 34px;
        height: 34px;
        border-radius: 50%;
    }
    .content .time .name{
        display: inline-block;
        line-height: 57px;
        color: #8d8a8a;
        font-size: 13px;
    }
    .content .time .time-new{
        position: absolute;
        top: 50%;
        margin-top: -28px;
        right: 0;
        line-height: 57px;
        color: #8d8a8a;
        font-size: 13px;
    }
</style>
