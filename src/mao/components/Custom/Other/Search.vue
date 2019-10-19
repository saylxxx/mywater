<template>
  <div class="text-left">
    <form action="#">
      <div class="input-group input-group-sm">
        <input
          class="form-control form-control-sm rounded-0"
          type="text"
          name="term"
          placeholder="Search"
          ref="keyword"
        />
        <!-- <select class="form-control form-control-lg" ref="search_target">
          <option>All Products</option>
          <option>Templates</option>
          <option>Servers</option>
          <option>Billing</option>
          <option>Buyers</option>
          <option>Sellers</option>
          <option>Plans</option>
          <option>Accounts</option>
        </select>-->
        <div class="input-group-append">
          <button
            class="btn btn-info btn-lg b0 rounded-0"
            type="button"
            @click="search($refs.keyword.value)"
          >
            <strong>Search</strong>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import propsync from ".././propsync";
export default {
  name: "search",
  mixins: [propsync], //声明使用propsync的mixin
  props: {
    keyword: { type: String, propsync: true } // sync this one
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    search(keyword) {
      this.p_keyword = keyword;
    }
  }
};
</script>
