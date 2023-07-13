import { FC, PropsWithChildren, createContext, useState } from "react";

export interface TableToolbarStateType {
  tableToolbarState: {};
  updateTableToolbarState: (tableToolbarState: {}) => void;
};

const tableToolbarStateDefault = {
  tableToolbarState: {},
  updateTableToolbarState: () => {}
};

export const TableToolbarState = createContext<TableToolbarStateType>(tableToolbarStateDefault);

export const TableToolbarStateProvider: FC<PropsWithChildren> = ({
  children
}) => {
  const [tableToolbarState, setTableToolbarState] = useState<{}>({});
  const updateTableToolbarState = (tableToolbarState: {}) => {
    setTableToolbarState(tableToolbarState);
  };
  return (
    <TableToolbarState.Provider value={{ tableToolbarState, updateTableToolbarState }}>
      {children}
    </TableToolbarState.Provider>
  )
};