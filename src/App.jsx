import "./App.css";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import SurveyDetails from "./features/survey/SurveyDetails";
import QuestionsPanel from "./features/questions/QuestionsPanel";
import { surveyDefaultValues } from "./features/survey/config/survey.config";
import FormProviderWrapper from "./components/form/FormProviderWrapper";

export default function App() {
  const [persist, setPersist] = useState(true);

  const [questions, setQuestions] = useState(() => {
    try {
      const saved = localStorage.getItem("questions");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [emailContent, setEmailContent] = useState("existing");
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [surveyRecipients, setSurveyRecipients] = useState("existing");

  useEffect(() => {
    if (persist) {
      localStorage.setItem("questions", JSON.stringify(questions));
    } else {
      localStorage.removeItem("questions");
    }
  }, [questions, persist]);
  return (
    <FormProviderWrapper
      defaultValues={surveyDefaultValues}
      onSubmit={(data) => {
        const { templateName, senderName, subject, body, emailGroup, ...rest } =
          data;

        const payload = {
          ...rest,
          questions,
          emailContent:
            emailContent === "existing"
              ? { selectedTemplate }
              : {
                  templateName,
                  senderName,
                  subject,
                  body,
                },
          emailGroup: surveyRecipients === "existing" ? emailGroup : "",
        };

        alert(JSON.stringify(payload, null, 2));
        console.log(payload);
      }}
    >
      <Grid container spacing={2} sx={{ minHeight: "100vh" }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <SurveyDetails
            emailContent={emailContent}
            setEmailContent={setEmailContent}
            selectedTemplate={selectedTemplate}
            setSelectedTemplate={setSelectedTemplate}
            surveyRecipients={surveyRecipients}
            setSurveyRecipients={setSurveyRecipients}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <QuestionsPanel
            questions={questions}
            setQuestions={setQuestions}
            persist={persist}
            setPersist={setPersist}
            emailContent={emailContent}
            selectedTemplate={selectedTemplate}
          />
        </Grid>
      </Grid>
    </FormProviderWrapper>
  );
}
