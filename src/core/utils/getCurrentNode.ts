import { Path, Element, Editor } from "slate";

const getParentPath = (
  path: Path
): Path => {
  if(path.length > 1) {
    return getParentPath(Path.parent(path))
  } else {
    return path;
  };
};

export const getCurrentNode =  (
  editor: Editor,
  path: Path
): Element => {
  const element = Editor.node(editor, getParentPath(path))[0] as any as Element;
  return element
};