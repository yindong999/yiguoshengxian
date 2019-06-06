<template>
    <div class="mine">
        <!-- header -->
        <div class="header">
            <div class="headerImg">
                <span class="imgBox">
                    <img src="http://img02.yiguo.com/e/web/150703/00781/140145/no-pic.jpg" alt="用户头像">
                </span>
                <a href="">
                    <router-link class="name" tag="p" to="../login">登录/注册</router-link>
                </a>
            </div>
            <router-link 
                class="setting"
                tag="i"
                to="./setcontent"
            ></router-link>
            <div class="account">
                <p class="list">
                    <span class="num">-</span>
                    <span class="txt">卡包余额</span>
                </p>
                <p class="list fl">
                    <span class="num">-</span>
                    <span class="txt">悠币</span>
                </p>
            </div>
        </div>
        <!-- middle list -->
        <div class="listTab">
            <ul>
                <list
                    v-for="item in lists" 
                    :key="item.id" 
                    :item="item"
                ></list>           
                <li class="fourLi last-border-li">
                    <span class="pointRight"></span>
                    <a href="">
                        <i class="icon"></i>
                        全部订单
                        <i class="goPage"></i>
                    </a>
                </li>
            </ul>
        </div>
        <!-- bottom list -->
        <div class="testList">
            <ul>
                <secList 
                    v-for="secItem in secLists" 
                    :key="secItem.id" 
                    :secItem="secItem"
                ></secList>
            </ul>
        </div>
    </div>
</template>

<script>
import login from "../login"
import list from "./list";
import secList from "./secList"
import { log } from 'util';
export default {
    components: {
        list,
        secList
    },
    data(){
        return {
            lists:null,
            secLists:null
        }
    },
    created () {
        this.$http.get("/api/yg/mine").then(res =>{
            let tmp = res.data.data.object_list;           
            this.lists = tmp[0].Data.UserInfo.OrderIcons;
            ;
            this.secLists = tmp[0].Data.UserInfo.IconList
        });
    }
}
</script>

<style lang="scss" scoped>
    .header{
        height: 1.65rem;
        position: relative;
        width: 100%;
        background: #2dd282 url("http://img06.yiguoimg.com/d/web/180517/01262/143351/bgimg.jpg");
        background-size: 100% 100%;
        padding: 0 0 0.3rem 0;
        i{
            position: absolute;
            top: .09rem;
            right: .12rem;
            display: inline-block;
            width: .14rem;
            height: .15rem;
            background: url("http://img07.yiguoimg.com/d/web/180508/01319/184003/setting.png") no-repeat;
            background-size: 100% 100%;
        }
    }
    .headerImg{
        position: relative;
        display: inline-block;
        height: 0.58rem;
        margin-top: 0.23rem;
        padding: 0 0.08rem 0 0.73rem;
        box-sizing: border-box;
        .imgBox{
            border: 1px solid rgba(255,255,255,.5);
            display: inline-block;
            position: absolute;
            left: 0.128rem;
            top: 0;
            width: 0.64rem;
            height: 0.64rem;
            border-radius: 50%;
            background: rgba(255,255,255,.5);
            img{
                position: absolute;
                top: 0;
                left: 0rem;
                width: 0.64rem;
                height: 0.64rem;
                border-radius: 50%;
            }
        }
        .name{
            display: inline-block;
            text-align: left;
            color: #fff;
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            line-height: 0.43rem;
            padding: 0.08rem 0 0 0.2rem;
        }
    }
    .account{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0.45rem;
        background: white;
        padding: .07rem .07rem .07rem .07rem;
        box-sizing: border-box;
        .list{
            margin: 0;
            padding: 0;
            float: left;
            width: 50%;
            height: 100%;
            text-align: center;
            span{
                display: block;
            }
            .txt{
                font-size: 10px;
            }
        }
    }
    .listTab{
        position: relative;
        width: 100%;
        background: #fff;
        height: 0.7rem;
        margin: .07rem 0;
    }
    .testList{
        position: relative;
        width: 100%;
        background: #fff;
        margin-bottom: .07rem;
        height: 1.4rem;
    }
    ul{
        width: 100%;
        height: 100%;
    }
    .last-border-li{
        .icon{
            background: url("https://img07.yiguoimg.com/d/web/180315/01315/162344/allorder.png") no-repeat;
            background-size: 100% 100%;
            height: .23rem;
            width: .23rem;
        }
        .goPage{
            display: inline-block;
            width: .03rem;
            height: .06rem;
            background: url(https://img05.yiguoimg.com/d/web/180313/01318/155922/gopage2.png) no-repeat;
            background-size: .04rem .06rem;
            vertical-align: middle;
            margin-left: .02rem;
        }
        .pointRight{
            position: absolute;
            top: 0.01rem;
            left: 0;
            display: inline-block;
            width: .04rem;
            height: 100%;
            background: url("https://img07.yiguoimg.com/d/web/180313/01318/155922/xian.png") no-repeat;
            background-size: 100% 100%;
            z-index: 100;
            right: -.05rem;
            color: white;
        }
    }
</style>


