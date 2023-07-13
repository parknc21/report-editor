import { Box, Divider } from "@mui/material";
import { FC } from "react";
import MarkButton from "./MarkButton";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatStrikethroughIcon from '@mui/icons-material/FormatStrikethrough';
import SuperscriptIcon from '@mui/icons-material/Superscript';
import SubscriptIcon from '@mui/icons-material/Subscript';
import FontSize from "./FontSize";
import FontColor from "./FontColor";
import HighlightColor from "./HighlightColor";
import { FormatAlignCenter, FormatAlignJustify, FormatAlignLeft, FormatAlignRight, FormatListBulleted, FormatListNumbered } from "@mui/icons-material";
import BlockButton from "./BlockButton";
import InsertElementButton from "./InsertElementButton";

const Toolbar: FC = () => {  
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'background.paper',
        color: 'text.secondary',
        marginBottom: '5px',
        '& svg': {
          m: 1.5,
        },
        '& hr': {
          mx: 0.5,
        },
        boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
      }}
    >
      <MarkButton format="bold" tooltip="加粗" icon={<FormatBoldIcon />}/>
      <MarkButton format="italic" tooltip="斜体" icon={<FormatItalicIcon />}/>
      <MarkButton format="underline" tooltip="下划线" icon={<FormatUnderlinedIcon />}/>
      <MarkButton format="strikethrough" tooltip="删除线" icon={<FormatStrikethroughIcon />}/>
      <MarkButton format="supscript" tooltip="上标" icon={<SuperscriptIcon />}/>
      <MarkButton format="subscript" tooltip="下标" icon={<SubscriptIcon />}/>
      <Divider orientation="vertical" variant="middle" flexItem/>
      <FontSize tooltip="字号"/>
      <FontColor tooltip="字体颜色"/>
      <HighlightColor tooltip="突出显示"/>
      <Divider orientation="vertical" variant="middle" flexItem/>
      <BlockButton format="left" tooltip="左对齐" icon={<FormatAlignLeft />}/>
      <BlockButton format="center" tooltip="居中对齐" icon={<FormatAlignCenter />}/>
      <BlockButton format="right" tooltip="右对齐" icon={<FormatAlignRight />}/>
      <BlockButton format="justify" tooltip="两端对齐" icon={<FormatAlignJustify />}/>
      <Divider orientation="vertical" variant="middle" flexItem/>
      <BlockButton format="bulleted-list" tooltip="项目符号" icon={<FormatListBulleted />}/>
      <BlockButton format="numbered-list" tooltip="编号列表" icon={<FormatListNumbered />}/>
      <Divider orientation="vertical" variant="middle" flexItem/>
      <InsertElementButton />
    </Box>
  )
};
export default Toolbar;