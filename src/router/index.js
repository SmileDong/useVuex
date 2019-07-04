import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Layout from '@/layout/layout'
import Home from '@/pages/home'
import Page1 from '@/pages/page1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/page1',
          name: 'Page1',
          component: Page1
        }
      ]
    }
  ]
})
