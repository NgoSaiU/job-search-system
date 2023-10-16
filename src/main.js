import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";

    // import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

    // // Import Bootstrap and BootstrapVue CSS files (order is important)
    // Vue.use(BootstrapVue)
    // // Optionally install the BootstrapVue icon components plugin
    // Vue.use(IconsPlugin) 

    // import 'bootstrap/dist/css/bootstrap.css'
    // import 'bootstrap-vue/dist/bootstrap-vue.css'


createApp(App).use(router).use(store).mount('#app')
