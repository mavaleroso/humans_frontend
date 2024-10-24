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
        route: "/",
        keenthemesIcon: "file",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "Newly Hired Staff",
        route: "/",
        keenthemesIcon: "user",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "NEOP",
        route: "/",
        keenthemesIcon: "menu",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "COS with guidelines",
        route: "/",
        keenthemesIcon: "switch",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "Newly Appointed/Hired Internal Staff",
        route: "/",
        keenthemesIcon: "badge",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "Reports",
        route: "/",
        keenthemesIcon: "abstract-30",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "Text Blast",
        route: "/",
        keenthemesIcon: "note",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "Settings",
        route: "/",
        keenthemesIcon: "setting-2",
        bootstrapIcon: "bi-layers",
      },
    ],
  },
  
];

export default MainMenuConfig;
