<template>
  <span v-if="core.test_id != 0" :title="core.title" @click.prevent="go">{{core.show}}</span>
  <span v-else :title="core.title">{{show}}</span>
</template>

<script>
import { routeReportApkLog } from "@/mao/settings";
export default {
  name: "version",
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
      result.show = full.android_ver;
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
    // vm.show = full.android_ver;
  },
  methods: {
    go() {
      let vm = this;
      routeReportApkLog(vm.core.test_id);
    }
  }
};
</script>
