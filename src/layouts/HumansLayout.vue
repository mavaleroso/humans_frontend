<template>
    <!-- begin:: Body -->
    <div class="page d-flex flex-row flex-column-fluid container">
      <div id="kt_wrapper" class="wrapper d-flex flex-column flex-row-fluid">
        <KTHeader />

  
        <!-- begin:: Content -->
        <div
          id="kt_content"
          class="d-flex flex-column-fluid align-items-start"
          :class="{
            'container-fluid': contentWidthFluid,
            'container-xxl': !contentWidthFluid,
          }"
        >

          <!-- end:: Aside Left -->
          <!-- begin:: Content Body -->
          <div class="content flex-row-fluid">
            <RouterView />
          </div>
          <!-- end:: Content Body -->
        </div>
        <!-- end:: Content -->
        <KTFooter />
      </div>
    </div>
    <!-- end:: Body -->
    <KTScrollTop />
    <KTMessengerDrawer />
    <KTActivityDrawer />
    <KTCreateApp />
    <KTInviteFriendsModal />
  
    <!-- <KTToolbarButtons /> -->
    <KTHelpDrawer />
  </template>
  
  <script lang="ts">
  import {
    defineComponent,
    nextTick,
    onBeforeMount,
    onMounted,
    watch,
  } from "vue";
  import { RouterView, useRoute } from "vue-router";
  import KTHeader from "@/layouts/default-layout/components/header/HumansHeader.vue";
  import KTFooter from "@/layouts/default-layout/components/footer/Footer.vue";
  import LayoutService from "@/core/services/LayoutService";
  import KTToolbar from "@/layouts/default-layout/components/toolbar/Toolbar.vue";
  import KTScrollTop from "@/layouts/default-layout/components/extras/ScrollTop.vue";
  import KTActivityDrawer from "@/layouts/default-layout/components/drawers/ActivityDrawer.vue";
  import KTCreateApp from "@/components/modals/wizards/CreateAppModal.vue";
  import KTInviteFriendsModal from "@/components/modals/general/InviteFriendsModal.vue";
  import KTHelpDrawer from "@/layouts/default-layout/components/extras/HelpDrawer.vue";
  import KTMessengerDrawer from "@/layouts/default-layout/components/extras/MessengerDrawer.vue";
  import { reinitializeComponents } from "@/core/plugins/keenthemes";
  import {
    asideEnabled,
    contentWidthFluid,
    loaderEnabled,
    loaderLogo,
    subheaderDisplay,
    themeDarkLogo,
    themeLightLogo,
    toolbarDisplay,
  } from "@/layouts/default-layout/config/helper";
  
  export default defineComponent({
    name: "default-layout",
    components: {
      RouterView,
      KTHeader,
      KTFooter,
    //   KTToolbar,
      KTScrollTop,
      KTCreateApp,
      KTInviteFriendsModal,
      KTActivityDrawer,
    //   KTToolbarButtons,
      KTHelpDrawer,
      KTMessengerDrawer,
    },
    setup() {
      const route = useRoute();
  
      onBeforeMount(() => {
        LayoutService.init();
      });
  
      onMounted(() => {
        nextTick(() => {
          reinitializeComponents();
        });
      });
  
      watch(
        () => route.path,
        () => {
          nextTick(() => {
            reinitializeComponents();
          });
        }
      );
  
      return {
        toolbarDisplay,
        loaderEnabled,
        contentWidthFluid,
        loaderLogo,
        subheaderDisplay,
        themeLightLogo,
        themeDarkLogo,
      };
    },
  });
  </script>