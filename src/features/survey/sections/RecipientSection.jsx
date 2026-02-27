import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import RadioGroupField from "../../../components/form/RadioGroupField";

export default function RecipientsSection() {
  return (
    <Stack>
      <Typography fontWeight={"bold"}>
        Survey Recipients <span style={{ color: "red" }}>*</span>
      </Typography>

      <Typography variant="subtitle2">
        Set the Recipients of the Custom Survey. You can either use and Existing
        Email Group or create a new one.
      </Typography>

      <RadioGroupField
        name="survey_recipients"
        row
        align="center"
        options={[
          { label: "Use Existing Email Group", value: "existing" },
          { label: "Create New Email Group", value: "new" },
        ]}
      />
    </Stack>
  );
}
