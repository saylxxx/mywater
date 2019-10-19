<template>
  <input
    v-if="data.key != undefined"
    class="form-control form-control-sm rounded-0"
    ref="input"
    type="text"
    :placeholder="$t('ENTER_LOG_PROFILE')"
    v-model="data.data.search"
    v-on:keyup="onKeyup($refs.input.value)"
    :class="{'border-right-1':true, 'is-invalid': isInValid()}"
    name="name"
  />
</template>

<script>
import { NAME_SPACE as ns_data } from "@/mao/store/modules/data";
export const VALIDATE_LOG = data => {
  let err_log = [];
  if (data.search === undefined) err_log.push("ERR_1:" + JSON.stringify(data));
  else {
    if (data.search.length <= 0) err_log.push("ERR_2:" + JSON.stringify(data));
  }
  return err_log;
};
export default {
  name: "search",
  props: ["data", "index", "column"],
  data() {
    return {
      //   isInValid: false
    };
  },
  computed: {
    // get_data() {
    //   let vm = this;
    //   if (vm.data.data) return vm.data.data.search || "";
    //   return "";
    // },
  },
  watch: {
    // is_valid: {
    //   handler(newValue) {
    //     console.log("newValue=", newValue);
    //   }
    // }
  },
  methods: {
    onKeyup(newVal) {
      let vm = this;
      console.log("..onKeyup..", newVal);
      vm.$store.dispatch(ns_data + "/tmplogprofileUpdated", {
        key: vm.data.key,
        data: {
          search: newVal
        }
      });
    },
    isInValid() {
      let vm = this;
      return VALIDATE_LOG(vm.data.data).length > 0;
    }
  }
};
</script>
