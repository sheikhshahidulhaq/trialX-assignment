// import { useState } from "react";
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Radio from "@mui/material/Radio";
// import FormHelperText from "@mui/material/FormHelperText";

// export default function SimpleRadioGroup({
//   name,
//   label,
//   options = [],
//   value: controlledValue,
//   onChange,
//   error,
//   helperText,
//   row = false,
//   align = "flex-start",
// }) {
//   // allow both controlled & uncontrolled usage
//   const [internalValue, setInternalValue] = useState("");

//   const value = controlledValue ?? internalValue;

//   const handleChange = (e) => {
//     const newValue = e.target.value;
//     setInternalValue(newValue);
//     onChange?.(newValue);
//   };

//   return (
//     <FormControl error={!!error} fullWidth>
//       {label && (
//         <FormLabel sx={{ textAlign: align === "center" ? "center" : "left" }}>
//           {label}
//         </FormLabel>
//       )}

//       <RadioGroup
//         name={name}
//         value={value}
//         onChange={handleChange}
//         row={row}
//         sx={{
//           justifyContent: align,
//           alignItems: "center",
//         }}
//       >
//         {options.map((option) => (
//           <FormControlLabel
//             key={option.value}
//             value={option.value}
//             control={<Radio />}
//             label={option.label}
//           />
//         ))}
//       </RadioGroup>

//       {(error || helperText) && (
//         <FormHelperText
//           sx={{ textAlign: align === "center" ? "center" : "left" }}
//         >
//           {error || helperText}
//         </FormHelperText>
//       )}
//     </FormControl>
//   );
// }
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormHelperText from "@mui/material/FormHelperText";

export default function SimpleRadioGroup({
  name,
  label,
  options = [],
  value,
  onChange,
  error = false,
  helperText = "",
  row = false,
  align = "flex-start",
}) {
  const handleChange = (event) => {
    onChange?.(event.target.value);
  };

  return (
    <FormControl error={!!error} fullWidth>
      {label && (
        <FormLabel sx={{ textAlign: align === "center" ? "center" : "left" }}>
          {label}
        </FormLabel>
      )}

      <RadioGroup
        name={name}
        value={value}
        onChange={handleChange}
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

      {helperText && (
        <FormHelperText
          sx={{ textAlign: align === "center" ? "center" : "left" }}
        >
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
}
