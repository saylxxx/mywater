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
import VueI18Next from '@panter/vue-i18next';

import './vendor.js';

// mao or angel
import App from './mao/App.vue';
import router from './mao/router';
import i18next from './mao/i18n.js';

import {
    locales
} from 'moment';

// CASL
import {
    abilitiesPlugin
} from '@casl/vue'
import ability from '@/mao/ability'

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueI18Next);
Vue.use(abilitiesPlugin, ability)

const i18n = new VueI18Next(i18next);

new Vue({
    i18n,
    router,
    render: h => h(App)
}).$mount('#app');