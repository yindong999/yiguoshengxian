<template>
    <div class="setconte">
        <div class="line-top">
            <p>
                <span class="hot">客服热线</span>
                <span class="iphone">400-000-7788
                </span>
            </p>
        </div>
        <div class="line-bottom">
            <router-link 
                class="line-content"
                tag="p"
                to="./AboutUs"
            >关于我们
                <i class="fa fa-angle-right"></i>
            </router-link>
            <router-link
                class="line-content"
                tag="p"
                to="./business"
             >营业资质
                <i class="fa fa-angle-right"></i>
            </router-link>
            <router-link
                class="line-content"
                tag="p"
                to="./RegistrationAgreement"
            >服务协议
                <i class="fa fa-angle-right"></i>
            </router-link>
            <p class="line-content">隐私条款
                <i class="fa fa-angle-right"></i>
            </p>
            <p class="line-content">配送说明
                <i class="fa fa-angle-right"></i>
            </p>
            <p class="line-content">退换货说明
                <i class="fa fa-angle-right"></i>
            </p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .line-top{
        position: relative;
        background: #fff;
        margin-bottom: .1rem;
    }
    .line-top p{
        position: relative;
        padding: 0.15rem;
        box-sizing: border-box;
        display: block; 
        overflow: hidden;
    }
    .line-top p .hot{
        font-size: .12rem;
        color: #333;
        float: left;
    }
    .line-top p .iphone{
      position: relative;
        font-size: .12rem;
        color: #11b57c;
        float: right;
        /* padding-right: .5rem; */
    }
    .line-content{
        position: relative;
    padding: .13rem;
    box-sizing: border-box;
    display: block;
    overflow: hidden;
    background:#fff;
    border-bottom:1px solid #f0f0f0;
    }
    .fa{
        float: right;
        font-size: 0.15rem;
    }
</style>
