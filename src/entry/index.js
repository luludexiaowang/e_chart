import Vue from 'vue'
import App from '../client/view/App.vue'
import ElementUI from 'element-ui'
import '../client/style/element-theme/index.css'
import '../client/asset/iconfont/iconfont.css'
import router from '../client/router/index.js'

Vue.config.productionTip = false

const vueBoot = () => {
  Vue.use(ElementUI)
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
}

vueBoot()
