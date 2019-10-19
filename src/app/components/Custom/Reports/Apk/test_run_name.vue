<template>
  <span v-if="core.test_id != 0" :title="core.title" @click.prevent="go">{{core.show}}</span>
  <span v-else :title="core.title">{{core.show}}</span>
</template>

<script>
import { routeReportApkLog } from "@/mao/settings";
export default {
  name: "test_run_name",
  props: ["data", "index", "column"],
  data() {
    return {};
  },
  computed: {
    core() {
      let result = {};
      let vm = this;
      let full = vm.data;

      result.test_id =
        full.status != 0 &&
        full.status != 10 &&
        full.status != 1 &&
        full.status != 99 &&
        full.status != 101 &&
        full.test_id
          ? full.test_id
          : 0;

      if (full.upgrade_to != null) {
        result.title = result.show =
          full.appinfo + " upgrade to " + full.upgrade_to;
      } else {
        result.title = full.test_run_name;
        result.show = full.test_run_name_1;
      }
      return result;
    }
  },
  created() {
    // let vm = this;
    // let full = vm.data;
    // vm.test_id =
    //   full.status != 0 &&
    //   full.status != 10 &&
    //   full.status != 1 &&
    //   full.status != 99 &&
    //   full.status != 101 &&
    //   full.test_id
    //     ? full.test_id
    //     : 0;
    // if (full.upgrade_to != null) {
    //   vm.title = vm.show = full.appinfo + " upgrade to " + full.upgrade_to;
    // } else {
    //   vm.title = full.test_run_name;
    //   vm.show = full.test_run_name_1;
    // }
  },
  methods: {
    go() {
      let vm = this;
      routeReportApkLog(vm.core.test_id);
    }
  }
};
</script>
