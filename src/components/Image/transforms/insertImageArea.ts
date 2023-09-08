import { Editor, Transforms } from "slate";
import { getEmptyImageAreaNode } from "../utils/getEmptyImageAreaNode";

interface InsertImageAreaProps {
  editor: Editor;
  imageId: string;
  imageLink: string;
  imageLabel: string;
  imageWidth: string;
  imageHeight: string;
};

export const insertImageArea = ({
  editor,
  imageId,
  imageLink,
  imageLabel,
  imageWidth,
  imageHeight
}: InsertImageAreaProps) => {
  Transforms.insertNodes(editor, getEmptyImageAreaNode({ imageId, imageLink, imageLabel, imageWidth, imageHeight }));
};