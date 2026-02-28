import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import RadioGroupField from "../../../components/form/RadioGroupField";
import SimpleRadioGroup from "../../../components/SimpleRadioGroup";
import EmailGroupSection from "./EmailGroupSection";

export default function RecipientsSection({
  surveyRecipients,
  setSurveyRecipients,
}) {
  return (
    <Stack>
      <Typography fontWeight={"bold"}>
        Survey Recipients <span style={{ color: "red" }}>*</span>
      </Typography>

      <Typography variant="subtitle2">
        Set the Recipients of the Custom Survey. You can either use and Existing
        Email Group or create a new one.
      </Typography>

      {/* <RadioGroupField
        name="survey_recipients"
        row
        align="center"
        options={[
          { label: "Use Existing Email Group", value: "existing" },
          { label: "Create New Email Group", value: "new" },
        ]}
      /> */}

      <SimpleRadioGroup
        name="survey_recipients"
        value={surveyRecipients}
        onChange={setSurveyRecipients}
        options={[
          { label: "Use Existing Email Group", value: "existing" },
          { label: "Create New Email Group", value: "new" },
        ]}
        helperText={
          !surveyRecipients ? "Please select a survey recipients option" : ""
        }
        error={!surveyRecipients}
        row
        align="center"
      />
      {surveyRecipients == "existing" && <EmailGroupSection />}
    </Stack>
  );
}
