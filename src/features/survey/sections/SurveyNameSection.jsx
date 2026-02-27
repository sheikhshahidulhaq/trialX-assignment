import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextInput from "../../../components/form/TextInput";

export default function SurveyNameSection() {
  return (
    <Stack spacing={1}>
      <Typography fontWeight={"bold"}>
        Survey Name <span style={{ color: "red" }}>*</span>
      </Typography>

      <TextInput
        name="surveyName"
        placeholder="Enter the Custom Survey Name"
        rules={{ required: "Required" }}
      />
    </Stack>
  );
}
