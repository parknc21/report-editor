import { Editor, Transforms } from 'slate';
import { getEmptyTableNode } from "../utils/getEmptyTableNode";

interface InsertTableProps {
  editor: Editor,
  baseTableRowsAndColumns: {
    rowCount: number,
    colCount: number
  }
};

export const insertTable = ({
  editor,
  baseTableRowsAndColumns
}: InsertTableProps) => {
  Transforms.insertNodes(
    editor, 
    getEmptyTableNode(baseTableRowsAndColumns.rowCount, baseTableRowsAndColumns.colCount)
  );
};