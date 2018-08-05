<template>
  <div>
      <ul>
          <li v-for='(item,index) in multlist' :key='index' @click="multiline(item,index)" :class="{'act':checkActive(index)}">
              {{item.label}}
              {{item.value}}
          </li>
      </ul>
      
  </div>
</template>

<script>
export default {
    props:{
        multlist:{
            type:Array,
            default:[]
        }
    },
    data(){
        return{
            selectedlist:[0],
            newArr:[]
        }
    },
    created(){
        this.newArr.push(this.multlist[0])
        this.$emit('mulitchooer',this.newArr)
    },
    methods:{
        multiline(item,index){
            console.log(item)
            if(this.selectedlist.indexOf(item.value)==-1){
                this.selectedlist.push(item.value)
            }else{
                let flag;
                this.selectedlist.map(tag=>{
                    if(tag==item.value){
                        //console.log(tag)
                        flag = this.selectedlist.indexOf(tag)
                        //console.log(flag)
                        this.selectedlist.splice(flag,1)
                    }
                    return true
                })
            }
            //console.log(this.selectedlist)
            this.newArr  = this.selectedlist.map(item=>{
                return this.multlist[item]
            })
            this.$emit('mulitchooer',this.newArr)
        },
        checkActive (index) {
            //console.log(index)
            return this.selectedlist.indexOf(index) !== -1
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
