
<template>
  <div>
    <span v-if="data.status == 'available'" class="badge badge-success">
      {{$t('AVAILABLE')}}
      &nbsp;
      <span
        class="badge badge-info"
        type="button"
        @click.prevent="get_control"
      >{{$t('TAKE_CONTROL')}}</span>
    </span>

    <span v-else-if="data.status == 'offline'" class="badge badge-danger">{{$t('NOT_AVAILABLE')}}</span>

    <span
      v-else-if="data.status == 'busy' || data.status == 'record_test'"
      class="badge badge-danger"
    >{{$t('BUSY')}}</span>

    <span v-else-if="data.status == 'testing'" class="badge badge-danger">{{$t('TESTING')}}</span>

    <span
      v-else-if="data.status == 'remotecontrol'"
      class="badge badge-danger"
    >{{$t('REMOTE_CONTROL')}}</span>

    <span v-else-if="data.status == 'record_test'" class="badge badge-danger">{{$t('BUSY')}}</span>

    <span v-else class="badge badge-danger">{{$t('ERROR')}}</span>
  </div>
</template>

<script>
import { BACKEND_URL } from "@/mao/consts";
import { getLogin } from "@/mao/settings";
export default {
  name: "action",
  props: ["data", "index", "column"],
  data() {
    return {};
  },
  beforeCreate() {},
  created() {},
  methods: {
    get_control() {
      let vm = this;
      let full = vm.data;
      let user = getLogin();
      let userid = null;
      let userid_e = null;
      let server = null;
      if (user) {
        userid = user.id;
        userid_e = user.id_e;
        server = full.server;
      }

      // TODO: google analytics
      window.open(
        BACKEND_URL +
          "/device/" +
          userid_e +
          "/" +
          full.id_e +
          "/" +
          full.server +
          "/control"
      );
    }
  }
};
</script>
