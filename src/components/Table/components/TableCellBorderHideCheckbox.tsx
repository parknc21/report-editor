import { Box, Checkbox, Tooltip } from "@mui/material";
import { FC, useState } from "react";

export interface BorderHideStateType {
  top: boolean;
  right: boolean;
  bottom: boolean;
  left: boolean;
};
interface TableCellBorderHideCheckboxProps {
  transferBorderHideState: (state: BorderHideStateType) => void;
};

const TableCellBorderHideCheckbox: FC<TableCellBorderHideCheckboxProps> = ({
  transferBorderHideState
}) => {
  const [state, setState] = useState<BorderHideStateType>({ top: true, right: true, bottom: true, left: true });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.checked
    });
    transferBorderHideState({
      ...state,
      [e.target.name]: e.target.checked
    });
  };
  return (
    <Box>
      <Tooltip title="上边框">
        <Checkbox checked={state.top} onChange={handleChange} name="top" />
      </Tooltip>
      <Tooltip title="右边框">
        <Checkbox checked={state.right} onChange={handleChange} name="right" />
      </Tooltip>
      <Tooltip title="下边框">
        <Checkbox checked={state.bottom} onChange={handleChange} name="bottom" />
      </Tooltip>
      <Tooltip title="左边框">
        <Checkbox checked={state.left} onChange={handleChange} name="left" />
      </Tooltip>
    </Box>
  )
};
export default TableCellBorderHideCheckbox;