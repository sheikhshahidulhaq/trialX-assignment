import Chip from "@mui/material/Chip";

export default function TemplateTagChip({ label, ...props }) {
  return (
    <Chip
      label={label}
      size="small"
      sx={{
        borderRadius: "8px",
        px: 1,
      }}
      {...props}
    />
  );
}
