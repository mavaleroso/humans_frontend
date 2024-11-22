<template>
  <div class="card card-body">
    <DataTable
      :data="data"
      :columns="columns"
      :options="options"
      :loading="true"
      class="table table-hover table-striped table-responsive"
    />
  </div>
</template>
<style>
@import "datatables.net-bs5";
th {
  text-align: center !important;
  font-weight: bold !important;
}
</style>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net-bs5";
import "datatables.net-select-dt";
import "datatables.net-responsive-dt";
DataTable.use(DataTablesCore);

export default defineComponent({
  name: "Hired Application",
  data() {
    return {
      pages: 1,
      options: {
        responsive: false,
        select: true,
        order: [],
        serverSide: true,
        ajax: `${import.meta.env.VITE_APP_API_URL}/rsp/newly_hired_list`,
      },
      columns: [
        {
          data: "id",
          title: "ACTION",
          orderable: false,
        },
        {
          data: "app_id",
          title: "CHECK",
          orderable: false,
        },
        {
          data: "full_name",
          title: "FULLNAME",
        },
        {
          data: "position",
          title: "POSITION",
        },
        {
          data: "former_incumbent",
          title: "FORMER INCUMBENT",
        },
        {
          data: "salary",
          title: "BASIC MONTHLY SALARY",
        },
        {
          data: "effectivity_of_contract",
          title: "EFFECTIVITY OF CONTRACT",
        },
        {
          data: "end_of_contract",
          title: "END OF CONTRACT",
        },
        {
          data: "emp_status",
          title: "STATUS OF EMPLOYMENT",
        },
        {
          data: "nature",
          title: "NATURE",
        },
        {
          data: "area_of_assignment",
          title: "AREA OF ASSIGNMENT",
        },
        {
          data: "requirements_ok",
          title: "IS REQUIREMENTS OK",
        },
        {
          data: "remarks",
          title: "REMARKS",
        },
      ],
      data: [],
    };
  },
  computed: {
    currentPage() {
      return 1;
    },
  },
  components: {
    DataTable,
  },
  mounted() {},
  methods: {},
});
</script>
