import { Tooltip } from "@mui/material";
import { FC, useContext } from "react";
import CallMergeIcon from '@mui/icons-material/CallMerge';
import { TableToolbarState, TableToolbarStateType } from "../../../../core/providers/TableToolbarStateProvider";
import { Editor, Transforms, Element } from "slate";
import { useSlate } from "slate-react";

const MergeCellButton: FC = () => {
  const editor: Editor = useSlate();
  const { tableToolbarState, updateTableToolbarState } = useContext<TableToolbarStateType>(TableToolbarState);

  const mergeCell = () => {
    if(!tableToolbarState.selectedPathEntry) return;
    const pathEntry = tableToolbarState.selectedPathEntry;
    Transforms.setNodes(
      editor,
      {
        rowspan: pathEntry[pathEntry.length-1][1] + 1,
        colspan: pathEntry[pathEntry.length-1][2] + 1
      },
      {
        at: pathEntry[0]
      }
    );
    pathEntry.shift();
    for(let i=0; i<pathEntry.length; i++) {
      Transforms.removeNodes(
        editor,
        {
          at: pathEntry[i],
        }
      );
    };
    Transforms.setNodes(
      editor,
      {
        selected: false
      },
      {
        at: [],
        match: n => Element.isElement(n) && n.type === "td"
      }
    );
    updateTableToolbarState({ selectedPathEntry: [] });
  };
  return (
    <Tooltip title="合并单元格">
      <span
        style={{
          width: "18px",
          height: "18px"
        }}
        onClick={mergeCell}
      >
        <CallMergeIcon
          sx={{
            color: "#949CA2",
            fontSize: "18px",
            '&:hover': {
              cursor: "pointer",
              color: "#414F58"
            }
          }}
        />
      </span>
    </Tooltip>
  )
};
export default MergeCellButton;