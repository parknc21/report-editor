export const getEmptyCellNode = () => {
  return {
    type: "td",
    children: [{ 
      type: "p", 
      children: [{ text: "" }]
    }]
  };
};