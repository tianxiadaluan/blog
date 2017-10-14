// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import VueRouter from 'vue-router'
import routes from './router'

import Vuex from 'vuex'
import storeOption from './vuex/store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'

Vue.use(VueRouter)
Vue.use(Vuex)

// 创建一个路由对象用于管理页面的路由
const router = new VueRouter({
    mode: 'hash',
    routes: routes
});

// 创建一个 store 对象用于管理应用状态
const store = new Vuex.Store(storeOption);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
