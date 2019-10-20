<template>
  <header class="topnavbar-wrapper">
    <!-- START Top Navbar-->
    <nav class="navbar topnavbar">
      <!-- START navbar header-->
      <div class="navbar-header">
        <a class="navbar-brand" href="#/">
          <div class="brand-logo text-white">
            W
          </div>
          <div class="brand-logo-collapsed">
            myWater
          </div>
        </a>
      </div>
      <!-- END navbar header-->
      <!-- START Left navbar-->
      <ul class="navbar-nav mr-auto flex-row">
        <li class="nav-item">
          <!-- Button used to collapse the left sidebar. Only visible on tablet and desktops-->
          <a
            href
            class="nav-link d-none d-md-block d-lg-block d-xl-block"
            @click.prevent="toggleAsideCollapsed"
          >
            <em class="fas fa-bars"></em>
          </a>
          <!-- Button to show/hide the sidebar on mobile. Visible on mobile only.-->
          <a href class="nav-link sidebar-toggle d-md-none" @click.prevent="toggleOffcanvas">
            <em class="fas fa-bars"></em>
          </a>
        </li>
        <!-- START lock screen-->
        <!-- <li class="nav-item d-none d-md-block">
                    <router-link class="nav-link" to="/lock" title="Lock screen">
                        <em class="icon-lock"></em>
                    </router-link>
        </li>-->
        <!-- END lock screen-->
      </ul>
      <!-- END Left navbar-->
      <!-- START Right Navbar-->
      <ul class="navbar-nav flex-row">
        <!-- Search icon-->
        <!-- <li class="nav-item">
                    <a class="nav-link" href="#" data-search-open="">
                        <em class="icon-magnifier"></em>
                    </a>
        </li>-->
        <!-- Fullscreen (only desktops)-->
        <li class="nav-item d-none d-md-block">
          <ToggleFullscreen tag="A" class="nav-link" href="#" />
        </li>

      </ul>
      <!-- END Right Navbar-->
    </nav>
    <!-- END Top Navbar-->
  </header>
</template>

<script>
import { mapMutations } from "vuex";
import ToggleFullscreen from "../Common/ToggleFullscreen";

export default {
  name: "Header",
  data() {
    return {
      test: false,
    };
  },
  components: {
    ToggleFullscreen,
  },
  methods: {
    /**
     * Triggers a window resize event when clicked
     * for plugins that needs to be redrawed
     */
    resize: e => {
      // all IE friendly dispatchEvent
      var evt = document.createEvent("UIEvents");
      evt.initUIEvent("resize", true, false, window, 0);
      window.dispatchEvent(evt);
      // modern dispatchEvent way
      // window.dispatchEvent(new Event('resize'));
    },
    ...mapMutations(["toggleSetting"]),
    toggleOffsidebar() {
      let vm = this;
      console.log(".............................toggleOffsidebar..", vm.test);
      this.toggleSetting("offsidebarOpen");
    },
    toggleOffcanvas() {
      let vm = this;
      console.log(".............................toggleOffcanvas..", vm.test);
      this.toggleSetting("asideToggled");
    },
    toggleAsideCollapsed() {
      let vm = this;
      console.log(
        ".............................toggleAsideCollapsed..",
        vm.test
      );
      this.toggleSetting("isCollapsed");
      this.resize();
    },
    toggleUserBlock() {
      this.toggleSetting("showUserBlock");
    },
  }
};
</script>