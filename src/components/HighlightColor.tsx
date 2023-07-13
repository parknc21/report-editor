/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Tooltip from "@mui/material/Tooltip";
import { FC, useContext } from "react";
import { Editor } from "slate";
import { useSlate } from "slate-react";
import { HighlightColorModel } from "../core/models/EditorModels";
import { ToolbarStateContext, ToolbarStateContextType } from "../core/providers/ToolbarStateProvider";
import { ArrowDropDown } from "./Icons";
import { FONTCOLORLIST } from "../core/utils/fontConstant";


const HighlightColor: FC<HighlightColorModel> = ({ tooltip }) => {
  const editor: Editor = useSlate();
  const { toolbarState, updateToolbarState } = useContext<ToolbarStateContextType>(ToolbarStateContext);
  const highlightActive = (editor: Editor) => {
    const marks: any = Editor.marks(editor);
    if(!marks) return
    if(!marks.highlight) return '#fff'
    return marks['highlight']
  }
  return (
    <span
      css={css`
        position: relative;
      `}
    >
      <Tooltip title={tooltip}>
        <div
          css={css`
            display: flex;
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
              updateToolbarState({ fontSize: false, color: false, highlight: !toolbarState.highlight, elementList: false });
            }}
          >
            <div
              css={css`
                display: inline-block;
                width: 22px;
                line-height: 53px;
              `}
            >
              <span 
                css={css`
                  display: inline-block;
                  width: 22px;
                  height: 22px;
                  background: ${highlightActive(editor)?? '#fff'};
                  box-shadow: 0 0 0.1cm rgba(0,0,0,0.5);
                `}
              >
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
          right: -80px;
          display: ${
            toolbarState.highlight? 'block':'none'
          };
          background: #fff;
          width: 203px;
          height: 220px;
          overflow-y: auto;
          border: 1px solid rgba(0, 0, 0, 0.12);
          margin-top: 7px;
          padding: 12px;
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
          FONTCOLORLIST.map((item, index) => {
            return (
              <span
                css={css`
                  display: inline-block;
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                  background: ${item};
                  margin-right: 5px;
                  cursor: pointer;
                `}
                key={index}
                onMouseDown={event => {
                  event.preventDefault();
                  Editor.addMark(editor, 'highlight', item);
                  updateToolbarState({ fontSize: false, color: false, highlight: false, elementList: false });
                }}
              ></span>
            )
          })
        }
      </div>
    </span>
  )
};
export default HighlightColor;