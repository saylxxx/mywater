<template>
  <div>
    <span
      v-if="data.completed > 0"
      class="float-right badge badge-success"
      :title="$t('COMPLETED')"
      @click.prevent="go"
    >{{data.completed}}</span>

    <span
      v-if="data.in_progress > 0"
      class="float-right badge badge-warning"
      :title="$t('IN_PROGRESS')"
      @click.prevent="go"
    >{{data.in_progress}}</span>

    <span
      v-if="data.failed > 0"
      class="float-right badge badge-danger"
      :title="$t('FAILED')"
      @click.prevent="go"
    >{{data.failed}}</span>

    <span
      v-if="data.cancelled > 0"
      class="float-right badge badge-danger"
      :title="$t('CANCELLED')"
      @click.prevent="go"
    >{{data.cancelled}}</span>

    <span
      v-if="data.not_initiated > 0"
      class="float-right badge badge-secondary"
      :title="$t('NOT_INITIATED')"
      @click.prevent="go"
    >{{data.not_initiated}}</span>

    <span
      v-if="data.suspended > 0"
      class="float-right badge badge-danger"
      :title="$t('SUSPENDED')"
      @click.prevent="go"
    >{{data.suspended}}</span>
  </div>
</template>

<script>
import { routeReportApk } from "@/mao/settings";
export default {
  name: "status_info",
  props: ["data", "index", "column"],
  data() {
    return {};
  },
  created() {
    let vm = this;
    // console.log("..created..", vm.data.test_run_id, vm.index, vm.column);
    // if (vm.data.completed != 0) vm.completed = vm.data.completed;
    // if (vm.data.in_progress != 0) vm.in_progress = vm.data.in_progress;
    // if (vm.data.failed != 0) vm.failed = vm.data.failed;
    // if (vm.data.cancelled != 0) vm.cancelled = vm.data.cancelled;
    // if (vm.data.not_initiated != 0) vm.not_initiated = vm.data.not_initiated;
    // if (vm.data.suspended != 0) vm.suspended = vm.data.suspended;
  },
  //   mounted() {
  //     let vm = this;
  //     console.log("..mounted..", vm.data.test_run_id, vm.index, vm.column);
  //   },
  //   updated() {
  //     let vm = this;
  //     console.log("..updated..", vm.data.test_run_id, vm.index, vm.column);
  //   },
  methods: {
    go() {
      let vm = this;
      routeReportApk(vm.data.test_run_id);
    }
  }
};
</script>
