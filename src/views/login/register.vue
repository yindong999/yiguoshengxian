<template>
    <div class="register wrap">
        <form action="">
            <div class="input-item">
                <div class="input-item-list">
                    <input type="tel" placeholder="请输入您的手机号" value maxlength="11" v-model="telNum">
                    <span class="btn-captcha">获取验证码</span>
                </div>
                <div class="input-item-list">
                    <input type="text" placeholder="验证码我帮你填好了">
                </div>
                <div class="input-item-list">
                    <input type="password" placeholder="请设定您的密码" v-model="password">{{password}}
                </div>
                <div class="input-item-list">
                    <input type="password" placeholder="请再次输入密码" v-model="passConfir">
                    {{passConfir}}
                </div>
            </div>
            <div class="deal">
                <label for="label">
                    <input type="checkbox" id="label">我已阅读
                    <a href="">《三组服务协议》</a>
                    <a href="">《隐私条款》</a>
                    并同意
                </label>
            </div>
            <div class="btn-login">
                <button type="button" class="btn_green" @click="register">注册</button>
            </div>
        </form>
    </div>
</template>

<script>

export default {
    name: "register",
    data() {
        return {
            info:[],
            telNum: "",
             password: "",
             passConfir: ""
        }
    },
    methods: {
        register(){
            if(!this.password || !this.passConfir){
                alert("还有未填项")
            }else{
                if(!this.telNum){
                    alert("手机号为空")
                }else if(this.password != this.passConfir){
                    alert("两次输入的密码不一致")
                }else{
                   
                }
            }
            
        }
    },
    created(){
        window.document.title = "注册"
    }

}
</script>

<style lang="scss" scoped> 
    .btn-captcha{
        font-size: 12px;
        position: absolute;
        top: 15px;
        right: 15px;
        padding: 0 .05rem;
        box-sizing: border-box;
        line-height: 30px;
        text-align: center;
        color: #fff;
        border-radius: 4px;
        background: #008842;
    }
    .input-item-list input{
        padding: 0 !important;

    }
    .deal{
        margin-top: 10px;
        text-align: center;
        color: #8d8a8a;
        font-size: 10px;
        a{
            color:#008842;
        }
        label{
            display: inline-block;
            padding-left: 17px;
            position: relative;
            input{
                display: block;
                width: 14px;
                height: 14px;
                position: absolute;
                top: 2px;
                left: 0;
               
            }
        }
        
    }
    .btn-login{
            margin: 30px 30px 0;
            text-align: center;
            button{
                display: inline-block;
                width: 60%;
                height: 40px;
                border: none;
                border-radius: 4px;
                font-size: 16px;
                background: #008842;
                color: #fff
            }
    }
</style>
