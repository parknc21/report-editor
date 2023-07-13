import { getEmptyCellNode } from "./getEmptyCellNode";

export const getEmptyRowNode = (colCount?: number) => {
  return {
    type: "tr",
    height: 21,
    children: Array(colCount)
      .fill(colCount)
      .map(() => getEmptyCellNode())
  };
};