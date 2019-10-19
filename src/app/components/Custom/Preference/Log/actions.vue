<template>
  <div class="row ml-1">
    <b-button
      v-if="data && data.key != undefined"
      class="btn btn-square ml-1 mr-1"
      type="button"
      variant="danger"
      @click.prevent="remove"
    >－</b-button>

    <b-button
      v-else
      class="btn btn-square ml-1 mr-1"
      type="button"
      variant="success"
      @click.prevent="add"
    >＋</b-button>
  </div>
</template>

<script>
import { NAME_SPACE as ns_data } from "@/mao/store/modules/data";
import { NAME_SPACE as ns_profiles } from "@/mao/store/modules/userlogprofile";
import { alert_question } from "@/mao/utils";

export default {
  name: "actions",
  props: ["data", "index", "column"],
  data() {
    return {};
  },
  methods: {
    add() {
      let vm = this;
      let key = vm.$store.getters[ns_data + "/getTmplogprofileKey"];
      console.log("..add..", key);
      vm.$store.dispatch(ns_data + "/tmplogprofileAdded", { key, data: {} });
    },
    remove() {
      let vm = this;
      let key = vm.data.key;
      console.log("..remove.ssss.", key);
      alert_question({
        success_handler: function() {
          vm.$store.dispatch(ns_data + "/tmplogprofileRemoved", { key });
          vm.$store.dispatch(ns_profiles + "/deleteitem", vm.data.key); // 真正delete的部份
        }
      });
    }
  }
};
</script>
