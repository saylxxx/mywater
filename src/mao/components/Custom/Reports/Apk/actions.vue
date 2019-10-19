<template>
  <div class="row ml-1">
    <b-button
      v-if="core.schedule_test_id > 0"
      class="btn btn-square"
      type="button"
      variant="danger"
      @click.prevent="canceltest"
    >{{$t('CANCEL')}}{{$t('TEST')}}</b-button>

    <div
      v-if="core.logurl"
      class="d-flex align-items-center"
      title="Download Log File"
      @click.prevent="download_log"
    >
      <a href="#">
        <em class="fa-2x mr-2 far fa-file-alt"></em>
      </a>
    </div>

    <div
      v-if="core.zipurl"
      class="d-flex align-items-center"
      title="Download Zip File"
      @click.prevent="download_zip"
    >
      <a href="#">
        <em class="fa-2x mr-2 far fa-file-archive"></em>
      </a>
    </div>
  </div>
</template>

<script>
import { DOWNLOADFILE } from "@/mao/consts";
import MO, { NAME_SPACE as ns_report } from "@/mao/store/modules/reportapk";
export default {
  name: "actinos",
  props: ["data", "index", "column"],
  data() {
    return {};
  },
  computed: {
    core() {
      let vm = this;
      let full = vm.data;
      let url = DOWNLOADFILE + "/" + full.id_e;
      let logurl = url + "/log";
      let zipurl = url + "/zip";
      let mediaurl = url + "/multimedia";
      let systemlogurl =
        DOWNLOADFILE + "/" + full.id_e + "/system" + "/" + full.test_id;
      let result = {};

      if ([0, 10].indexOf(full.status) != -1) {
        // CASE 1: cancel btn
        result.schedule_test_id = full.schedule_test_id;
        //   links =
        //     `<button class="btn btn-xs btn-danger " ng-click="vm.cancelTest('${full.schedule_test_id}')"><i class="fa  fa-window-close fa-lg close_b62b28" style="color: white;" aria-hidden="true"></i> &nbsp;&nbsp;` +
        //     vm.$translate.instant("CANCEL") +
        //     " " +
        //     vm.$translate.instant("TEST") +
        //     `</button>`;
        //   return links;
      } else if (full.status >= 2) {
        if (!full.expired) {
          if (full.log_file == 1) {
            result.logurl = logurl;
            // CASE 2a: log_file btn
            //   links += `<a class="btn btn-xs btn-success" ng-click="vm.track(\'${logurl}\',\'${full.test_id}\',\'${full.serial}\','log')" title="Download Log File" ui-sref-opts="{reload:true}"  ><i class="fa fa-file-text" aria-hidden="true"></i></a>&nbsp;`;
          }
          if (full.zip_file == 1) {
            result.zipurl = zipurl;
            // CASE 2b: zip_file btn
            //   links += `<a class="btn btn-xs btn-success" ng-click="vm.track(\'${zipurl}\',\'${full.test_id}\',\'${full.serial}\','zip')" title="Download Zip File" ui-sref-opts="{reload:true}"  ><i class="fa fa-file-archive-o" aria-hidden="true"></i></a>&nbsp;`;
          }
        } else {
          if (full.expired && full.zip_file == 1) {
            result.zipurl = zipurl;
            // CASE 3: zip_file btn
            //   links += `<a class="btn btn-xs btn-success" ng-click="vm.track(\'${zipurl}\',\'${full.test_id}\',\'${full.serial}\','zip')" analytics-on="click" analytics-event="download zip file" analytics-category="APK REPORTS" analytics-label="download url -${logurl}" title="Download Zip File" ui-sref-opts="{reload:true}" ><i class="fa fa-file-archive-o" aria-hidden="true"></i></a>`;
          }
        }

        // TODO: admin, download system log

        //   if (
        //     vm.AclService.hasRole("admin") &&
        //     full.week == 1 &&
        //     [0, 10, 1, 99, 25].indexOf(full.status) == -1
        //   ) {
        //     links += `<a class="btn btn-xs btn-success" ng-click="vm.track(\'${systemlogurl}\',\'${full.test_id}\',\'${full.serial}\','system')" title="Download System Log File" ui-sref-opts="{reload:true}"  ><i class="fa fa-file-text" aria-hidden="true"></i></a>&nbsp;`;
        //   }

        return result;
      }
    }
  },
  created() {},
  methods: {
    canceltest() {
      let vm = this;
      console.log("..canceltest..", vm.data.schedule_test_id);
      if (vm.data.schedule_test_id > 0)
        vm.$store.dispatch(ns_report + "/canceltest", vm.data.schedule_test_id);
    },
    download_log() {
      let vm = this;
      console.log("..download_log..");
      // TODO: google analytics
      window.open(vm.core.logurl);
    },
    download_zip() {
      let vm = this;
      console.log("..download_zip..");
      // TODO: google analytics
      window.open(vm.core.zipurl);
    }
  }
};
</script>
