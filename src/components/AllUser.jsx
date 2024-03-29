import { Table, TableHead, TableCell, TableRow, TableBody, styled } from '@mui/material'
import { useState, useEffect } from 'react';
import axios from 'axios';




const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;




const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;


const AllUser=()=>{
    const [users,setUsers]=useState([]);

    
    const getAllUsers = async()=>{
    //    axios
    //    .get('http://localhost:8000/')
    //    .then((res)=>{setUsers(res.data)}).catch((error)=>{
    //     console.log("Error:"+error.message);
    //    });
       let user=await axios.get('http://localhost:8000/');
       console.log(user.data);
       setUsers(user.data);
        
    }

    useEffect(()=>{getAllUsers()},[]);


    return(
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </THead>
                </TableHead>
                <TableBody>
                {users.map((user) => (
                    <TRow key={user.id}>
                        <TableCell>{user._id}</TableCell> {/* change it to user.id to use JSON Server */}
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                    </TRow>
                ))}
            </TableBody>
         </StyledTable>
    );
}
export default AllUser;