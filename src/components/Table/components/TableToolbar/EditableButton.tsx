import { FC } from "react";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EditOffOutlinedIcon from '@mui/icons-material/EditOffOutlined';
import { Tooltip } from "@mui/material";
import { TableCellElement } from "../../../../core/models/CustomEditor";
import { Editor, Path, Transforms } from "slate";
import { ReactEditor, useSlate } from "slate-react";

interface EditableButtonProps {
  currentCell: TableCellElement
};

const EditableButton: FC<EditableButtonProps> = ({
  currentCell
}) => {
  const editor: Editor = useSlate();
  return (
    <Tooltip title={currentCell.readonly? "编辑模式" : "只读模式"}>
      <span
        style={{
          width: "18px",
          height: "18px"
        }}
        onClick={() => {
          const path: Path = ReactEditor.findPath(editor, currentCell);
          Transforms.setNodes(
            editor,
            { readonly: !currentCell.readonly },
            { at: path }
          );
        }}
      >
        {
          currentCell.readonly?
          <EditOutlinedIcon 
            sx={{
              color: "#949CA2",
              fontSize: "18px",
              '&:hover': {
                cursor: "pointer",
                color: "#414F58"
              }
            }}
          />
          :
          <EditOffOutlinedIcon 
            sx={{
              color: "#949CA2",
              fontSize: "18px",
              '&:hover': {
                cursor: "pointer",
                color: "#414F58"
              }
            }}
          />
        }
      </span>
    </Tooltip>
  )
};
export default EditableButton;