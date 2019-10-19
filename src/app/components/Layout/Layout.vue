<template>
  <div class="wrapper">
    <!-- top navbar-->
    <Header />

    <!-- sidebar-->
    <!-- <Sidebar /> -->

    <!-- Main section-->
    <section class="section-container">
      <!-- <section class="section-container" style="margin-top: 0px;"> -->
      <!-- Page content-->
      <router-view />
    </section>

    <!-- vue-js-modal -->
    <!-- <JSModal :options="js_modal_options" /> -->
  </div>
</template>

<script>
import Vue from "vue";
import Header from "./Header";
// import Sidebar from "./Sidebar";
import Offsidebar from "./Offsidebar";
import Footer from "./Footer";
import ContentWrapper from "./ContentWrapper";
import JSModal from "@/app/components/Custom/Modal/JSModal";

Vue.component("ContentWrapper", ContentWrapper);

export default {
  name: "Layout",
  components: {
    Header,
    // Sidebar,
    Offsidebar,
    Footer,
    JSModal
  },
  data() {
    return {
      js_modal_options: {
        width: "70%",
        height: "auto",
        scrollable: true,
        dynamic: true,
        reset: true,
        before_open_handler: function() {
          console.log("..jsm before_open_handler..");
        },
        before_close_handler: function() {
          console.log("..jsm before_close_handler..");
        }
      }
    };
  }
};
</script>
