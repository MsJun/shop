<template>
<div class="swiper-banner">
      <swiper :options="swiperOption" ref="awesomeSwiper"  v-if="bannerlist.length">
        <swiper-slide v-for='(item,index) in bannerlist' :key='item.index'>
         <a :href="item.url">
            <img :src="item.img" alt=""  width="100%">
        </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
       <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
 </div>
 </template>
 <script>
   export default{
       props:{
           bannerlist:{
            type: Array,
            default: []
           }
       },
     data(){
       return{
        swiperOption: {
          notNextTick: true,
          paginationClickable: true,
          observer:true,
          spaceBetween: 0,
          loop:true,
          autoHeight: true,
          centeredSlides: true,
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:false,//修改swiper的父元素时，自动初始化swiper
          autoplay: {
            delay: 2000,
            stopOnLastSlide: true,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
        },
          onSlideChangeEnd: function(swiper){
        　　　swiper.update();
          }
         }
       }
     },
     created(){
       
     },
     methods:{
       
   },
   mounted(){
       
   }
 }
    </script>
    <style>
    .swiper-container{
        z-index: -1;
    }
    </style>
    