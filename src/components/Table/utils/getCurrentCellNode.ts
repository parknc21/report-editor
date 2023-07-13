import { Editor, Path } from "slate";

export const getCurrentCellNode = (
  editor: Editor,
  path: Path
) => {
  const element = Editor.node(editor, Path.parent(Path.parent(path)))[0] as any as Element;
  return element;
};