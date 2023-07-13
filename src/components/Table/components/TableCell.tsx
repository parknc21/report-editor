/** @jsxImportSource @emotion/react */
import { FC, useContext } from "react";
import { css } from '@emotion/react';
import TableCellResizableWrapper from "./TableCellResizableWrapper";
import { TableElementModel } from "../../../core/models/EditorModels";
import { TableStateContext } from "../../../core/providers/TableStateProvider";

const TableCell: FC<TableElementModel> = ({ 
  attributes, 
  children,
  colIndex,
  element
}) => {
  const { tableState } = useContext(TableStateContext);
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