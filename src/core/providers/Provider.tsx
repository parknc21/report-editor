import { FC, PropsWithChildren } from "react";
import SlateProvider from "./SlateProvider";
import { TableStateProvider } from "./TableStateProvider";
import { ToolbarStateProvider } from "./ToolbarStateProvider";
import { ElementInfoProvider } from "./ElementInfoProvider";
import { SlateElementListProvider } from "./SlateElementListProvider";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SlateProvider>
      <ElementInfoProvider>
        <SlateElementListProvider>
          <TableStateProvider>
            <ToolbarStateProvider>
              {children}
            </ToolbarStateProvider>
          </TableStateProvider>
        </SlateElementListProvider>
      </ElementInfoProvider>
    </SlateProvider>
  )
};
export default Providers;