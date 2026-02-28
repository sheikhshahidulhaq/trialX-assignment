import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import SurveyNameSection from "./sections/SurveyNameSection";
import LaunchSection from "./sections/LaunchSection";
import RecipientsSection from "./sections/RecipientSection";
import EmailGroupSection from "./sections/EmailGroupSection";
import EmailContentSection from "./sections/EmailContentSection";
import Box from "@mui/material/Box";

export default function SurveyDetails({
  emailContent,
  setEmailContent,
  selectedTemplate,
  setSelectedTemplate,
  surveyRecipients,
  setSurveyRecipients,
}) {
  return (
    <Paper elevation={3} sx={{ width: "100%", borderRadius: 2 }}>
      <Typography
        variant="h6"
        fontWeight="bold"
        textTransform="uppercase"
        sx={{ p: 2 }}
      >
        Custom Survey Details
      </Typography>

      <Divider />

      <Stack>
        <Stack spacing={2} sx={{ p: 2 }}>
          <SurveyNameSection />
          <LaunchSection />
        </Stack>
        <Box sx={{ p: 2, backgroundColor: "#c2e7ff" }}>
          <RecipientsSection
            surveyRecipients={surveyRecipients}
            setSurveyRecipients={setSurveyRecipients}
          />
        </Box>
        <Box sx={{ p: 2 }}>
          <EmailContentSection
            emailContent={emailContent}
            setEmailContent={setEmailContent}
            selectedTemplate={selectedTemplate}
            setSelectedTemplate={setSelectedTemplate}
          />
        </Box>
      </Stack>
    </Paper>
  );
}
