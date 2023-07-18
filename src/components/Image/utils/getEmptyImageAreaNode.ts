import { ImageAreaElement } from "../../../core/models/CustomEditor";

export const getEmptyImageAreaNode = (): ImageAreaElement => {
  return {
    type: 'img-area',
    id: "",
    children: [{ type: "p", children: [{ text: "" }] }]
  }
};