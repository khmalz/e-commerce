import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import NavDashboard from "./NavDashboard";

const Dashboard = () => {
   const [aktif, setAktif] = useState(false);

   const [stic, setStic] = useState("235px");

   const monitor = window.innerWidth > 765;
   const monitorK = window.innerWidth < 500;

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
         {/* ---------------------------------------------------------------------------------------------- | Dashboard | --------------------------------------------------------------------------------------------------  */}

         <div style={monitor ? { marginTop: "-15px", overflow: "hidden" } : {}}>
            <div className="d-flex">
               <NavDashboard />

               <div style={monitorK ? { marginTop: "80px" } : {} && { marginLeft: stic, backgroundColor: "#f5f5fb" }}>
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
                        </Navbar.Collapse>
                     </Container>
                  </Navbar>

                  <div className="content" style={monitorK ? { height: "100vh" } : { width: "83vw", height: "100vh", paddingRight: "1vw" }}>
                     <Container fluid>
                        <div className="fw-bold">
                           <h5 className="fw-bold fs-5">Dashboard</h5>
                           <p className="title fs-6">Look what you made today</p>
                        </div>
                        <div>
                           <Row>
                              <Col md={4}>
                                 <Card className="mb-2">
                                    <Card.Body>
                                       <div className="card-title">Customer</div>
                                       <div className="card-subtitle">$16,300</div>
                                    </Card.Body>
                                 </Card>
                              </Col>
                              <Col md={4}>
                                 <Card className="mb-2">
                                    <Card.Body>
                                       <div className="card-title">Revenue</div>
                                       <div className="card-subtitle">$893,787</div>
                                    </Card.Body>
                                 </Card>
                              </Col>
                              <Col md={4}>
                                 <Card className="mb-2">
                                    <Card.Body>
                                       <div className="card-title">Transaction</div>
                                       <div className="card-subtitle">$25.700,000</div>
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
                                                <img src="images/dashboard-icon-product1.png" alt="" />
                                             </Col>
                                             <Col md={4}>Dw Watch</Col>
                                             <Col md={3}>Reza</Col>
                                             <Col md={3}>5 Oktober, 2021</Col>
                                             <Col md={1} className="d-none d-md-block">
                                                <img src="images/dashboard-arrow-right.svg" alt="" />
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
                                                <img src="images/dashboard-icon-product2.png" alt="" />
                                             </Col>
                                             <Col md={4}>Parfume</Col>
                                             <Col md={3}>Ina</Col>
                                             <Col md={3}>19 November, 2021</Col>
                                             <Col md={1} className="d-none d-md-block">
                                                <img src="images/dashboard-arrow-right.svg" alt="" />
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
                                                <img src="images/dashboard-icon-product3.png" alt="" />
                                             </Col>
                                             <Col md={4}>YSL Sing Bag</Col>
                                             <Col md={3}>Rayya</Col>
                                             <Col md={3}>3 Januari, 2022</Col>
                                             <Col md={1} className="d-none d-md-block">
                                                <img src="images/dashboard-arrow-right.svg" alt="" />
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
