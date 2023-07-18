import { Box, Button, Dialog, DialogActions, DialogContent, TextField, Typography } from "@mui/material";
import { FC } from "react";
import { Editor } from "slate";
import { useSlate } from "slate-react";
import { insertImageArea } from "../transforms/insertImageArea";

interface ConfigImageAreaDialogProps {
  open: boolean;
  handleClose: () => void;
};

const ConfigImageAreaDialog: FC<ConfigImageAreaDialogProps> = ({
  open, 
  handleClose
}) => {
  const editor: Editor = useSlate();
  const handleConfirm = () => {
    insertImageArea({ editor });
    handleClose();
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <Box
        sx={{
          textAlign: "center",
          padding: "10px"
        }}
      >
        <Typography variant="h5" gutterBottom>配置图像域</Typography>
        <DialogContent>
          <TextField
            id="imgAreaId" 
            label="图像域ID" 
            variant="outlined"
            size="small"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={handleConfirm}>确认</Button>
        </DialogActions>
      </Box>
    </Dialog>
  )
};
export default ConfigImageAreaDialog;