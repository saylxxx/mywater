<template>
  <div v-show="data.status" @click.prevent="go">
    <div class=" text-center" title="Test Report Details">
      <a class="link-unstyled text-success" href="#">
        <em class="fa-2x mr-2 fas"></em>
        {{$t("DETAILED")}}
      </a>
    </div>
  </div>
</template>

<script>
import { routeNext } from "@/mao/settings";
export default {
  name: "test_run_id",
  props: ["data", "index", "column"],
  data() {
    return {};
  },
  created() {},
  methods: {
    go() {
      let vm = this;
      routeNext("/reports/apk/" + vm.data.test_run_id);
    }
  }
};
</script>
