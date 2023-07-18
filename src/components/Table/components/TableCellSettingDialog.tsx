import { Box, Button, Dialog, DialogActions, DialogContent, FormControlLabel, Grid, Switch, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import { TableCellElement } from "../../../core/models/CustomEditor";
import { Editor, Path, Transforms } from "slate";
import { ReactEditor, useSlate } from "slate-react";

interface TableCellSettingDialogProps {
  open: boolean;
  handleClose: () => void;
  currentCell: TableCellElement;
};

interface SettingStateType {
  readonly: boolean;
  cellId: string;
};

const TableCellSettingDialog: FC<TableCellSettingDialogProps> = ({
  open,
  handleClose,
  currentCell
}) => {
  const editor: Editor = useSlate();
  const [state, setState] = useState<SettingStateType>({ readonly: false, cellId: "" });
  const handleSubmit = () => {
    handleClose();
    //设置单元格只读
    const path: Path = ReactEditor.findPath(editor, currentCell);
    Transforms.setNodes(
      editor,
      { readonly: state.readonly },
      { at: path }
    );
    //设置单元格ID
    Transforms.setNodes(
      editor,
      { id: state.cellId },
      { at: path }
    );
  };
  const toggleReadonly = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, readonly: event.target.checked });
  };
  const cellIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, cellId: event.target.value });
  };
  return (
    <Dialog 
      open={open}
      onClose={handleClose}
      disableEscapeKeyDown={true}
    >
      <Box
        sx={{
          textAlign: "center",
          padding: "5px"
        }}
      >
        <Typography component="h1" variant="h5">单元格配置</Typography>
        <DialogContent>
          <Box component="form">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  name="CellId"
                  fullWidth
                  id="CellId"
                  label="单元格ID"
                  autoFocus
                  value={state.cellId}
                  onChange={cellIdChange}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.readonly}
                      name="readonly"
                      onChange={toggleReadonly}
                    />
                  }
                  label="只读"
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={handleSubmit} autoFocus>确认</Button>
        </DialogActions>
      </Box>
    </Dialog >
  )
};
export default TableCellSettingDialog;