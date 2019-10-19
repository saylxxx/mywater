<template>
  <div>
    <b-button
      v-if="data.status == 0"
      class="btn btn-oval"
      type="button"
      variant="danger"
      :title="$t('SCHEDULED')"
      @click.prevent="go"
    >{{$t("SCHEDULED")}}</b-button>

    <b-button
      v-else-if="data.status == 1"
      class="btn btn-oval"
      type="button"
      variant="warning"
      :title="$t('IN_PROGRESS')"
      @click.prevent="go"
    >{{$t("IN_PROGRESS")}}</b-button>

    <b-button
      v-else-if="data.status == 2"
      class="btn btn-oval"
      type="button"
      variant="success"
      :title="$t('COMPLETE')"
      @click.prevent="go"
    >{{$t("COMPLETE")}}</b-button>

    <b-button
      v-else-if="data.status == 3 || data.status == 4 || data.status == 5"
      class="btn btn-oval"
      type="button"
      variant="danger"
      :title="$t('FAILED')"
      @click.prevent="go"
    >{{$t("FAILED")}}</b-button>

    <b-button
      v-else-if="data.status == 19"
      class="btn btn-oval"
      type="button"
      variant="danger"
      :title="$t('APK_NOT_FOUND')"
      @click.prevent="go"
    >{{$t("APK_NOT_FOUND")}}</b-button>

    <b-button
      v-else-if="data.status == 21"
      class="btn btn-oval"
      type="button"
      variant="danger"
      :title="$t('APK_NOT_ALLOWED')"
      @click.prevent="go"
    >{{$t("APK_NOT_ALLOWED")}}</b-button>

    <b-button
      v-else-if="data.status == 25"
      class="btn btn-oval"
      type="button"
      variant="danger"
      :title="$t('CANCELLED')"
      @click.prevent="go"
    >{{$t("CANCELLED")}}</b-button>

    <b-button
      v-else-if="data.status == 99"
      class="btn btn-oval"
      type="button"
      variant="danger"
      :title="$t('INSUFFICIENT_FUNDS')"
      @click.prevent="go"
    >{{$t("INSUFFICIENT_FUNDS")}}</b-button>

    <b-button
      v-else
      class="btn btn-oval"
      type="button"
      variant="danger"
      :title="$t('SCHEDULED')"
      @click.prevent="go"
    >{{$t("SCHEDULED")}}</b-button>
  </div>
</template>

<script>
import { routeReportApk } from "@/mao/settings";
export default {
  name: "status",
  props: ["data", "index", "column"],
  data() {
    return {};
  },
  created() {
    // let src = this.data.debug_status || [];
    // let counts = {};
    // src.split(",").forEach(x => {
    //   counts[x] = (counts[x] || 0) + 1;
    // });
    // console.log("..test..zzz..", src, counts);
  },
  methods: {
    go() {
      let vm = this;
      routeReportApk(vm.data.test_run_id);
    }
  }
};
</script>
