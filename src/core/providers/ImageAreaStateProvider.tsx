import { FC, PropsWithChildren, createContext, useState } from "react";

interface ImageStateModel {
  imageId: string;
  imageLink: string;
  imageLabel: string;
};

export interface ImageAreaContextModel {
  imageAreaState: ImageStateModel;
  updateIamgeAreaState: (imageAreaState: ImageStateModel) => void;
};

const defaultImageAreaContextValue = {
  imageAreaState: {
    imageId: "",
    imageLink: "",
    imageLabel: ""
  },
  updateIamgeAreaState: () => {}
};

export const ImageAreaContext = createContext<ImageAreaContextModel>(defaultImageAreaContextValue);

const ImageAreaProvider: FC<PropsWithChildren> = ({
  children
}) => {
  const [imageAreaState, setImageAreaState] = useState<ImageStateModel>({ imageId: "", imageLink: "", imageLabel: "" });

  const updateIamgeAreaState = (state: ImageStateModel) => {
    setImageAreaState(state);
  };
  return (
    <ImageAreaContext.Provider value={{ imageAreaState, updateIamgeAreaState }}>
      {children}
    </ImageAreaContext.Provider>
  )
};
export default ImageAreaProvider;
