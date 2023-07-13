import { Stack } from "@mui/material";
import { FC } from "react";
import EditableButton from "./EditableButton";

const TableToolbar: FC = () => {
  return (
    <Stack
      direction="row" 
      spacing={2}
      sx={{
        width: "fit-content",
        boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
        padding: "3px",
        position: "absolute",
        top: "-28px"
      }}
    >
      <EditableButton />
    </Stack>
  )
};
export default TableToolbar;