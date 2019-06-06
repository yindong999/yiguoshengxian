<template>
    <!-- 下面一栏的列表项 -->
    <li class="secList">
        <a :href="secItem.LinkUrl">
            <img class="icon" :src="secItem.IconUrl" alt="">
            {{secItem.IconName}}
        </a>
    </li>
</template>

<script>
export default {
    props:{
        secItem: Object,
    }
}
</script>

<style lang="scss" scoped>
    .secList{
        position: relative;
        float: left;
        width: 25%;
        height: .69rem;
        a{
            position: relative;
            font-size: 10px;
            display: inline-block;
            width: 100%;
            height: 100%;
            padding-top: .43rem;
            text-align: center;
            box-sizing: border-box;
            color: #333;
            img{
                width: .27rem;
                height: .27rem;
                margin-left: -.12rem;
                display: inline-block;
                position: absolute;
                top: .15rem;
                left: 50%;
            }
        }
    }
</style>

