import "./App.css";

import Grid from "@mui/material/Grid";
import SurveyDetails from "./features/survey/SurveyDetails";
import QuestionsPanel from "./features/questions/QuestionsPanel";
import { surveyDefaultValues } from "./features/survey/config/survey.config";
import FormProviderWrapper from "./components/form/FormProviderWrapper";
import { useEffect, useState } from "react";

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
        const payload = {
          ...data,
          questions,
        };

        alert(JSON.stringify(payload, null, 2));
        console.log(payload);
      }}
    >
      <Grid container spacing={2} sx={{ minHeight: "100vh" }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <SurveyDetails />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <QuestionsPanel
            questions={questions}
            setQuestions={setQuestions}
            persist={persist}
            setPersist={setPersist}
          />
        </Grid>
      </Grid>
    </FormProviderWrapper>
  );
}
