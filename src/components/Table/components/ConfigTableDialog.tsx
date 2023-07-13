import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { FC, useContext, useState } from "react";
import { useSlate } from "slate-react";
import { Editor } from "slate";
import { insertTable } from "../transforms/insertTable";
import { TableStateContext } from "../../../core/providers/TableStateProvider";
import { ToolbarStateContext, ToolbarStateContextType } from "../../../core/providers/ToolbarStateProvider";

interface ConfigTableDialogModel {
  open: boolean;
  onClose: () => void;
};

interface tableRowsAndColumnsModel {
  rowCount: number,
  colCount: number
};

const ConfigTableDialog: FC<ConfigTableDialogModel> = ({
  open,
  onClose
}) => {
  const editor: Editor = useSlate();
  const [ tableRowsAndColumns, setTableRowsAndColumns ] = useState<tableRowsAndColumnsModel>({ rowCount: 4, colCount: 4 });
  const { tableState, updateTableState } = useContext(TableStateContext);
  const { updateToolbarState } = useContext<ToolbarStateContextType>(ToolbarStateContext);

  const cancelCreateTable = () => {
    onClose();
  };
  const confirmCreateTable = () => {
    const tableArray = editor.children.filter(item => item.type === "table");
    updateTableState({
      ...tableState, 
      tableIndex: tableArray.length + 1, 
      tableRowsAndColumns: { rowCount: tableRowsAndColumns.rowCount, colCount: tableRowsAndColumns.colCount }
    });
    const insertProps = {
      editor, 
      baseTableRowsAndColumns: tableRowsAndColumns
    };
    insertTable(insertProps);
    // MyEditor.insertNodeEnd(editor);
    updateToolbarState({ fontSize: false, color: false, highlight: false, elementList: false });
    onClose();
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        disableEscapeKeyDown={true}
      >
        <DialogTitle>创建表格</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              width: '200px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <TextField 
              sx={{ width: '70px' }} 
              name="rows" 
              label="行数" 
              variant="standard" 
              value={tableRowsAndColumns.rowCount}
              type="number"
              inputProps={{ min: 1 }}
              onChange={e => {setTableRowsAndColumns({ ...tableRowsAndColumns, rowCount: Number(e.target.value) })}}
            />
            <TextField 
              sx={{ width: '70px' }} 
              name="columns" 
              label="列数" 
              variant="standard"
              value={tableRowsAndColumns.colCount}
              type="number"
              inputProps={{ min: 1 }}
              onChange={e => {setTableRowsAndColumns({ ...tableRowsAndColumns, colCount: Number(e.target.value) })}}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelCreateTable}>取消</Button>
          <Button onClick={confirmCreateTable} autoFocus>确认</Button>
        </DialogActions>
      </Dialog>
    </>
  )
};
export default ConfigTableDialog;