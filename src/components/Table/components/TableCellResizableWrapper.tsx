/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { css } from '@emotion/react';
import { Element } from "slate";
import TableCellResizable from "./TableResizable";

interface TableCellResizableWrapperProp {
  colIndex?: number;
  element: Element;
};
const TableCellResizableWrapper: FC<TableCellResizableWrapperProp> = (props: TableCellResizableWrapperProp) => {
  const { colIndex, element } = props;
  return (
    <div
      id={colIndex?.toString()}
      contentEditable={false}
      css={css`
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        user-select: none;
      `}
    >
      <TableCellResizable element={element} colIndex={colIndex}/>
    </div>
  )
};
export default TableCellResizableWrapper;