import { Controller, useFormContext } from "react-hook-form";

import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormHelperText from "@mui/material/FormHelperText";

export default function RadioGroupField({
  name,
  label,
  options = [],
  rules,
  row = false,
  align = "flex-start",
}) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <FormControl error={!!fieldState.error} fullWidth>
          <FormLabel sx={{ textAlign: align === "center" ? "center" : "left" }}>
            {label}
          </FormLabel>

          <RadioGroup
            {...field}
            row={row}
            sx={{
              justifyContent: align,
              alignItems: "center",
            }}
          >
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>

          <FormHelperText
            sx={{ textAlign: align === "center" ? "center" : "left" }}
          >
            {fieldState.error?.message}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
}
