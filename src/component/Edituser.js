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
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { useParams } from 'react-router-dom';

export default function Userupdate() {
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
      setaddress(result[0].address);       
      setemail(result[0].email);
      setbirthday(result[0].birthday);
       seteducation(result[0].education);
      
       
      })
      .catch(error => console.log('error', error));
  }, [id])
  
  const theme = {
    spacing: [0, 2, 3, 5, 8],
  };
  const handleSubmit1 = event =>{
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "address": address,
      "age": age,
      "birthday": birthday,
      "department": department,
      "education": education,
      "email": email,
      "employeeid": employeeid,
      "firstname": fname,
      "lastname":  lastname,
      "phonnumber": phonnumber,
      "position": position,
      "salary": salary
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(`http://192.168.56.117:3000/uppdateemployee/${id.id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log('a'+result);
    
       
       window.location.href = '/'
      })
      .catch(error => console.log('error', error));



}
  const [fname,setfname] = useState('');
  const [lastname,setlastname] = useState('');
  const [employeeid,setemployeeid] = useState('');
  const [department,setdepartment] = useState('');
  const [age,setage] = useState('');
  const [phonnumber,setphonnumber] = useState('');
  const [position,setposition] = useState('');
  const [address,setaddress] = useState('');
  const [salary,setsalary] = useState('');
  const [email,setemail] = useState('');
  const [birthday,setbirthday] = useState('');
  const [education,seteducation] = useState('');

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ p: 5 }}>
      <center>
        <Paper sx={{ p: 10,width: "1100px" }} >
          <center>
           
              <h2> Update Employee </h2>
              <form
                onSubmit={handleSubmit1}
              >
                 <div>
                  <TextField
                    id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                    required
                    value={fname}
                    sx={{
                      mb: 1,
                      fontSize: "var(--joy-fontSize-sm)",
                      width: "300px",
                    }}
                    onChange={(e) => setfname(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                    required
                    value={lastname}
                    sx={{
                      mb: 1,
                      fontSize: "var(--joy-fontSize-sm)",
                      ml: 3,
                      width: "300px",
                    }}
                    onChange={(e) => setlastname(e.target.value)}
                  />
                </div>
                <div>
                  <TextField
                    id="outlined-number"
                    label="Employeeid"
                    type="number"
                    InputLabelProps={{ shrink: true }}
                    inputProps={{ min: 1 }}
                    margin="normal"
                    required
                    value={employeeid}
                    sx={{ width: "300px" }}
                    onChange={(e) => setemployeeid(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Age"
                    variant="outlined"
                    required
                    value={age}
                    sx={{
                      mb: 1,
                      fontSize: "var(--joy-fontSize-sm)",
                      ml: 3,
                      width: "300px",
                    }}
                    onChange={(e) => setage(e.target.value)}
                    margin="normal"
                  />
                </div>
                <div>
                  <TextField
                    id="outlined-number"
                    label="Birthday"
                    type="text"
                    InputLabelProps={{ shrink: true }}
                    inputProps={{ min: 1 }}
                    margin="normal"
                    required
                    value={birthday}
                    sx={{ width: "300px" }}
                    onChange={(e) => setbirthday(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Address"
                    variant="outlined"
                    required
                    value={address}
                    sx={{
                      mb: 1,
                      fontSize: "var(--joy-fontSize-sm)",
                      ml: 3,
                      width: "300px",
                    }}
                    onChange={(e) => setaddress(e.target.value)}
                    margin="normal"
                  />
                </div>

                <div>
                  <TextField
                    id="outlined-basic"
                    label="Education"
                    variant="outlined"
                    required
                    value={education}
                    sx={{
                      mb: 1,
                      fontSize: "var(--joy-fontSize-sm)",
                      width: "300px",
                    }}
                    onChange={(e) => seteducation(e.target.value)}
                    margin="normal"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Phonnumber"
                    variant="outlined"
                    required
                    value={phonnumber}
                    sx={{
                      mb: 1,
                      fontSize: "var(--joy-fontSize-sm)",
                      ml: 3,
                      width: "300px",
                    }}
                    onChange={(e) => setphonnumber(e.target.value)}
                    margin="normal"
                  />
                </div>
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    required
                    value={email}
                    sx={{
                      mb: 1,
                      fontSize: "var(--joy-fontSize-sm)",
                      width: "300px",
                    }}
                    onChange={(e) => setemail(e.target.value)}
                    margin="normal"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Salary"
                    variant="outlined"
                    required
                    value={salary}
                    sx={{
                      mb: 1,
                      fontSize: "var(--joy-fontSize-sm)",
                      ml: 3,
                      width: "300px",
                    }}
                    onChange={(e) => setsalary(e.target.value)}
                    margin="normal"
                  />
                </div>
                <div>
                  <FormControl
                    sx={{
                      mb: 1,
                      fontSize: "var(--joy-fontSize-sm)",
                      ml: -0.5,
                      width: "300px",
                      mt:2
                    }}
                  >
                    <InputLabel id="demo-simple-select-helper-label">
                    Department
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={department}
                      label="Department"
                      onChange={(e) => setdepartment(e.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={'It'}>It</MenuItem>
                      <MenuItem value={'SalesDepartment'}>Sales Department</MenuItem>
                      <MenuItem value={'Accounting/FinanceDepartment'}>Accounting/Finance Department</MenuItem>
                      <MenuItem value={'Department'}>HR Department</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    id="outlined-basic"
                    label="Position"
                    variant="outlined"
                    required
                    value={position}
                    sx={{
                      mb: 1,
                      fontSize: "var(--joy-fontSize-sm)",
                      ml: 3,
                      width: "300px",
                    }}
                    onChange={(e) => setposition(e.target.value)}
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
          
          </center>
        </Paper>
        </center>
      </Container>
    </React.Fragment>
  );
}
