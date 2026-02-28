import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { emailContentOptions } from "../config/survey.config";
import DataTable from "../../../components/DataTable";
import {
  emailTemplateColumns,
  emailTemplateRows,
} from "../config/survey.config";
import SimpleRadioGroup from "../../../components/SimpleRadioGroup";
import TemplateSection from "./TemplateSection";
export default function EmailContentSection({
  emailContent,
  setEmailContent,
  selectedTemplate,
  setSelectedTemplate,
}) {
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

      <SimpleRadioGroup
        name="email_content"
        value={emailContent}
        onChange={setEmailContent}
        options={emailContentOptions}
        helperText={
          !emailContent ? "Please select an email content option" : ""
        }
        error={!emailContent}
        row
        align="center"
      />

      {emailContent === "existing" && (
        <DataTable
          columns={emailTemplateColumns}
          rows={emailTemplateRows}
          selectable
          selectedRowId={selectedTemplate?.id}
          onRowSelect={setSelectedTemplate}
        />
      )}
      {emailContent === "new" && <TemplateSection />}
    </Stack>
  );
}
