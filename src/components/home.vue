<template>
  <div class="w home container">
    <aside>
      <div class="por" v-for='(item,index) in productList' :key='index'>
        <h3>全部产品</h3>
        <div class="pro-con">
          <h4>{{item.title}}</h4>
          <ul>
            <li v-for='(tag,index) in item.list' :key='index'>
              <a :href="tag.url">
              {{tag.name}}
              </a>
              </li>
          </ul>
        </div>
        <hr>
      </div>
      
      <div class="new">
        <h3>全部新闻</h3>
         <div class="pro-con">
          <ul>
            <li v-for='(item,index) in newlist' :key='item.id'>
              <a>
                {{item.title}}
              </a>
              </li>
          </ul>
        </div>

      </div>
    </aside>
    <div class="content">
      <banner :bannerlist='bannerlist'></banner>
      <div class="nav">
        <ul>
          <li v-for='(item,index) in boardList' :key='index'>
            <div class="img">
              <img :src="item.img" alt="">
            </div>
            <div class="con">
              <h3>{{item.title}}</h3>
              <p>{{item.description}}</p>
              <router-link :to="'/detail/'+item.toKey">立即购买</router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import banner from './base/swiper'
  export default{
    components:{
      banner
    },
    data(){
      return{
        newlist:[],
        bannerlist:[],
        productList: {
        pc: {
          title: 'PC产品',
          list: [
            {
              name: '数据统计',
              url: 'http://starcraft.com'
            },
            {
              name: '数据预测',
              url: 'http://warcraft.com'
            },
            {
              name: '流量分析',
              url: 'http://overwatch.com',
              hot: true
            },
            {
              name: '广告发布',
              url: 'http://hearstone.com'
            }
          ]
        },
        app: {
          title: '手机应用类',
          last: true,
          list: [
            {
              name: '91助手',
              url: 'http://weixin.com'
            },
            {
              name: '产品助手',
              url: 'http://twitter.com',
              hot: true
            },
            {
              name: '智能地图',
              url: 'http://maps.com'
            },
            {
              name: '团队语音',
              url: 'http://phone.com'
            }
          ]
        }
      },
         boardList: [
        {
          title: '开放产品',
          description: '开放产品是一款开放产品',
          img:require('../assets/images/1.png'),
          toKey: 'analysis',
          saleout: false
        },
        {
          title: '品牌营销',
          description: '品牌营销帮助你的产品更好地找到定位',
          img:require('../assets/images/2.png'),
          toKey: 'count',
          saleout: false
        },
        {
          title: '使命必达',
          description: '使命必达快速迭代永远保持最前端的速度',
          img:require('../assets/images/3.png'),
          toKey: 'forecast',
          saleout: true
        },
        {
          title: '勇攀高峰',
          description: '帮你勇闯高峰，到达事业的顶峰',
          img:require('../assets/images/4.png'),
          toKey: 'publish',
          saleout: false
        }
      ],        
      }
    },
    created(){
      this.getnewlist()
      this.getbanner()
    },
    methods:{
      getnewlist(){
        this.$http.get('/api/getnewslist').then(res=>{
          console.log(res)
          if(res.status==200){
            this.newlist = res.data.message
          }
        })
      },
      getbanner(){
        this.$http.get('/api/getlunbo').then(res=>{
          console.log(res)
          if(res.status==200){
            this.bannerlist = res.data.message
          }
        })
      }
    }
  }

</script>
<style scoped lang="scss">
.swiper-banner{
    // height: 506px;
    // width: 900px;
    margin-bottom: 20px;
  
}
  .home{
    display: flex;
    justify-content:space-between;
    padding:10px 0 80px 0;
  }
  aside{
    width:270px;
    overflow: hidden;
    
    .por,.new{
      background: #fff;
      overflow: hidden;
      h3{
        width: 100%;
        height: 30px;
        line-height: 30px;
        color:#fff;
        padding-left:20px;
        background: #4fc08d;
      }
      .pro-con{
        padding:20px 0 0 20px;
        h4{
          font-weight: bold;
          
        }
        ul{
          padding:20px 0;
        }
        li{
          line-height: 30px;
          font-size: 14px;
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap

        }
      }
    }
  }
  .new{
    margin-top:20px;
  }
  .content{
    width: 900px;
   overflow: hidden;
    .nav{
      ul{
        overflow: hidden;
        li{
          width: 440px;
          height: 165px;
          float: left;
          background: #fff;
          margin-bottom:20px;
          display: flex;
          align-items: center;
          padding-left:20px;
          .con{
            margin-left:20px;
            h3{
              font-weight: bold;
              font-size: 20px;
              margin:10px 0;
            }
            p{
              margin:10px 0;
            }
            a{
              display: block;
              height: 34px;
              width: 96px;
              background: #4fc08d;
              text-align:center;
              line-height: 34px;
              color:#fff;
            }
          }
        }
        li:nth-child(even){
          float: right;
        }
      }
      
    }
  }
  .swiper-banner{
    height: 378px;
  }
  
</style>

