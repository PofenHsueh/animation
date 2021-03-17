import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

Vue.component("Loading", Loading); // set loader as global compone

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
