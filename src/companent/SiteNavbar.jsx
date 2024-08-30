import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

// https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonscout.com%2F3d-illustrations%2Fjavascript-logo&psig=AOvVaw1GOdaWWw_AWyhAUSezSxXL&ust=1725124528451000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJiR9OabnYgDFQAAAAAdAAAAABAE

const SiteNavbar = () => {
  return (
    <Navbar sticky="bottom" expand="lg" id="navbar-section">
      <Container className="container navbar-content">
        <Navbar.Brand>
          <Nav.Link>
            <NavLink className="navbar-link site-link" to="/">
              Project 100 JavaScript
            </NavLink>
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink className="navbar-link" to="/">
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="navbar-link" to="/about">
                About
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="navbar-link" to="/project">
                Project
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
