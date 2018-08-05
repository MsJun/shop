<template>
  <div>
    
  
    <header>
      <div class="w">
        <div class="logo fl">
          <router-link to="/home">
            <img src="../../assets/logo.png" alt="" >
          </router-link>
        </div>
        
        <div class="fr btn">
          <ul>
            <li><router-link to='/a'>lallalal</router-link></li>
            <li v-show="username.length">{{username}}</li>
            <li v-show="username.length">退出</li>
            <li @click="loginDialog" v-show="!username.length">登录</li>
            <li @click="regDialog" v-show="!username.length">注册</li>
            <li @click="aboutDialog">关于</li>
          </ul>
        </div>
        
      </div>
    </header>
    <my-dialog :isShow='islogin' @on-close="closeDialog('islogin')">
       <my-login @btnsubmit='btnsubmit'></my-login>
    </my-dialog>
    <my-dialog :isShow='isreg' @on-close="closeDialog('isreg')">
       注册
    </my-dialog>
    <my-dialog :isShow='isabout' @on-close="closeDialog('isabout')">
       <p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。 </p>
    </my-dialog>
    </div>
</template>

<script>
import myDialog from '../base/dialog.vue'
import myLogin from './login.vue'
export default {
  components:{
    myDialog,
    myLogin
  },
  data(){
    return{
      isabout:false,
      islogin:false,
      isreg:false,
      username:''
    }
  },
  methods:{
    // 登录弹窗
    loginDialog(){
      this.islogin = true
    },
    //注册弹窗
    regDialog(){
      this.isreg = true
    },
    //关于弹窗
    aboutDialog(){
      this.isabout = true
    },
    //  关闭弹窗
    closeDialog(attr){
      this[attr] = false
    },
    //登录成功
    btnsubmit(data){
      console.log(data)
      if(data.username){
        this.username = data.username
        this.closeDialog('islogin')
      }
    }
  }
}
</script>

<style scoped lang="scss">
  header{
    width:100%;
    height: 90px;
    background: #363636;
    color:#fff; 
    display: flex;
    align-items: center;
    .logo {
     
      line-height: 90px;
      a{
        display: flex;
        height: 90px;
        align-items: center;
         img{
          width: 60px;
        }
      }
     
    }
    .btn{
      ul{
        height: 90px;
        overflow: hidden;
        display: flex;
        align-items: center;
      }
      li{
        float: left;
        padding:0 8px;
        cursor: pointer;
        border-right:1px solid #fff;
      }
      li:last-child{
        border: none;
      }
    } 
  }
  

</style>
