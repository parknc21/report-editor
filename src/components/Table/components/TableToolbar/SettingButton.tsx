import { Tooltip } from "@mui/material";
import { FC } from "react";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const SettingButton: FC = () => {
  return (
    <Tooltip title="配置单元格">
      <span
        style={{
          width: "18px",
          height: "18px"
        }}
        onClick={() => {}}
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
  )
};
export default SettingButton;