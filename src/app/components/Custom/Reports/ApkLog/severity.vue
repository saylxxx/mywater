<template>
  <span
    v-if="data.severity && data.severity.toLowerCase() == 'information'"
    class="float-right badge badge-success"
  >{{data.severity}}</span>
  <span
    v-else-if="data.severity && data.severity.toLowerCase()  == 'error'"
    class="float-right badge badge-danger"
  >{{data.severity}}</span>
  <span
    v-else-if="data.severity && data.severity.toLowerCase()  == 'warning'"
    class="float-right badge badge-warning"
  >{{data.severity}}</span>
  <span
    v-else-if="data.severity && data.severity.toLowerCase()  == 'critical'"
    class="float-right badge badge-danger"
  >{{data.severity}}</span>
</template>

<script>
export default {
  name: "severity",
  props: ["data", "index", "column"],
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
