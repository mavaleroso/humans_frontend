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
       style="background: #000247"
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
            L.D
          </text>
        </svg>

      </div>
      <KTSidebarMenu></KTSidebarMenu>
      <KTSidebarFooter></KTSidebarFooter>
    </div>
    <!--end::sidebar-->
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, computed } from "vue";
  import { useConfigStore } from "@/stores/config";
  import KTSidebarLogo from "@/layouts/default-layout/components/sidebar/SidebarLogo.vue";
  import KTSidebarMenu from "@/layouts/default-layout/components/sidebar/LD/LDSidebarMenu.vue";
  import KTSidebarFooter from "@/layouts/default-layout/components/sidebar/SidebarFooter.vue";
  
  const sidebarLayout = 'ld-sidebar';
  export default defineComponent({
    name: "theme-sidebar",
    components: {
      KTSidebarLogo,
      KTSidebarMenu,
      KTSidebarFooter,
    },
    setup() {
      const sidebarRef = ref<HTMLFormElement | null>(null);

      const displaySidebar = computed(() => {
        // useConfigStore().setLayoutConfigProperty("general.layout", sidebarLayout);
        return useConfigStore().getLayoutConfig("sidebar.display");
      });
  
      return {
        displaySidebar,
        sidebarRef,
      };
    },
  });
  </script>