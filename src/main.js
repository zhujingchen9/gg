import 'normalize.css'
import 'font-awesome/css/font-awesome.min.css'
import Vue from 'vue'
import Router from 'vue-router'
import routers from './router'
import VueResource from 'vue-resource'
import moment from 'moment'
import App from './App'
Vue.use(VueResource)
Vue.use(Router)
// Vue.config.debug = true
Vue.filter('datefmt', function (input, fmtstring) {
	return moment(input).format(fmtstring)
})
/* eslint-disable no-new */
export const router = new Router({
  routes: routers,
  hashbang: true
})
new Vue({
  el: '#app',
  router,
  components: { App }
})
