import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import QuestionEditor from "./QuestionEditor";

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import Sortable from "../../components/Sortable";
import { useFormContext } from "react-hook-form";

export default function QuestionsPanel({
  questions,
  setQuestions,
  persist,
  setPersist,
}) {
  const generateId = () =>
    crypto.randomUUID?.() ??
    `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const [editingId, setEditingId] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const sensors = useSensors(useSensor(PointerSensor));
  const { watch } = useFormContext();
  const surveyName = watch("surveyName");

  const validQuestions = questions.filter(
    (q) =>
      q.text?.trim() &&
      (q.answerType !== "radio" || q.options?.some((o) => o.trim())),
  );

  const disableSaveCreate = !surveyName?.trim() || validQuestions.length === 0;

  const handleSave = (q) => {
    setQuestions((prev) => {
      const exists = prev.find((x) => x.id === q.id);
      if (exists) return prev.map((x) => (x.id === q.id ? q : x));
      return [...prev, { ...q, id: generateId() }];
    });

    setEditingId(null);
    setIsAdding(false);
  };

  const handleDelete = (id) => {
    setQuestions((prev) => prev.filter((q) => q.id !== id));
    setEditingId(null);
  };

  const handleDragEnd = ({ active, over }) => {
    if (editingId) return;
    if (!over || active.id === over.id) return;

    setQuestions((prev) => {
      const oldIndex = prev.findIndex((q) => q.id === active.id);
      const newIndex = prev.findIndex((q) => q.id === over.id);
      return arrayMove(prev, oldIndex, newIndex);
    });
  };

  return (
    <Paper elevation={3} sx={{ borderRadius: 2 }}>
      <Box
        sx={{
          p: 2,
          borderBottom: "1px solid",
          borderColor: "divider",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography fontWeight="bold">Questions</Typography>

        <FormControlLabel
          sx={{ gap: 1 }}
          control={
            <Switch checked={persist} onChange={() => setPersist((p) => !p)} />
          }
          label="Persist"
        />
        <Button
          variant="contained"
          size="small"
          type="submit"
          disabled={disableSaveCreate}
        >
          Save & Create
        </Button>
      </Box>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={questions.map((q) => q.id)}
          strategy={verticalListSortingStrategy}
        >
          <Stack spacing={1} sx={{ p: { xs: 0.5, md: 2 } }}>
            {questions.map((q, index) => {
              const isEditing = editingId === q.id;
              return (
                <Sortable key={q.id} id={q.id}>
                  {isEditing ? (
                    <QuestionEditor
                      initialData={q}
                      onSave={handleSave}
                      onDelete={handleDelete}
                      onClose={() => setEditingId(null)}
                      questionNumber={index + 1}
                    />
                  ) : (
                    <Paper sx={{ p: 2, width: "100%" }}>
                      <Typography fontWeight="bold">
                        QUESTION {index + 1}
                        {q.required && (
                          <Typography component="span" color="error">
                            *
                          </Typography>
                        )}
                      </Typography>

                      <Typography>{q.text}</Typography>

                      {q.answerType === "text" && (
                        <TextField
                          disabled
                          fullWidth
                          size="small"
                          placeholder={q.helpText}
                        />
                      )}

                      <Stack
                        direction="row"
                        justifyContent="flex-end"
                        spacing={1}
                        sx={{ mt: 1 }}
                      >
                        <Button
                          onClick={() => handleDelete(q.id)}
                          variant="outlined"
                          size="small"
                        >
                          Delete
                        </Button>
                        <Button
                          variant="contained"
                          onClick={() => {
                            setEditingId(q.id);
                            setIsAdding(false);
                          }}
                          size="small"
                        >
                          Edit
                        </Button>
                      </Stack>
                    </Paper>
                  )}
                </Sortable>
              );
            })}

            {/* Add New */}
            {isAdding && (
              <div
                style={{
                  paddingLeft: "36px",
                }}
              >
                <QuestionEditor
                  onSave={handleSave}
                  onClose={() => setIsAdding(false)}
                  questionNumber={questions.length + 1}
                />
              </div>
            )}
          </Stack>
        </SortableContext>
      </DndContext>

      <Box textAlign="center" p={2}>
        <Button
          variant="contained"
          onClick={() => {
            setIsAdding(true);
            setEditingId(null);
          }}
          size="small"
        >
          Add Question
        </Button>
      </Box>
    </Paper>
  );
}
