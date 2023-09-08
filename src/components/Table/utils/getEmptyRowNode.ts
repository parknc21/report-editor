import { TableRowElement } from "../../../core/models/CustomEditor";
import { getEmptyCellNode } from "./getEmptyCellNode";

export const getEmptyRowNode = (colCount?: number): TableRowElement => {
  return {
    type: "tr",
    height: "21",
    children: Array(colCount)
      .fill(colCount)
      .map(() => getEmptyCellNode())
  };
};