<template>
  <div class="row2">
    <div v-if="data.device_type" class="d-flex align-items-center" :title="$t('TABLET')">
      <a>
        <em class="fa-2x mr-2 fas fa-tablet-alt"></em>
      </a>
    </div>
    <div v-else class="d-flex align-items-center" :title="$t('MOBILE')">
      <a>
        <em class="fa-2x mr-2 fas fa-mobile-alt"></em>
      </a>
    </div>

    <span>&nbsp;{{data.aspect_w}}&nbsp;:&nbsp;{{data.aspect_h}}</span>
  </div>
</template>

<script>
export default {
  name: "device_info",
  props: ["data", "index", "column"],
  data() {
    return {};
  },
  //   created() {
  //     let vm = this;
  //     console.log("..created..", vm.data.fingerprint, vm.index, vm.column);
  //   },
  //   mounted() {
  //     let vm = this;
  //     console.log("..mounted..", vm.data.fingerprint, vm.index, vm.column);
  //   },
  //   updated() {
  //     let vm = this;
  //     console.log("..updated..", vm.data.fingerprint, vm.index, vm.column);
  //   },
  methods: {}
};
</script>
<style>
.row2 {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: 0px;
  margin-left: 0px;
}

</style>