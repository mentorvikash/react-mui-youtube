import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import {
  DateRangePicker
} from "@mui/x-date-pickers-pro/DateRangePicker";
import { DateRange } from "@mui/lab";

export default function MuiDateRangePicker() {
  const [selectDateRange, setSelectDateRange] =
    React.useState<DateRange<Date>>();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateRangePicker"]}>
        <DateRangePicker
          value={selectDateRange}
          onChange={(newValue) => setSelectDateRange(newValue)}
          localeText={{ start: "Check-in", end: "Check-out" }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
