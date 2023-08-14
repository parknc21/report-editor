import { Stack } from "@mui/material";
import { FC, useContext } from "react";
import { TableToolbarState, TableToolbarStateType, tableToolbarStateDefault } from "../../../../core/providers/TableToolbarStateProvider";
import SettingButton from "./SettingButton";
import MergeCellButton from "./MergeCellButton";

const TableToolbar: FC = () => {
  const { tableToolbarState } = useContext<TableToolbarStateType>(TableToolbarState);
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
      <SettingButton 
        currentCell={tableToolbarState.currentCell?? tableToolbarStateDefault.tableToolbarState.currentCell}
      />
      <MergeCellButton />
    </Stack>
  )
};
export default TableToolbar;