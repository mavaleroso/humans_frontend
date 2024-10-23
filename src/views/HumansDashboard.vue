<template>
  <div class="container">
    <br>
    <h2 class="fs-2x fw-bold mb-10">Welcome to Humans</h2>
    <!--begin::Row-->
  <div class="row g-5 g-xl-8">
    <!--begin::Col-->
    <div class="col-xl-3">
        <a href="/rsp">
        <MixedWidget8
            widget-classes="card-xl-stretch mb-xl-8"
            :image="getAssetPath('media/svg/brand-logos/plurk.svg')"
            color="danger"
            title="Recruitment, Selection and Placement"
            date="Due: 27 Apr 2020"
            progress="75"
        ></MixedWidget8>
        </a>
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-xl-3">
        <a href="/ld">
      <MixedWidget8
        widget-classes="card-xl-stretch mb-xl-8"
        :image="getAssetPath('media/svg/brand-logos/vimeo.svg')"
        color="primary"
        title="Learning and development"
        date="Due: 27 Apr 2020"
        progress="75"
      ></MixedWidget8>
      </a>
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-xl-3">
        <a href="/pm">
      <MixedWidget8
        widget-classes="card-xl-stretch mb-5 mb-xl-8"
        :image="getAssetPath('media/svg/brand-logos/kickstarter.svg')"
        color="success"
        title="Performance Management"
        date="Due: 27 Apr 2020"
        progress="75"
      ></MixedWidget8>
      </a>

    </div>
    <!--end::Col-->

     <!--begin::Col-->
     <div class="col-xl-3">
        <a href="/rr">
      <MixedWidget8
        widget-classes="card-xl-stretch mb-5 mb-xl-8"
        :image="getAssetPath('media/svg/brand-logos/kickstarter.svg')"
        color="success"
        title="Rewards and recognition"
        date="Due: 27 Apr 2020"
        progress="75"
      ></MixedWidget8>
      </a>
    </div>
    <!--end::Col-->
  </div>
  <!--end::Row-->


  <!--begin::Row-->
  <div class="row g-5 g-xl-10 mb-5 mb-xl-10">
    <!--begin::Col-->
    <div class="col-xl-4">
      <MixedWidget5
        widget-classes="card-xl-stretch mb-xl-8 h-md-100"
        chart-color="primary"
        chart-height="150"
      ></MixedWidget5>
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-xl-8">
      <Widget10 className="h-md-100" />
    </div>
    <!--end::Col-->
  </div>
  <!--end::Row-->


</div>
</template>
  
  <script lang="ts">
  import { getAssetPath } from "@/core/helpers/assets";
  import { defineComponent } from "vue";
  import Widget1 from "@/components/dashboard-default-widgets/Widget1.vue";
  import Widget2 from "@/components/dashboard-default-widgets/Widget2.vue";
  import Widget3 from "@/components/dashboard-default-widgets/Widget3.vue";
  import Widget4 from "@/components/dashboard-default-widgets/Widget4.vue";
  import Widget5 from "@/components/dashboard-default-widgets/Widget5.vue";
  import Widget6 from "@/components/dashboard-default-widgets/Widget6.vue";
  import Widget7 from "@/components/dashboard-default-widgets/Widget7.vue";
  import Widget8 from "@/components/dashboard-default-widgets/Widget8.vue";
  import Widget9 from "@/components/dashboard-default-widgets/Widget9.vue";
  import Widget10 from "@/components/dashboard-default-widgets/Widget10.vue";
  import MixedWidget5 from "@/components/widgets/mixed/Widget5.vue";
  import MixedWidget8 from "@/components/widgets/mixed/Widget8.vue";
  
  export default defineComponent({
    name: "humans-dashboard",
    components: {
      Widget1,
      Widget2,
      Widget3,
      Widget4,
      Widget5,
      Widget6,
      Widget7,
      Widget8,
      Widget9,
      Widget10,
      MixedWidget5,
      MixedWidget8
    },
    setup() {
      return {
        getAssetPath,
      };
    },
  });
  </script>
  