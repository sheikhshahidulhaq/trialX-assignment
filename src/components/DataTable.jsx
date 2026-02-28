import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";

export default function DataTable({
  columns = [],
  rows = [],
  size = "small",
  stripe = true,
  stripeColor = "#e8f5e9",
  hoverColor = "#c8e6c9",

  // ✅ optional selection props
  selectable = false,
  selectedRowId,
  onRowSelect,
}) {
  return (
    <TableContainer component={Box} sx={{ border: "1px solid" }}>
      <Table size={size}>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell
                key={col.field}
                align={col.align || "left"}
                sx={{
                  fontWeight: "bold",
                  width: col.width,
                  minWidth: col.minWidth,
                }}
              >
                {col.headerName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, index) => {
            const isSelected = selectable && selectedRowId === row.id;

            return (
              <TableRow
                key={row.id || index}
                onClick={selectable ? () => onRowSelect?.(row) : undefined}
                sx={{
                  cursor: selectable ? "pointer" : "default",

                  backgroundColor: isSelected
                    ? "#bbdefb"
                    : stripe && index % 2 === 0
                      ? stripeColor
                      : "#fff",

                  "&:hover": selectable && {
                    backgroundColor: isSelected ? "#bbdefb" : hoverColor,
                  },
                }}
              >
                {columns.map((col) => (
                  <TableCell key={col.field} align={col.align || "left"}>
                    {col.render
                      ? col.render(row[col.field], row)
                      : row[col.field]}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
