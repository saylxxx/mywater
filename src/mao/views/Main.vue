<template>
  <!-- START card-->
  <div class="card border-0">
    <div class="card-body">
      <div class="d-flex">
        <h3 class="text-muted mt-0"></h3>
      </div>
      <Sparkline
        :options="{
                                        type:'line',
                                        height:80,
                                        width:'100%',
                                        lineWidth:2,
                                        lineColor:'#7266ba',
                                        spotColor:'#888',
                                        fillColor: 'transparent',
                                        minSpotColor:'#7266ba',
                                        maxSpotColor:'#7266ba',
                                        highlightLineColor:'#fff',
                                        spotRadius:3,
                                        resize:true
                                    }"
        :values="[1,3,4,7,5,9,4,4,7,5,9,6,4]"
        class="pv-lg"
      />
      <p>
        <small class="text-muted">progress</small>
      </p>
      <div v-show="this.progress > 0" class="progress progress-xs mb-3">
        <div
          class="progress-bar bg-info progress-bar-striped"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          :style="this.progressStyle"
        ></div>
      </div>
      <div class="row ml-1">
        <span>{{msg}}</span>
        <div class="ml-auto mr-3" title="reload" @click.prevent="reload">
          <a href="#">
            <em class="fa-1x icon-reload mr-0"></em>
          </a>
        </div>
        <div></div>
      </div>
    </div>

    <b-button class="btn btn-oval" type="button" @click.prevent="function_a">功能 a</b-button>
    <b-button class="btn btn-oval" type="button" @click.prevent="function_b">功能 b</b-button>
    <b-button class="btn btn-oval" type="button" @click.prevent="function_c">功能 c</b-button>
  </div>
  <!-- END card-->
</template>

<script>
import axios from "axios";

// const API_URL = "http://dgc:9453";
const API_URL = "http://bobo:9453";

// request form
const formRequest = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "multipart/form-data"
  }
});

// normal request
const jsonRequest = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  }
});

import Sparkline from "@/mao/components/Common/Sparklines";

export default {
  components: {
    Sparkline
  },
  computed: {},
  beforeCreate() {
    console.log("..beforeCreate..");
  },
  created() {
    console.log("..created..");
    let vm = this;
  },
  destroyed() {
    console.log("..destroyed..");
  },
  data() {
    return {
      progress: 0,
      progressStyle: { width: "0%" },
      msg: "",
      s_values: []
    };
  },
  watch: {},
  methods: {
    setProgress(value) {
      let vm = this;
      vm.progress = value;
      vm.progressStyle.width = Math.floor(value) + "%";
    },
    reload() {
      console.log("..reload..");
      let vm = this;
      // start progress
      vm.setProgress(50);
      vm.s_values = [1, 3, 4];
    },
    function_a() {
      console.log("..function_a..");

      // axios.get(API_URL).then(res => {
      //   console.log(res);
      // });
    },
    function_b() {
      console.log("..function_a..");

      // axios.get(API_URL).then(res => {
      //   console.log(res);
      // });
    },
    function_c() {
      console.log("..function_a..");

      // axios.get(API_URL).then(res => {
      //   console.log(res);
      // });
    }
  }
};
</script>