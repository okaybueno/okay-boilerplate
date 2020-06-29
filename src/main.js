import Vue from 'vue'
import App from './App.vue'
import styles from './assets/style/main.scss'

// imported styles below
[styles];

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
