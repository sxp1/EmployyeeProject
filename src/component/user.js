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


export default function User() {
// ตัวแปลที่เก็บข้อมูลApi ที่เรียก
  const [items, setItems] = useState([]);
// ฟังชั่นในการเรียกข้อมูล
  useEffect(() => {
       Userget()
  }, []);
  const Userget = () => {
    fetch("http://192.168.56.117:3000/getall")
    .then((res) => res.json())
    .then((result) => {
      setItems(result);
    });
  }
  // ฟังก์ชั่นลบข้อมูล
  const Userdelete = id =>{
   
      var requestOptions = {
        method: 'DELETE',
      };
          
      fetch(`http://192.168.56.117:3000/deleteuser/${id}`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.status === 'ok') {
            Userget();
          }
        })
        .catch(err => console.log('Error:', err));
    
 }
//  ฟังชั่นแสดงการแจ้งเตือนเวลาลบข้อมูล
 const AletDelete = (id,firstname,lastname) => {
  Swal.fire({
    title: `คุณต้องการลบข้อมูล \n ${firstname} ${lastname} ใช่หรือไม่?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: "ลบ",
    confirmButtonColor: '#ff0000',
    cancelButtonColor: '#808080',
    cancelButtonText: "ยกเลิก",
    confirmButtonClass: 'custom-button-width',
    cancelButtonClass: 'custom-button-width'
  }).then((result) => {
    if (result.isConfirmed) {
    
      Swal.fire({
        icon: "success",
        title: "ลบข้อมูลสำเร็จ",
        showConfirmButton: false,
        timer: 1500,
      }).then((result) => {
        Userdelete(id);
       
        window.location.reload();
      });
    }
  }
  );
    

 }
  

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ p: 5 }}>
        {/* peper ส่วนของคอนเทนพื้นหลังสีขาว */}
        <Peper sx={{ p: 3 }}>
          <Box display="flex" sx={{mb:2}}>
            <Box flexGrow={1}>
              <Typography variant="h6" gutterBottom>
                User
              </Typography>
            </Box>
            <Box>
              <Link href="create">
                <Button variant="contained">Create</Button>
              </Link>
            </Box>
          </Box>
          {/* Data in Table  */}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                {/* ส่วนหัวข้อตาราง */}
                <TableRow>
                  <TableCell>ID </TableCell>
                  <TableCell align="right">Firstname</TableCell>
                  <TableCell align="right">Lastname</TableCell>
                  <TableCell align="right">Position</TableCell>
                  <TableCell align="right">Age</TableCell>
                  <TableCell align="right" sx={{pr:12}}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* ส่วนของข้อมูลในตาราง */}
                {items.map((row) => (
                  // items.map ใช้เอาข้อมูลลงในตางราง
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.customer_id}
                    </TableCell>
                    {/* ส่วนข้อมูลในตาราง */}
                    {/* เข้าถึงข้อมูลใน api เพื่อเอามาโชว์ผ่าน row  */}
                    <TableCell align="right">{row.firstname}</TableCell>
                    <TableCell align="right">{row.lastname}</TableCell>
                    <TableCell align="right">{row.position}</TableCell>
                    <TableCell align="right">{row.age}</TableCell>
                    <TableCell align="right" >
                     
                      <ButtonGroup
                        variant="outlined"
                        aria-label="outlined button group"
                       
                        
                      >
                        {/* Link ใช้ลิ้งเพจ ดูตรงนี้แล้วให้ไปดูในไฟล์ index.js อีกทีในนั้นการเรียกใช้การลิ้งพาท */}
                         <Link href="ViewProfile">
                        <div >
                         <Button sx={{mr:3}}>View</Button>
                         </div>
                         </Link>
                         <Link href="Edituser">
                         <div >
                         <Button sx={{mr:3}}>EDIT</Button>
                         </div>
                         </Link>
                       
                         
                      
                        <IconButton sx={{width:3}}>
                          {/* ไอคอนลบข้อมูลใช้ลบข้อมูลผ่านการเรียกฟังชั่น Onclick */}
                        <DeleteForeverIcon sx={{ color: pink[500] ,minWidth: 3 }} onClick={()=>AletDelete(row.id,row.firstname,row.lastname)} />
                       
                        </IconButton>


                      
                      </ButtonGroup>
                     
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Peper>
      </Container>
    </React.Fragment>
  );
}
