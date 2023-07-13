import { Box } from "@mui/material";
import { FC } from "react";
import Toolbar from "./Toolbar";
import SlateEditor from "./SlateEditor";

const MainPage: FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        overflow: "hidden"
      }}
    >
      <Box
        sx={{
          height: "100%",
          flex: 1,
          padding: "20px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Toolbar />
        <SlateEditor />
      </Box>
    </Box>
  )
};
export default MainPage;