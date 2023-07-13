import { FC, PropsWithChildren, createContext, useState } from "react";

export interface SlateElementListContextType {
  visible: boolean;
  updateState: (visible: boolean) => void;
};

const defaultSlateElementListContext: SlateElementListContextType = {
  visible: false,
  updateState: () => {}
};

export const slateElementListContext = createContext<SlateElementListContextType>(defaultSlateElementListContext);

export const SlateElementListProvider: FC<PropsWithChildren> = ({
  children
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const updateState = (visible: boolean) => {
    setVisible(visible);
  };
  return (
    <slateElementListContext.Provider value={{ visible, updateState }}>
      {children}
    </slateElementListContext.Provider>
  )
};