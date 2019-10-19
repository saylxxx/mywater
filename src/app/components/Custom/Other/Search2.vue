<template>
  <form class="form-horizontal">
    <div class="input-group">
      <input
        ref="keyword"
        class="form-control"
        type="text"
        placeholder="Search for..."
        v-model="input_data"
        v-on:keyup="search($refs.keyword.value)"
      />
      <span class="input-group-btn">
        <button
          class="btn btn-secondary"
          type="button"
          @click.prevent="search($refs.keyword.value)"
        >
          <em class="fa fa-search"></em>
        </button>
      </span>
    </div>
  </form>
</template>

<script>
import propsync from ".././propsync";
export default {
  name: "search2",
  mixins: [propsync], //声明使用propsync的mixin
  props: {
    keyword: { type: String, propsync: true } // sync this one
  },
  data() {
    return {
      input_data: ""
    };
  },
  created() {},
  methods: {
    search(word) {
      let vm = this;
      vm.p_keyword = word;
    },
    reload: function() {
      console.log("..reload..search..");
      let vm = this;
      vm.p_keyword = "";
      vm.input_data = "";
    }
  }
};
</script>
