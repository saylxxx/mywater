<template>
  <div class="ml-1 mr-1">
    <div
      class="d-flex align-items-center"
      title="Download Test Result File"
      @click.prevent="download_log"
    >
      <a href="#">
        <em class="fa-2x mr-2 far fa-file-alt"></em>
      </a>
    </div>
  </div>
</template>

<script>
import { DOWNLOADFILE } from "@/mao/consts";
export default {
  name: "action2",
  props: ["data", "index", "column"],
  data() {
    return {};
  },
  beforeCreate() {},
  created() {},
  methods: {
    download_log() {
      let vm = this;
      console.log("..download_log..");
      // TODO: google analytics
      window.open(DOWNLOADFILE + "/0/custom_error_log/" + vm.$route.params.id);
    }
  }
};
</script>
