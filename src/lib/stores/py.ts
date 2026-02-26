import type Accordiontype from '$lib/stores/accordion_tabs_types'

export const data: Accordiontype[] = [
  {
    header: "Labs 1-6",
    tab_list: [
      { tab_name: "1", resource: "/py/Lab 1.py", isCode: true },
      { tab_name: "2", resource: "/py/Lab 2.py", isCode: true },
      { tab_name: "3", resource: "/py/Lab 3.py", isCode: true },
      { tab_name: "4", resource: "/py/Lab 4.py", isCode: true },
      { tab_name: "5", resource: "/py/Lab 5.py", isCode: true },
      { tab_name: "6", resource: "/py/Lab 6.py", isCode: true },
    ]
  },
  {
    header: "Labs 7-12",
    tab_list: [
      { tab_name: "7", resource: "/py/Lab 7.py", isCode: true },
      { tab_name: "8", resource: "/py/Lab 8.py", isCode: true },
      { tab_name: "9", resource: "/py/Lab 9.py", isCode: true },
      { tab_name: "10", resource: "/py/Lab 10.py", isCode: true },
      { tab_name: "11", resource: "/py/Lab 11.py", isCode: true },
      { tab_name: "12", resource: "/py/Lab 12.py", isCode: true },
    ]
  },
  {
    header: "Homework 1-4",
    tab_list: [
      { tab_name: "1", resource: "/py/Homework 1.py", isCode: true },
      { tab_name: "2", resource: "/py/Homework 2.py", isCode: true },
      { tab_name: "3", resource: "/py/Homework 3.py", isCode: true },
      { tab_name: "4", resource: "/py/Homework 4.py", isCode: true },
    ]
  },
  {
    header: "Exams",
    tab_list: [
      { tab_name: "Exam 1 part 1", resource: "/py/Exam 1 part 1.py", isCode: true },
      { tab_name: "Exam 1 part 2", resource: "/py/Exam 1 part 2.py", isCode: true },
      { tab_name: "Exam 2", resource: "/py/Exam 2.py", isCode: true },
      { tab_name: "Final Exam", resource: "/py/Final Exam.py", isCode: true },
      { tab_name: "Extra Credit", resource: "/py/Extra Credit.py", isCode: true },
    ]
  },
];