import Vue from "vue";
import VeeValidate from "vee-validate";

import {
    setupI18n
} from "@lingui/core";

import i18next from "@/mao/i18n.js";

Vue.use(VeeValidate);

// [TODO]
const i18n_messages = {
    "validation.messages.required": i18next.t('REQUIRED_FIELD'),
    "validation.messages.email": i18next.t('NOT_VALID_EMAIL'),
    // [Login.vue]
    "validation.custom.email.required": i18next.t('EMAIL_REQUIRED'),
    "validation.custom.password.required": i18next.t('PWD_REQUIRED'),
    // [Register.vue]
    "validation.custom.name.min": i18next.t('NAME_NOT_VALID'),
    "validation.custom.password2.confirmed": i18next.t('PASSWORD_CONFIRMATION_MATCH'),
    // [AddTest.vue]
};

// https://lingui.js.org/ref/core.html
const i18n = setupI18n({
    language: i18next.language,
    catalogs: {
        "zh-TW": {
            messages: i18n_messages
        },
        en: {
            messages: i18n_messages
        },
    }
});

// https://github.com/baianat/vee-validate/blob/master/flow/dictionary.js#L12
const linguiDictionary = {
    get locale() {
        return i18n._language;
    },
    set locale(val) {
        i18n.activate(val);
    },
    getMessage(_, key, __) {
        const id = `validation.messages.${key}`;
        // console.log('..[vee] getMessage..', id, i18n._(id));
        return i18n._(id);
    },
    setMessage(locale, key, value) {
        i18n.load({
            [locale]: {
                messages: {
                    [`validation.messages.${key}`]: value
                }
            }
        });
    },
    getAttribute(_, key) {
        const id = `validation.attributes.${key}`;

        return i18n._(id);
    },
    setAttribute(locale, attr, value) {
        i18n.load({
            [locale]: {
                messages: {
                    [`validation.attributes.${attr}`]: value
                }
            }
        });
    },
    getFieldMessage(_, field, rule, data) {
        const id = `validation.custom.${field}.${rule}`;

        let msg = i18n._(id, {}, {
            defaults: "😝"
        });
        if (msg !== "😝") {
            return msg;
        }

        return this.getMessage(_, rule, data);
    },
    merge(dictionary) {
        i18n.load(dictionary);
    },
    getDateFormat(locale) {
        // TODO
    },
    setDateFormat(locale, format) {
        // TODO
    }
};

VeeValidate.setI18nDriver("lingui", linguiDictionary);

export default VeeValidate;