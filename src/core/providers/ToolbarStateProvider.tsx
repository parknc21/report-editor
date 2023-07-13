import { FC, PropsWithChildren, createContext, useState } from "react";

interface ToolbarStateType {
  fontSize: boolean;
  color: boolean;
  highlight: boolean;
  elementList: boolean;
};

export interface ToolbarStateContextType {
  toolbarState: ToolbarStateType;
  updateToolbarState: (toolbarState: ToolbarStateType) => void;
};
export const ToolbarStateContextDefaultValue = {
  toolbarState: {
    fontSize: false,
    color: false,
    highlight: false,
    elementList: false
  },
  updateToolbarState: () => {}
};
export const ToolbarStateContext = createContext<ToolbarStateContextType>(ToolbarStateContextDefaultValue);

export const ToolbarStateProvider: FC<PropsWithChildren> = ({
  children
}) => {
  const [toolbarState, setToolbarState]= useState<ToolbarStateType>({
    fontSize: false,
    color: false,
    highlight: false,
    elementList: false
  });
  const updateToolbarState = (toolbarState: ToolbarStateType) => {
    setToolbarState(toolbarState);
  };
  return (
    <ToolbarStateContext.Provider value={{ toolbarState, updateToolbarState }}>
      {children}
    </ToolbarStateContext.Provider>
  )
};