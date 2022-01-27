import { Container, Nav, Navbar } from "react-bootstrap";
import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {      

    return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">PRODUCTS!</Navbar.Brand>
                <Nav className="me-auto">
                    <Link className='nav-link' to='/'>Home</Link> 
                    <Link className='nav-link' to='/aboutme'>AboutMe</Link>
                    <Link className='nav-link' to='/auth/login'>Ingresar</Link> 
                    <Link className='nav-link' to='/auth/register'>Registrarse</Link>          
                    <Link className='nav-link' to='/detalle'></Link>              
                </Nav>
                </Container>
            </Navbar>
            
            <br />        
        </>        
    );

 }

export default Navigation;