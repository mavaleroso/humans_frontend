<template>
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

