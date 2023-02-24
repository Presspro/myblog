import Vue from 'vue'
import VueRouter from 'vue-router'
import showBlog from '../components/content/showBlog'
import AddBlog from '../components/content/addBlog'
import Detail from '../components/content/detail'
import EditBlog from '../components/content/editBlog'
// import Baogao from '../components/comtent/baogao'

Vue.use(VueRouter);

/*配置路由*/
export default new VueRouter({
  routes:[
    {
      path: '/',
      component: showBlog,
    },
    { /*添加博客*/
      path: '/addBlog',
      component: AddBlog
    },
    // {
    //   path:'/baogao/:id',
    //   component:Baogao
    // },
    {
      path:'/blog/:id',
      component:Detail
    },
    {
      path:'/editBlog/:id',
      component:EditBlog
    }
  ],
  mode: 'history',
  base:'/hot/',   //去掉地址里的#
})
