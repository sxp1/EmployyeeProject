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
import dayjs, { Dayjs } from "dayjs";
import { useParams } from "react-router-dom";

export default function Usercreate() {
  const onSubmit = (data) => {
    console.log(data);
  };
  const id = useParams();
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    console.log(id.id);
    fetch(`http://192.168.56.117:3000/getdataupdate/${id.id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setlastname(result[0].lastname);
        setemployeeid(result[0].employeeid);
        setdepartment(result[0].department);
        setage(result[0].age);
        setphonnumber(result[0].phonnumber);
        setposition(result[0].position);
        setsalary(result[0].salary);
        setfname(result[0].firstname);
        setbirthday(result[0].birthday);
        seteducation(result[0].education);
        setemail(result[0].email);
        setaddress(result[0].sadsad);
      })
      .catch((error) => console.log("error", error));
  }, [id]);

  const theme = {
    spacing: [0, 2, 3, 5, 8],
  };

  const [fname, setfname] = useState("");
  const [lastname, setlastname] = useState("");
  const [employeeid, setemployeeid] = useState("");
  const [department, setdepartment] = useState("");
  const [age, setage] = useState("");
  const [phonnumber, setphonnumber] = useState("");
  const [position, setposition] = useState("");
  const [birthday, setbirthday]= useState("");
  const [salary, setsalary] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [education, seteducation] = useState("");
  const formattedDate = dayjs(birthday).format("DD/MM/YYYY");

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ p: 5 }}>
        <center>
          <Paper sx={{ p: 5, width: "1100px" }}>
            <center>
              <h1> View Profile </h1>
              <h3> ข้อมูลส่วนตัว </h3>
              <div
                class="container"
                id="outlined-number"
                sx={{ width: "300px" }}
              >
                  <div class="col">First Name : {fname}  </div>
                  <div class="col">Last Name : {lastname}</div>
                  <div class="col">Age : {age}</div>
                  <div class="col">ID Employee :{employeeid}</div>
                  <div class="col">Birthday : {formattedDate}</div>
                  <div class="col">Education : {education}</div>
              </div>
              <div>
                <h3> ตำแหน่งหน้าที่ </h3>
                <div
                class="container"
                id="outlined-number"
                sx={{ width: "100px" }}
               >
                  <div class="col">Department : {department}</div>
                  <div class="col">Position : {position}</div>
                </div>
              </div>
              <div>
                <h3> ช่องทางการติดต่อ / เงินเดือน </h3>
                <div
                class="container"
                id="outlined-number"
                sx={{ width: "300px" }}
               >
                  <div class="col">Address : {address}</div>
                  <div class="col">Phone Number : {phonnumber}</div>
                  <div class="col">Email : {email}</div>
                  <div class="col">Salary : {salary}</div>
                </div>
              </div>

              <Button
                variant="contained"
                href="/"
                sx={{ mt: 3 }}
                color="success"
              >
                Back
              </Button>
            </center>
          </Paper>
        </center>
      </Container>
    </React.Fragment>
  );
}
