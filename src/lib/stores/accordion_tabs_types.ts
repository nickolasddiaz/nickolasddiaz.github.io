export interface TabItem {
  tab_name: string;
  resource: string;
  isCode: boolean;
}

export default interface AccordionItem {
  header: string;
  tab_list: TabItem[];
}