<template>
  <div>
    <b-card class="mb-3">
      <div class="btn-group">
        <select
          v-model="selectedAPK"
          class="custom-select custom-select-sm"
          :class="{'border-right-1':true, 'is-invalid': is_invalid}"
        >
          <option
            v-for="apk in testsapklist"
            :value="apk"
            :key="apk.id"
            v-if ="apk.app_ver !=''"
          > {{apk.app_name}} {{apk.app_ver}}</option>
        </select>
      </div>
    </b-card>

    <!--b-card v-if="this.item" class="mb-3">
      <span>{{selectedApkName}}</span>
    </b-card>
    <b-card v-else class="mb-3">
      <span>{{$t('SELECT_APK')}}</span>
    </b-card-->
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import propsync from ".././propsync";

export default {
  components: {},
  props: {
    id: { type: String, propsync: false },
    selected: { type: Object, propsync: true },
    show_invalid: { type: Boolean, propsync: true }
  },
  mixins: [propsync], //声明使用propsync的mixin
  computed: {
    is_invalid: {
      set(value) {
        // console.log("..set is_invalid..", value);
        let vm = this;
        vm.p_show_invalid = value;
        vm.invalid = value;
      },
      get() {
        // console.log("..get is_invalid..", this.invalid);
        return this.invalid;
      }
    },
    selectedAPK: {
      set(value) {
        let vm = this;
        vm.p_selected = value;
        vm.item = value;
        // sync to vuex
        if (value != null)
          vm.$store.dispatch("data/apkSelected", {
            key: vm.$props.id,
            data: value
          });
      },
      get() {
        return this.item;
      }
    },
    ...mapState({}),
    ...mapGetters("addtest", {
      testsapklist: "getTestsapklist"
    })
  },
  data() {
    return { item: null, invalid: false };
  },
  watch: {
    p_selected: {
      handler(newValue, oldValue) {
        // console.log(
        //   `..s.............elected..Updating from ${oldValue} to ${newValue}`
        // );
        // if (newValue == null) this.item = null;
      }
    },
    p_show_invalid: {
      handler(newValue, oldValue) {
        // console.log("..watch p_show_invalid..", newValue, oldValue);
        this.is_invalid = newValue;
      }
    }
  },
  methods: {
    reset() {
      let vm = this;
      console.log("..reset..", vm.id);
      vm.selectedAPK = null;
      vm.is_invalid = false;
    }
  }
};
</script>
