/** @jsxImportSource @emotion/react */
import { FC, useContext, useEffect, useState } from "react";
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
  const [currentCell, setCurrentCell] = useState<TableCellElement>({type: "td", id: "", border: [true, true, true, true], readonly: false, children: [{ type: "p", children: [{ text: "" }]}]});
  
  useEffect(() => {
    const dom = document.getElementById(`table${tableState.tableIndex}-cell`);
    if(dom && currentCell.readonly) {
      dom.setAttribute("contentEditable", "false");
    } else {
      dom?.removeAttribute("contentEditable");
    };
  }, [currentCell, tableState.tableIndex]);
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
        const cell = getCurrentCellNode(editor, selection?.anchor.path?? []) as any as TableCellElement;
        setCurrentCell(cell);
        updateTableToolbarState({ currentCell: cell });
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