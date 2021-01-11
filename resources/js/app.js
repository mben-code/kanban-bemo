import Vue from "vue";

require("./bootstrap");

import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
    el: "#app",
    render: (h) => h(App),
});
