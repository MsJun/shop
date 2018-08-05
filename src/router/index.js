import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import a from '@/components/a'
import detail from '@/components/detail/detail'
import analysis from '@/components/detail/analysis'
import count from '@/components/detail/count'
import forecast from '@/components/detail/forecast'
import publish from '@/components/detail/publish'

import nrogress from 'nprogress/nprogress.js'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: home,
      redirect:'/home'
    },
    {
      path:"/home",
      name:'home',
      component:home
    },
    {
      path:'/a',
      component:a
    },
    {
      path:'/detail',
      component:detail,
      redirect:'/detail/analysis',
      children:[
        {
          path:'analysis',
          component:analysis
        },
        {
          path:'count',
          component:count
        },
        {
					path: 'forecast',
					component: forecast
				},
				{
					path: 'publish',
					component: publish
				}
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  //因为我们么每一个路由都需要添加进度条,所以讲进度条放到这里
  //进度条的开始
  nrogress.start();
  next()
  //进度条结束
  nrogress.done();

})
export default router
