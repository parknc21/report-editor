import { FC, PropsWithChildren, createContext, useState } from "react";
import { TableCellElement } from "../models/CustomEditor";

export interface TableToolbarStateType {
  tableToolbarState: {
    currentCell: TableCellElement
  };
  updateTableToolbarState: (tableToolbarState: { currentCell: TableCellElement }) => void;
};

const tableToolbarStateDefault = {
  tableToolbarState: {
    currentCell: {type: "td", id: "", border: [true, true, true, true], readonly: false, children: [{ type: "p", children: [{ text: "" }]}]}
  },
  updateTableToolbarState: () => {}
};

export const TableToolbarState = createContext<TableToolbarStateType>(tableToolbarStateDefault);

export const TableToolbarStateProvider: FC<PropsWithChildren> = ({
  children
}) => {
  const [tableToolbarState, setTableToolbarState] = useState<{ currentCell: TableCellElement }>({currentCell: {type: "td", id: "", border: [true, true, true, true], readonly: false, children: [{ type: "p", children: [{ text: "" }]}]}});
  const updateTableToolbarState = (tableToolbarState: { currentCell: TableCellElement }) => {
    setTableToolbarState(tableToolbarState);
  };
  return (
    <TableToolbarState.Provider value={{ tableToolbarState, updateTableToolbarState }}>
      {children}
    </TableToolbarState.Provider>
  )
};