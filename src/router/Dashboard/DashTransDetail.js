import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap";
import NavDashboard from "./NavDashboard";
import us from "../../images/user.jpg";
import ic from "../../images/icon_cart.svg";
import pdd from "../../images/product-detail-dashboard.png";

const DashTransDetail = () => {
   const [aktif, setAktif] = useState(false);
   const [stic, setStic] = useState("200px");
   const monitorK = window.innerWidth < 500;

   useEffect(() => {
      if (monitorK) {
         setStic("0");
      }
   }, [monitorK]);

   const dashClick = () => {
      const wrap = document.querySelector("#wrapper");
      setAktif(!aktif);
      wrap.classList.toggle("toggled");
   };

   return (
      <>
         <div className="page-dashboard">
            <div className="d-flex" id="wrapper">
               <NavDashboard />

               <div id="page-content-wrapper" style={{ marginLeft: stic }}>
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

                  <div className="section-content section-dashboard-home" style={{ height: "100vh" }}>
                     <Container fluid>
                        <div>
                           <h5 className="fw-bold fs-5">#STORE10814</h5>
                           {/* ----------------------------------------------------------------------------------------- | BreadCrumb | ------------------------------------------------------------------------------------------------- */}

                           <Row>
                              <Col>
                                 <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                       <li className="breadcrumb-item">
                                          <a href="/" className="text-secondary lh-lg text-decoration-none" onMouseOver={dashClick} onMouseOut={dashClick}>
                                             Home
                                          </a>
                                       </li>
                                       <li className="breadcrumb-item lh-lg fw-bold">Cart</li>
                                    </ol>
                                 </nav>
                              </Col>
                           </Row>
                        </div>

                        <Row>
                           <Col>
                              <Form>
                                 <div class="card flex-row p-2 pt-3">
                                    <div class="card-header border-0">
                                       <img src={pdd} alt="images" />
                                    </div>
                                    <div class="px-2 ms-3 me-5">
                                       <Col>
                                          <p class="dashboard-title m-0">Customer Name</p>
                                          <h5 class="fs-6 fw-bold">Arz</h5>
                                       </Col>
                                       <Col>
                                          <p class="dashboard-title m-0">Date of Transaction</p>
                                          <h5 class="fs-6 fw-bold">5 Oktober, 2021</h5>
                                       </Col>
                                       <Col>
                                          <p class="dashboard-title m-0">Total Amount</p>
                                          <h5 class="fs-6 fw-bold">$45,184</h5>
                                       </Col>
                                    </div>
                                    <div class="px-2 ms-5">
                                       <Col>
                                          <p class="dashboard-title m-0">Product Name</p>
                                          <h5 class="fs-6 fw-bold">DW Watch</h5>
                                       </Col>
                                       <Col>
                                          <p class="dashboard-title m-0">Status</p>
                                          <h5 class="fs-6 fw-bold" style={{ color: "#F32355" }}>
                                             Pending
                                          </h5>
                                       </Col>
                                       <Col>
                                          <p class="dashboard-title m-0">Mobile</p>
                                          <h5 class="fs-6 fw-bold">+62 858-3106-7841</h5>
                                       </Col>
                                    </div>
                                 </div>
                              </Form>
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

export default DashTransDetail;
