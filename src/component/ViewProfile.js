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
import { useParams } from 'react-router-dom';

export default function Usercreate() {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm(
   
  // );
  const onSubmit = (data) => {
    console.log(data);
  };
  const id = useParams();
  useEffect(()=>{
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    console.log(id.id);
    fetch(`http://192.168.56.117:3000/getdataupdate/${id.id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
      
       
       setlastname(result[0].lastname);
      setemployeeid(result[0].employeeid);
       setdepartment(result[0].department);
        setage(result[0].age);
      setphonnumber(result[0].phonnumber);
       setposition(result[0].position);
        setsalary(result[0].salary);
        setfname(result[0].firstname);
       
      })
      .catch(error => console.log('error', error));
  }, [id])
  
  const theme = {
    spacing: [0, 2, 3, 5, 8],
  };
 
  const [fname,setfname] = useState('');
  const [lastname,setlastname] = useState('');
  const [employeeid,setemployeeid] = useState('');
  const [department,setdepartment] = useState('');
  const [age,setage] = useState('');
  const [phonnumber,setphonnumber] = useState('');
  const [position,setposition] = useState('');
  const [salary,setsalary] = useState('');

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ p: 5 }}>
      <center>
        <Paper sx={{ p: 10,width: "1100px" }} >
          <center>
           
              <h2> ข้อมูลส่วนตัว </h2>
              <form
             
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
                    value={fname}
                    onChange={(e)=> setfname(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                    required
                    sx={{ mb: 1, fontSize: "var(--joy-fontSize-sm)",ml: 3, width: "300px" }}
                    value={lastname}
                    onChange={(e)=> setlastname(e.target.value)}
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
                    required
                    sx={{ width: "300px" }}
                    value={age}
                    onChange={(e)=> setage(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    label="ID Employee"
                    variant="outlined"
                    required
                    sx={{ mb: 1, fontSize: "var(--joy-fontSize-sm)",ml: 3, width: "300px" }}
                    value={employeeid}
                    onChange={(e)=> setemployeeid(e.target.value)}
                    margin="normal"
                  />
                </div>
                
                <div>
                <h2> ตำแหน่งหน้าที่ </h2>
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
                    onChange={(e)=> setdepartment(e.target.value)}
                    value={department}
                    margin="normal"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Posittion"
                    variant="outlined"
                    required
                    sx={{ mb: 1, fontSize: "var(--joy-fontSize-sm)",ml: 3, width: "300px" }}
                    onChange={(e)=> setposition(e.target.value)}
                    value={position}
                    margin="normal"
                  />
                 
                 
                </div>
                <div>
                <h2> ช่องทางการติดต่อ / เงินเดือน </h2>
                <TextField
                    id="outlined-basic"
                    label="Phonnumber"
                    variant="outlined"
                    required
                    sx={{
                      mb: 1,
                      fontSize: "var(--joy-fontSize-sm)",
                      width: "300px",
                    }}
                    onChange={(e)=> setphonnumber(e.target.value)}
                    value={phonnumber}
                    margin="normal"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Salary"
                    variant="outlined"
                    required
                    sx={{ mb: 1, fontSize: "var(--joy-fontSize-sm)",ml: 3, width: "300px" }}
                    onChange={(e)=> setsalary(e.target.value)}
                    value={salary}
                    margin="normal"
                  />
                 
                 
                </div>
              
                
                <Button
                  variant="contained"
                  href="/"
                  sx={{ mt: 3  }}
                  color="success"
                  
                >
                  Black
                </Button>
              
              </form>
          
          </center>
        </Paper>
        </center>
      </Container>
    </React.Fragment>
  );
}
