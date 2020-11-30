import React from 'react';
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Projects from './Projects';
import Resume from './Resume';


export default function HeaderNav() {

    return (
        <header>
            <Router>
                <Nav fill variant="tabs" defaultActiveKey="/home">
                    <Link to="/">
                        <Nav.Item>
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                    </Link>
                    <Link to="/projects">
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Projects</Nav.Link>
                        </Nav.Item>
                    </Link>
                    <Link to="/resume">
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Resume</Nav.Link>
                        </Nav.Item>
                    </Link>
                    <Link to="/contact">
                        <Nav.Item>
                            <Nav.Link eventKey="link-3">Contact</Nav.Link>
                        </Nav.Item>
                    </Link>
                </Nav>
                <Switch>
                    <Route
                        path="/" component={HeaderNav}>
                            <HeaderNav/>
                    </Route>
                    <Route
                        path="/projects" component={Projects}>
                            <Projects/>
                    </Route>
                    <Route
                        path="/resume" component={Resume}>
                            <Resume/>
                    </Route>
                    <Route
                        path="/contact">
                    </Route>
                </Switch>
            </Router>

        </header>
    )
}
