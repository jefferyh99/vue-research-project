// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App123 from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 加载路由
  components: { App123 }, // 注册组件，注册完才可以使用
  template: '<App123/>' // 通过名称绑定components
})
