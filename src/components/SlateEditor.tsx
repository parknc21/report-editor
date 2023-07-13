import { FC, useCallback, useContext } from "react";
import { Editable, useSlate } from "slate-react";
import { SlateElement } from "./RenderElement";
import { Leaf } from "./RenderLeaf";
import { Box } from "@mui/material";
import { Editor, Element } from "slate";
import { ElementInfoContext, ElementInfoContextType } from "../core/providers/ElementInfoProvider";
import { getCurrentNode } from "../core/utils/getCurrentNode";

const SlateEditor: FC = () => {
  const renderElement = useCallback((props: any) => <SlateElement {...props} />, []);
  const renderLeaf = useCallback((props: any) => <Leaf {...props} />, []);
  const editor: Editor = useSlate();
  const { updateElementInfoState } = useContext<ElementInfoContextType>(ElementInfoContext);
  return (
    <Box
      sx={{
        flex: 1,
        overflowY: "auto",
        '&::-webkit-scrollbar': {
          width: "10px",
          height: "10px"
        },
        '&::-webkit-scrollbar-track': {
          background: "rgb(239, 239, 239)",
          borderRadius: "2px"
        },
        '&::-webkit-scrollbar-thumb': {
          background: "#bfbfbf",
          borderRadius: "10px"
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: "rgb(184, 184, 184)"
        },
        '&::-webkit-scrollbar-corner': {
          background: "#fff"
        }
      }}
    >
      <Editable
        style={{
          background: 'white',
          width: '21cm',
          height: '29.7cm',
          display: 'block',
          margin: '0 auto',
          marginBottom: '0.5cm',
          boxShadow: '0 0 0.1cm rgba(0,0,0,0.1)',
          padding: '10px',
        }}
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        autoFocus
        spellCheck
        onClick={() => {
          const selection = editor.selection;
          const node = getCurrentNode(editor, selection?.anchor.path?? []) as any as Element;
          updateElementInfoState(node);
        }}
      />
    </Box>
  )
};
export default SlateEditor;