<template>
  <option-box
    v-if="data.key != undefined"
    :options="odata"
    :ohandler="odata_ohandler"
    :default_option="odata_default_option"
    :class="{'border-right-1':true, 'is-invalid': isInValid()}"
  ></option-box>
</template>

<script>
import { SEVERITY, ALL_SEVERITY } from "@/mao/consts";
import { NAME_SPACE as ns_data } from "@/mao/store/modules/data";
import OptionBox from "@/mao/components/Custom/Other/Options";
export const VALIDATE_LOG = data => {
  let err_log = [];
  if (data.severity === undefined)
    err_log.push("ERR_1:" + JSON.stringify(data));
  else {
    if (!ALL_SEVERITY.includes(data.severity))
      err_log.push("ERR_2:" + JSON.stringify(data));
  }
  return err_log;
};
export default {
  components: {
    "option-box": OptionBox
  },
  name: "severity",
  props: ["data", "index", "column"],
  computed: {
    odata_default_option() {
      let vm = this;
      let result = { key: 0 };
      let severity = vm.data.data.severity;
      if (severity === SEVERITY.information) result = { key: 1 };
      else if (severity === SEVERITY.warning) result = { key: 2 };
      else if (severity === SEVERITY.error) result = { key: 3 };
      else if (severity === SEVERITY.critical) result = { key: 4 };
      return result;
    }
  },
  data() {
    return {
      //   isInValid: false,
      // ----- option-box -----
      //   odata_default_option: { key: 0 },
      odata: [
        { key: 0, value: "", show: this.$t("SELECT") },
        {
          key: 1,
          value: SEVERITY.information,
          show: this.$t("INFORMATION")
        },
        {
          key: 2,
          value: SEVERITY.warning,
          show: this.$t("WARNING")
        },
        { key: 3, value: SEVERITY.error, show: this.$t("ERROR") },
        {
          key: 4,
          value: SEVERITY.critical,
          show: this.$t("CRITICAL")
        }
      ],
      odata_ohandler: {
        onChange: $event => {
          let vm = this;
          console.log("..odata..", $event.target.value);
          vm.$store.dispatch(ns_data + "/tmplogprofileUpdated", {
            key: vm.data.key,
            data: {
              severity: $event.target.value
            }
          });

          // validate
          //   vm.isInValid = $event.target.value == 0;
        }
      }
    };
  },
  methods: {
    isInValid() {
      let vm = this;
      return VALIDATE_LOG(vm.data.data).length > 0;
    }
  }
};
</script>
