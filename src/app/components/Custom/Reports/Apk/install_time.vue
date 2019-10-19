<template>
  <span v-if="core.show && core.test_id != 0" :title="core.title" @click.prevent="go">{{core.show}}</span>
  <span v-else-if="core.show" :title="core.title">{{core.show}}</span>
</template>

<script>
import { routeReportApkLog } from "@/mao/settings";
export default {
  name: "install_time",
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
      result.title = result.test_id ? "Reports" : "Download Logs and Media";
      result.show = full.install_time;
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
    // vm.title = vm.test_id ? "Reports" : "Download Logs and Media";
    // vm.show = full.install_time;
  },
  methods: {
    go() {
      let vm = this;
      routeReportApkLog(vm.core.test_id);
    }
  }
};
</script>
