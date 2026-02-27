import { Controller, useFormContext } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Typography from "@mui/material/Typography";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function RichTextField({ name, label, rules, height = 250 }) {
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

          <CKEditor
            editor={ClassicEditor}
            data={field.value || ""}
            onChange={(event, editor) => {
              const data = editor.getData();
              field.onChange(data);
            }}
            config={{
              placeholder: "Start typing...",
            }}
          />

          <FormHelperText>{fieldState.error?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
}
