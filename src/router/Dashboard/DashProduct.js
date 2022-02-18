import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import NavDashboard from "./NavDashboard";

const DashProduct = () => {
   const [aktif, setAktif] = useState(false);
   const monitor = window.innerWidth < 800;
   const monitorK = window.innerWidth < 500;
   const [stic, setStic] = useState("235px");

   const dashClick = () => {
      setAktif(!aktif);
      const sidebar = document.querySelector("#sidebars");
      sidebar.classList.toggle("active-nav");
   };

   useEffect(() => {
      if (monitorK) {
         setStic("0");
      }
   }, [monitorK]);

   return (
      <>
         <div style={monitor ? { marginTop: "-35px" } : { overflow: "hidden" }}>
            <div className="d-flex">
               <NavDashboard />

               <div style={monitorK ? { marginTop: "100px" } : {} && { marginLeft: stic, backgroundColor: "#f5f5fb" }}>
                  <Navbar expand="lg" fixed="top" bg={monitorK ? "light" : ""}>
                     <Container fluid>
                        <Button variant={aktif ? "primary" : "outline-primary"} className="d-md-none me-auto me-2" onClick={dashClick} id="menu-toggle">
                           Menu
                        </Button>
                        <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                           <span className="navbar-toggle-icon"></span>
                        </Button>

                        <Navbar.Collapse id="navbarSupportedContent">
                           <Nav className="d-none d-lg-flex ms-auto">
                              <Nav.Link className="dropdown">
                                 <Nav.Link className="dropdown-toggle" href="#a" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="images/user.jpg" alt="" className="rounded-circle me-2 mb-1" style={{ maxHeight: "45px", marginLeft: "-20px" }} />
                                    <span className="fw-bold" style={{ fontSize: "1.05em" }}>
                                       Hallo, Akmal
                                    </span>
                                 </Nav.Link>
                              </Nav.Link>
                              <Nav.Link className="d-inline-block mt-3" style={{ marginLeft: "-13px " }}>
                                 <img src="images/icon_cart.svg" alt="" />
                                 <div className="cart">3</div>
                              </Nav.Link>
                           </Nav>

                           <ul className="navbar-nav d-block d-lg-none">
                              <li className="nav-item">
                                 <a href="#a" className="nav-link">
                                    Hallo, Akmal
                                 </a>
                              </li>
                              <li className="nav-item">
                                 <a href="#a" className="nav-link d-inline-block">
                                    Cart
                                 </a>
                              </li>
                           </ul>
                        </Navbar.Collapse>
                     </Container>
                  </Navbar>

                  <div className="content" style={monitorK ? { height: "100vh" } : { width: "83vw", height: "100vh", paddingRight: "1vw" }}>
                     <Container fluid>
                        <div>
                           <h5 className="fw-bold fs-5">My Products</h5>
                           <p className="dashboard-title fs-6 opacity-75">Manage it well and get money</p>
                           <Button variant="success">
                              <NavLink to="/dashboard-product-detail" className="text-decoration-none text-white">
                                 Add New Product
                              </NavLink>
                           </Button>
                        </div>
                        <div>
                           <Row className="mt-3 gap-5">
                              <Col lg={3} md={2}>
                                 <Card className="p-3">
                                    <Card.Img variant="top" src="images/product-card-1.png" />
                                    <Card.Body>
                                       <Card.Title className="fw-bold">DW Watch</Card.Title>
                                       <Card.Text className="opacity-75" style={{ fontSize: "0.9rem" }}>
                                          Fashion
                                       </Card.Text>
                                    </Card.Body>
                                 </Card>
                              </Col>
                              <Col lg={3} md={2}>
                                 <Card className="p-3">
                                    <Card.Img variant="top" src="images/product-card-2.png" />
                                    <Card.Body>
                                       <Card.Title className="fw-bold">Canon</Card.Title>
                                       <Card.Text className="opacity-75" style={{ fontSize: "0.9rem" }}>
                                          Technology
                                       </Card.Text>
                                    </Card.Body>
                                 </Card>
                              </Col>
                              <Col lg={3} md={2}>
                                 <Card className="p-3">
                                    <Card.Img variant="top" src="images/product-card-3.png" />
                                    <Card.Body>
                                       <Card.Title className="fw-bold">Channel Parfume</Card.Title>
                                       <Card.Text className="opacity-75" style={{ fontSize: "0.9rem" }}>
                                          Fashion
                                       </Card.Text>
                                    </Card.Body>
                                 </Card>
                              </Col>
                           </Row>
                           <Row className="mt-4 gap-5">
                              <Col lg={3} md={2}>
                                 <Card className="p-3">
                                    <Card.Img variant="top" src="images/product-card-4.png" />
                                    <Card.Body>
                                       <Card.Title className="fw-bold">Macbook Pro</Card.Title>
                                       <Card.Text className="opacity-75" style={{ fontSize: "0.9rem" }}>
                                          Technology
                                       </Card.Text>
                                    </Card.Body>
                                 </Card>
                              </Col>
                              <Col lg={3} md={2}>
                                 <Card className="p-3">
                                    <Card.Img variant="top" src="images/product-card-5.png" />
                                    <Card.Body>
                                       <Card.Title className="fw-bold">Sofa</Card.Title>
                                       <Card.Text className="opacity-75" style={{ fontSize: "0.9rem" }}>
                                          Interior
                                       </Card.Text>
                                    </Card.Body>
                                 </Card>
                              </Col>
                           </Row>
                        </div>
                     </Container>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default DashProduct;
