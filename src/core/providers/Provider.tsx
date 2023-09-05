import { FC, PropsWithChildren } from "react";
import SlateProvider from "./SlateProvider";
import { TableStateProvider } from "./TableStateProvider";
import { ToolbarStateProvider } from "./ToolbarStateProvider";
import { ElementInfoProvider } from "./ElementInfoProvider";
import { SlateElementListProvider } from "./SlateElementListProvider";
import { TableToolbarStateProvider } from "./TableToolbarStateProvider";
import ImageAreaProvider from "./ImageAreaStateProvider";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SlateProvider>
      <ElementInfoProvider>
        <SlateElementListProvider>
          <TableStateProvider>
            <ImageAreaProvider>
              <ToolbarStateProvider>
                <TableToolbarStateProvider>
                  {children}
                </TableToolbarStateProvider>
              </ToolbarStateProvider>
            </ImageAreaProvider>
          </TableStateProvider>
        </SlateElementListProvider>
      </ElementInfoProvider>
    </SlateProvider>
  )
};
export default Providers;