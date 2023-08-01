import { Editor, Path } from "slate";
import { TableCellElement } from "../../../core/models/CustomEditor";

export interface NeighboringCellNodesModel {
  topCellNode: {} | null;
  rightCellNode: {} | null;
  bottomCellNode: {} | null;
  leftCellNode: {} | null;
};

export const getNeighboringCellNodes = (
  editor: Editor,
  path: Path,
  rowsAndCols: {
    rowCount: number;
    colCount: number
  }
): NeighboringCellNodesModel => {
  const x = path[1];
  const y = path[2];
  const topCellNode = x-1>=0? Editor.node(editor, [1, x-1, y])[0] as any as TableCellElement : null;
  const rightCellNode = y+1<=rowsAndCols.colCount? Editor.node(editor, [1, x, y+1])[0] as any as TableCellElement : null;
  const bottomCellNode = x+1<=rowsAndCols.rowCount? Editor.node(editor, [1, x+1, y])[0] as any as TableCellElement : null;
  const leftCellNode = y-1>=0? Editor.node(editor, [1, x, y-1])[0] as any as TableCellElement : null;
  return {
    topCellNode,
    rightCellNode,
    bottomCellNode,
    leftCellNode
  };
};