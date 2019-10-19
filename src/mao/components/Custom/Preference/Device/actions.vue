<template>
  <div class="checkbox c-checkbox">
    <label>
      <input ref="check" type="checkbox" v-model="data_selected" @click.prevent="checked" />
      <span class="fa fa-check"></span>
    </label>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { NAME_SPACE as ns_data } from "@/mao/store/modules/data";
export default {
  name: "actions",
  props: ["data", "index", "column"],
  data() {
    return {};
  },
  computed: {
    is_data_on_create() {
      let vm = this;
      return vm.data.fingerprint && vm.data.fingerprint.length > 0;
    },
    is_data_on_edit() {
      let vm = this;
      return vm.data.model_original && vm.data.model_original.length > 0;
    },
    data_selected() {
      let vm = this;
      // case 1: create
      if (vm.is_data_on_create) {
        return vm.$store.getters[ns_data + "/isDeviceSelected"](
          vm.data.fingerprint
        );
      }
      // case 2: edit
      else if (vm.is_data_on_edit) {
        return vm.$store.getters[ns_data + "/isEditDeviceSelected"](
          vm.data.model_original
        );
      }
      return false;
    }
  },
  methods: {
    checked() {
      let vm = this;
      console.log("..actions..fingerprint..", vm.data.fingerprint);
      console.log("..actions..model_original..", vm.data.model_original);
      console.log("..actions..is_data_on_create..", vm.is_data_on_create);
      console.log("..actions..is_data_on_edit..", vm.is_data_on_edit);
      // case 1: create
      if (vm.is_data_on_create) {
        if (!vm.data_selected)
          vm.$store.dispatch(ns_data + "/deviceSelected", {
            key: vm.data.fingerprint,
            data: vm.data
          });
        else
          vm.$store.dispatch(ns_data + "/deviceRemoved", {
            key: vm.data.fingerprint
          });
      }
      // case 2: edit
      else if (vm.is_data_on_edit) {
        if (!vm.data_selected)
          vm.$store.dispatch(ns_data + "/editDeviceSelected", {
            key: vm.data.model_original,
            data: vm.data
          });
        else
          vm.$store.dispatch(ns_data + "/editDeviceRemoved", {
            key: vm.data.model_original
          });
      }
    }
  }
};
</script>
