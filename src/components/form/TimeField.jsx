import { Controller, useFormContext } from "react-hook-form";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownRounded from "@mui/icons-material/KeyboardArrowDownRounded";
import { useState, useEffect } from "react";

const hours12 = Array.from({ length: 12 }, (_, i) =>
  String(i + 1).padStart(2, "0"),
);
const hours24 = Array.from({ length: 24 }, (_, i) =>
  String(i).padStart(2, "0"),
);
const minutes = Array.from({ length: 60 }, (_, i) =>
  String(i).padStart(2, "0"),
);

function convertTo12(time24) {
  if (!time24) return { hour: "", minute: "", period: "AM" };

  const [h, minute] = time24.split(":");
  let hour = parseInt(h, 10);
  let period = "AM";

  if (hour >= 12) period = "PM";
  if (hour === 0) hour = 12;
  else if (hour > 12) hour -= 12;

  return {
    hour: String(hour).padStart(2, "0"),
    minute,
    period,
  };
}

function convertTo24(hour, minute, period, is24) {
  if (!hour || !minute) return undefined;

  if (is24) return `${hour}:${minute}`;

  let h = parseInt(hour, 10);
  if (period === "AM" && h === 12) h = 0;
  if (period === "PM" && h !== 12) h += 12;

  return `${String(h).padStart(2, "0")}:${minute}`;
}

export default function TimeField({ name, is24Hour }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const {
          hour: initialHour,
          minute: initialMinute,
          period: initialPeriod,
        } = convertTo12(field.value);

        const [hour, setHour] = useState(initialHour);
        const [minute, setMinute] = useState(initialMinute);
        const [period, setPeriod] = useState(initialPeriod);

        // Sync when form resets/loads
        useEffect(() => {
          const { hour, minute, period } = convertTo12(field.value);
          setHour(hour);
          setMinute(minute);
          setPeriod(period);
        }, [field.value]);

        const updateFormValue = (h, m, p) => {
          const time24 = convertTo24(h, m, p, is24Hour);
          field.onChange(time24); // undefined until complete
        };

        const handleHourChange = (h) => {
          setHour(h);
          updateFormValue(h, minute, period);
        };

        const handleMinuteChange = (m) => {
          setMinute(m);
          updateFormValue(hour, m, period);
        };

        const handlePeriodChange = (p) => {
          setPeriod(p);
          updateFormValue(hour, minute, p);
        };

        return (
          <Grid container spacing={1}>
            {/* Hour */}
            <Grid size={is24Hour ? 6 : 4}>
              <TextField
                select
                value={hour}
                fullWidth
                slotProps={{
                  select: {
                    IconComponent: KeyboardArrowDownRounded,
                    displayEmpty: true,
                    renderValue: (selected) =>
                      selected || (
                        <Typography color="text.disabled">HH</Typography>
                      ),
                  },
                }}
                onChange={(e) => handleHourChange(e.target.value)}
              >
                <MenuItem value="">
                  <em>HH</em>
                </MenuItem>
                {(is24Hour ? hours24 : hours12).map((h) => (
                  <MenuItem key={h} value={h}>
                    {h}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Minute */}
            <Grid size={is24Hour ? 6 : 4}>
              <TextField
                select
                value={minute}
                fullWidth
                slotProps={{
                  select: {
                    IconComponent: KeyboardArrowDownRounded,
                    displayEmpty: true,
                    renderValue: (selected) =>
                      selected || (
                        <Typography color="text.disabled">MM</Typography>
                      ),
                  },
                }}
                onChange={(e) => handleMinuteChange(e.target.value)}
              >
                <MenuItem value="">
                  <em>MM</em>
                </MenuItem>
                {minutes.map((m) => (
                  <MenuItem key={m} value={m}>
                    {m}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* AM/PM */}
            {!is24Hour && (
              <Grid size={4}>
                <TextField
                  select
                  label="AM / PM"
                  value={period}
                  fullWidth
                  slotProps={{
                    select: { IconComponent: KeyboardArrowDownRounded },
                  }}
                  onChange={(e) => handlePeriodChange(e.target.value)}
                >
                  <MenuItem value="AM">AM</MenuItem>
                  <MenuItem value="PM">PM</MenuItem>
                </TextField>
              </Grid>
            )}
          </Grid>
        );
      }}
    />
  );
}
