<template>
    <div class="w detail">
        <aside>
            <div class="img">
                <img :src="productIcon" alt="">
            </div>
            <div class="list">
                <ul>
                    <li v-for='(item,index) in products' :key='index'>
                        <router-link :to="'/detail/'+item.path">
                       {{item.name}}
                       </router-link>
                    </li>
                </ul>
            </div>
        </aside>
        <div class="detail-right fr">
           <router-view></router-view>
        </div>
    </div>
</template>
<script>
   export default{
       data(){
           return{
                products: [
                    {
                    name: '数据统计',
                    path: 'count',
                    active: false
                    },
                    {
                    name: '数据预测',
                    path: 'forecast',
                    active: false
                    },
                    {
                    name: '流量分析',
                    path: 'analysis',
                    active: false
                    },
                    {
                    name: '广告发布',
                    path: 'publish',
                    active: false
                    }
                ],
                imgMap: {
                '/detail/count': require("../../assets/images/2.png"),
                '/detail/forecast': require("../../assets/images/3.png"),
                '/detail/analysis': require("../../assets/images/1.png"),
                '/detail/publish': require("../../assets/images/4.png")
                }
           }
       },
       computed:{
            productIcon(){
              return this.imgMap[this.$route.path]
            }
       }
   } 
</script>
<style scoped lang="scss">
.detail{
    padding:10px 0 80px 0;
    overflow: hidden;
    aside{
        width: 200px;
        overflow: hidden;
        background: #fff;
        float: left;
        .img{
            width: 100px;
            height: 100px;
            position: relative;
            margin:20px auto;
            img{
                position: absolute;
                top:0;
                left:0;
                right:0;
                bottom:0;
                margin:auto;
            }
        }
        .list{
            overflow: hidden;
            ul li{
                line-height: 30px;
                
               
                a{
                    display: block;
                    padding-left:20px;
                    &.router-link-active{
                        background: #4fc08d;
                        color:#fff;
                    }
                }
            }
            
        }
    }
    .detail-right{
        width: 980px;
    }
}

</style>

