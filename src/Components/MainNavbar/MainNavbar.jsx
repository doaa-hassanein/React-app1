import React from "react";
import { NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar"; // ده Navbar بتاع Bootstrap

function MainNavbar() {
 
  return (
    <Navbar expand="lg" className="bg-body-tertiary py-4">
      <Container>
        <Link
          to="/"
          className="navbar-brand text-white text-uppercase fw-bolder fs-2"
        >
          Start Framework
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <li className="nav-item me-3">
              <NavLink
                to="/about"
                className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2"
                style={{ width: "fit-content" }}
              >
                {" "}
                About{" "}
              </NavLink>
            </li>

            <li className="nav-item me-3">
              <NavLink
                to="/portfolio"
                className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2"
                style={{ width: "fit-content" }}
              >
                {" "}
                Portfolio{" "}
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink
                to="/contact"
                className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2"
                style={{ width: "fit-content" }}
              >
                {" "}
                Contact{" "}
              </NavLink>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
