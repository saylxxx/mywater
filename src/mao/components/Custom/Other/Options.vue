<template>
  <select ref="test1" class="custom-select custom-select-sm" @change="ohandler.onChange">
    <option v-if="show_hint_option" value="-1">{{$t('SELECT')}}</option>
    <option
      v-for="data in options"
      :value="data.value"
      :key="data.key"
      :selected="default_option && (data.key == default_option.key || data.value == default_option.value)"
    >{{data.show}}</option>
  </select>
</template>

<script>
import propsync from ".././propsync";
export default {
  name: "search",
  mixins: [propsync], //声明使用propsync的mixin
  props: {
    ohandler: { type: Object, propsync: false },
    options: { type: Array, propsync: false },
    default_option: { type: Object, propsync: true },
    show_hint_option: { type: Boolean, propsync: false }
  },
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
