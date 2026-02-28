import { Controller, useFormContext } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function RichTextField({
  name,
  label,
  rules,
  height = 250,
  placeholder = "Start typing...",
}) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={rules}
      render={({ field, fieldState }) => (
        <FormControl fullWidth error={!!fieldState.error}>
          {label && (
            <Typography variant="subtitle2" gutterBottom>
              {label}
            </Typography>
          )}

          <Box
            sx={{
              "& .ck": {
                "--ck-border-radius": "10px",
              },
              "& .ck-toolbar": {
                background: "#fff",
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                marginBottom: "12px",
              },
              "& .ck-toolbar .ck-button": {
                color: "#9e9e9e",
                margin: "0 6px",
              },

              "& .ck-toolbar .ck-button:hover": {
                color: "#616161",
              },

              "& .ck-toolbar .ck-button.ck-on": {
                color: "#000000",
              },

              "& .ck-toolbar__separator": {
                width: "1px",
                backgroundColor: "transparent !important",
                position: "relative",
              },

              "& .ck-toolbar__separator::after": {
                content: '""',
                position: "absolute",
                left: 0,
                right: 0,
                height: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0,0,0,0.2)",
                borderRadius: "1px",
              },
              "& .ck.ck-toolbar": {
                width: "fit-content ",
                display: "inline-flex",
                borderRadius: "8px",
              },
              "& .ck.ck-editor__main > .ck-editor__editable": {
                minHeight: height,
                backgroundColor: "#c2e7ff",
                borderRadius: "6px",
                padding: "14px",
                border: "1px solid transparent",
                transition: "all 0.2s ease",
                boxShadow: "none",
              },

              "& .ck.ck-editor__main > .ck-editor__editable.ck-focused": {
                backgroundColor: "#ffffff !important",
                border: "1px solid #90caf9",
              },

              "& .ck-editor__editable > p.ck-placeholder": {
                color: "#6b7280",
                fontStyle: "normal",
                margin: 0,
              },

              "& .ck-content p": {
                margin: " 0 !important",
                lineHeight: 1.5,
              },
            }}
          >
            <CKEditor
              editor={ClassicEditor}
              data={field.value || ""}
              onChange={(event, editor) => {
                field.onChange(editor.getData());
              }}
              config={{
                placeholder: placeholder,
                toolbar: {
                  items: [
                    "bold",
                    "italic",
                    "|",
                    "bulletedList",
                    "numberedList",
                    "|",
                    "link",
                    "imageUpload",
                    "|",
                    "undo",
                    "redo",
                  ],
                },
              }}
            />
          </Box>

          <FormHelperText>{fieldState.error?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
}
