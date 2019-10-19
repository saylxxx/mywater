import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

import SettingModule from './modules/setting.js';
import SettingPlugin from './plugins/setting.js';
import ThemeModule from './modules/theme.js';
import ThemePlugin from './plugins/theme.js';

// vuex log
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const persistedState = {
    reducer: (persistedState) => {
        const stateFilter = JSON.parse(JSON.stringify(persistedState)); // deep clone
        // default
        ['offsidebarOpen', 'asideToggled', 'horizontal'] // states which we don't want to persist.
        .forEach(item => delete stateFilter.setting[item]);
        return stateFilter
    }
}

export default new Vuex.Store({
    modules: {
        setting: SettingModule,
        theme: ThemeModule,
    },
    strict: debug,
    plugins: debug ? [
        createLogger(),
        createPersistedState(persistedState),
        SettingPlugin,
        ThemePlugin
    ] : [
        createPersistedState(persistedState),
        SettingPlugin,
        ThemePlugin
    ]
})