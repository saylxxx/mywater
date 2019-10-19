<template>
  <b-card ref="d3timelineBox" class="mb-3">
    <!-- <div :id="$props.id" ></div> -->
    <div ref="d3timeline"></div>
  </b-card>
</template>

<script>
import propsync from "../.././propsync";
import d3KitTimeline from "d3kit-timeline";
import { scaleLinear } from "d3-scale";
import * as d3 from "d3";
import $ from "jquery";

export default {
  name: "timeline",
  mixins: [propsync], //声明使用propsync的mixin
  props: {
    id: { type: String, propsync: false },
    data: { type: Object, propsync: true } // sync this one
  },
  data() {
    return {
      chart: {},
      chart_data: [],
      chart_options: {}
    };
  },
  created() {},
  mounted() {
    let vm = this;
  },
  methods: {
    genDefaultOptions() {
      let vm = this;
      //   let asideToggled = vm.$store.getters["getSetting"].asideToggled;
      //   let isCollapsed = vm.$store.getters["getSetting"].isCollapsed;
      let innerWidth = vm.$refs.d3timelineBox
        ? vm.$refs.d3timelineBox.clientWidth
        : window.innerWidth;
      let colorScale = d3.scale.category10();
      let color5 = d => colorScale(d.team);
      let label_right = innerWidth < 750;
      let label_right2 = innerWidth < 450;

      //   console.log("..test..", innerWidth, asideToggled, isCollapsed);

      return {
        direction: label_right ? "right" : "up",
        initialWidth: !label_right ? innerWidth - 150 : innerWidth,
        initialHeight: label_right2 ? innerWidth + 150 : innerWidth,
        scale: scaleLinear(),
        domain: [0.0, 0],
        formatAxis: axis =>
          axis.tickFormat(dd => {
            let d = `${dd}`;
            let hours = Math.floor(d / 3600),
              minutes = Math.floor((d - hours * 3600) / 60),
              seconds = d - minutes * 60;

            seconds = seconds < 10 ? "0" + seconds : seconds;
            minutes = minutes < 10 ? "0" + minutes : minutes;

            let output = "";
            if (hours) output = hours + ":" + minutes + ":" + seconds;
            else hours;
            output = minutes + ":" + seconds;
            return output;
          }),
        margin: {},
        textFn: d => d.name,
        layerGap: 40,
        dotColor: color5,
        labelBgColor: color5,
        linkColor: color5,
        textStyle: { "text-align": "center" },
        labella: {
          maxPos: !label_right
            ? innerWidth - 200
            : !label_right2
            ? innerWidth - 25
            : innerWidth + 100,
          algorithm: "simple"
        }
      };
    },
    genOptions() {
      let vm = this;
      let options = vm.genDefaultOptions();
      if (vm.chart_options) {
        Object.keys(vm.chart_options).forEach(key => {
          options[key] = vm.chart_options[key];
        });
      }
      return options;
    },
    reload() {
      let vm = this;
      // clean
      $(vm.$refs.d3timeline).empty();
      // rebuild
      if (vm.chart_options) {
        d3.select(window).on("resize", null);
        // gen timeline
        vm.chart = new d3KitTimeline(vm.$refs.d3timeline, vm.genOptions());
        // when resize
        d3.select(window).on("resize", vm.reload);
      }
      if (vm.chart_data) {
        vm.chart
          .data(vm.chart_data)
          .visualize()
          .resizeToFit();
      }
    }
  },
  watch: {
    p_data: {
      handler(newValue, oldValue) {
        let vm = this;
        if (newValue.timeline_options) {
          vm.chart_options = newValue.timeline_options;
        }
        if (newValue.timeline_data) {
          vm.chart_data = newValue.timeline_data;
          vm.reload();
        }
      }
    }
  }
};
</script>
