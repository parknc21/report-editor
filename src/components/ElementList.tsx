import { Box, Paper, styled } from "@mui/material";
import { FC, useState } from "react";
import BorderAllIcon from '@mui/icons-material/BorderAll';
import ConfigTableDialog from "./Table/components/ConfigTableDialog";
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ConfigImageAreaDialog from "./Image/components/ConfigImageAreaDialog";

const Item = styled(Paper)(() => ({
  borderRadius: 0,
  height: "40px",
  margin: "1px",
  '&:hover': {
    cursor: "pointer",
    background: "#ebedf0"
  },
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  lineHeight: "40px"
}));

const ElementList: FC = () => {
  const [configTableDialogOpen, setConfigTableDialogOpen] = useState<boolean>(false);
  const [configImageAreaDialogOpen, setConfigImageAreaDialogOpen] = useState<boolean>(false);
  const ControlConfigTableDialogOpen = () => {
    setConfigTableDialogOpen(true);
  };
  const closeTableDialog = () => {
    setConfigTableDialogOpen(false);
  };
  const ControlConfigImageAreaDialogOpen = () => {
    setConfigImageAreaDialogOpen(!configImageAreaDialogOpen);
  };
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          zIndex: 1000,
          width: "150px",
          background: "#fff",
          marginTop: "10px",
          border: "1px solid #ebedf0"
        }}
      >
        <Item elevation={0} onClick={ControlConfigTableDialogOpen}>
          <BorderAllIcon />表格
        </Item>
        <Item elevation={0} onClick={ControlConfigImageAreaDialogOpen}>
          <InsertPhotoOutlinedIcon />图片域
        </Item>
      </Box>
      <ConfigTableDialog 
        open={configTableDialogOpen}
        handleClose={closeTableDialog}
      />
      <ConfigImageAreaDialog 
        open={configImageAreaDialogOpen}
        handleClose={ControlConfigImageAreaDialogOpen}
      />
    </>
  )
};
export default ElementList;