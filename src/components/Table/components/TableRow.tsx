/** @jsxImportSource @emotion/react */
import { FC, PropsWithChildren } from "react";
import { css } from "@emotion/react";
import { TableElementModel } from "../../../core/models/EditorModels";

const TableRow: FC<PropsWithChildren<TableElementModel>> = ({ 
  attributes, 
  children 
}) => {
  return (
    <tr
      css={css`
        height: 100%;
      `}
      {...attributes}
    >
      {children}
    </tr>
  )
};
export default TableRow;