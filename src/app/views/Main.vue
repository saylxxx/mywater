<template>
  <!-- START card-->
  <div class="card border-0">
    <div class="card-body">
      <div class="d-flex">
        <h3 class="text-muted mt-0"></h3>
      </div>
      <Sparkline
        ref="demo1"
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
    <b-button class="btn btn-oval" type="button" @click.prevent="function_b">do something</b-button>
    <!-- <b-button class="btn btn-oval" type="button" @click.prevent="function_a">功能 a</b-button>
    <b-button class="btn btn-oval" type="button" @click.prevent="function_b">功能 b</b-button>
    <b-button class="btn btn-oval" type="button" @click.prevent="function_c">功能 c</b-button>-->
    <panel-group @handleSetLineChartData="handleSetLineChartData" />

    <div style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData" />
    </div>

    <div :gutter="32">
      <div :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <raddar-chart />
        </div>
      </div>
      <div :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart />
        </div>
      </div>
      <div :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart />
        </div>
      </div>
    </div>

    <!-- <div :gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
        <transaction-table />
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
        <todo-list />
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
        <box-card />
      </el-col>
    </div> -->
  </div>
  <!-- END card-->
</template>

<script>
import axios from "axios";

const API_URL = process.env.VUE_APP_API_URL;
const API_TOKEN = process.env.VUE_APP_API_TOKEN;

const API_PLANETARY_URL = API_URL + "/planetary/apod?api_key=" + API_TOKEN;

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
};

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

import Sparkline from "@/app/components/Common/Sparklines";
import PanelGroup from "@/app/components/Custom/Other/PanelGroup";
import LineChart from '@/app/components/Custom/Other/LineChart'
import RaddarChart from '@/app/components/Custom/Other/RaddarChart'
import PieChart from '@/app/components/Custom/Other/PieChart'
import BarChart from '@/app/components/Custom/Other/BarChart'

export default {
  components: {
    Sparkline,
    PanelGroup,
    LineChart,
    RaddarChart,
    PieChart,
    BarChart
  },
  computed: {},
  beforeCreate() {
    console.log("..beforeCreate..");
  },
  created() {
    console.log("..created..");
    let vm = this;

    setInterval(vm.do_setp, 1000);

    axios.get(API_PLANETARY_URL).then(res => {
      console.log(res);
    });
  },
  destroyed() {
    console.log("..destroyed..");
  },
  data() {
    return {
      step_progress: 10,
      progress: 0,
      progressStyle: { width: "0%" },
      msg: "",
      s_values: [],
      lineChartData: lineChartData.newVisitis
    };
  },
  watch: {},
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type];
    },
    setProgress(value) {
      let vm = this;
      vm.progress = value;
      vm.progressStyle.width = Math.floor(value) + "%";
    },
    do_setp() {
      console.log("..do_setp..");
      let vm = this;
      // start progress
      let step = Math.floor(Math.random() * vm.step_progress) + 5;
      let next_progress = step + vm.progress;
      if (next_progress >= 100) {
        next_progress = 100;
        vm.msg = "completed";
      } else {
        vm.msg = "processing.." + Math.floor(vm.progress) + "%";
      }

      vm.setProgress(next_progress);
    },
    reload() {
      console.log("..reload..");
      let vm = this;
      vm.setProgress(0);
      vm.msg = "start";
    },
    function_a() {
      console.log("..function_a..");

      axios.get(API_PLANETARY_URL).then(res => {
        console.log(res);
      });
    },
    function_b() {
      console.log("..function_b..");

      axios.get(API_PLANETARY_URL).then(res => {
        console.log(res);
      });
    },
    function_c() {
      console.log("..function_c..");
    }
  }
};
</script>