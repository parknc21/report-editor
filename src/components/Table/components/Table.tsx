/** @jsxImportSource @emotion/react */
import { FC, PropsWithChildren, useContext, useEffect, useState } from "react";
import { css } from '@emotion/react';
import { Transforms, Editor, Element } from "slate";
import { useSlate } from "slate-react";
import { TableElementModel } from "../../../core/models/EditorModels";
import { TableStateContext, TableStateContextModel } from "../../../core/providers/TableStateProvider";
import TableToolbar from "./TableToolbar/TableToolbar";
import { ElementInfoContext, ElementInfoContextType } from "../../../core/providers/ElementInfoProvider";

const Table: FC<PropsWithChildren<TableElementModel>> = ({
  attributes,
  children 
}) => {
  const { tableState } = useContext<TableStateContextModel>(TableStateContext);
  const { elementInfoState } = useContext<ElementInfoContextType>(ElementInfoContext);
  const [ initialColSize, setInitialColSize ] = useState<number>();
  const editor: Editor = useSlate();

  useEffect(() => {
    const dom = document.querySelector(`#table${tableState.tableIndex}`) as HTMLElement;
    if(!dom) return;
    setInitialColSize(Math.ceil(dom.offsetWidth / tableState.tableRowsAndColumns.colCount));
    const cols = Array(tableState.tableRowsAndColumns.colCount)
      .fill(tableState.tableRowsAndColumns.colCount) 
      .map(() => Math.ceil(dom.offsetWidth / tableState.tableRowsAndColumns.colCount));
    Transforms.setNodes(
      editor, 
      { cols: cols, id: `table${tableState.tableIndex}` },
      { match: n => Element.isElement(n) && n.type === "table" }
    );
  }, [tableState.tableIndex, tableState.tableRowsAndColumns.colCount, editor]);
  return (
    <div
      css={css`
        position: relative;
        width: 100%;
      `}
    >
      <table
        {...attributes}
        id={`table${tableState.tableIndex}`}
        css={css`
          border: 1px solid #000;
          border-spacing: 0;
          height: 1px;
          width: 100%;
          margin: 0 auto;
        `}
      >
        <colgroup 
          contentEditable={false}
          css={css`
            width: 100%;
          `}
        >
          {
            Array(tableState.tableRowsAndColumns.colCount)
            .fill(tableState.tableRowsAndColumns.colCount)
            .map((_, index) => {
              return (
                <col
                  key={index}
                  style={{
                    minWidth: "48px",
                    width: `${initialColSize}px`,
                  }}
                />
              )
            })
          }
        </colgroup>
        <tbody
          css={css`
            min-width: 100%;
          `}
        >
          {children}
        </tbody>
      </table>
      { elementInfoState.type === "table" && elementInfoState.id === `table${tableState.tableIndex}` && <TableToolbar /> }
    </div> 
  )
};
export default Table;