<template>

  <div class="card-body fs-6 py-15 px-10 py-lg-15 px-lg-15 text-gray-700" style="background-color: #ffffff;">
    <div class="pb-10">
      <h1 class="anchor fw-bold mb-5" id="column-rendering" data-kt-scroll-offset="50"><a href="#column-rendering"></a>Column Rendering</h1>
        <div class="py-5">This example show badges rendered next to the position content dynamically. This technique can be useful for adding links, assigning colours based on content rules and any other form of text manipulation you require.</div>
        <div class="my-5">

          <div class="table-responsive">
            <table id="kt_datatable_column_rendering" class="table table-striped table-row-bordered gy-5 gs-7">
            <thead>
                <tr class="fw-semibold fs-6 text-gray-800">
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                </tr>
                <tr>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>63</td>
                    <td>2011/07/25</td>
                    <td>$170,750</td>
                </tr>
            </tbody>
        </table>
            <div class="pagination">
              <button
                class="btn btn-primary btn-xs"
                @click="prevPage"
                :disabled="!hasPreviousPage"
              >
                Previous
              </button>
              <span>Page {{ currentPage }} of {{ totalPages }}</span>
              <button
                class="btn btn-primary btn-xs"
                @click="nextPage"
                :disabled="!hasNextPage"
              >
                Next
              </button>
            </div>
          </div>
        </div>
    </div>  
  </div>
  
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, computed } from "vue";


export default defineComponent({
  data() {
    return {
      applicants: [],
      currentPage: 1,
      totalPages: 0,
    };
  },
  mounted() {
  },
  computed: {
    hasPreviousPage() {
      return this.currentPage > 1;
    },
    hasNextPage() {
      return this.currentPage < this.totalPages;
    },
  },
  methods: {
  },
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>

