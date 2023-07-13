import { FC, PropsWithChildren, createContext, useState } from "react";

interface tableRowsAndColumnsModel {
  rowCount: number;
  colCount: number
};

interface TableState {
  tableNode: any;
  tableIndex: number;
  tableRowsAndColumns: tableRowsAndColumnsModel;
  cols: number[];
}

export interface TableStateContextModel {
  tableState: TableState;
  updateTableState: (tableState: TableState) => void;
};

const TableStateContextDefault: TableStateContextModel = {
  tableState: {
    tableNode: {},
    tableIndex: 1,
    tableRowsAndColumns: {
      rowCount: 0,
      colCount: 0
    },
    cols: []
  },
  updateTableState: () => {}
};

export const TableStateContext = createContext<TableStateContextModel>(TableStateContextDefault);

export const TableStateProvider: FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const { children } = props;
  const [ tableState, setTableState ] = useState<TableState>({ 
    tableNode: {}, 
    tableIndex: 1,
    tableRowsAndColumns: {
      rowCount: 0,
      colCount: 0
    },
    cols: []
  });
  const updateTableState = (tableState: TableState) => {
    setTableState(tableState);
  };
  return (
    <TableStateContext.Provider value={{ tableState, updateTableState }}>
      {children}
    </TableStateContext.Provider>
  )
};
