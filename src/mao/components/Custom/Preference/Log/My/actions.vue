<template>
  <div class="row ml-1">
    <div class="d-flex align-items-center" title="edit" @click.prevent="edit">
      <a href="#">
        <em class="fa-2x mr-2 far fa-edit"></em>
      </a>
    </div>

    <div class="d-flex align-items-center" title="remove" @click.prevent="remove">
      <a href="#">
        <em class="fa-2x mr-2 far fa-trash-alt"></em>
      </a>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { NAME_SPACE as ns_profiles } from "@/mao/store/modules/userlogprofile";
import { routeNext } from "@/mao/settings";
import { alert_question } from "@/mao/utils";

export default {
  name: "actions",
  props: ["data", "index", "column"],
  data() {
    return {};
  },
  methods: {
    edit() {
      let vm = this;
      //   vm.$store.dispatch(ns_profiles + "/show", vm.data.id);
      routeNext("/preference/logProfile/" + vm.data.id);
    },
    remove() {
      let vm = this;
      alert_question({
        success_handler: function() {
          vm.$store.dispatch(ns_profiles + "/delete", vm.data.id);
        }
      });
    }
  }
};
</script>
