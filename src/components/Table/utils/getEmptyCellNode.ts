import { TableCellElement } from "../../../core/models/CustomEditor";

export const getEmptyCellNode = (): TableCellElement => {
  return {
    type: "td",
    id: "",
    border: { top: true, right: true, bottom: true, left: true },
    readonly: false,
    rowspan: undefined,
    colspan: undefined,
    selected: false,
    children: [{ 
      type: "p", 
      children: [{ text: "" }]
    }]
  };
};