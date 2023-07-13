/** @jsxImportSource @emotion/react */
import { RenderLeafProps } from "slate-react";
import { css } from '@emotion/react';

export const Leaf = ({ attributes, children, leaf }: RenderLeafProps): JSX.Element => {
  if (
      leaf.bold || leaf.italic || leaf.underline || leaf.strikethrough ||
      leaf.fontSize || leaf.color || leaf.highlight
    ) {
    children = 
    <span 
      css={css`
        font-weight: ${leaf.bold? 'bold' : 'normal'};
        font-style: ${leaf.italic? 'italic' : 'normal'};
        text-decoration: ${
          leaf.underline && leaf.strikethrough? 'underline line-through' : 
          leaf.underline? 'underline' :
          leaf.strikethrough? 'line-through' : 'none'
        };
        font-size: ${leaf.fontSize?? 16}px;
        color: ${leaf.color?? '#000'};
        background: ${leaf.highlight?? '#fff'};
        
      `}
    >
      {children}
    </span>
  }
  if(leaf.supscript) {
    children = <sup>{children}</sup>
  }
  if(leaf.subscript) {
    children = <sub>{children}</sub>
  }
  return <span {...attributes}>{children}</span>
}