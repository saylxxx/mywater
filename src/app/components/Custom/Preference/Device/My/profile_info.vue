<template>
  <div v-if="data.profile_devices">
    <div class="ml-1">
      <span
        class="float-left badge badge-success"
        v-for="device in data.profile_devices"
        :key="device.model"
      >{{device.model}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile_info",
  props: ["data", "index", "column"],
  data() {
    return {};
  },
  methods: {}
};
</script>
