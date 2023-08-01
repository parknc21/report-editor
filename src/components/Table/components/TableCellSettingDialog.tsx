import { Box, Button, Dialog, DialogActions, DialogContent, FormControlLabel, Grid, Switch, TextField, Typography } from "@mui/material";
import { FC, useContext, useState } from "react";
import { TableCellElement } from "../../../core/models/CustomEditor";
import { Editor, Path, Transforms } from "slate";
import { ReactEditor, useSlate } from "slate-react";
import TableCellBorderHideCheckbox, { BorderHideStateType } from "./TableCellBorderHideCheckbox";
import { TableStateContext } from "../../../core/providers/TableStateProvider";
import { getDiffBorder } from "../utils/getDiffBorder";

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
  const [borderState, setBorderState] = useState<BorderHideStateType>({ top: true, right: true, bottom: true, left: true });
  const { tableState } = useContext(TableStateContext);

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
    //设置单元格边框显示
    const x = path[1];
    const y = path[2];
    const topPath = x-1>=0? [1, x-1, y] : null;
    const rightPath = y+1<=tableState.tableRowsAndColumns.colCount-1? [1, x, y+1] : null;
    const bottomPath = x+1<=tableState.tableRowsAndColumns.rowCount-1? [1, x+1, y] : null;
    const leftPath = y-1>=0? [1, x, y-1] : null;
    Transforms.setNodes(
      editor,
      { border: borderState },
      { at: path }
    );
    //设置相邻单元格边框显示
    const diff = getDiffBorder(currentCell.border?? { top: true, right: true, bottom: true, left: true }, borderState);
    if(topPath && diff.includes("top")) {
      const topCell  = Editor.node(editor, topPath) as any as TableCellElement;
      Transforms.setNodes(
        editor,
        { border: {...topCell.border?? { top: true, right: true, bottom: true, left: true }, bottom: borderState.top} },
        { at: topPath }
      );
    };
    if(rightPath && diff.includes("right")) {
      const rightCell  = Editor.node(editor, rightPath) as any as TableCellElement;
      Transforms.setNodes(
        editor,
        { border: {...rightCell.border?? { top: true, right: true, bottom: true, left: true }, left: borderState.right} },
        { at: rightPath }
      );
    };
    if(bottomPath && diff.includes("bottom")) {
      const bottomCell  = Editor.node(editor, bottomPath) as any as TableCellElement;
      Transforms.setNodes(
        editor,
        { border: {...bottomCell.border?? { top: true, right: true, bottom: true, left: true }, top: borderState.bottom} },
        { at: bottomPath }
      );
    };
    if(leftPath && diff.includes("left")) {
      const leftCell  = Editor.node(editor, leftPath) as any as TableCellElement;
      Transforms.setNodes(
        editor,
        { border: {...leftCell.border?? { top: true, right: true, bottom: true, left: true }, right: borderState.left} },
        { at: leftPath }
      );
    };
  };
  const toggleReadonly = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, readonly: event.target.checked });
  };
  const cellIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, cellId: event.target.value });
  };
  const transferBorderHideState = (state: BorderHideStateType) => {
    setBorderState(state);
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
            <Grid container>
              <Grid item xs={12} sm={6} sx={{ textAlign: "left" }}>
                <FormControlLabel
                  control={
                    <Switch 
                      checked={state.readonly} 
                      onChange={toggleReadonly} 
                      name="readonly" 
                    />
                  }
                  label="只读"
                  labelPlacement="start"
                  sx={{
                    marginLeft: 0
                  }}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} sx={{ textAlign: "left" }}>
                <FormControlLabel
                  control={
                    <TableCellBorderHideCheckbox 
                      transferBorderHideState={transferBorderHideState}
                    />
                  }
                  label="边框"
                  labelPlacement="start"
                  sx={{
                    marginLeft: 0
                  }}
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