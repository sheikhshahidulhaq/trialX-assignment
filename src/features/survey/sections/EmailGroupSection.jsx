import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SelectField from "../../../components/form/SelectField";
import { emailGroupOptions } from "../config/survey.config";

export default function EmailGroupSection() {
  return (
    <Stack spacing={1}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="subtitle2" fontWeight={"bold"}>
          Select Email Group
        </Typography>

        <Typography variant="subtitle2" color="text.secondary">
          Download Email Group
        </Typography>
      </Box>

      <SelectField
        name="email_group"
        label="Select Email Group"
        options={emailGroupOptions}
        rules={{ required: "Required" }}
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#ffffff",
          },
        }}
      />
    </Stack>
  );
}
