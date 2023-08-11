/** @jsxImportSource @emotion/react */
import { FC, useContext, useEffect, useState } from "react";
import { css } from '@emotion/react';
import TableCellResizableWrapper from "./TableCellResizableWrapper";
import { TableElementModel } from "../../../core/models/EditorModels";
import { TableStateContext } from "../../../core/providers/TableStateProvider";
import { Editor, NodeEntry, Transforms, Element } from "slate";
import { useFocused, useSlate } from "slate-react";
import { getCurrentCellNode } from "../utils/getCurrentCellNode";
import { TableToolbarState, TableToolbarStateType } from "../../../core/providers/TableToolbarStateProvider";
import { TableCellElement } from "../../../core/models/CustomEditor";

const TableCell: FC<TableElementModel> = ({ 
  attributes, 
  children,
  colIndex,
  rowIndex,
  element
}) => {
  const editor: Editor = useSlate();
  const focus = useFocused();
  const { tableState } = useContext(TableStateContext);
  const { updateTableToolbarState } = useContext<TableToolbarStateType>(TableToolbarState);
  const [mouseDown, setMouseDown] = useState<boolean>(false);
  const [selectedPathEntry, setSelectedPathEntry] = useState<number[][]>([]);

  // const getMouseSelection = () => {
  //   window.onmousemove = () => {
  //     let selObj = window.getSelection && window.getSelection();
  //     if(selObj && selObj.rangeCount > 0) {
  //       if(selObj?.getRangeAt(0).commonAncestorContainer.hasChildNodes()) {
          
  //       };
  //     };
  //   };
  //   window.onmouseup = () => {
  //     window.onmousemove = null;
  //   };
  // };
  return (
    <td
      id={`table${tableState.tableIndex}-${rowIndex}-${colIndex}`}
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
        background: `${element?.selected? "#F4F4F5" : "#fff"}`
      }}
      // css={css`
      //   *::selection {
      //     ${element?.selected? "background-image: none": "background-color: rgb(49,101,208), color: #fff"}
      //   }
      // `}
      css={css`
      *::selection {background-image: none}
      `}
      onClick={() => {
        const selection = editor.selection;
        const cell = getCurrentCellNode(editor, selection?.anchor.path?? []) as any as TableCellElement;
        updateTableToolbarState({ currentCell: cell });
      }}
      onMouseDown={() => {
        console.log(selectedPathEntry)
        setMouseDown(true);
        for(let i=0; i<selectedPathEntry.length; i++) {
          Transforms.setNodes(
            editor,
            { selected: false },
            {
              at: selectedPathEntry[i],
              match: n => Element.isElement(n) && n.type === "td"
            }
          );
        };
      }}
      onMouseUp={() => {
        setMouseDown(false);
        const selection = editor.selection;
        const res: Generator<NodeEntry<TableCellElement>, void, undefined> = Editor.nodes(editor, { at: selection as any })
        const selectedNodePathEntry = [];
        const lastNodePath = Editor.last(editor, selection as any)[1];
        for( let value of res) {
          const path = value[1];
          if(value[0].type === "td" && path[2] <= lastNodePath[2]) {
            selectedNodePathEntry.push(value[1]);
          };
        };
        console.log(selectedNodePathEntry)
        if(selectedNodePathEntry.length>=2) {
          for(let i=0; i<selectedNodePathEntry.length; i++) {
            Transforms.setNodes(
              editor,
              { selected: true },
              {
                at: selectedNodePathEntry[i],
                match: n => Element.isElement(n) && n.type === "td"
              }
            );
          };
          setSelectedPathEntry(selectedNodePathEntry);
        };
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