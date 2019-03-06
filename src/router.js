import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path : '/',
      name : 'users',
      component : () => import ( './views/Users.vue'),
      children : [
        {
          path : 'user/:id',
          name : 'user',
          component: () => import( './components/User.vue'),
            children : [
              {
                path : 'post/:postid',
                name : 'post',
                component: () => import( './components/Post.vue')
              }
          ]
        }
      ]
    }
  ]
})
