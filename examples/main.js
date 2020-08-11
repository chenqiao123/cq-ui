import Vue from "vue";
import App from "./App.vue";
// import CqButton from './components/button.vue'
// import CqDialog from './components/dialog.vue'
// import CqInput from './components/input.vue'
// import './assets/font/font.less'
import CqUI from "../packages";
Vue.config.productionTip = false;
// Vue.component(CqButton.name, CqButton)
// Vue.component(CqDialog.name, CqDialog)
// Vue.component(CqInput.name, CqInput)
Vue.use(CqUI);
new Vue({
  render: h => h(App)
}).$mount("#app");
