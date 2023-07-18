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
  type: 'table';
  align?: TextAlign;
  id?: string;
  cols?: number[];
  children: TableRowElement[];
};

export interface TableRowElement {
  type: 'tr';
  rowIndex?: string;
  align?: TextAlign;
  id?: string;
  height?: number;
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
  children: CustomText[];
};

export interface ImageAreaElement {
  type: 'img-area';
  id?: string;
  align?: TextAlign;
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