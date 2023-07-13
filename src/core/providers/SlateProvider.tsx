import { FC, PropsWithChildren, useState } from "react";
import { Slate, withReact } from "slate-react";
import { CustomElement } from "../models/CustomEditor";
import { createEditor } from "slate";

const SlateProvider: FC<PropsWithChildren> = ({ children }) => {
  const [editor] = useState(() => withReact(createEditor()));
  const INITIAL_VALUE: CustomElement[] = [
    { 
      type: 'paragraph',
      children: [{ text: '' }]
    }
  ];
  const [ value, setValue ] = useState<CustomElement[]>(INITIAL_VALUE);
  window.onkeydown = (event) => {
    if(event.key === "Backspace") {
      console.log(editor.selection)
    };
  };
  
  return (
    <Slate 
      editor={editor} 
      initialValue={value}
      onChange={(e: any) => setValue(e)}
    >
      {/* {JSON.stringify(value)} */}
      {children}
    </Slate>
  )
};
export default SlateProvider;