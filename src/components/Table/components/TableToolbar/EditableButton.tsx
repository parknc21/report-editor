import { FC } from "react";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EditOffOutlinedIcon from '@mui/icons-material/EditOffOutlined';
import { Tooltip } from "@mui/material";

const EditableButton: FC = () => {
  return (
    <Tooltip title="可编辑">
      <span
        style={{
          width: "18px",
          height: "18px"
        }}
        onClick={() => {

        }}
      >
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
        {/* <EditOutlinedIcon 
          sx={{
            color: "#949CA2",
            fontSize: "18px",
            '&:hover': {
              cursor: "pointer",
              color: "#414F58"
            }
          }}
        /> */}
      </span>
    </Tooltip>
  )
};
export default EditableButton;