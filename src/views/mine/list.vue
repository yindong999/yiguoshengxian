<template>
    <!-- 列表项 -->
    <li class="fourLi">
        <a href="">
            <i class="icon"><img :src="item.IconUrl" alt=""></i>
            {{item.IconText}}
        </a>
    </li>
</template>

<script>  
export default {
    props:{
        item: Object,
    }
}
</script>

<style lang="scss">
    .fourLi{
        position: relative;
        float: left;
        width: 20%;
        height: 100%;
        a{
            display: inline-block;
        font-size: 10px;
        color: #333;
        width: 100%;
        height: 100%;
        text-align: center;
        padding-top: .44rem;
        box-sizing: border-box;
        }
        .icon{
            height: auto;
            width: 0.19rem;
            margin-left: -.09rem;
            position: absolute;
            left: 50%;
            top: .2rem;
            display: inline-block;
            vertical-align: middle;
            background-size: 100% 100%;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>



