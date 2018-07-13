import Index from 'src/client/view/home/index.vue' // 首页模版
import Login from 'src/client/view/login/index.vue' // 首页模版

const routes = [
  {
    path: '/',
    component: Index,
    meta: {
      always: true
    },
    redirect: '/home/index',
    children: [
      {
        path: 'home/index',
        component: Index,
        meta: {
          always: true
        }
      },
      {
        path: 'login',
        component: Login,
        meta: {
          always: true
        }
      }
    ]
  }
]

export default routes
