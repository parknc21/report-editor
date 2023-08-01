const getRowAndColIndexArray = (array: number) => {
  const newArray: number[] = [];
  for(let i=0; i<=array; i++) {
    newArray.push(i);
  };
  return newArray;
};

export const getSelectCellNode = (
  rowIndex: number,
  colIndex: number,
  tablePath: number[]
) => {
  const rowIndexArray = getRowAndColIndexArray(rowIndex);
  const colIndexArray = getRowAndColIndexArray(colIndex);
  const selectCellNodeArray: number[][] = [];
  for(let i=0; i<rowIndexArray.length; i++) {
    for(let j=0; j<colIndexArray.length; j++) {
      selectCellNodeArray.push([...tablePath, ...[rowIndexArray[i], colIndexArray[j]]]);
    };
  };
  return selectCellNodeArray;
};