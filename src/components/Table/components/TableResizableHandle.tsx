import { FC } from "react";

interface TableResizableHandleProp {
  direction: 'top' | 'right' | 'bottom' | 'left' | "";
  width?: number;
  startMargin?: number;
  endMargin?: number;
  zIndex?: number;
  onMouseDown?: (enent: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onHover?: (enent: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onHoverEnd?: () => void;
};

const TableResizableHandle: FC<TableResizableHandleProp> = ({ 
  direction, 
  width = 10,
  startMargin = 0,
  endMargin = 0,
  zIndex = 40,
  onMouseDown = () => {}, 
  onHover = () => {}, 
  onHoverEnd = () => {},
}) => {
  const isHorizontal = direction === "left" || direction === "right";
  const nearSide = direction;
  const start = isHorizontal? "top" : "left";
  const end = isHorizontal? "bottom" : "right";
  const size = isHorizontal? "width" : "height";
  return (
    <div
      style={{
        position: "absolute",
        zIndex,
        [nearSide]: -width/2,
        [start]: startMargin,
        [end]: endMargin,
        [size]: width,
        cursor: isHorizontal ? 'col-resize' : 'row-resize',
      }}
      onMouseDown={(event) => onMouseDown(event)}
      onMouseOver={(event) => onHover(event)}
      onMouseOut={() => onHoverEnd()}
    ></div>
  )
};
export default TableResizableHandle;