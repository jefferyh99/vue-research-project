// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App123 from './App'
import App124 from '@/components/HelloJeff'
// App123 为组件的名字，相当于
// Vue.component('App123', {
//   template: App.vue中Template的东西
// })
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 加载路由
  components: { App123, App124 }, // 局部注册组件，注册完才可以使用,注册多个components
  template: '<App123></App123>' // 通过名称绑定components,只能有一个根元素
})
