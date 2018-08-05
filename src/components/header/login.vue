<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" 
            v-model="params.username"
           placeholder="请输入用户名">
           <span class="g-form-error"></span>
        </div>
        <span class="g-form-error">{{userError.errorText}}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" 
          v-model="params.userpassword"
           placeholder="请输入密码">
        </div>
        <span class="g-form-error"></span>
      </div>
      <span class="g-form-error">{{passwordError.errorText}}</span>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="submitbtn">登录</a>
        </div>
      </div>
    </div>
    <p>{{errorText}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
        params:{
            username:"",
            userpassword:'',
        },
        errorText:'',
    }
  },
  computed:{
      userError(){
          let status,errorText
        if (!/@/g.test(this.params.username)) {
            status = false
            errorText = '不包含@'
        }else{
           errorText = "" 
           status = true
        }
        if (!this.userFlag) {
            errorText = ''
            this.userFlag = true
        }
        return {
            status,
            errorText
        }
      },
      passwordError(){
          let status,errorText
          if(!/^\w{1,6}$/g.test(this.params.userpassword)){
              status = false
              errorText = '请输入1-6位'
          }else{
              status = true
              errorText = ''
          }
          if(!this.passwordFlag){
              this.passwordFlag = true
              errorText = ''
          }
          return{
            status,
            errorText
          }
      }
  },
  methods: {
      submitbtn(){
        if (!this.userError.status || !this.passwordError.status) {
            this.errorText = '用户名或密码不正确'
            return
        }else{
            this.errorText = ''
            // this.$http.post('/login',this.params)
            // .then((res)=>{
            //console.log(res)
            this.$emit('btnsubmit',this.params)
        // })
        }
        
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.g-form-error{
    color:red;
   
}
</style>
