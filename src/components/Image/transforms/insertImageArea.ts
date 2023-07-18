import { Editor, Transforms } from "slate";
import { getEmptyImageAreaNode } from "../utils/getEmptyImageAreaNode";

interface InsertImageAreaProps {
  editor: Editor;
};

export const insertImageArea = ({
  editor
}: InsertImageAreaProps) => {
  Transforms.insertNodes(editor, getEmptyImageAreaNode());
};