import { Controller, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";

export default function TextInput({
  name,
  rules,
  bgColor = "#c2e7ff",
  ...rest
}) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          {...rest}
          fullWidth
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: bgColor || "transparent",
            },
          }}
          slotProps={{
            formHelperText: {
              sx: { mx: 0 },
            },
          }}
        />
      )}
    />
  );
}
