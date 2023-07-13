/** @jsxImportSource @emotion/react */
import { Tooltip } from "@mui/material";
import { css } from '@emotion/react';
import { FC } from "react";
import { useSlate } from "slate-react";
import { Editor } from "slate";
import { ToolbarButtonModel } from "../core/models/EditorModels";

const MarkButton: FC<ToolbarButtonModel> = ({ format, icon, tooltip }) => {
  const editor: Editor = useSlate();

  const isMarkActive = (editor: Editor, format: string) => {
    const marks: any = Editor.marks(editor);
    return marks ? marks[format] === true : false
  }
  const toggleMark = (): void => {
    const active = isMarkActive(editor, format);
    if(active) {
      Editor.removeMark(editor, format);
    } else {
      Editor.addMark(editor, format, true);
    };
  };
  return (
    <Tooltip title={tooltip}>
      <span
        css={css`
          display: inline-block;
          border-radius: 10px;
          height: 45px;
          color: ${
            isMarkActive(editor, format)? '#414F58' : '#949CA2'
          };
          &:hover {
            color: #414F58;
            cursor: pointer;
          }
        `}
        onMouseDown={event => {
          event.preventDefault();
          toggleMark();
        }}
      >
        {icon}
      </span>
    </Tooltip>
  )
};
export default MarkButton;