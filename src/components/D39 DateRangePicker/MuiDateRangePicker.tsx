import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { DateRange } from "@mui/lab";

export default function MuiDateRangePicker() {
  const [selectDateRange, setSelectDateRange] =
    React.useState<DateRange<Date>>();
  return (
    <DemoContainer components={["DateRangePicker"]}>
      <DateRangePicker
        value={selectDateRange}
        onChange={(newValue) => setSelectDateRange(newValue)}
        localeText={{ start: "Check-in", end: "Check-out" }}
      />
    </DemoContainer>
  );
}
