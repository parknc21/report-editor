import { FC, PropsWithChildren, useContext } from "react";
import { ImageAreaElementModel } from "../../../core/models/EditorModels";
import { ImageAreaContext, ImageAreaContextModel } from "../../../core/providers/ImageAreaStateProvider";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

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
        textAlign: "center"
      }}
    >
      <img
        id={imageAreaState.imageId}
        src={imageAreaState.imageLink}
        alt={imageAreaState.imageLabel}
        style={{
          width: `${imageAreaState.imageWidth}px`,
          height: `${imageAreaState.imageHeight}px`,
          cursor: "pointer",
          position: "relative"
        }}
        onMouseDown={e => {
          e.preventDefault();
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          cursor: "pointer",
          left: "44%",
          marginTop: "20px",
          border: "1px solid rgb(236, 236, 236)",
          boxShadow: "0 4px 6px -1px rgb(236, 236, 236)",
          color: "#09090B",
          fontSize: "14px",
          padding: "0 12px",
          height: "45px",
          borderRadius: "10px"
        }}
      >
        <SettingsOutlinedIcon />修改配置
      </div>
      {children}
    </div>
  )
};
export default ImageArea;