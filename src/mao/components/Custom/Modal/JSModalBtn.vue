<template>
  <a href="javascript:" @click.prevent="onClick()">{{options.text}}</a>
</template>

<script>
import Vue from "vue";
import VModal from "vue-js-modal";
import propsync from ".././propsync";

Vue.use(VModal);

export default {
  name: "jsm-btn",
  mixins: [propsync], //声明使用propsync的mixin
  props: {
    options: { type: Object, propsync: false }
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    onClick() {
      let vm = this;
      vm.$modal.show(vm.$props.options.id);
    }
  }
};
</script>