import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Box from "@mui/material/Box";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

export default function Sortable({ id, children }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    display: "flex",
    alignItems: "center",
  };

  return (
    <div ref={setNodeRef} style={style}>
      <Box
        {...attributes}
        {...listeners}
        sx={{
          cursor: "grab",
          fontSize: 18,
          px: 1,
          py: 0.5,
          userSelect: "none",
        }}
      >
        <DragIndicatorIcon fontSize="small" />
      </Box>
      {children}
    </div>
  );
}
