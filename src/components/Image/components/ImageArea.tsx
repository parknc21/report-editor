import { FC, PropsWithChildren } from "react";
import { ImageAreaElementModel } from "../../../core/models/EditorModels";

const ImageArea: FC<PropsWithChildren<ImageAreaElementModel>> = ({
  attributes,
  children
}) => {
  return (
    <div
      {...attributes}
    >
      <img
        src="https://picx.zhimg.com/v2-3b4fc7e3a1195a081d0259246c38debc_720w.jpg?source=172ae18b"
        alt="dolphin"
        style={{
          width: "50px",
          height: "50px"
        }}
      />
      {children}
    </div>
  )
};
export default ImageArea;