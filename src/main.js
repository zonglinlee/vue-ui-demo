import Vue from "vue";
import App from "./App.vue";

// import global style font 
import './assets/font/iconfont.css'
//import global component
import LeeButton from "./components/LeeButton.vue";
import LeeDialog from "./components/LeeDialog.vue";
import LeeInput from "./components/LeeInput.vue";
import LeeSwitch from "./components/LeeSwitch.vue";
import LeeRadio from "./components/LeeRadio.vue";
import LeeRadioGroup from "./components/LeeRadioGroup.vue";
//register global component
Vue.component(LeeButton.name, LeeButton);
Vue.component(LeeDialog.name, LeeDialog);
Vue.component(LeeInput.name, LeeInput);
Vue.component(LeeSwitch.name, LeeSwitch);
Vue.component(LeeRadio.name, LeeRadio);
Vue.component(LeeRadioGroup.name, LeeRadioGroup);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
