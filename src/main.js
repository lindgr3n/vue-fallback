import Vue from "vue";
import App from "c4/App.vue";
// import router from "./router.js";
import router from "c4/router.js";
import store from "c4/store.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
