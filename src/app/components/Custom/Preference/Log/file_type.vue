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
import { FILE_TYPE, ALL_FILE_TYPE } from "@/mao/consts";
import { NAME_SPACE as ns_data } from "@/mao/store/modules/data";
import OptionBox from "@/mao/components/Custom/Other/Options";
export const VALIDATE_LOG = data => {
  let err_log = [];
  if (data.file_type === undefined)
    err_log.push("ERR_1:" + JSON.stringify(data));
  else {
    if (!ALL_FILE_TYPE.includes(data.file_type))
      err_log.push("ERR_2:" + JSON.stringify(data));
  }
  return err_log;
};
export default {
  components: {
    "option-box": OptionBox
  },
  name: "file_type",
  props: ["data", "index", "column"],
  computed: {
    odata_default_option() {
      let vm = this;
      let result = { key: 0 };
      let file_type = vm.data.data.file_type;
      if (file_type === FILE_TYPE.fuzzy) result = { key: 1 };
      else if (file_type === FILE_TYPE.uiautomator) result = { key: 2 };
      else if (file_type === FILE_TYPE.logcat) result = { key: 3 };
      return result;
    }
  },
  data() {
    return {
      //   isInValid: false,
      // ----- option-box -----
      odata: [
        { key: 0, value: "", show: this.$t("SELECT") },
        { key: 1, value: FILE_TYPE.fuzzy, show: this.$t("FUZZY_LOG") },
        { key: 2, value: FILE_TYPE.uiautomator, show: this.$t("UIAUTOMATOR") },
        { key: 3, value: FILE_TYPE.logcat, show: this.$t("LOGCAT") }
      ],
      odata_ohandler: {
        onChange: $event => {
          let vm = this;
          console.log("..odata..", $event.target.value);
          vm.$store.dispatch(ns_data + "/tmplogprofileUpdated", {
            key: vm.data.key,
            data: {
              file_type: $event.target.value
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
