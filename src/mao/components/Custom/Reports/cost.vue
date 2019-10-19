<template>
  <!-- TODO: /* if stand alone server is true this column should not be visible*/ -->
  <a>{{cost()}}</a>
</template>

<script>
import i18next from "@/mao/i18n.js";
export default {
  name: "duration_in_seconds",
  props: ["data", "index", "column"],
  data() {
    return {};
  },
  created() {},
  methods: {
    cost() {
      let vm = this;
      let full = vm.data;
      let cost = 0;
      if (full.cost != "" && full.cost != null && i18next.language == "zh-TW")
        cost = Math.round(parseFloat(full.cost));
      //cost = Math.round(parseFloat(full.cost) * (AppConfig.billrateth))
      else if (full.cost != "" && full.cost != null && i18next.language == "en")
        cost = Math.round(parseFloat(full.cost));
      //cost =  parseFloat(full.cost).toFixed(2)
      else cost = 0;
      return cost;
    }
  }
};
</script>
