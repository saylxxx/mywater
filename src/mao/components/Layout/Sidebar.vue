<template>
  <aside class="aside-container">
    <!-- <nav class="navbar topnavbar">
      <div class="navbar-header">
        <a class="navbar-brand" href="#/">
          <div class="brand-logo text-white">
            <img class="img-fluid" src="img/logo.png" width="30" alt="App Logo" />
            &nbsp;&nbsp;{{$t("CAT")}}
          </div>
          <div class="brand-logo-collapsed">
            <img class="img-fluid" src="img/logo-single.png" width="30" alt="App Logo" />
          </div>
        </a>
      </div>
    </nav>-->
    <!-- START Sidebar (left)-->
    <div class="aside-inner">
      <nav class="sidebar" data-sidebar-anyclick-close>
        <!-- START sidebar nav-->
        <ul class="sidebar-nav">
          <!-- Iterates over all sidebar items-->
          <template v-for="item in menus">
            <!-- Heading -->
            <li class="nav-heading" v-if="item.heading">
              <span>{{$t(item.translate) || item.heading}}</span>
            </li>
            <!-- Single Menu -->
            <router-link
              tag="li"
              :to="item.path"
              active-class="active"
              v-if="!item.heading && !item.submenu"
            >
              <a :title="tr(item.translate, item.name)">
                <span
                  v-if="item.label"
                  :class="'float-right badge badge-'+item.label.color"
                >{{item.label.value}}</span>
                <em :class="item.icon"></em>
                <span>{{tr(item.translate, item.name)}}</span>
              </a>
            </router-link>
            <!-- Menu With Subitems -->
            <li :class="routeActiveClass(getSubRoutes(item))" v-if="!item.heading && item.submenu">
              <a
                :title="tr(item.translate, item.name)"
                @click.prevent="toggleItemCollapse(item.name)"
                href
              >
                <span
                  v-if="item.label"
                  :class="'float-right badge badge-'+item.label.color"
                >{{item.label.value}}</span>
                <em :class="item.icon"></em>
                <span>{{tr(item.translate, item.name)}}</span>
              </a>
              <b-collapse
                tag="ul"
                class="sidebar-nav sidebar-subnav"
                id="item.name"
                v-model="collapse[item.name]"
              >
                <li class="sidebar-subnav-header">{{tr(item.translate, item.name)}}</li>
                <template v-for="sitem in item.submenu">
                  <router-link tag="li" :to="sitem.path" active-class="active">
                    <a :title="tr(sitem.translate, sitem.name)">
                      <span
                        v-if="sitem.label"
                        :class="'float-right badge badge-'+sitem.label.color"
                      >{{sitem.label.value}}</span>
                      <span>{{tr(sitem.translate, sitem.name)}}</span>
                    </a>
                  </router-link>
                </template>
              </b-collapse>
            </li>
          </template>
        </ul>
        <!-- END sidebar nav-->
      </nav>
    </div>
    <!-- END Sidebar (left)-->
  </aside>
</template>

<script>
import { mapState } from "vuex";
import SidebarRun from "./Sidebar.run.js";
import Menu from "../../menu.js";

export default {
  name: "Sidebar",
  data() {
    return {
      collapse: this.buildCollapseList()
    };
  },
  mounted() {
    SidebarRun(this.$router, this.closeSidebar.bind(this));
  },
  computed: {
    ...mapState({
      showUserBlock: state => state.setting.showUserBlock
    }),
    menus() {
      return Menu.filter(({ adminOnly }) => {
        return adminOnly === undefined || this.$can("admin");
      });
    }
  },
  watch: {
    $route(to, from) {
      this.closeSidebar();
    }
  },
  methods: {
    closeSidebar() {
      this.$store.commit("changeSetting", {
        name: "asideToggled",
        value: false
      });
    },
    buildCollapseList() {
      /** prepare initial state of collapse menus. Doesnt allow same route names */
      let vm = this;
      let collapse = {};
      if (vm.menus)
        vm.menus
          .filter(({ heading }) => !heading)
          .forEach(({ name, path, submenu, adminOnly }) => {
            collapse[name] = this.isRouteActive(
              submenu ? submenu.map(({ path }) => path) : path
            );
          });
      return collapse;
    },
    getSubRoutes(item) {
      return item.submenu.map(({ path }) => path);
    },
    // translate a key or return default values
    tr(key, defaultValue) {
      return key ? this.$t(key, { defaultValue: defaultValue }) : defaultValue;
    },
    isRouteActive(paths) {
      paths = Array.isArray(paths) ? paths : [paths];
      return paths.some(p => this.$route.path.indexOf(p) > -1);
    },
    routeActiveClass(paths) {
      return { active: this.isRouteActive(paths) };
    },
    toggleItemCollapse(collapseName) {
      for (let c in this.collapse) {
        if (this.collapse[c] === true && c !== collapseName)
          this.collapse[c] = false;
      }
      this.collapse[collapseName] = !this.collapse[collapseName];
    }
  }
};
</script>