import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import us from "../../images/user.jpg";
import ic from "../../images/icon_cart.svg";
import dip1 from "../../images/dashboard-icon-product1.png";
import dip2 from "../../images/dashboard-icon-product2.png";
import dip3 from "../../images/dashboard-icon-product3.png";
import dar from "../../images/dashboard-arrow-right.svg";
import { Button, Card, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import NavDashboard from "./NavDashboard";
import { useEffect } from "react";

const Dashboard = () => {
   const [aktif, setAktif] = useState(false);
   const [stic, setStic] = useState("200px");
   const monitor = window.innerWidth < 765;
   const monitorK = window.innerWidth < 500;

   const dashClick = () => {
      const wrap = document.querySelector("#wrapper");
      setAktif(!aktif);
      wrap.classList.toggle("toggled");
   };

   useEffect(() => {
      if (monitorK) {
         setStic("0");
      }
   }, [monitorK]);

   return (
      <>
         {/* ---------------------------------------------------------------------------------------------- | Dashboard | --------------------------------------------------------------------------------------------------  */}

         <div className="page-dashboard" style={monitor ? { marginTop: "-25px" } : null}>
            <div className="d-flex" id="wrapper">
               <NavDashboard />

               <div id="page-content-wrapper" style={{ marginLeft: stic }}>
                  <Navbar expand="lg" fixed="top" className="navbar-store navbar-fixed-top">
                     <Container fluid>
                        <Button variant={aktif ? "primary" : "outline-primary"} className="d-md-none me-auto me-2" onClick={dashClick} id="menu-toggle">
                           Menu
                        </Button>
                        <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                           <span className="navbar-toggle-icon"></span>
                        </Button>

                        <Navbar className="collapse" id="navbarSupportedContent">
                           <ul className="navbar-nav d-none d-md-flex ms-auto">
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
                                 <a href="#a" className="nav-link d-inline-block mt-2">
                                    <img src={ic} alt="" />
                                    <div className="cart-badge">3</div>
                                 </a>
                              </li>
                           </ul>

                           {/* For Mobile */}

                           <ul className="navbar-nav d-block d-lg-none ms-auto">
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
                        </Navbar>
                     </Container>
                  </Navbar>

                  <div className="section-content section-dashboard-home" style={{ height: "100vh" }}>
                     <Container fluid>
                        <div className="fw-bold">
                           <h2>Dashboard</h2>
                           <p>Look what you made today</p>
                        </div>
                        <div>
                           <Row>
                              <Col md={4}>
                                 <Card className="mb-2">
                                    <Card.Body>
                                       <div className="dashboard-card-title">Customer</div>
                                       <div className="dashboard-card-subtitle">$16,300</div>
                                    </Card.Body>
                                 </Card>
                              </Col>
                              <Col md={4}>
                                 <Card className="mb-2">
                                    <Card.Body>
                                       <div className="dashboard-card-title">Revenue</div>
                                       <div className="dashboard-card-subtitle">$893,787</div>
                                    </Card.Body>
                                 </Card>
                              </Col>
                              <Col md={4}>
                                 <Card className="mb-2">
                                    <Card.Body>
                                       <div className="dashboard-card-title">Transaction</div>
                                       <div className="dashboard-card-subtitle">$25.700,000</div>
                                    </Card.Body>
                                 </Card>
                              </Col>
                           </Row>

                           <div className="row mt-3">
                              <div className="col-12 mt-2">
                                 <h5 className="mb-3 fw-bold">Recent Transaction</h5>

                                 <Card className="border-0 card-list">
                                    <a href="/dashboard-transactions-details" className=" d-block text-decoration-none">
                                       <Card.Body>
                                          <Row className="fw-bolder">
                                             <Col md={1}>
                                                <img src={dip1} alt="" />
                                             </Col>
                                             <Col md={4}>Dw Watch</Col>
                                             <Col md={3}>Reza</Col>
                                             <Col md={3}>5 Oktober, 2021</Col>
                                             <Col md={1} className="d-none d-md-block">
                                                <img src={dar} alt="" />
                                             </Col>
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
                                             <Col md={1} className="d-none d-md-block">
                                                <img src={dar} alt="" />
                                             </Col>
                                          </Row>
                                       </Card.Body>
                                    </a>
                                 </Card>

                                 <Card className="border-0 card-list">
                                    <a href="/dashboard-transactions-details" className=" d-block text-decoration-none">
                                       <Card.Body>
                                          <Row className="fw-bold">
                                             <Col md={1}>
                                                <img src={dip3} alt="" />
                                             </Col>
                                             <Col md={4}>YSL Sing Bag</Col>
                                             <Col md={3}>Rayya</Col>
                                             <Col md={3}>3 Januari, 2022</Col>
                                             <Col md={1} className="d-none d-md-block">
                                                <img src={dar} alt="" />
                                             </Col>
                                          </Row>
                                       </Card.Body>
                                    </a>
                                 </Card>
                              </div>
                           </div>
                        </div>
                     </Container>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Dashboard;
