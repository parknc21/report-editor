import { FC, PropsWithChildren, createContext, useState } from "react";
import { Element } from "slate";

export interface ElementInfoContextType {
  elementInfoState: Element;
  updateElementInfoState: (elementInfoState: Element) => void;
};

const elementInfoContextDefault = {
  elementInfoState: { type: 'paragraph', children: [{ text: '' }] },
  updateElementInfoState: () => {}
};

export const ElementInfoContext = createContext<ElementInfoContextType>(elementInfoContextDefault);

export const ElementInfoProvider: FC<PropsWithChildren> = ({
  children
}) => {
  const [elementInfoState, setElementInfoState] = useState<Element>({ type: 'paragraph', children: [{ text: '' }] });
  const updateElementInfoState = (state: Element) => {
    setElementInfoState(state);
  };
  return (
    <ElementInfoContext.Provider value={{ elementInfoState, updateElementInfoState }}>
      {children}
    </ElementInfoContext.Provider>
  )
};