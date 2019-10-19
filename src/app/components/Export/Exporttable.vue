<template>
  <div class="card card-default">
    <div class="table-responsive">
      <table class="table table-bordered table-hover" id="table-ext-1">
        <thead>
          <tr>
            <th v-for="( item, index ) in columns" :key="item[index]">
              <span class="arrow">{{ item }}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="( item, index ) in data" :key="index">
            <td>{{ item.app_name }}</td>
            <td>{{ item.app_name }}</td>
            <td>{{ item.app_name }}</td>
            <td>{{ item.app_name }}</td>
            <td>{{ item.app_name }}</td>
            <!-- <td>{{ item.tax }}</td>
              <td>{{ item.order }}</td>
              <td>{{ item.invoice }}</td>
            <td>{{ item.amount }}</td>-->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "ExportTabel",
  data() {
    return {};
  },
  props: {
    columns: Array,
    data: Array
  }
};
</script>