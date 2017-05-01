// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from 'components/App'
// import {common} from'assets/js/common'
// import 'assets/js/test'
Vue.config.productionTip = false
// common();
// import './index.scss';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
