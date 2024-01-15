
import { AppBar, Toolbar, styled } from '@mui/material';

import { NavLink } from 'react-router-dom';



const Header = styled(AppBar)`
    background: #111111;
`;
    
const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
`;


const Navbar=()=>{
    return(
        <Header position="static">
        <Toolbar>
            <Tabs>MernCrudApp</Tabs>
            <Tabs to="/" exact>All Users</Tabs>
            <Tabs to="add" exact>Add User</Tabs>
        </Toolbar>
    </Header>

    );
}


export default Navbar;