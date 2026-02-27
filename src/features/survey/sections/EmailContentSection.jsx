import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { emailContentOptions } from "../config/survey.config";
import { RadioGroupField } from "../../../components/form";
import DataTable from "../../../components/DataTable";
import {
  emailTemplateColumns,
  emailTemplateRows,
} from "../config/survey.config";
export default function EmailContentSection() {
  return (
    <Stack>
      <Typography fontWeight={"bold"}>
        Email Content
        <Typography component="span" color="error">
          *
        </Typography>
      </Typography>
      <Typography variant="subtitle2">
        Configure the Email invite for the Survey Recipients. You can either use
        pre-configured Templates or create a new one.
      </Typography>
      <RadioGroupField
        name="email_content"
        row
        align="center"
        options={emailContentOptions}
      />
      <DataTable columns={emailTemplateColumns} rows={emailTemplateRows} />
    </Stack>
  );
}
