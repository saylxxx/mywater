<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">{{$t('SELECTED')}}{{$t('DEVICES')}}</h3>
    </div>
    <div v-if="device_data && device_data.length > 0" class="card-body">
      <b-button
        class="btn-square mr-1 mb-1"
        v-for="device in device_data"
        type="button"
        :key="device.key"
        @click.prevent="cancel(device.key)"
      >
        <em
          v-if="device.data.device_type"
          class="fa-2x mr-2 fas fa-tablet-alt"
          :title="$t('TABLET')"
        ></em>
        <em v-else class="fa-2x mr-2 fas fa-mobile-alt" :title="$t('MOBILE')"></em>
        <span v-if="device.data.model_name">{{device.data.model_name}}</span>
        <span v-else>{{device.data.model}}</span>
      </b-button>
    </div>
    <div v-else class="card-body">
      <span
        class="form-control"
        :class="{'border-right-1':true, 'is-invalid': onValidate}"
      >{{$t('SELECT_DEVICES')}}</span>
    </div>
  </div>
</template>

<script>
import propsync from "../.././propsync";
export default {
  name: "device_memo",
  mixins: [propsync], //声明使用propsync的mixin
  props: {
    store_getter_device_data: { type: String, propsync: false },
    store_dispatch_cancel: { type: String, propsync: false },
    onValidate: { type: Boolean, propsync: false }
  },
  data() {
    return {};
  },
  computed: {
    device_data() {
      let vm = this;
      return this.$store.getters[vm.store_getter_device_data];
    }
  },
  created() {
    let vm = this;
  },
  methods: {
    cancel(key) {
      let vm = this;
      vm.$store.dispatch(vm.store_dispatch_cancel, {
        key: key
      });
    }
  }
};
</script>
