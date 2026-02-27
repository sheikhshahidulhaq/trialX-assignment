import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
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
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Sortable from "../../components/Sortable";

export default function QuestionEditor({
  initialData,
  onSave,
  onClose,
  onDelete,
  questionNumber,
}) {
  const [draft, setDraft] = useState({
    text: "",
    helpText: "",
    required: false,
    answerType: "text",
    options: [],
  });

  useEffect(() => {
    if (initialData) setDraft(initialData);
  }, [initialData]);

  const sensors = useSensors(useSensor(PointerSensor));

  const addOption = () =>
    setDraft((p) => ({ ...p, options: [...p.options, ""] }));

  const updateOption = (i, value) =>
    setDraft((p) => {
      const options = [...p.options];
      options[i] = value;
      return { ...p, options };
    });

  const removeOption = (i) =>
    setDraft((p) => ({
      ...p,
      options: p.options.filter((_, idx) => idx !== i),
    }));

  const handleOptionDragEnd = ({ active, over }) => {
    if (!over || active.id === over.id) return;

    setDraft((prev) => {
      const oldIndex = prev.options.findIndex((_, i) => i === active.id);
      const newIndex = prev.options.findIndex((_, i) => i === over.id);
      return {
        ...prev,
        options: arrayMove(prev.options, oldIndex, newIndex),
      };
    });
  };

  const handleSave = () => {
    const cleanOptions = draft.options.filter((o) => o.trim() !== "");

    onSave?.({
      ...initialData,
      ...draft,
      options: cleanOptions,
    });
  };

  const handleDelete = () => {
    if (!initialData?.id) return;
    onDelete?.(initialData.id);
  };

  return (
    <Box
      sx={{
        border: "2px solid",
        borderColor: "primary.main",
        width: "100%",
      }}
    >
      <Stack spacing={2} sx={{ p: 2 }}>
        <Typography fontWeight="bold">QUESTION {questionNumber}</Typography>

        <TextField
          placeholder="Enter question text"
          value={draft.text}
          onChange={(e) => setDraft((p) => ({ ...p, text: e.target.value }))}
          required
          fullWidth
        />

        <Box>
          <Typography fontWeight="bold">Help Text</Typography>
          <TextField
            placeholder="Enter help text here"
            value={draft.helpText}
            onChange={(e) =>
              setDraft((p) => ({ ...p, helpText: e.target.value }))
            }
            fullWidth
          />
        </Box>

        <Typography fontWeight="bold">
          Answer Configuration{" "}
          <Typography component="span" color="error">
            *
          </Typography>
        </Typography>
        <Grid container spacing={2}>
          <Grid size={6}>
            <FormControl fullWidth>
              <Typography variant="caption" fontWeight="bold">
                Select Answer Type
              </Typography>
              <Select
                value={draft.answerType}
                onChange={(e) =>
                  setDraft((p) => ({
                    ...p,
                    answerType: e.target.value,
                    options: e.target.value === "radio" ? [""] : [],
                  }))
                }
              >
                <MenuItem value="text">Short Answer</MenuItem>
                <MenuItem value="radio">Radio Button</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid
            size={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Stack spacing={0.5}>
              <Typography variant="caption" fontWeight={"bold"}>
                Mandatory Question
              </Typography>
              <FormControlLabel
                sx={{
                  gap: 1,
                }}
                control={
                  <Switch
                    checked={draft.required}
                    onChange={() =>
                      setDraft((p) => ({ ...p, required: !p.required }))
                    }
                  />
                }
                label="Required"
              />
            </Stack>
          </Grid>
        </Grid>
        {draft.answerType === "radio" && (
          <Stack spacing={1}>
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleOptionDragEnd}
            >
              <SortableContext
                items={draft.options.map((_, i) => i)}
                strategy={verticalListSortingStrategy}
              >
                <Stack spacing={1}>
                  {draft.options.map((opt, i) => (
                    <Sortable key={i} id={i}>
                      <Box
                        display="flex"
                        gap={1}
                        alignItems="center"
                        sx={{ width: "100%" }}
                      >
                        <TextField
                          variant="filled"
                          value={opt}
                          onChange={(e) => updateOption(i, e.target.value)}
                          fullWidth
                        />

                        <IconButton
                          size="small"
                          onClick={() => removeOption(i)}
                          aria-label="Remove option"
                          sx={{ color: "text.secondary" }}
                          disabled={draft.options.length <= 1}
                        >
                          <CloseIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </Sortable>
                  ))}
                </Stack>
              </SortableContext>
            </DndContext>
            <Button
              size="small"
              onClick={addOption}
              sx={{
                alignSelf: "flex-start",
                textTransform: "none",
                fontSize: "0.75rem",
                px: 1,
              }}
            >
              + Add Option
            </Button>
          </Stack>
        )}

        <Divider />

        <Stack direction="row" spacing={1} justifyContent="flex-end">
          <Button onClick={onClose} size="small" variant="contained">
            Close
          </Button>

          {initialData && (
            <Button
              variant="outlined"
              color="error"
              size="small"
              onClick={handleDelete}
            >
              Delete
            </Button>
          )}

          <Button
            variant="contained"
            disabled={!draft.text.trim()}
            onClick={handleSave}
            size="small"
          >
            Save Question
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
