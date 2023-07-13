/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Editor } from "slate";
import { useSlate } from "slate-react";
import { Tooltip } from "@mui/material";
import { ToolbarButtonModel } from "../core/models/EditorModels";
import { isBlockActive, toggleBlock } from "../core/utils/toggleBlock";
import { TEXT_ALIGN_TYPES } from "../core/utils/fontConstant";

const BlockButton: FC<ToolbarButtonModel> = ({ format, icon, tooltip }) => {
  const editor: Editor = useSlate();

  return (
    <Tooltip title={tooltip}>
      <span
        css={css`
          color: ${
            isBlockActive(editor, format, TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type')? '#414F58' : '#949CA2'
          };
          &:hover {
            color: #414F58;
            cursor: pointer;
          }
        `}
        onMouseDown={event => {
          event.preventDefault();
          toggleBlock(editor, format);
        }}
      >
        {icon}
      </span>
    </Tooltip>
  )
};
export default BlockButton;