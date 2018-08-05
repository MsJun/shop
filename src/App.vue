<template>
  <div>
    <my-header></my-header>
     <router-view/>
     <my-footer></my-footer>>
  </div>
</template>
<script>
  import myHeader from './components/header/header.vue'
  import myFooter from './components/footer/footer.vue'
  export default{
    components:{
      myHeader,
      myFooter
    }
  }
</script>