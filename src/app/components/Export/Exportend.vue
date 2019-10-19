<template>
  <div>
    <label class="col-xl-4 col-form-label">{{ endTitle }}</label>
    <div class="col-xl-10">
      <div class="mb-3">
        <datepicker
        v-model="end_date"
        type="date"
        :bootstrapStyling="true"
        :monday-first="true"
        :full-month-name="true"
        placeholder="Select end date"
        :calendar-button="true"
        calendar-button-icon="far fa-calendar"
        :clear-button="true"
        :disabled-dates="disabledDates"
        :format="format"
        @selected="doSomethingInParentComponentFunction" />
      </div>
    </div>
  </div>
</template>
<script>
import Datepicker from "vuejs-datepicker";
import propsync from "../Custom/propsync";

export default {
  name: "ExportEndDate",
  mixins: [propsync], //声明使用propsync的mixin
  components: { Datepicker },
  data() {
    return {
      // Datepicker
      end_date: new Date(),
      disabledDates: {
        days: [0] // Disable sunday
      }
    };
  },
  props: {
    endTitle: { type: String, default: "start" },
    to_date: { type: String, propsync: true },
    format: { default: "dd-MM-yyyy" }
  },
  methods: {
    doSomethingInParentComponentFunction(value) {
      // 格式範例 13-08-2019
      let vm = this;
      var date = value;
      let date_value =
        ("0" + date.getDate()).substr(-2) +
        "-" +
        ("0" + (date.getMonth() + 1)).substr(-2) +
        "-" +
        date.getFullYear();

      console.log("export_svaluevaluet==>", date_value);
      vm.p_to_date = date_value;
    }
  }
};
</script>