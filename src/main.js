import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit('ageWasEdited', age)
    }
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')