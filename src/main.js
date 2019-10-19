/*!
 *
 * Angle - Bootstrap Admin Template
 *
 * Version: 4.3
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: https://wrapbootstrap.com/help/licenses
 *
 */

import 'babel-polyfill';    // Fix IE page error - add by Eric Tsai @ 2019/10/14

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

import './vendor.js';

import App from './app/App.vue';
import router from './app/router';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');