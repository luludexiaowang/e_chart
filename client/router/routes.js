import Index from 'client/views/app.vue'
import Home from 'client/views/home/index.vue'

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
        component: Home,
        meta: {
          always: true
        }
      }
    ]
  }
]

export default routes
