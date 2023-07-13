import { ReactNode } from "react"
import { Element } from "slate";

export interface ToolbarButtonModel {
  format: string,
  icon: ReactNode
  tooltip: string
};

export interface FontSizeModel {
  tooltip: string
};

export interface FontColorModel {
  tooltip: string
};

export interface HighlightColorModel {
  tooltip: string
};

export interface HeadingTitleModel {
  tooltip: string
};

export interface TableElementModel {
  attributes: {
    'data-slate-node': 'element';
    'data-slate-inline'?: true;
    'data-slate-void'?: true;
    dir?: 'rtl';
    ref: any;
  },
  colIndex?: number,
  element?: Element,
  width?: number,
  children: any
};