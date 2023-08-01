import { FC, PropsWithChildren, createContext, useState } from "react";

interface TableCellSettingStateModel {
  readonly: boolean;
  borderState: { top: boolean, right: boolean, bottom: boolean, left: boolean }
};

export interface TableCellSettingContextModel {
  tableCellSettingState: TableCellSettingStateModel;
  updateTableCellSettingState: (tableCellSettingState: TableCellSettingStateModel) => void;
};

const TableCellSettingContextDefault: TableCellSettingContextModel = {
  tableCellSettingState: {
    readonly: false,
    borderState: { top: true, right: true, bottom: true, left: true }
  },
  updateTableCellSettingState: () => {}
};

export const TableCellSettingContext = createContext<TableCellSettingContextModel>(TableCellSettingContextDefault);

export const TableCellSettingProvider: FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const { children } = props;
  const [tableCellSettingState, setTableCellSettingState] = useState<TableCellSettingStateModel>({
    readonly: false,
    borderState: { top: true, right: true, bottom: true, left: true }
  });
  const updateTableCellSettingState = (state: TableCellSettingStateModel) => {
    setTableCellSettingState(state);
  };
  return (
    <TableCellSettingContext.Provider value={{ tableCellSettingState, updateTableCellSettingState}}>
      {children}
    </TableCellSettingContext.Provider>
  )
}