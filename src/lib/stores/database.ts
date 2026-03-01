import type Accordiontype from '$lib/stores/accordion_tabs_types'

export default [
  {
    header: "Database 1 Final Project Documents",
    tab_list: [
      { tab_name: "Rubric", resource: "/database/Rubric.pdf", isCode: false },
      { tab_name: "Report", resource: "/database/Report.pdf", isCode: false },
      { tab_name: "SWOT Analysis", resource: "/database/SWOT Analysis.pdf", isCode: false },
      { tab_name: "Presentation", resource: "/database/Presentation.pdf", isCode: false },
      { tab_name: "Schema", resource: "/database/Schema.pdf", isCode: false }
    ]
  },
  {
    header: "Database 1 Final Project SQL Code",
    tab_list: [
      { tab_name: "Tables", resource: "/database/create_tables.sql", isCode: true },
      { tab_name: "Indexes", resource: "/database/indexes.sql", isCode: true },
      { tab_name: "Constraints", resource: "/database/constraints.sql", isCode: true },
      { tab_name: "Triggers", resource: "/database/triggers.sql", isCode: true },
      { tab_name: "Functions", resource: "/database/functions.sql", isCode: true },
      { tab_name: "Inserts", resource: "/database/inserts.sql", isCode: true },
      { tab_name: "Queries", resource: "/database/queries.sql", isCode: true },
      { tab_name: "Updates", resource: "/database/updates.sql", isCode: true },
      { tab_name: "Drop Tables", resource: "/database/drop_tables.sql", isCode: true },
    ]
  }
] as Accordiontype[];