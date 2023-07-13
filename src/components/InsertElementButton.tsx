/** @jsxImportSource @emotion/react */
import { FC, useContext } from "react";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Box, css } from "@mui/material";
import ElementList from "./ElementList";
import { ToolbarStateContext, ToolbarStateContextType } from "../core/providers/ToolbarStateProvider";

const InsertElementButton: FC = () => {
  const { toolbarState, updateToolbarState } = useContext<ToolbarStateContextType>(ToolbarStateContext);
  
  const showElementList = () => {
    updateToolbarState({ fontSize: false, color: false, highlight: false, elementList: !toolbarState.elementList });
  };
  return (
    <Box
      sx={{
        width: "125px",
        position: "relative"
      }}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          cursor: pointer;
          color: #949CA2;
          &:hover {
            color: #414F58;
          }
        `}
        onClick={showElementList}
      >
        <AddOutlinedIcon />添加组件
      </div>
      { toolbarState.elementList && <ElementList /> }
    </Box>
  )
};
export default InsertElementButton;