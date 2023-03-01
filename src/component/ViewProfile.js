import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Peper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import { ButtonGroup } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import { pink } from '@mui/material/colors';
import { IconButton } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2'
export default function Usercreate() {
  const AletRead = () => {
    Swal.fire({
      title: 'View Profile',
      text: "You won't be able to revert this!",
      confirmButtonColor: '#4169e1',
      confirmButtonText: 'OK'
    })
   }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container  maxWidth="xl" sx={{ p: 5 }}>
        <Paper  sx={{ p: 3 }}>
           <Box>
            <center>
            <Button onClick={AletRead}>View Profile</Button>
            </center>
           </Box>
        </Paper>
      </Container>
    </React.Fragment>
  );
}