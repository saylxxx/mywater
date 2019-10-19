<template>
  <span
    v-if="core.device_status == 'available'"
    class="float-right badge badge-success"
  >{{$t("AVAILABLE")}}</span>
  <span
    v-else-if="core.device_status == 'offline'"
    class="float-right badge badge-danger"
  >{{$t("AVAILABLE")}}</span>

  <span v-else-if="core.device_status" class="float-right badge badge-danger">{{$t("BUSY")}}</span>
</template>

<script>
export default {
  name: "status_info",
  props: ["data", "index", "column"],
  data() {
    return {};
  },
  computed: {
    core() {
      let result = {};
      let vm = this;
      let full = vm.data;
      if (full.status == 0 || full.status == 10 || full.status == 1) {
        result.device_status = full.device_status;
      }
      return result;
    }
  },
  created() {},
  methods: {}
};
</script>
