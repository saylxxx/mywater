<template>
  <div class="row ml-1">
    <div class="d-flex align-items-center" title="edit" @click.prevent="edit">
      <a href="#">
        <em class="fa-2x mr-2 far fa-edit"></em>
      </a>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
// import { NAME_SPACE as ns_profiles } from "@/mao/store/modules/profiles";
import { routeNext } from "@/mao/settings";
export default {
  name: "actions",
  props: ["data", "index", "column"],
  data() {
    return {};
  },
  methods: {
    edit() {
      let vm = this;
      routeNext("/devices/edit/" + vm.data.id_e);
    }
  }
};
</script>
