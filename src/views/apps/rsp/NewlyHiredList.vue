<template>
  <div class="table-responsive">
    <table class="table table-bordered table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Application ID</th>
          <th>Full Name</th>
          <th>Position</th>
          <th>Area of Assignment</th>
          <th>Fund Source</th>
          <th>Program</th>
          <th>Salary</th>
          <th>Date Hired</th>
          <th>End of Contract</th>
          <th>Remarks</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(applicant, index) in applicants" :key="index">
          <td>{{ applicant.id }}</td>
          <td>{{ applicant.app_id }}</td>
          <td>{{ applicant.full_name }}</td>
          <td>{{ applicant.position }}</td>
          <td>{{ applicant.area_of_assignment }}</td>
          <td>{{ applicant.fundsource }}</td>
          <td>{{ applicant.program || 'N/A' }}</td>
          <td>{{ applicant.salary }}</td>
          <td>{{ applicant.date_hired }}</td>
          <td>{{ applicant.end_of_contract || 'N/A' }}</td>
          <td>{{ applicant.remarks || 'No remarks' }}</td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <button class="btn btn-primary btn-xs" @click="prevPage" :disabled="!hasPreviousPage">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button class="btn btn-primary btn-xs" @click="nextPage" :disabled="!hasNextPage">Next</button>
    </div>
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, computed } from "vue";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";

export default defineComponent({
  data() {
    return {
      applicants: [],
      currentPage: 1,
      totalPages: 0,
    };
  },
  mounted() {
    this.fetchNewlyHired(this.currentPage);
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
    fetchNewlyHired(page) {
      if (JwtService.getToken()) {
        ApiService.setHeader();
        ApiService.get(`rsp/newly_hired_list?page=${page}`)
          .then(({ data }) => {
            this.applicants = data.data.results;

            console.log(data.data.results)

            this.currentPage = page;
            this.totalPages = Math.ceil(data.data.count / 10); // Assuming 10 items per page
          })
          .catch(({ response }) => {
            console.error(response);
          });
      }
    },
    nextPage() {
      if (this.hasNextPage) {
        this.fetchNewlyHired(this.currentPage + 1);
      }
    },
    prevPage() {
      if (this.hasPreviousPage) {
        this.fetchNewlyHired(this.currentPage - 1);
      }
    },
  },
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>

<style scoped>
.pagination {
  margin-top: 20px;
}
.pagination button {
  margin: 0 5px;
}
</style>
