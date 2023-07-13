import { FC, PropsWithChildren } from "react";
import SlateProvider from "./SlateProvider";
import { TableStateProvider } from "./TableStateProvider";
import { ToolbarStateProvider } from "./ToolbarStateProvider";
import { ElementInfoProvider } from "./ElementInfoProvider";
import { SlateElementListProvider } from "./SlateElementListProvider";
import { TableToolbarStateProvider } from "./TableToolbarStateProvider";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SlateProvider>
      <ElementInfoProvider>
        <SlateElementListProvider>
          <TableStateProvider>
            <ToolbarStateProvider>
              <TableToolbarStateProvider>
                {children}
              </TableToolbarStateProvider>
            </ToolbarStateProvider>
          </TableStateProvider>
        </SlateElementListProvider>
      </ElementInfoProvider>
    </SlateProvider>
  )
};
export default Providers;