import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './Projects';
import Resume from './Resume';
import {  Switch, Route, Router } from 'react-router-dom';
// import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';




export default function HeaderNav() {

    return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Po-Ko Shih</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#resume">Resume</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        
    )
}
