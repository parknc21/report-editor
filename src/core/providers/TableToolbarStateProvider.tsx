import { FC, PropsWithChildren, createContext, useState } from "react";
import { TableCellElement } from "../models/CustomEditor";

interface TableToolbarStateModel {
  currentCell?: TableCellElement;
  selectedPathEntry?: number[][];
};

export interface TableToolbarStateType {
  tableToolbarState: TableToolbarStateModel;
  updateTableToolbarState: (tableToolbarState: TableToolbarStateModel) => void;
};

export const tableToolbarStateDefault = {
  tableToolbarState: {
    currentCell: {type: "td", id: "", border: { top: true, right: true, bottom: true, left: true }, readonly: false, children: [{ type: "p", children: [{ text: "" }]}]},
    selectedPathEntry: []
  },
  updateTableToolbarState: () => {}
};

export const TableToolbarState = createContext<TableToolbarStateType>(tableToolbarStateDefault);

export const TableToolbarStateProvider: FC<PropsWithChildren> = ({
  children
}) => {
  const [tableToolbarState, setTableToolbarState] = useState<TableToolbarStateModel>(tableToolbarStateDefault.tableToolbarState);
  const updateTableToolbarState = (tableToolbarState: TableToolbarStateModel) => {
    setTableToolbarState(tableToolbarState);
  };
  return (
    <TableToolbarState.Provider value={{ tableToolbarState, updateTableToolbarState }}>
      {children}
    </TableToolbarState.Provider>
  )
};