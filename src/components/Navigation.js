import React from 'react'
import { Switch, Route, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Formcontrol from "react-bootstrap/Formcontrol";
import Button from "react-bootstrap/Button";
import Home from './home/Home';
import News from './news/News';
import Contact from './contact/Contact';

function Navigation() {
  return (
    <div>
       <Navbar collapseOnSelect expand="lg" fixed="top" bg="light" style={{ minHeight: '70px' }}>
        <Container>
          <Navbar.Brand href="/" >The YAY Company</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink exact to="/" className="nav-link">Home</NavLink>
              <NavLink to="/news" className="nav-link">News</NavLink>
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </Nav>
            <Form className="d-flex">
              <Formcontrol type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Go</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

       {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  )
}

export default Navigation;
