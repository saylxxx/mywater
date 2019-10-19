<template>
  <span v-if="data.brand_name">{{data.brand_name}}</span>
  <span v-else-if="data.brand">{{data.brand}}</span>
</template>

<script>
export default {
  name: "device_info",
  props: ["data", "index", "column"],
  data() {
    return {};
  },
  methods: {}
};
</script>
