<template>
    <!--begin::sidebar-->
    <div
      v-if="displaySidebar"
      ref="sidebarRef"
      id="kt_app_sidebar"
      class="app-sidebar flex-column"
      data-kt-drawer="true"
      data-kt-drawer-name="app-sidebar"
      data-kt-drawer-activate="{default: true, lg: false}"
      data-kt-drawer-overlay="true"
      data-kt-drawer-width="225px"
      data-kt-drawer-direction="start"
      data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle"
    >
      <!-- <KTSidebarLogo :sidebar-ref="sidebarRef"></KTSidebarLogo> -->
      <div class="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
        <svg
          width="200"
          height="100"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            x="10"
            y="70"
            font-family="Arial, sans-serif"
            font-size="50"
            fill="#A0AEC0"
          >
            R.R
          </text>
        </svg>

      </div>
      <KTSidebarMenu></KTSidebarMenu>
      <KTSidebarFooter></KTSidebarFooter>
    </div>
    <!--end::sidebar-->
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  import { displaySidebar } from "@/layouts/default-layout/config/helper";
  import KTSidebarLogo from "@/layouts/default-layout/components/sidebar/SidebarLogo.vue";
  import KTSidebarMenu from "@/layouts/default-layout/components/sidebar/RR/RRSidebarMenu.vue";
  import KTSidebarFooter from "@/layouts/default-layout/components/sidebar/SidebarFooter.vue";
  
  export default defineComponent({
    name: "theme-sidebar",
    components: {
      KTSidebarLogo,
      KTSidebarMenu,
      KTSidebarFooter,
    },
    setup() {
      const sidebarRef = ref<HTMLFormElement | null>(null);
  
      return {
        displaySidebar,
        sidebarRef,
      };
    },
  });
  </script>