/** @jsxImportSource @emotion/react */
import { FC, PropsWithChildren, useContext } from "react";
import { ImageAreaElementModel } from "../../../core/models/EditorModels";
import { ImageAreaContext, ImageAreaContextModel } from "../../../core/providers/ImageAreaStateProvider";
import { css } from "@emotion/react";

const ImageArea: FC<PropsWithChildren<ImageAreaElementModel>> = ({
  attributes,
  children
}) => {
  const { imageAreaState } = useContext<ImageAreaContextModel>(ImageAreaContext);
  return (
    <div
      {...attributes}
      contentEditable={false}
      style={{
        width: "100%",
        height: "100%",
        textAlign: "center"
      }}
    >
      <div
        css={css`
          display: flex;
        `}
      >
        <div
          css={css`
            height: 50px;
            width: 3px;
            background: rgb(161,161,170);
            margin-right: 10px;
            border-radius: 10px;
          `}
        ></div>
        <img
          id={imageAreaState.imageId}
          src={imageAreaState.imageLink}
          alt={imageAreaState.imageLabel}
          style={{
            width: "50px",
            height: "50px"
          }}
        />
        <div
          css={css`
          height: 50px;
          width: 3px;
          background: rgb(161,161,170);
          margin-left: 10px;
          border-radius: 10px;
        `}
        ></div>
      </div>
      {children}
    </div>
  )
};
export default ImageArea;