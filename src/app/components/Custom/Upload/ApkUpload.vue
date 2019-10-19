<template>
  <base-upload
    ref="uploader"
    v-bind="$props"
    :options="dropzoneOptions"
    :vhandler="vhandler"
    :msg="dropzoneMsg"
    @onPropsChange="pChange"
  />
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { UPLOAD_APK_OPTIONS } from "@/mao/backend/upload";
import BaseUpload from "../Base/Dropzone";

export default {
  components: {
    "base-upload": BaseUpload
  },
  props: {
    id: String
  },
  computed: {},
  created() {},
  data() {
    return {
      dropzoneOptions: UPLOAD_APK_OPTIONS,
      dropzoneMsg: "",
      vhandler: {
        vadded: file => {
          console.log("...dropzone..vadded..", file);
          this.dropzoneMsg = "";
        },
        vcomplete: file => {
          console.log("...dropzone..complete..", file, this.$props.id);

          if (file.xhr === undefined) {
            console.log("vcomplete..error..empty xhr");
            this.dropzoneMsg = "unknown error";
            return false;
          }

          let xhr_res;
          try {
            xhr_res = JSON.parse(file.xhr.response);
            console.log("vcomplete..json..", xhr_res);
          } catch (_) {
            console.log("....vcomplete json parse err....", file.xhr.response);
            this.dropzoneMsg = "json parse error";
            return false;
          }

          // parse err msg
          if (file.status === "error") {
            let err_msg =
              xhr_res.error === 5
                ? this.$t("APK_ALREADY_EXISTS")
                : this.$t(xhr_res.error);
            //   console.log("dropzone..error..", res, err_msg);
            this.dropzoneMsg = err_msg;

            // set apkuploaded
            if (xhr_res.error === 5) {
              // get apk
              let apk = this.$store.getters["addtest/getApk"]({
                error: 5,
                name: file.name
              });

              if (apk != null) {
                this.$store
                  .dispatch("data/apkUploaded", {
                    key: this.$props.id,
                    data: apk
                  })
                  .then(res => {
                    console.log("...vcomplete..error 5..done..");
                  });
              } else {
                console.log("...vcomplete..error 5..not found..");
              }
            }

            return false;
          }

          if (file.status === 401) {
            // TODO: 401
            this.dropzoneMsg = this.$t(xhr_res.error);
            return false;
          }

          // upload success
          if (xhr_res.app !== undefined) {
            this.$store
              .dispatch("data/apkUploaded", {
                key: this.$props.id,
                data: xhr_res.app
              })
              .then(res => {
                console.log("...vcomplete..data/apkUploaded..done..");
                this.$store.dispatch("addtest/testsapklist");
              })
              .then(res => {
                console.log("...vcomplete..addtest/testsapklist..done..");
              });
          }
        }
      }
    };
  },
  watch: {},
  methods: {
    pChange: function(propName, newVal, oldVal) {
      //   this[propName] = newVal;
      //   console.log(
      //     "...test..." + propName + ":" + oldVal + " changed to " + newVal
      //   );
      if (propName === "msg") this.dropzoneMsg = newVal;
    },
    reset() {
      let vm = this;
      console.log("..reset..", vm.id);
      if (vm.$refs.uploader !== undefined) vm.$refs.uploader.reload();
    }
  }
};
</script>
