<template>
    <div class="counter-component">
      <div class="counter-btn" @click="changeNum('sub')"> - </div>
      <div class="counter-show">
        <input type="text" v-model="number" @keyup="changenum">
      </div>
      <div class="counter-btn" @click="changeNum('add')"> + </div>
    </div>
</template>

<script>
export default {
    props:{
      max:{
        type:Number,
        default:10
      },
      min:{
        type:Number,
        default:1
      }
    },
    data(){
      return{
        number:this.min
      }
    },
    methods:{
      changenum(){
        if(typeof this.number == 'string'){
          this.number = parseInt(this.number)
        }else{
          this.number = this.number
        }
        if(this.number>this.max||this.number<this.min){
          this.number = this.min
        }

      },
      changeNum(flag){
        if(flag=='sub'){
          if(this.number<=this.min){
         
          return
        }
          this.number--
        }else if(flag=='add'){
          if(this.number>=this.max){
          
            return
          }
            this.number++
        }
      },
  },
  watch:{
        number(){
          this.$emit('changenum',this.number)
        }
      }
}
</script>

<style scoped>
.counter-component {
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.counter-show {
  float: left;
}
.counter-show input {
  border: none;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  height: 21px;
  line-height: 21px;
  width: 30px;
  outline: none;
  text-indent: 4px;
}
.counter-btn {
  border: 1px solid #e3e3e3;
  float: left;
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  cursor: pointer;
}
.counter-btn:hover {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}

</style>
