import { Container, Form, Nav, Navbar } from "react-bootstrap";
import React from "react";
import { NavLink } from "react-router-dom";

const NavbarM = () => {
   const lokasi = window.location.pathname === "/" || "/detail";

   return (
      <>
         <Navbar bg="light" expand="lg" fixed="top" className={lokasi ? "shadow-sm" : "bg-transparent"}>
            <Container>
               <Navbar.Brand href="#home">
                  <img src="images/logo.svg" width="45" height="40" className="d-inline-block align-top" alt="" />
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse id="navbarScroll">
                  <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
                     <Nav.Link className="me-4">
                        <NavLink exact activeClassName="activation" className="text-decoration-none" style={{ color: "#848485" }} to="/">
                           Home
                        </NavLink>
                     </Nav.Link>
                     <Nav.Link className="me-4">
                        <NavLink activeClassName="activation" className="text-decoration-none" style={{ color: "#848485" }} to="/detail">
                           Categories
                        </NavLink>
                     </Nav.Link>
                     <Nav.Link className="me-4">
                        <NavLink activeClassName="activation" className="text-decoration-none" style={{ color: "#848485" }} to="/rewards">
                           Rewards
                        </NavLink>
                     </Nav.Link>
                     <Nav.Link className="me-4">
                        <NavLink activeClassName="activation" className="text-decoration-none" style={{ color: "#848485" }} to="/register">
                           Sign Up
                        </NavLink>
                     </Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                     <a class="nav-link btn btn-success px-3 text-light" href="/login">
                        Sign In
                     </a>
                  </Form>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
   );
};

export default NavbarM;
