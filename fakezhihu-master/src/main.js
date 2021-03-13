import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/styles/base.css'
import './assets/styles/special.css'
import './assets/icons/iconfont.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
