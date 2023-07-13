/** @jsxImportSource @emotion/react */
import { FC, useContext } from "react";
import { css } from '@emotion/react';
import TableCellResizableWrapper from "./TableCellResizableWrapper";
import { TableElementModel } from "../../../core/models/EditorModels";
import { TableStateContext } from "../../../core/providers/TableStateProvider";
import { Editor } from "slate";
import { useSlate } from "slate-react";
import { getCurrentCellNode } from "../utils/getCurrentCellNode";
import { TableToolbarState, TableToolbarStateType } from "../../../core/providers/TableToolbarStateProvider";

const TableCell: FC<TableElementModel> = ({ 
  attributes, 
  children,
  colIndex,
  element
}) => {
  const editor: Editor = useSlate();
  const { tableState } = useContext(TableStateContext);
  const { updateTableToolbarState } = useContext<TableToolbarStateType>(TableToolbarState)
  return (
    <td
      id={`table${tableState.tableIndex}-cell`}
      {...attributes}
      css={css`
        border: 1px solid #000;
        border-collapse: collapse;
        position: relative;
        height: 100%;
      `}
      onClick={() => {
        const selection = editor.selection;
        const node = getCurrentCellNode(editor, selection?.anchor.path?? []) as any as Element;
        updateTableToolbarState({ currentNode: node });
      }}
    >
      <div
        css={css`
          position: relative;
          height: 100%;
          z-index: 20;
        `}
      >
        {children}
      </div>
      <TableCellResizableWrapper element={element?? {type: "paragraph", children: [{ text: "" }]}} colIndex={colIndex}/>
    </td>
  )
};
export default TableCell;