import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Amplify from 'aws-amplify';
import '@aws-amplify/ui-vue';
import aws_exports from './aws-exports';
import VueRouter from 'vue-router'
import routes from './routes.js'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

Amplify.configure(aws_exports);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router, 
  render: h => h(App)
}).$mount('#app')
