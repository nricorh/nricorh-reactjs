import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Logo from "./image/logo_edu.png";


export default class HeaderNavbar extends React.Component{

    render() {
        return(
            <Navbar>
                <Container>
                <Navbar.Brand href="#home">
                    <img src={Logo} height={25} alt="Logo" />
                </Navbar.Brand>
                <Nav className="navbar navbar-expand-md py-3 bg-default navbar-default">
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                        <Nav.Link href="#home" className="text-primary">Home</Nav.Link>
                        <Nav.Link href="#kelas">Kelas</Nav.Link>
                        <Nav.Link href="#pricing">Login</Nav.Link>
                        <Nav.Link href="#pricing"><Button variant="primary">Primary</Button></Nav.Link>
                    </div>
                </Nav>
                </Container>
            </Navbar>
        )
    }
}