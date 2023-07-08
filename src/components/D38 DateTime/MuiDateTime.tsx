import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker, TimePicker } from "@mui/x-date-pickers";
import { LocalDining } from "@mui/icons-material";

export default function MuiDateTime() {
  const [selectedDate, setSelectedDate] = React.useState<null | Date>(null);
  const [selectedTime, setSelectedTime] = React.useState<null | Date>(null);
  const [selectedTimeDate, setSelectedTimeDate] = React.useState<null | Date>(
    null
  );

  // console.log("selectedTimeDate", selectedTimeDate?.$d?.toLocaleDateString());
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker", "TimePicker"]}>
        <DatePicker
          value={selectedDate}
          label="Date picker"
          onChange={(newValue) => setSelectedDate(newValue)}
        />
        <TimePicker
          label="Time picker"
          value={selectedTime}
          onChange={(newValue) => setSelectedTime(newValue)}
        />

        <DateTimePicker
          label="Date Time Picker"
          value={selectedTimeDate}
          onChange={(newValue) => setSelectedTimeDate(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
