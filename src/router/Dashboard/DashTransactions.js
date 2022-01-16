import React, { useState } from "react";
import { Button, Card, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import NavDashboard from "./NavDashboard";
import us from "../../images/user.jpg";
import ic from "../../images/icon_cart.svg";
import dip1 from "../../images/dashboard-icon-product1.png";
import dip2 from "../../images/dashboard-icon-product2.png";
import dip3 from "../../images/dashboard-icon-product3.png";

const DashTransactions = () => {
   const [aktif, setAktif] = useState(false);
   const monitor = window.innerWidth < 800;

   const dashClick = () => {
      const wrap = document.querySelector("#wrapper");
      setAktif(!aktif);
      wrap.classList.toggle("toggled");
   };

   return (
      <>
         <div className="page-dashboard overflow-hidden" style={monitor ? { marginTop: "-20px" } : null}>
            <div className="d-flex" id="wrapper">
               <NavDashboard />

               <div id="page-content-wrapper">
                  <Navbar expand="lg" fixed="top" className="navbar-light navbar-store navbar-fixed-top">
                     <Container fluid>
                        <Button variant={aktif ? "primary" : "outline-primary"} className="d-md-none me-auto me-2" onClick={dashClick} id="menu-toggle">
                           Menu
                        </Button>
                        <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                           <span className="navbar-toggle-icon"></span>
                        </Button>

                        <Navbar.Collapse id="navbarSupportedContent">
                           <ul className="navbar-nav d-none d-lg-flex ms-auto">
                              <li class="nav-item dropdown">
                                 <Nav.Link class="nav-link dropdown-toggle" href="#a" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={us} alt="" className="rounded-circle me-2 profile-picture mb-1" />
                                    <span className="fw-bold" style={{ fontSize: "1.05em" }}>
                                       Hallo, Akmal
                                    </span>
                                 </Nav.Link>
                                 <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                       <a href="/dashboard" className="dropdown-item fw-bold">
                                          Dashboard
                                       </a>
                                    </li>
                                    <li>
                                       <a href="/dashboard-account" className="dropdown-item fw-bold">
                                          Settings
                                       </a>
                                    </li>
                                    <li>
                                       <hr class="dropdown-divider" />
                                    </li>
                                    <li>
                                       <a href="/" className="dropdown-item fw-bold">
                                          Logout
                                       </a>
                                    </li>
                                 </ul>
                              </li>
                              <li className="nav-item">
                                 <a href="#a" className="nav-link d-line-block mt-2">
                                    <img src={ic} alt="" />
                                    <div className="cart-badge">3</div>
                                 </a>
                              </li>
                           </ul>

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

                  <div className="section-content section-dashboard-home">
                     <Container fluid>
                        <div>
                           <h5 className="dashboard-title fw-bold">Transactions</h5>
                           <p className="dashboard-subtitle fw-bold fs-6">Big result start form the small one</p>
                        </div>
                        <Nav variant="pills" defaultActiveKey="/home">
                           <Nav.Item>
                              <Nav.Link href="#pils" className="active">
                                 Sell Product
                              </Nav.Link>
                           </Nav.Item>
                           <Nav.Item>
                              <Nav.Link>Buy Product</Nav.Link>
                           </Nav.Item>
                        </Nav>

                        <Row className="mt-3">
                           <Col className="col-12 mt-2">
                              <Card className="border-0 card-list">
                                 <a href="/dashboard-transactions-details" className=" d-block text-decoration-none">
                                    <Card.Body>
                                       <Row className="fw-bold">
                                          <Col md={1}>
                                             <img src={dip1} alt="" />
                                          </Col>
                                          <Col md={4}>Dw Watch</Col>
                                          <Col md={3}>Reza</Col>
                                          <Col md={3}>5 Oktober, 2021</Col>
                                       </Row>
                                    </Card.Body>
                                 </a>
                              </Card>

                              <Card className="border-0 card-list">
                                 <a href="/dashboard-transactions-details" className=" d-block text-decoration-none">
                                    <Card.Body>
                                       <Row className="fw-bold">
                                          <Col md={1}>
                                             <img src={dip2} alt="" />
                                          </Col>
                                          <Col md={4}>Parfume</Col>
                                          <Col md={3}>Ina</Col>
                                          <Col md={3}>19 November, 2021</Col>
                                       </Row>
                                    </Card.Body>
                                 </a>
                              </Card>

                              <Card className="border-0 card-list" style={{ marginBottom: "100px" }}>
                                 <a href="/dashboard-transactions-details" className=" d-block text-decoration-none">
                                    <Card.Body>
                                       <Row className="fw-bold">
                                          <Col md={1}>
                                             <img src={dip3} alt="" />
                                          </Col>
                                          <Col md={4}>YSL Sing Bag</Col>
                                          <Col md={3}>Rayya</Col>
                                          <Col md={3}>3 Januari, 2022</Col>
                                       </Row>
                                    </Card.Body>
                                 </a>
                              </Card>
                           </Col>
                        </Row>
                     </Container>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default DashTransactions;
