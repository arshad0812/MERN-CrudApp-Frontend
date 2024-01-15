import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import react,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const InitialValue={
    name:'',
    username:'',
    email:'',
    phone:''
};

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const clickfunction=(e)=>{
    console.log(e);
}

const AddUser=()=>{
    
    const usersUrl = "http://localhost:8000";

    let navigate=useNavigate();
    const [user,setUser]=useState(InitialValue);


    const {name,username,email,phone}=user;

    const onValueChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
      
        
    }

    const addUserDetails=async()=>{
        console.log(user);
        await axios.post(`${usersUrl}/add`,user);
        navigate('/');
    }


    return(
        <Container>
        <Typography variant="h4">Add User</Typography>
        <FormControl>
            <InputLabel htmlFor="my-input">Name</InputLabel>
            <Input onChange={(e)=>onValueChange(e)} name="name" />
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="my-input">Username</InputLabel>
            <Input onChange={(e)=>{onValueChange(e)}} name="username"/>
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="my-input">Email</InputLabel>
            <Input onChange={(e)=>{onValueChange(e)}} name="email"/>
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="my-input">Phone</InputLabel>
            <Input onChange={(e)=>{onValueChange(e)}} name="phone"/>
        </FormControl>
        <FormControl>
            <Button variant="contained" color="primary" onClick={addUserDetails}>Add User</Button>
        </FormControl>
    </Container>

    );
}



export default AddUser;