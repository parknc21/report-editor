import { TableCellElement } from "../../../core/models/CustomEditor";

export const getEmptyCellNode = (): TableCellElement => {
  return {
    type: "td",
    id: "",
    border: [true, true, true, true],
    readonly: false,
    children: [{ 
      type: "p", 
      children: [{ text: "" }]
    }]
  };
};