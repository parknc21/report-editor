import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';

export interface CustomText { 
  text?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: string;
  strikethrough?: string;
  fontSize?: number;
  color?: string;
  highlight?: string;
  subscript?: string;
  supscript?: string;
  type?: string;
  children?: CustomText[];
  id?: string;
  cols?: number[];
};

export interface HeadingElement {
  type: 'heading';
  level: number;
  align?: TextAlign;
  children: CustomText[];
};

export interface ParagraphElement {
  type: 'paragraph' | 'list' | string;
  align?: TextAlign;
  id?: string,
  children: CustomText[];
};

export interface TableElement {
  type: 'table' | string;
  align?: TextAlign;
  id?: string;
  cols?: number[];
  children: TableRowElement[];
};

export interface TableRowElement {
  type: 'tr' | string;
  rowIndex?: string;
  align?: TextAlign;
  id?: string;
  height?: string;
  children: TableCellElement[];
};

export interface TableCellElement {
  type: 'td' | string;
  colIndex?: string;
  align?: TextAlign;
  id?: string;
  border?: {
    top: boolean;
    right: boolean;
    bottom: boolean;
    left: boolean;
  };
  readonly?: boolean;
  rowspan?: number;
  colspan?: number;
  selected?: boolean;
  children: CustomText[];
};

export interface ImageAreaElement {
  type: 'img-area' | string;
  id?: string;
  align?: TextAlign;
  link?: string;
  label?: string;
  width?: string;
  height?: string;
  children: CustomText[];
};

export type CustomElement = ParagraphElement | HeadingElement | TableElement | TableRowElement | TableCellElement | ImageAreaElement;

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}