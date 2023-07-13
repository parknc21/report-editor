import { getEmptyRowNode } from "./getEmptyRowNode";

export const getEmptyTableNode = (rowCount: number, colCount: number) => {
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