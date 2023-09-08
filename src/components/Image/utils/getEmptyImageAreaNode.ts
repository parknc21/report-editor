import { ImageAreaElement } from "../../../core/models/CustomEditor";

interface EmptyImageAreaNodePropsModel {
  imageId: string;
  imageLink: string;
  imageLabel: string;
  imageWidth: string;
  imageHeight: string;
};

export const getEmptyImageAreaNode = ({
  imageId,
  imageLink,
  imageLabel,
  imageWidth,
  imageHeight
}: EmptyImageAreaNodePropsModel): ImageAreaElement => {
  return {
    type: 'img-area',
    id: imageId,
    link: imageLink,
    label: imageLabel,
    width: imageWidth,
    height: imageHeight,
    children: [{ type: "p", children: [{ text: "" }] }]
  }
};