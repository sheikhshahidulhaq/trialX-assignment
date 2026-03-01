import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import { useState } from "react";
import { SelectField, DateField, TimeField } from "../../../components/form";
import { timeZoneOptions } from "../config/survey.config";

export default function LaunchSection() {
  const [is24Hour, setIs24Hour] = useState(false);

  return (
    <Stack spacing={1}>
      <Box>
        <Typography fontWeight={"bold"}>Launch Date and Time</Typography>
        <Typography>
          If a Launch Date and time is not set, you will need to set it after
          the Survey is Approved.
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 2.5 }}>
          <SelectField
            name="time_zone"
            label="Time Zone"
            options={timeZoneOptions}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3.5 }}>
          <DateField name="date" label="Select Date" />
        </Grid>

        <Grid size={{ xs: 12, md: 4.5 }}>
          <TimeField
            name="launchTime"
            label="Launch Time"
            is24Hour={is24Hour}
          />
        </Grid>

        <Grid
          size={{ xs: 12, md: 1.5 }}
          paddingLeft={{ xs: 1.5, md: 0 }}
          display={"flex"}
        >
          <FormControlLabel
            sx={{
              gap: 1,
            }}
            control={
              <Switch
                checked={is24Hour}
                onChange={(e) => setIs24Hour(e.target.checked)}
              />
            }
            label="24-HR"
          />
        </Grid>
      </Grid>
    </Stack>
  );
}
