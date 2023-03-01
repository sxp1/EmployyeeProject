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
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";
import { pink } from "@mui/material/colors";
import { IconButton } from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import User from "./user";
import TextField from "@mui/material/TextField";

export default function Usercreate() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const theme = {
    spacing: [0, 2, 3, 5, 8],
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ p: 5 }}>
        <Paper sx={{ p: 3 }}>
          <center>
            <Box
              component="form"
              sx={{
                "& > :not(style)": {
                  m: 5,
                  width: "900px",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <h2> Edit Employee </h2>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                }}
              >
                <div>
                  <TextField
                    id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                    required
                    sx={{
                      mb: 1,
                      fontSize: "var(--joy-fontSize-sm)",
                      width: "300px",
                    }}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                    required
                    sx={{ mb: 1, fontSize: "var(--joy-fontSize-sm)" }}
                    sx={{ ml: 3, width: "300px" }}
                  />
                </div>
                <div>
                  <TextField
                    id="outlined-number"
                    label="Age"
                    type="number"
                    InputLabelProps={{ shrink: true }}
                    inputProps={{ min: 1 }}
                    margin="normal"
                    sx={{ width: "300px" }}
                  />
                  <TextField
                    id="outlined-basic"
                    label="ID Employee"
                    variant="outlined"
                    required
                    sx={{ mb: 1, fontSize: "var(--joy-fontSize-sm)" }}
                    sx={{ ml: 3, width: "300px" }}
                    margin="normal"
                  />
                </div>

                <div>
                  <TextField
                    id="outlined-basic"
                    label="Department"
                    variant="outlined"
                    required
                    sx={{
                      mb: 1,
                      fontSize: "var(--joy-fontSize-sm)",
                      width: "300px",
                    }}
                    margin="normal"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Posittion"
                    variant="outlined"
                    required
                    sx={{ mb: 1, fontSize: "var(--joy-fontSize-sm)" }}
                    sx={{ ml: 3, width: "300px" }}
                    margin="normal"
                  />
                </div>
                <Button
                  variant="contained"
                  href="/"
                  sx={{ mt: 3 }}
                  color="error"
                >
                  Cancel
                </Button>

                <Button variant="contained" type="submit" sx={{ mt: 3, ml: 3 }}>
                  Submit
                </Button>
              </form>
            </Box>
          </center>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
