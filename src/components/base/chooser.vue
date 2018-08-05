<template>
  <div>
      <ul>
          <li v-for='(item,index) in list' :key='index' :class="{'act':index==flag}" @click="btn(item,index)">
              {{item.label}}
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props:{
        list:{
            type:Array,
            default:[]
        }
    },
    data(){
        return{
            flag:0
        }
    },
    created(){
        this.$emit('chooser',this.list[0])
    },
    methods:{
        btn(item,index){
            this.flag = index
            // 将当前这一项返回父元素
            this.$emit('chooser',item)
        }
    }
}
</script>

<style scoped>
  li{
      float: left;
      height: 30px;
      line-height: 30px;
      border:1px solid  #ccc;
      margin:0 10px;
      padding:0 8px;
      border-radius: 5px;
      cursor: pointer;
  }
  li.act{
      background: #4fc08d;
      color:#fff;
      border:none;
  }


</style>
