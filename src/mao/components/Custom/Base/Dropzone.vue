<template>
  <b-card class="b mb-3">
    <vue-dropzone
      :id="$props.id"
      :options="bind_options"
      ref="dropzoneInstance"
      @vdropzone-mounted="vmounted"
      @vdropzone-complete="vcomplete"
      @vdropzone-total-upload-progress="vprogress"
      @vdropzone-file-added="vadded"
      @vdropzone-removed-file="vremoved"
      :duplicateCheck="true"
    />
    <div v-show="this.progress > 0" class="progress progress-xs mb-3">
      <div
        class="progress-bar bg-info progress-bar-striped"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        :style="this.progressStyle"
      ></div>
    </div>
    <div class="row ml-1">
      <span>{{msg}}</span>
      <div class="ml-auto mr-3" title="reload" @click.prevent="reload">
        <a href="#">
          <em class="fa-1x icon-reload mr-0"></em>
        </a>
      </div>
      <div></div>
    </div>
  </b-card>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import vue2Dropzone from "vue2-dropzone";
import propsync from ".././propsync";
import { oauth_header } from "@/mao/backend/a";

export default {
  components: {
    vueDropzone: vue2Dropzone
  },
  mixins: [propsync], //声明使用propsync的mixin
  props: {
    id: { type: String, propsync: false },
    vhandler: { type: Object, propsync: false },
    options: { type: Object, propsync: false },
    msg: { type: String, propsync: true } // sync this one
  },
  data() {
    return {
      dropzone: {},
      progress: 0,
      progressStyle: { width: "0%" }
    };
  },
  computed: {
    bind_options: {
      get() {
        let options = this.$props.options;
        options.headers = {
          Authorization: oauth_header()
        };
        // console.log("...dropzone..current..headers...", options.headers);
        return options;
      }
    }
  },
  watch: {},
  methods: {
    setProgress(value) {
      this.progress = value;
      this.progressStyle.width = Math.floor(value) + "%";
    },

    // ----------- dropzone ------ start -----
    vmounted() {
      //   console.log(
      //     "..vmounted...............",
      //     this.$refs.dropzoneInstance.options
      //   );
    },
    vprogress(totalProgress, totalBytes, totalBytesSent) {
      this.setProgress(totalProgress);
      //   console.log(
      //     "...dropzone..progress..",
      //     totalProgress,
      //     totalBytes,
      //     totalBytesSent
      //   );
    },
    vadded(file) {
      if (this.$props.vhandler.hasOwnProperty("vadded"))
        this.$props.vhandler.vadded(file);
    },
    vcomplete(file) {
      if (this.$props.vhandler.hasOwnProperty("vcomplete"))
        this.$props.vhandler.vcomplete(file);
    },
    vremoved(file, error, xhr) {
      let vm = this;
      vm.p_msg = "";
      vm.setProgress(0);

      if (vm.$props.vhandler.hasOwnProperty("vremoved"))
        vm.$props.vhandler.vremoved(file, error, xhr);
    },
    // ----------- dropzone ------ end -----
    reload: function() {
      console.log("..reload..dropzone..");
      let vm = this;
      vm.$refs.dropzoneInstance.removeAllFiles(true);
      vm.p_msg = "";
      vm.setProgress(0);
    }
  }
};
</script>

<style>
.dz-max-files-reached {
  pointer-events: none;
  cursor: default;
}
.dz-error {
  display: none;
}
</style>
