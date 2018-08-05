<template>
  <div class="sel">
      <select name="" id="" v-model="select" @change="selectchange">
       <option :value="item.value" v-for='(item,index) in options' :key='index'>{{item.label}}</option>
      </select>
      <span></span>
  </div>
</template>

<script>
export default {
  props:{
    options:{
      type:Array,
      default:[]
    }
  },
  data(){
    return{
      select:0
    }
  },
  created(){
    this.$emit('changeselected',this.options[0])
  },
  methods:{
    selectchange(){
      console.log(this.select)
      //console.log(this.options[this.select])
      this.$emit('changeselected',this.options[this.select])
    }
  }
}
</script>

<style scoped>
select {
/*Chrome和Firefox里面的边框是不一样的，所以复写了一下*/
border: solid 1px #e3e3e3;
/*很关键：将默认的select选择框样式清除*/
appearance:none;
-moz-appearance:none;
-webkit-appearance:none;
/*将背景改为红色*/
background: #fff;
padding:6px 20px 6px 14px;
outline: none;
/*加padding防止文字覆盖*/

}
/*清除ie的默认选择框样式清除，隐藏下拉箭头*/
select::-ms-expand { display: none; }
.sel{
  position: relative;
  display: inline-block;
}
span{
  position: absolute;
  top:13px;
  right:20px;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 5px solid #e3e3e3;
    width: 0;
    height: 0;
    margin-top: -1px;
    margin-left: 6px;
    margin-right: -14px;
    vertical-align: middle;
}

</style>
