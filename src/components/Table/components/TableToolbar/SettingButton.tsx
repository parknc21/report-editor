import { Tooltip } from "@mui/material";
import { FC, useState } from "react";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import TableCellSettingDialog from "../TableCellSettingDialog";
import { TableCellElement } from "../../../../core/models/CustomEditor";

interface SettingButtonProps {
  currentCell: TableCellElement
};
const SettingButton: FC<SettingButtonProps> = ({
  currentCell
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <>
      <Tooltip title="配置单元格">
        <span
          style={{
            width: "18px",
            height: "18px"
          }}
          onClick={handleClick}
        >
          <SettingsOutlinedIcon
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
      <TableCellSettingDialog 
        open={visible}
        handleClose={handleClick}
        currentCell={currentCell}
      />
    </>
  )
};
export default SettingButton;