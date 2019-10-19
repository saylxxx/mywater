<template>
  <a>{{duration_in_seconds()}}</a>
</template>

<script>
export default {
  name: "duration_in_seconds",
  props: ["data", "index", "column"],
  data() {
    return {};
  },
  created() {},
  methods: {
    duration_in_seconds() {
      let vm = this;
      if (vm.data.duration_in_seconds > 0) return vm.data.duration_in_seconds;
      return 0;
    }
  }
};
</script>
