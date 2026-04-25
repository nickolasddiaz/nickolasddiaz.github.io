import type Accordiontype from '$lib/stores/accordion_tabs_types'

export default [
  {
    header: "Project 1 - Small Language with eXtensions",
    tab_list: [
      { tab_name: "Rubric", resource: "/prog_lang/project 1/rubric.pdf", isCode: false },
      { tab_name: "Report", resource: "/prog_lang/project 1/report.pdf", isCode: false },
      { tab_name: "Code", resource: "/prog_lang/project 1/smol-x.rkt", isCode: true },
    ]
  },
  {
    header: "Project 2 - Installing and Running Prolog",
    tab_list: [
      { tab_name: "Rubric", resource: "/prog_lang/project 2/rubric.pdf", isCode: false },
      { tab_name: "Report", resource: "/prog_lang/project 2/report.pdf", isCode: false },
    ]
  },
  {
    header: "Project 3 - Mutation_and_State",
    tab_list: [
      { tab_name: "Rubric", resource: "/prog_lang/project 3/rubric.pdf", isCode: false },
      { tab_name: "Report", resource: "/prog_lang/project 3/Report.pdf", isCode: false },
      { tab_name: "Presentation", resource: "/prog_lang/project 3/Presentation.pdf", isCode: false },
      { tab_name: "Code", resource: "/prog_lang/project 3/code.rkt", isCode: true },
    ]
  },
] as Accordiontype[];