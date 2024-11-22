import type { MenuItem } from "@/layouts/default-layout/config/types";

const MainMenuConfig: Array<MenuItem> = [
  {
    pages: [
      {
        heading: "dashboard",
        route: "/rsp/dashboard",
        keenthemesIcon: "element-11",
        bootstrapIcon: "bi-app-indicator",
      },
      {
        heading: "Onboarding Forms",
        route: "/rsp/onboarding-forms",
        keenthemesIcon: "file",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "Hired Applicants",
        route: "/rsp/list-of-newly-hired",
        keenthemesIcon: "user",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "Turn - Around Time",
        route: "/rsp/turn-around-time",
        keenthemesIcon: "chart",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "Welcome Letter",
        route: "/rsp/welcome-letter",
        keenthemesIcon: "menu",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "Intro Letter",
        route: "/rsp/intro-letter",
        keenthemesIcon: "abstract-41",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "Congratulatory Letter",
        route: "/rsp/congratulatory-letter",
        keenthemesIcon: "credit-cart",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "Certificate of Completion",
        route: "/rsp/certificate-of-completion",
        keenthemesIcon: "abstract-25",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "NEOP",
        route: "/rsp/neop",
        keenthemesIcon: "element-7",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "COS with guidelines",
        route: "/rsp/cos-with-guidelines",
        keenthemesIcon: "switch",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "Newly Appointed/Hired Internal Staff",
        route: "/rsp/newly-appointed-staff-list",
        keenthemesIcon: "badge",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "Reports",
        route: "/rsp/reports",
        keenthemesIcon: "abstract-30",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "Text Blast",
        route: "/rsp/text-blast",
        keenthemesIcon: "note",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "Settings",
        route: "/rsp/settings",
        keenthemesIcon: "setting-2",
        bootstrapIcon: "bi-layers",
      },
    ],
  },
];

export default MainMenuConfig;
