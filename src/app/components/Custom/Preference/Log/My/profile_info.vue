<template>
  <div v-if="get_data">
    <div class="ml-1">
      <span class="float-left badge" v-for="data in get_data" :key="data.id">
        <span v-if="data.title" class="float-left badge">
          <span class="ml-0 mr-1">{{data.title}}</span>
          <span v-if="data.severity_level" class="badge badge-info">{{data.severity_level}}</span>
          <span v-else class="badge badge-danger">??</span>
          <span v-if="data.file_type" class="badge badge-info">{{data.file_type}}</span>
          <span v-else class="badge badge-danger">??</span>
        </span>
        <span v-else class="float-left badge badge-danger">??</span>
      </span>
      <!-- <b-table responsive striped hover fixed :items="get_data" :fields="log_profile_fields"></b-table> -->
    </div>
  </div>
</template>

<script>
import { NAME_SPACE as ns_profiles } from "@/mao/store/modules/userlogprofile";
export default {
  name: "profile_info",
  props: ["data", "index", "column"],
  computed: {
    get_data() {
      let vm = this;
      return (
        vm.$store.getters[ns_profiles + "/getLogprofileItemsById"](
          vm.data.id
        ) || []
      );
    }
  },
  data() {
    return {
      //   log_profile_fields: {
      //     title: { label: this.$t("STRING_TO_SEARCH"), sortable: false },
      //     severity_level: { label: this.$t("SEVERITY"), sortable: false },
      //     file_type: { label: this.$t("SEARCH_IN_FILE"), sortable: false }
      //   }
    };
  },
  methods: {}
};
</script>
