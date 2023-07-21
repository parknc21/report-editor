import { Path } from "slate";

export const getFocusTdRowIndex = (path: Path): number => {
  const rowIndex: number = path[1];
  return rowIndex;
};

export const getFocusTdColIndex = (path: Path): number => {
  const colIndex: number = path[2];
  return colIndex;
};