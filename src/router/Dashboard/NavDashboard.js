import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

const NavDashboard = () => {
   // const monitor = window.innerWidth < 800;
   const monitorK = window.innerWidth < 500;

   const dashClick = (e) => {
      e.target.classList.toggle("text-decoration-underline");
   };

   const lokasih = window.location.pathname;

   return (
      <>
         <Navbar fixed="top" className="flex-column ps-3 align-items-center shadow bg-light " id="sidebars">
            <Navbar.Brand href="#a" className="text-light mt-1">
               <img src="images/dashboard-store-logo.svg" alt="" />
            </Navbar.Brand>
            <Nav className="flex-column w-100 " style={{ fontSize: "1.1rem" }}>
               <NavLink to="/dashboard" className="text-decoration-none mt-3 side-list " onMouseOver={dashClick} onMouseOut={dashClick}>
                  <Nav.Link href="#h" style={lokasih === "/dashboard" ? { color: "black" } : { color: "#6c757d" }}>
                     Dashboard
                  </Nav.Link>
               </NavLink>
               <NavLink to="/dashboard-product" className="text-decoration-none mt-3 side-list" onMouseOver={dashClick} onMouseOut={dashClick}>
                  <Nav.Link style={lokasih === "/dashboard-product" ? { color: "black" } : { color: "#6c757d" }} href="#h">
                     My Product
                  </Nav.Link>
               </NavLink>
               <NavLink to="/dashboard-transactions" className={lokasih === "/dashboard-transactions-details" ? "text-decoration-none mt-3 side-list active" : "text-decoration-none mt-3 side-list"} onMouseOver={dashClick} onMouseOut={dashClick}>
                  <Nav.Link style={lokasih === "/dashboard-transactions" || lokasih === "/dashboard-transactions-details" ? { color: "black" } : { color: "#6c757d" }} href="#h">
                     Transactions
                  </Nav.Link>
               </NavLink>
               <NavLink to="/dashboard-settings" className="text-decoration-none mt-3 side-list" onMouseOver={dashClick} onMouseOut={dashClick}>
                  <Nav.Link style={lokasih === "/dashboard-settings" ? { color: "black" } : { color: "#6c757d" }} href="#h">
                     Settings
                  </Nav.Link>
               </NavLink>
               <NavLink to="/dashboard-account" className="text-decoration-none mt-3 side-list" onMouseOver={dashClick} onMouseOut={dashClick}>
                  <Nav.Link style={lokasih === "/dashboard-account" ? { color: "black" } : { color: "#6c757d" }} href="#h">
                     Account
                  </Nav.Link>
               </NavLink>
               <NavLink exact to="/" style={monitorK ? { marginTop: "140px" } : { marginTop: "250px" }} className="text-decoration-none side-list" onMouseOver={dashClick} onMouseOut={dashClick}>
                  <Nav.Link className="text-secondary" href="#h">
                     Sign Out
                  </Nav.Link>
               </NavLink>
            </Nav>
         </Navbar>
      </>
   );
};

export default NavDashboard;
