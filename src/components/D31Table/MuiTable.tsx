import React from "react";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

function MuiTable() {
  return (
    <TableContainer component={Paper} sx={{ height: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>first_name</TableCell>
            <TableCell>last_name</TableCell>
            <TableCell align="center">email</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tableData.map((el, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{el.id}</TableCell>
              <TableCell>{el.first_name}</TableCell>
              <TableCell>{el.last_name}</TableCell>
              <TableCell align="center">{el.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MuiTable;

const tableData = [
  {
    id: 1,
    first_name: "Regan",
    last_name: "Erratt",
    email: "rerratt0@zimbio.com",
  },
  {
    id: 2,
    first_name: "Erinna",
    last_name: "McIlharga",
    email: "emcilharga1@house.gov",
  },
  {
    id: 3,
    first_name: "Briana",
    last_name: "Deighan",
    email: "bdeighan2@paginegialle.it",
  },
  {
    id: 4,
    first_name: "Liv",
    last_name: "Adshad",
    email: "ladshad3@princeton.edu",
  },
  {
    id: 5,
    first_name: "Timmy",
    last_name: "Itzkovwich",
    email: "titzkovwich4@pinterest.com",
  },
  {
    id: 6,
    first_name: "Alia",
    last_name: "Pawlicki",
    email: "apawlicki5@miibeian.gov.cn",
  },
  {
    id: 7,
    first_name: "Rod",
    last_name: "Wittleton",
    email: "rwittleton6@prlog.org",
  },
  {
    id: 8,
    first_name: "Nickolas",
    last_name: "Weston",
    email: "nweston7@craigslist.org",
  },
  {
    id: 9,
    first_name: "Akim",
    last_name: "Cabrer",
    email: "acabrer8@exblog.jp",
  },
  {
    id: 10,
    first_name: "Benito",
    last_name: "Duddan",
    email: "bduddan9@spiegel.de",
  },
];
