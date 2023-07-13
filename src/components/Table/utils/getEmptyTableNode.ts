import { TableElement } from "../../../core/models/CustomEditor";
import { getEmptyRowNode } from "./getEmptyRowNode";

export const getEmptyTableNode = (rowCount: number, colCount: number): TableElement => {
  const rows = Array(rowCount)
    .fill(rowCount)
    .map(() => getEmptyRowNode(colCount))
  return {
    type: "table",
    id: "",
    cols: [],
    children: rows
  };
};