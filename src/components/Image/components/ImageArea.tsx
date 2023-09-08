import { FC, PropsWithChildren, useState } from "react";
import { ImageAreaElementModel } from "../../../core/models/EditorModels";
import ConfigImageAreaDialog from "./ConfigImageAreaDialog";
import { Editor } from "slate";
import { ReactEditor, useSlate } from "slate-react";
import { ImageAreaElement } from "../../../core/models/CustomEditor";

const ImageArea: FC<PropsWithChildren<ImageAreaElementModel>> = ({
  attributes,
  children,
  element
}) => {
  const editor: Editor = useSlate();
  const [settingOpen, setSettingOpen] = useState<boolean>(false);
  const [selectedNode, setSelectedNode] = useState<ImageAreaElement>({ type: 'img-area', id: "", link: "", label: "", width: "", height: "", children: [{ type: "p", children: [{ text: "" }] }] });

  const handleSettingClose = () => {
    setSettingOpen(false);
    setSelectedNode({ type: 'img-area', id: "", link: "", label: "", width: "", height: "", children: [{ type: "p", children: [{ text: "" }] }] });
  };

  return (
    <div
      {...attributes}
      contentEditable={false}
      style={{
        textAlign: "center"
      }}
    >
      <img
        id={element?.id}
        src={element?.link}
        alt={element?.label}
        style={{
          width: `${element?.width}px`,
          height: `${element?.height}px`,
          cursor: "pointer",
          position: "relative"
        }}
        onClick={(e) => {
          const dom = e.target as any as HTMLElement;
          const element = ReactEditor.toSlateNode(editor, dom) as any as ImageAreaElement;
          setSelectedNode(element)
          setSettingOpen(true);
        }}
      />
      {children}
      <ConfigImageAreaDialog
        open={settingOpen}
        handleClose={handleSettingClose}
        imageInfo={{ 
          imageId: selectedNode.id?? "", 
          imageLink: selectedNode.link?? "",
          imageLabel: selectedNode.label?? "",
          imageWidth: selectedNode.width?? "",
          imageHeight: selectedNode.height?? "" 
        }}
      />
    </div>
  )
};
export default ImageArea;