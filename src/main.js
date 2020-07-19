import "@/assets/scss/argon.scss";
import "@/assets/vendor/nucleo/css/nucleo.css";
import '@/plugins/globalFilters'
import router from '@/routes/router'
import {store} from "@/store";
import BootstrapVue, {BootstrapVueIcons} from "bootstrap-vue";
import Vue from 'vue'
import Snotify from 'vue-snotify'
import VueSweetalert2 from "vue-sweetalert2";
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(Snotify)
Vue.use(VueSweetalert2)

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
