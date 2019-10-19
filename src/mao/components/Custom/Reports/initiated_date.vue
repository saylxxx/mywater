<template>
  <a>{{data.initiated_date}}</a>
</template>

<script>
export default {
  name: "initiated_date",
  props: ["data", "index", "column"],
  data() {
    return {};
  },
  created() {}
};
</script>
