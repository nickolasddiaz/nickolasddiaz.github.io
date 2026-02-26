import type Accordiontype from '$lib/stores/accordion_tabs_types'

export const data: Accordiontype[] = [
  {
    header: "Lucky Number Game",
    tab_list: [
      { tab_name: "Game", resource: "/computer_graphics/Lucky Number/index.html", isCode: false },
      { tab_name: "Rubric", resource: "/computer_graphics/Lucky Number/index.pdf", isCode: false },
      { tab_name: "Code", resource: "/computer_graphics/Lucky Number/index.html", isCode: true },
    ],
  },
  {
    header: "Slot Machine",
    tab_list: [
      { tab_name: "Game", resource: "/computer_graphics/Slot Machine/index.html", isCode: false },
      { tab_name: "Rubric", resource: "/computer_graphics/Slot Machine/index.pdf", isCode: false },
      { tab_name: "HTML", resource: "/computer_graphics/Slot Machine/index.html", isCode: true },
      { tab_name: "TS", resource: "/computer_graphics/Slot Machine/index.ts", isCode: true },
    ],
  },
  {
    header: "2D Adventure!",
    tab_list: [
      { tab_name: "Game", resource: "/computer_graphics/2D Adventure/index.html", isCode: false },
      { tab_name: "Rubric", resource: "/computer_graphics/2D Adventure/index.pdf", isCode: false },
      { tab_name: "HTML", resource: "/computer_graphics/2D Adventure/index.html", isCode: true },
      { tab_name: "TS", resource: "/computer_graphics/2D Adventure/index.ts", isCode: true },
    ],
  },
  {
    header: "Triangle Trouble",
    tab_list: [
      { tab_name: "Game", resource: "/computer_graphics/Triangle Trouble/index.html", isCode: false },
      { tab_name: "Rubric", resource: "/computer_graphics/Triangle Trouble/index.pdf", isCode: false },
      { tab_name: "Code", resource: "/computer_graphics/Triangle Trouble/index.html", isCode: true },
    ],
  },
  {
    header: "WebGL Initials",
    tab_list: [
      { tab_name: "Game", resource: "/computer_graphics/WebGL Initials/index.html", isCode: false },
      { tab_name: "Rubric", resource: "/computer_graphics/WebGL Initials/index.pdf", isCode: false },
      { tab_name: "Code", resource: "/computer_graphics/WebGL Initials/index.html", isCode: true },
    ],
  },
  {
    header: "The painful paint program of Perdition!",
    tab_list: [
      { tab_name: "Game", resource: "/computer_graphics/Perdition/index.html", isCode: false },
      { tab_name: "Rubric", resource: "/computer_graphics/Perdition/index.pdf", isCode: false },
      { tab_name: "HTML", resource: "/computer_graphics/Perdition/index.html", isCode: true },
      { tab_name: "Main", resource: "/computer_graphics/Perdition/src/Main.ts", isCode: true },
      { tab_name: "InitWebGLProgram", resource: "/computer_graphics/Perdition/src/InitWebGLProgram.ts", isCode: true },
      { tab_name: "ShapeCreator", resource: "/computer_graphics/Perdition/src/ShapeCreator.ts", isCode: true },
      { tab_name: "Line", resource: "/computer_graphics/Perdition/src/Line.ts", isCode: true },
      { tab_name: "Triangle", resource: "/computer_graphics/Perdition/src/Triangle.ts", isCode: true },
      { tab_name: "PolyGon", resource: "/computer_graphics/Perdition/src/PolyGon.ts", isCode: true },
      { tab_name: "Circle", resource: "/computer_graphics/Perdition/src/Circle.ts", isCode: true },
    ],
  },
];