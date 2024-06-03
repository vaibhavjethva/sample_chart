import {
  TableContainer,
  Table,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
  Paper,
} from "@mui/material";

export const FoodTable = () => {
  return (<div>
    <h1>Today's Food Intake</h1>
    <TableContainer component={Paper} sx={{maxHeight:'200px'}}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Unit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.date}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{row.unit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

const tableData = [
  {
    date: "2024-04-27",
    quantity: 2,
    unit: "Glass",
  },
  {
    date: "2024-04-27",
    quantity: 1,
    unit: "l",
  },
  {
    date: "2024-04-27",
    quantity: 360,
    unit: "ml",
  },
];
