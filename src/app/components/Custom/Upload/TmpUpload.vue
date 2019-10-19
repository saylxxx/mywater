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
import { UPLOAD_TMP_OPTIONS } from "@/mao/backend/upload";
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
      dropzoneOptions: UPLOAD_TMP_OPTIONS,
      dropzoneMsg: "",
      vhandler: {
        vadded: file => {
          console.log(
            "...dropzone..vadded..",
            file,
            file.status,
            file.accepted,
            file.name
          );
          this.dropzoneMsg = "";

          if (file != null) {
            this.$store
              .dispatch("data/tmpAdded", {
                key: this.$props.id,
                data: file
              })
              .then(res => {
                console.log("...tmp added..");
              });
          }
        },
        vremoved: (file, error, xhr) => {
          console.log("...dropzone..vremoved..", file, error, xhr);

          if (file != null) {
            this.$store
              .dispatch("data/tmpRemoved", {
                key: this.$props.id,
                data: file
              })
              .then(res => {
                console.log("...tmp removed..");
              });
          }
        },
        vcomplete: file => {
          console.log("...dropzone..complete..", file, this.$props.id);
        }
      }
    };
  },
  watch: {},
  methods: {
    pChange: function(propName, newVal, oldVal) {
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
