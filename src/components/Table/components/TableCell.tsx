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
import { TableCellElement } from "../../../core/models/CustomEditor";

const TableCell: FC<TableElementModel> = ({ 
  attributes, 
  children,
  colIndex,
  element
}) => {
  const editor: Editor = useSlate();
  const { tableState } = useContext(TableStateContext);
  const { updateTableToolbarState } = useContext<TableToolbarStateType>(TableToolbarState);

  const getMouseSelection = () => {
    window.onmousemove = () => {
      let selObj = window.getSelection && window.getSelection();
      if(selObj && selObj.rangeCount > 0) {
        if(selObj?.getRangeAt(0).commonAncestorContainer.hasChildNodes()) {
          selObj?.removeAllRanges();
        };
      };
    };
    window.onmouseup = () => {
      const path = editor.selection;
      console.log(path)
      window.onmousemove = null;
    };
  };
  return (
    <td
      id={`table${tableState.tableIndex}-cell`}
      rowSpan={element?.rowspan? Number(element?.rowspan) : undefined}
      colSpan={element?.colspan? Number(element?.colspan) : undefined}
      {...attributes}
      contentEditable={element?.readonly? false : undefined}
      style={{
        borderTop: `${element?.border?.top? "1px solid #000" : "none"}`,
        borderRight: `${element?.border?.right? "1px solid #000" : "none"}`,
        borderBottom: `${element?.border?.bottom? "1px solid #000" : "none"}`,
        borderLeft: `${element?.border?.left? "1px solid #000" : "none"}`,
        position: "relative",
        height: "100%",
      }}
      onClick={() => {
        const selection = editor.selection;
        const cell = getCurrentCellNode(editor, selection?.anchor.path?? []) as any as TableCellElement;
        updateTableToolbarState({ currentCell: cell });
      }} 
    >
      <div
        css={css`
          position: relative;
          height: 100%;
          z-index: 20;
        `}
        onMouseDown={getMouseSelection}
      >
        {children}
      </div>
      <TableCellResizableWrapper element={element?? {type: "paragraph", children: [{ text: "" }]}} colIndex={colIndex}/>
    </td>
  )
};
export default TableCell;