<template>
  <span v-if="data.model_name">{{data.model_name}}</span>
  <span v-else-if="data.model">{{data.model}}</span>
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
