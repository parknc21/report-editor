export const getDiffBorder = (
  oldBorderState: { top: boolean, right: boolean, bottom: boolean, left: boolean },
  newBorderState: { top: boolean, right: boolean, bottom: boolean, left: boolean }
) => {
  const diffArray: string[] = [];
  if(oldBorderState.top !== newBorderState.top) diffArray.push("top");
  if(oldBorderState.right !== newBorderState.right) diffArray.push("right");
  if(oldBorderState.bottom !== newBorderState.bottom) diffArray.push("bottom");
  if(oldBorderState.left !== newBorderState.left) diffArray.push("left");
  return diffArray;
};