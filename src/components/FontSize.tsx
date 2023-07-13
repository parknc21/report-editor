/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Tooltip from "@mui/material/Tooltip";
import { FC, useContext } from "react";
import { Editor } from "slate";
import { useSlate } from "slate-react";
import { FontSizeModel } from "../core/models/EditorModels";
import { ToolbarStateContext, ToolbarStateContextType } from "../core/providers/ToolbarStateProvider";
import { ArrowDropDown } from "./Icons";
import { FONTSIZELIST } from "../core/utils/fontConstant";


const FontSize: FC<FontSizeModel> = ({ tooltip }) => {
  const editor: Editor = useSlate();
  const { toolbarState, updateToolbarState } = useContext<ToolbarStateContextType>(ToolbarStateContext);
  const fontSizeActive = (editor: Editor) => {
    const marks: any = Editor.marks(editor);
    if(!marks) return
    if(!marks.fontSize) return 16
    return marks['fontSize']
  }
  return (
    <span
      css={css`
        /* position: relative; */
      `}
    >
      <Tooltip title={tooltip}>
        <div
          css={css`
            display: flex;
            position: relative;
          `}
        >
          <div
            css={css`
              color: #949CA2;
              &:hover {
                color: #414F58;
                cursor: pointer;
              };
              font-size: 1.2rem;
              font-weight: bold;
              width: 62px;
              height: 52px;
              line-height: 46px;
              display: flex;
              margin-left: 12px;
            `}
            onMouseDown={event => {
              event.preventDefault();
              updateToolbarState({ fontSize: !toolbarState.fontSize, color: false, highlight: false, elementList: false });
            }}
          >
            <div
              css={css`
                display: inline-block;
                width: 22px;
              `}
            >
              <span 
                css={css`
                  display: inline-block;
                  width: 22px;
                `}
              >
                {fontSizeActive(editor)?? 16}
              </span>
            </div>
            <ArrowDropDown />
          </div>
        </div>
      </Tooltip>
      <div
        css={css`
          z-index: 1;
          position: absolute;
          display: ${
            toolbarState.fontSize? 'block':'none'
          };
          background: #fff;
          width: 68px;
          height: 209px;
          overflow-y: auto;
          border: 1px solid rgba(0, 0, 0, 0.12);
          margin-top: 7px;
          &::-webkit-scrollbar {
            width: 3px;
          };
          &::-webkit-scrollbar-track{
            background: rgb(239, 239, 239);
            border-radius:2px;
          };
          &::-webkit-scrollbar-thumb{
            background: #bfbfbf;
            border-radius:10px;
          };
          &::-webkit-scrollbar-thumb:hover{
            background: #333;
          };
          &::-webkit-scrollbar-corner{
            background: #179a16;
          }
        `}
      >
        {
          FONTSIZELIST.map((item, index) => {
            return (
              <div
                css={css`
                  height: 30px;
                  font-size: 19px;
                  color: #949CA2;
                  &:hover {
                    color: #414F58;
                    cursor: pointer;
                  };
                `}
                key={index}
                onMouseDown={event => {
                  event.preventDefault();
                  updateToolbarState({ fontSize: false, color: false, highlight: false, elementList: false });
                  Editor.addMark(editor, 'fontSize', item);
                }}
              >
                {item}
              </div>
            )
          })
        }
      </div>
    </span>
  )
};
export default FontSize;