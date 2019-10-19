<template>
  <span
    v-if="data.status && data.status.toLowerCase() == 'available'"
    class="badge badge-success"
  >{{$t('AVAILABLE')}}</span>
  <span v-else class="badge badge-warning">{{$t('BUSY')}}</span>
</template>

<script>
export default {
  name: "status",
  props: ["data", "index", "column"],
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
