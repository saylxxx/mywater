<template>
  <div>
    <modal
      name="terms"
      :height="options.height"
      :width="options.width"
      :scrollable="options.scrollable"
      :dynamic="options.dynamic"
      :reset="options.reset"
      @before-open="beforeOpen"
      @before-close="beforeClose"
    >
      <div slot="top-right">
        <b-button class="btn-square" type="button" @click.prevent="$modal.hide('terms')">
          <em class="fa-2x mr-2 fas fa-window-close"></em>
        </b-button>
      </div>
      <terms-policy></terms-policy>
    </modal>

    <modal
      name="private"
      :height="options.height"
      :width="options.width"
      :scrollable="options.scrollable"
      :dynamic="options.dynamic"
      :reset="options.reset"
      @before-open="beforeOpen"
      @before-close="beforeClose"
    >
      <div slot="top-right">
        <b-button class="btn-square" type="button" @click.prevent="$modal.hide('private')">
          <em class="fa-2x mr-2 fas fa-window-close"></em>
        </b-button>
      </div>
      <private-policy></private-policy>
    </modal>
  </div>
</template>

<script>
import Vue from "vue";
import VModal from "vue-js-modal";
import propsync from ".././propsync";

import TermsPolicy from "./TermsPolicy";
import PrivacyPolicy from "./PrivacyPolicy";

// @see https://www.npmjs.com/package/vue-js-modal
Vue.use(VModal);

export default {
  components: {
    "terms-policy": TermsPolicy,
    "private-policy": PrivacyPolicy
  },
  name: "jsm",
  mixins: [propsync], //声明使用propsync的mixin
  props: {
    options: { type: Object, propsync: false }
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    beforeOpen() {
      let vm = this;
      if (vm.$props.options.hasOwnProperty("before_open_handler"))
        vm.$props.options.before_open_handler();
    },
    beforeClose() {
      let vm = this;
      if (vm.$props.options.hasOwnProperty("before_close_handler"))
        vm.$props.options.before_close_handler();
    }
  }
};
</script>