import Vue from "vue";
import App from "./App.vue";

// import global style font 
import './assets/font/iconfont.css'
//import global component
import LeeButton from "./components/LeeButton.vue";
import LeeDialog from "./components/LeeDialog.vue";
import LeeInput from "./components/LeeInput.vue";
//register global component
Vue.component(LeeButton.name, LeeButton);
Vue.component(LeeDialog.name, LeeDialog);
Vue.component(LeeInput.name, LeeInput);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
