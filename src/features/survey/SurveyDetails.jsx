import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import SurveyNameSection from "./sections/SurveyNameSection";
import LaunchSection from "./sections/LaunchSection";
import RecipientsSection from "./sections/RecipientSection";
import EmailGroupSection from "./sections/EmailGroupSection";
import TemplateSection from "./sections/TemplateSection";
import EmailContentSection from "./sections/EmailContentSection";

export default function SurveyDetails() {
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
        <Stack sx={{ p: 2, backgroundColor: "#c2e7ff" }}>
          <RecipientsSection />
          <EmailGroupSection />
        </Stack>
        <Stack spacing={1} sx={{ p: 2 }}>
          <EmailContentSection />
          <TemplateSection />
        </Stack>
      </Stack>
    </Paper>
  );
}
