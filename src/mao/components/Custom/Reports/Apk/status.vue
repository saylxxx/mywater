<template>
  <div>
    <b-button
      v-for="data in core.status"
      :key="data.word"
      class="btn btn-oval"
      type="button"
      :variant="data.variant"
      :title="data.title"
      @click.prevent="go"
    >{{data.word}}</b-button>
  </div>
</template>

<script>
import { routeReportApkLog } from "@/mao/settings";
export default {
  name: "status",
  props: ["data", "index", "column"],
  data() {
    return {};
  },
  computed: {
    core() {
      let result = { status: [] };
      let vm = this;
      let full = vm.data;
      result.test_id =
        full.status != 0 &&
        full.status != 10 &&
        full.status != 1 &&
        full.status != 99 &&
        full.status != 101 &&
        full.test_id
          ? full.test_id
          : 0;

      if (full.status == 2) {
        result.status.push({
          variant: "success",
          title: vm.$t("COMPLETE"),
          word: vm.$t("COMPLETE")
        });
      }
      if (full.status == 0 || full.status == 10) {
        result.status.push({
          variant: "danger",
          title: vm.$t("SCHEDULED"),
          word: vm.$t("SCHEDULED")
        });
      }
      if (full.status == 1) {
        result.status.push({
          variant: "warning",
          title: vm.$t("IN_PROGRESS"),
          word: vm.$t("IN_PROGRESS")
        });
      }
      if (full.status == 3) {
        result.status.push({
          variant: "danger",
          title: vm.$t("APP_INSTALLATION_FAILED"),
          word: vm.$t("APP_INSTALLATION_FAILED")
        });
      }
      if (full.status == 4) {
        result.status.push({
          variant: "danger",
          title: vm.$t("LAUNCH_FAILED"),
          word: vm.$t("LAUNCH_FAILED")
        });
      }
      if (full.status == 5) {
        result.status.push({
          variant: "danger",
          title: vm.$t("FUZZYTEST_FAILED"),
          word: vm.$t("FUZZYTEST_FAILED")
        });
      }
      if (full.status == 6) {
        result.status.push({
          variant: "danger",
          title: vm.$t("UPGRADE_TEST_FAILED"),
          word: vm.$t("UPGRADE_TEST_FAILED")
        });
      }
      if (full.status == 7) {
        result.status.push({
          variant: "danger",
          title: vm.$t("UI_AUTOMATOR_TEST_FAILED"),
          word: vm.$t("UI_AUTOMATOR_TEST_FAILED")
        });
      }
      if (full.status == 8) {
        result.status.push({
          variant: "danger",
          title: vm.$t("PRE_UI_AUTOMATOR_TEST_FAILED"),
          word: vm.$t("PRE_UI_AUTOMATOR_TEST_FAILED")
        });
      }
      if (full.status == 9) {
        result.status.push({
          variant: "danger",
          title: vm.$t("POST_UI_AUTOMATOR_TEST_FAILED"),
          word: vm.$t("POST_UI_AUTOMATOR_TEST_FAILED")
        });
      }
      if (full.status == 11) {
        result.status.push({
          variant: "danger",
          title: vm.$t("PRE_MONKEY_TEST_FAILED"),
          word: vm.$t("PRE_MONKEY_TEST_FAILED")
        });
      }
      if (full.status == 12) {
        result.status.push({
          variant: "danger",
          title: vm.$t("POST_MONKEY_TEST_FAILED"),
          word: vm.$t("POST_MONKEY_TEST_FAILED")
        });
      }
      if (full.status == 13) {
        result.status.push({
          variant: "danger",
          title: vm.$t("PRE_INSTALLATION_FAILED"),
          word: vm.$t("PRE_INSTALLATION_FAILED")
        });
      }
      if (full.status == 14) {
        result.status.push({
          variant: "danger",
          title: vm.$t("POST_INSTALLATION_FAILED"),
          word: vm.$t("POST_INSTALLATION_FAILED")
        });
      }
      if (full.status == 15) {
        result.status.push({
          variant: "danger",
          title: vm.$t("PRE_LAUNCH_FAILED"),
          word: vm.$t("PRE_LAUNCH_FAILED")
        });
      }
      if (full.status == 16) {
        result.status.push({
          variant: "danger",
          title: vm.$t("POST_LAUNCH_FAILED"),
          word: vm.$t("POST_LAUNCH_FAILED")
        });
      }
      if (full.status == 17) {
        result.status.push({
          variant: "danger",
          title: vm.$t("SCRIPT_TIMEOUT"),
          word: vm.$t("SCRIPT_TIMEOUT")
        });
      }
      if (full.status == 18) {
        result.status.push({
          variant: "danger",
          title: vm.$t("TEST_FAILED"),
          word: vm.$t("TEST_FAILED")
        });
      }
      if (full.status == 99) {
        result.status.push({
          variant: "danger",
          title: vm.$t("INSUFFICIENT_FUNDS"),
          word: vm.$t("INSUFFICIENT_FUNDS")
        });
      }
      if (full.status == 101) {
        result.status.push({
          variant: "danger",
          title: vm.$t("DEVICE_OFFLINE"),
          word: vm.$t("DEVICE_OFFLINE")
        });
      }
      if (full.status == 19) {
        result.status.push({
          variant: "danger",
          title: vm.$t("APK_NOT_FOUND"),
          word: vm.$t("APK_NOT_FOUND")
        });
      }
      if (full.status == 21) {
        result.status.push({
          variant: "danger",
          title: vm.$t("APK_NOT_ALLOWED"),
          word: vm.$t("APK_NOT_ALLOWED")
        });
      }
      if (full.status == 22) {
        result.status.push({
          variant: "danger",
          title: vm.$t("APPIUM_FAILED"),
          word: vm.$t("APPIUM_FAILED")
        });
      }
      if (full.status == 24) {
        result.status.push({
          variant: "danger",
          title: vm.$t("DEVICE_FREEZE"),
          word: vm.$t("DEVICE_FREEZE")
        });
      }
      if (full.status == 25) {
        result.status.push({
          variant: "danger",
          title: vm.$t("CANCELLED"),
          word: vm.$t("CANCELLED")
        });
      }
      if (full.status == 26) {
        result.status.push({
          variant: "danger",
          title: vm.$t("RECORDTEST_FAILED"),
          word: vm.$t("RECORDTEST_FAILED")
        });
      }
      if (full.status == 27) {
        result.status.push({
          variant: "danger",
          title: vm.$t("DEVICE_UNAVAILABLE_IN_CONTAINER"),
          word: vm.$t("DEVICE_UNAVAILABLE_IN_CONTAINER")
        });
      }
      if (full.status == 28) {
        result.status.push({
          variant: "danger",
          title: vm.$t("DOCKER_CONNECTION_FAILED"),
          word: vm.$t("DOCKER_CONNECTION_FAILED")
        });
      }
      if (full.status == 29) {
        result.status.push({
          variant: "danger",
          title: vm.$t("FAILED_TO_LAUNCH_APPIUM"),
          word: vm.$t("FAILED_TO_LAUNCH_APPIUM")
        });
      }
      if (full.status == 30) {
        result.status.push({
          variant: "danger",
          title: vm.$t("OBB_PUSH_FAILED"),
          word: vm.$t("OBB_PUSH_FAILED")
        });
      }
      if (full.status == 31) {
        result.status.push({
          variant: "danger",
          title: vm.$t("DIGICENTRE_EXCEPTION"),
          word: vm.$t("DIGICENTRE_EXCEPTION")
        });
      }
      return result;
    }
  },
  created() {
    // let vm = this;
    // let full = vm.data;
    // vm.test_id =
    //   full.status != 0 &&
    //   full.status != 10 &&
    //   full.status != 1 &&
    //   full.status != 99 &&
    //   full.status != 101 &&
    //   full.test_id
    //     ? full.test_id
    //     : 0;
    // if (full.status == 2) {
    //   vm.status.push({
    //     variant: "success",
    //     title: vm.$t("COMPLETE"),
    //     word: vm.$t("COMPLETE")
    //   });
    // }
    // if (full.status == 0 || full.status == 10) {
    //   vm.status.push({
    //     variant: "danger",
    //     title: vm.$t("SCHEDULED"),
    //     word: vm.$t("SCHEDULED")
    //   });
    // }
    // if (full.status == 1) {
    //   vm.status.push({
    //     variant: "warning",
    //     title: vm.$t("IN_PROGRESS"),
    //     word: vm.$t("IN_PROGRESS")
    //   });
    // }
    // if (full.status == 3) {
    //   vm.status.push({
    //     variant: "danger",
    //     title: vm.$t("APP_INSTALLATION_FAILED"),
    //     word: vm.$t("APP_INSTALLATION_FAILED")
    //   });
    // }
    // if (full.status == 4) {
    //   vm.status.push({
    //     variant: "danger",
    //     title: vm.$t("LAUNCH_FAILED"),
    //     word: vm.$t("LAUNCH_FAILED")
    //   });
    // }
    // if (full.status == 5) {
    //   vm.status.push({
    //     variant: "danger",
    //     title: vm.$t("FUZZYTEST_FAILED"),
    //     word: vm.$t("FUZZYTEST_FAILED")
    //   });
    // }
    // if (full.status == 6) {
    //   vm.status.push({
    //     variant: "danger",
    //     title: vm.$t("UPGRADE_TEST_FAILED"),
    //     word: vm.$t("UPGRADE_TEST_FAILED")
    //   });
    // }
    // if (full.status == 7) {
    //   vm.status.push({
    //     variant: "danger",
    //     title: vm.$t("UI_AUTOMATOR_TEST_FAILED"),
    //     word: vm.$t("UI_AUTOMATOR_TEST_FAILED")
    //   });
    // }
    // if (full.status == 8) {
    //   vm.status.push({
    //     variant: "danger",
    //     title: vm.$t("PRE_UI_AUTOMATOR_TEST_FAILED"),
    //     word: vm.$t("PRE_UI_AUTOMATOR_TEST_FAILED")
    //   });
    // }
    // if (full.status == 9) {
    //   vm.status.push({
    //     variant: "danger",
    //     title: vm.$t("POST_UI_AUTOMATOR_TEST_FAILED"),
    //     word: vm.$t("POST_UI_AUTOMATOR_TEST_FAILED")
    //   });
    // }
    // if (full.status == 11) {
    //   vm.status.push({
    //     variant: "danger",
    //     title: vm.$t("PRE_MONKEY_TEST_FAILED"),
    //     word: vm.$t("PRE_MONKEY_TEST_FAILED")
    //   });
    // }
    // if (full.status == 12) {
    //   vm.status.push({
    //     variant: "danger",
    //     title: vm.$t("POST_MONKEY_TEST_FAILED"),
    //     word: vm.$t("POST_MONKEY_TEST_FAILED")
    //   });
    // }
    // if (full.status == 13) {
    //   vm.status.push({
    //     variant: "danger",
    //     title: vm.$t("PRE_INSTALLATION_FAILED"),
    //     word: vm.$t("PRE_INSTALLATION_FAILED")
    //   });
    // }
    // if (full.status == 14) {
    //   vm.status.push({
    //     variant: "danger",
    //     title: vm.$t("POST_INSTALLATION_FAILED"),
    //     word: vm.$t("POST_INSTALLATION_FAILED")
    //   });
    // }
    // if (full.status == 15) {
    //   vm.status.push({
    //     variant: "danger",
    //     title: vm.$t("PRE_LAUNCH_FAILED"),
    //     word: vm.$t("PRE_LAUNCH_FAILED")
    //   });
    // }
    // if (full.status == 16) {
    //   vm.status.push({
    //     variant: "danger",
    //     title: vm.$t("POST_LAUNCH_FAILED"),
    //     word: vm.$t("POST_LAUNCH_FAILED")
    //   });
    // }
    // if (full.status == 17) {
    //   vm.status.push({
    //     variant: "danger",
    //     title: vm.$t("SCRIPT_TIMEOUT"),
    //     word: vm.$t("SCRIPT_TIMEOUT")
    //   });
    // }
    // if (full.status == 18) {
    //   vm.status.push({
    //     variant: "danger",
    //     title: vm.$t("TEST_FAILED"),
    //     word: vm.$t("TEST_FAILED")
    //   });
    // }
    // if (full.status == 99) {
    //   vm.status.push({
    //     variant: "danger",
    //     title: vm.$t("INSUFFICIENT_FUNDS"),
    //     word: vm.$t("INSUFFICIENT_FUNDS")
    //   });
    // }
    // if (full.status == 101) {
    //   vm.status.push({
    //     variant: "danger",
    //     title: vm.$t("DEVICE_OFFLINE"),
    //     word: vm.$t("DEVICE_OFFLINE")
    //   });
    // }
    // if (full.status == 19) {
    //   vm.status.push({
    //     variant: "danger",
    //     title: vm.$t("APK_NOT_FOUND"),
    //     word: vm.$t("APK_NOT_FOUND")
    //   });
    // }
    // if (full.status == 21) {
    //   vm.status.push({
    //     variant: "danger",
    //     title: vm.$t("APK_NOT_ALLOWED"),
    //     word: vm.$t("APK_NOT_ALLOWED")
    //   });
    // }
    // if (full.status == 22) {
    //   vm.status.push({
    //     variant: "danger",
    //     title: vm.$t("APPIUM_FAILED"),
    //     word: vm.$t("APPIUM_FAILED")
    //   });
    // }
    // if (full.status == 24) {
    //   vm.status.push({
    //     variant: "danger",
    //     title: vm.$t("DEVICE_FREEZE"),
    //     word: vm.$t("DEVICE_FREEZE")
    //   });
    // }
    // if (full.status == 25) {
    //   vm.status.push({
    //     variant: "danger",
    //     title: vm.$t("CANCELLED"),
    //     word: vm.$t("CANCELLED")
    //   });
    // }
    // if (full.status == 26) {
    //   vm.status.push({
    //     variant: "danger",
    //     title: vm.$t("RECORDTEST_FAILED"),
    //     word: vm.$t("RECORDTEST_FAILED")
    //   });
    // }
    // if (full.status == 27) {
    //   vm.status.push({
    //     variant: "danger",
    //     title: vm.$t("DEVICE_UNAVAILABLE_IN_CONTAINER"),
    //     word: vm.$t("DEVICE_UNAVAILABLE_IN_CONTAINER")
    //   });
    // }
    // if (full.status == 28) {
    //   vm.status.push({
    //     variant: "danger",
    //     title: vm.$t("DOCKER_CONNECTION_FAILED"),
    //     word: vm.$t("DOCKER_CONNECTION_FAILED")
    //   });
    // }
    // if (full.status == 29) {
    //   vm.status.push({
    //     variant: "danger",
    //     title: vm.$t("FAILED_TO_LAUNCH_APPIUM"),
    //     word: vm.$t("FAILED_TO_LAUNCH_APPIUM")
    //   });
    // }
    // if (full.status == 30) {
    //   vm.status.push({
    //     variant: "danger",
    //     title: vm.$t("OBB_PUSH_FAILED"),
    //     word: vm.$t("OBB_PUSH_FAILED")
    //   });
    // }
    // if (full.status == 31) {
    //   vm.status.push({
    //     variant: "danger",
    //     title: vm.$t("DIGICENTRE_EXCEPTION"),
    //     word: vm.$t("DIGICENTRE_EXCEPTION")
    //   });
    // }
  },
  methods: {
    go() {
      let vm = this;
      routeReportApkLog(vm.core.test_id);
    }
  }
};
</script>
