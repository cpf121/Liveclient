import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'

//element 
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//vue2-google-maps
Vue.use(VueGoogleMaps,{
  load: {
    key: 'AIzaSyD8RvpvCFIsFEm0XOPHr802mvyPaDDfyzs',
    libraries: ['places', 'geometry'],
  },
  installComponents: true
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
