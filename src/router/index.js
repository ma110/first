import Vue from 'vue'
import Router from 'vue-router'

import  About   from '../components/About'
import  Customer   from '../components/Customer'
import  Add    from    '../components/Add'
import   Detail   from   '../components/Detail'
Vue.use(Router)

var router= new Router({
  routes: [
  
    {
    
      path: '/customer',
    
      component:Customer  
    },
    {
      path: '/about',
     
      component: About 
    },

    {
      path: '/add',
     
      component: Add
    },
    {
      path: '/detail/:id',
     
      component: Detail
    },
    

  ],mode:'history'
})
export default router