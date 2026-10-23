import type Accordiontype from "#lib/stores/accordion_tabs_types.ts";

export default [
  {
    header: "Final Report Project",
    tab_list: [
      {
        tab_name: "Final Project",
        resource: "/Systems_Analysis/Final Project.pdf",
        isCode: false,
      },
      {
        tab_name: "Presentation",
        resource: "/Systems_Analysis/Presentation.pdf",
        isCode: false,
      },
      {
        tab_name: "Requirement Modeling",
        resource: "/Systems_Analysis/Requirement Modeling.pdf",
        isCode: false,
      },
    ],
  },
] as Accordiontype[];
