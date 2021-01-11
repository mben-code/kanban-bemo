import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VModal from "vue-js-modal";

require("./bootstrap");

library.add(faTrashAlt, faPlus, faTimes);

Vue.component("font-icon", FontAwesomeIcon);

Vue.use(VModal);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: (h) => h(App),
});
