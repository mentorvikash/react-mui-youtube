import React from "react";
import "./App.css";
// import MuiSnackBar from "./components/D33 SnackBar/MuiSnackBar";
// import MuiDialog from "./components/D34 Dialog/MuiDialog";
// import MuiProgressBar from "./components/D35 ProgressBar/MuiProgressBar";
// import MuiSkleton from "./components/D36 Skleton/MuiSkleton";
// import MuiLodingBtn from "./components/D37 LodingBtn/MuiLodingBtn";
import MuiDateTime from "./components/D38 DateTime/MuiDateTime";
import MuiDateRangePicker from "./components/D39 DateRangePicker/MuiDateRangePicker";
// import MuiList from "./components/D28List/MuIList";
// import MuiTooltip from "./components/D30Tooltip/MuiTooltip";
// import MuiTable from "./components/D31Table/MuiTable";
// import MuiAlert from "./components/D32Alert/MuiAlert";
// import MuiChip from "./components/D28Clip/MuiCliip";
// import MuiBatch from "./components/D27Badge/MuiBadge";
// import MuiBottomNavigatoin from "./components/D26BottomNavigatoin/MuiBottomNavigatoin";
// import MuiAvatar from "./components/D25Avatar/MuiAvatar";
// import MuiSpeedDial from "./components/D24SpeedDial/MuiSpeedDial";
// import MuiBredcrum from "./components/D22Bredcrum/MuiBredcrum";
// import MuiDrawer from "./components/D23Drawer/MuiDrawer";
// import MuiLink from "./components/D21Link/MuiLink";
// import MuiMenu from "./components/D20Menu/MuiMenu";
// import MuiNavBar from "./components/D19NavBar/MuiNavBar";
// import MuiMultiImageList from "./components/D17MultiImageList/MuiMultiImageList";
// import MuiCard from "./components/D16Card/MuiCard";
// import MuiAccordion from "./components/D18Accordion/MuiAccordion";
// import MuiPaper from "./components/D15Paper/MuiPaper";
// import MuiGrid from "./components/D14Grid/MuiGrid";
// import MuiStack from "./components/D13Stack/MuiStack";
// import MuiBox from "./components/D12Box/MuiBox";
// import MuiTypography from './components/D1Typography/MuiTypography';
// import MuiButton from './components/D2Button/MuiButtons';
// import GroupBtn from './components/D3GroupBtn/MuiGroupBtn';
// import MuiToggleBtn from "./components/D4ToggleBtn/MuiToggleBtn";
// import MuiTextField from "./components/D5Textfield/MuiTextField";
// import MuiSelect from "./components/D6Select/MuiSelect";
// import MuiRadioBtn from "./components/D7RadioBtn/MuiRadioBtn";
// import MuiCheckBox from "./components/D8CheckBox/MuiCheckBox";
// import MuiSwitch from "./components/D9Switch/MuiSwitch";
// import MuiRating from "./components/D10Rating/MuiRating";
// import MuiAutoComplete from "./components/D11AutoComplete/MuiAutoComplete";
import { colors, createTheme } from "@mui/material";
import MuiCustomTheam from "./components/D40 CustomTheam/MuiCustomTheam";
import { ThemeProvider } from "@emotion/react";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import MuiResponsiveness from "./components/D41 Responsiveness/MuiResponsiveness";
import MuiTab from "./components/D42 Tab/MuiTab";
import MuiTimeLine from "./components/D43 TimeLine/MuiTimeLine";
import MuiMasonrey from "./components/D44 Masonrey/MuiMasonrey";

const theme = createTheme({
  status: {
    danger: colors.orange[500],
  },
  palette: {
    secondary: {
      main: colors.green[500],
    },
    nutral: {
      main: colors.red[300],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="App">
          {/* <MuiTypography /> */}
          {/* <MuiButton /> */}
          {/* <GroupBtn /> */}
          {/* <MuiToggleBtn /> */}
          {/* <MuiTextField /> */}
          {/* <MuiSelect /> */}
          {/* <MuiRadioBtn /> */}
          {/* <MuiCheckBox /> */}
          {/* <MuiSwitch /> */}
          {/* <MuiRating /> */}
          {/* <MuiAutoComplete /> */}
          {/* <MuiBox /> */}
          {/* <MuiStack /> */}
          {/* <MuiGrid /> */}
          {/* <MuiPaper /> */}
          {/* <MuiCard /> */}
          {/* <MuiAccordion /> */}
          {/* <MuiMultiImageList /> */}
          {/* <MuiNavBar /> */}
          {/* <MuiMenu /> */}
          {/* <MuiLink /> */}
          {/* <MuiBredcrum /> */}
          {/* <MuiBredcrum /> */}
          {/* <MuiDrawer /> */}
          {/* <MuiSpeedDial /> */}
          {/* <MuiAvatar /> */}
          {/* <MuiBottomNavigatoin /> */}
          {/* <MuiBatch /> */}
          {/* <MuiList /> */}
          {/* <MuiChip /> */}
          {/* <MuiTooltip /> */}
          {/* <MuiTable /> */}
          {/* <MuiAlert /> */}
          {/* <MuiSnackBar /> */}
          {/* <MuiDialog /> */}
          {/* <MuiProgressBar /> */}
          {/* <MuiSkleton /> */}
          {/* <MuiLodingBtn /> */}
          {/* <MuiDateTime /> */}
          {/* <MuiDateRangePicker /> */}
          {/* <MuiCustomTheam /> */}
          {/* <MuiResponsiveness /> */}
          {/* <MuiTab /> */}
          {/* <MuiTimeLine /> */}
          <MuiMasonrey />
        </div>s
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
