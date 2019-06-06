<template>
    <div class="wrap">
        <form>
            <div class="input-item username">
                <div class="input-item-list">
                    <i class="icon-username fa fa-user-o" ></i>
                    <input type="text" placeholder="请输入您的用户名">
                </div>
                <div class="input-item-list password">
                    <i class="icon-password fa fa-key"></i>
                    <input type="password" placeholder="请输入您的密码">
                </div>
                <div class="input-item-list password">
                    <input type="text" placeholder="请输入验证码" style="width: 65%; border: none; float: left">
                    &nbsp;
                     <div class="code" @click="refreshCode">
                        <s-identify :identifyCode="identifyCode"></s-identify>
                    </div>
                </div>
            </div>
            <div class="login-option clear">
                <span class="retrieve_password">
                    <a href="">忘记密码</a>
                </span>
            </div>
            <div class="btn-login clear">
                <button type="button" class="btn_green myleft" >登录</button>
                <router-link tag="button" to="./register" type="button" class="btn_white myright" >立即注册</router-link>
            </div>
        </form>
        <div class="bottom">
            <em class="logon-bottom"></em>
        </div>
    </div>
</template>
<script>
import SIdentify from '../../views/login/identify.vue'
import register from "./register";
export default {
     name: "codetest",
  data() {
    return {
      identifyCodes: "1234567890",
      identifyCode: ""
    };
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
    //   console.log(this.identifyCode);
    }
  },
  //注册标签组件

    components: {

    SIdentify

    }
}
</script>
<style lang="scss" scoped>
        .code {
            width: 114px;
            height: 40px;
            // border: 1px solid red;
            position:absolute;
            right: 0;
            top:10px;
            }
    .wrap{
        position: relative;
        min-height: 500px;
        width: 100%;
        .input-item{
            border: 1px solid #d9dfd5;
            border-width: 1px 0;
            margin-top: 30px;
            padding: 0 0 0 20px;
            background: #fff;
            .input-item-list{
                position: relative;
                padding: 15px 0;
                border-bottom: 1px solid #e7e7e7;
                i{
                    display: block;
                    position: absolute;
                    top: 20px;
                    left: 0;
                    width: 20px;
                    height: 20px;
                    color: #008842;
                    font-size: 20px;
                }
                input{
                    display: block;
                    height: 30px;
                    font-size: 16px;
                    border: none;
                    background: none;
                    padding: 0 0 0 30px;
                }
            }
        }
        .login-option{
            margin: 15px 30px 0 20px;
            .retrieve_password{
                float: left;
                width: 45%;
                text-align: left;
                a{
                   color: #008842;
                    font-size: 15px; 
                }
            }
        }
        .btn-login{
            margin: 30px 30px 0;
            text-align: center;
            height: 0;
            button{
                display: inline-block;
                width: 45%;
                height: 40px;
                border: none;
                border-radius: 4px;
                font-size: 16px;
            }
            .btn_green{
                color: #fff;
                background: #008842;
            }
            .myleft{
                float: left;
            }
            .btn_white{
                border: 1px solid #008842;
                color: #008842;
                background: #fff;
            }
            .myright{
                float: right;
            }
        }
        .bottom{
            text-align: center;
            bottom: 15px;
            left: 0;
            padding: 10px;
            position: absolute;
            box-sizing: border-box;
            width: 100%;
            em{
                width: 104px;
                height: 34px;
                background-image: url(//img02.yiguo.com/e/web/150924/00982/140710/yiguo_logo.png);
                background-size: 100% 100%;
                margin: 0 auto;
                display: block;
                text-align: center
            }
        }
    }
</style>
