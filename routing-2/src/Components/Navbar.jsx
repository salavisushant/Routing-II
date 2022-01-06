import { Link } from "react-router-dom";

import styled from 'styled-components'

export const Nav = styled.div`
background-color: #CE93D8;
color: #F4EEA9;
display: flex;
justify-content: space-evenly;
padding: 18px;
font-size: 25px;

`


export const Navbar =()=>{
    return (
        <Nav>
            <Link style={{textDecoration: 'none',fontWeight: 'bold'}} to="/">Home</Link>
            <Link style={{textDecoration: 'none',fontWeight: 'bold'}}  to="/login">Login</Link>
            <Link style={{textDecoration: 'none',fontWeight: 'bold'}}  to="/dashboard">Dashboard</Link>
            <Link style={{textDecoration: 'none',fontWeight: 'bold'}}  to="/dashboard/setting">Setting</Link>
        </Nav>
    )
}