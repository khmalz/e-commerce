import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import NavDashboard from "./NavDashboard";

const DashTransactions = () => {
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
                           <h5 className="fw-bold fs-5">Transactions</h5>
                           <p className="dashboard-title fs-6">Big result start form the small one</p>
                        </div>
                        <Nav variant="pills" defaultActiveKey="#">
                           <Nav.Item>
                              <Nav.Link href="#" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                                 Sell Product
                              </Nav.Link>
                           </Nav.Item>
                           <Nav.Item>
                              <Nav.Link id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false" eventKey="link-1">
                                 Buy Product
                              </Nav.Link>
                           </Nav.Item>
                        </Nav>
                        <div className="tab-content" id="myTabContent">
                           <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                              <Row className="mt-3">
                                 <Col className="col-12 mt-2">
                                    <Card className="border-0 card-list">
                                       <a href="/dashboard-transactions-details" className=" d-block text-decoration-none">
                                          <Card.Body className="card-body-my">
                                             <Row className="fw-bold">
                                                <Col md={1}>
                                                   <img src="images/dashboard-icon-product1.png" alt="" />
                                                </Col>
                                                <Col md={4}>Dw Watch</Col>
                                                <Col md={3}>Leroy</Col>
                                                <Col md={3}>5 Oktober, 2021</Col>
                                             </Row>
                                          </Card.Body>
                                       </a>
                                    </Card>

                                    <Card className="border-0 card-list">
                                       <a href="/dashboard-transactions-details" className=" d-block text-decoration-none">
                                          <Card.Body className="card-body-my">
                                             <Row className="fw-bold">
                                                <Col md={1}>
                                                   <img src="images/dashboard-icon-product2.png" alt="" />
                                                </Col>
                                                <Col md={4}>Parfume</Col>
                                                <Col md={3}>Divya</Col>
                                                <Col md={3}>19 November, 2021</Col>
                                             </Row>
                                          </Card.Body>
                                       </a>
                                    </Card>

                                    <Card className="border-0 card-list" style={{ marginBottom: "100px" }}>
                                       <a href="/dashboard-transactions-details" className=" d-block text-decoration-none">
                                          <Card.Body className="card-body-my">
                                             <Row className="fw-bold">
                                                <Col md={1}>
                                                   <img src="images/dashboard-icon-product3.png" alt="" />
                                                </Col>
                                                <Col md={4}>YSL Sing Bag</Col>
                                                <Col md={3}>Anindira</Col>
                                                <Col md={3}>3 Januari, 2022</Col>
                                             </Row>
                                          </Card.Body>
                                       </a>
                                    </Card>
                                 </Col>
                              </Row>
                           </div>
                           <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                              <Row className="mt-3">
                                 <Col className="col-12 mt-2">
                                    <Card className="border-0 card-list">
                                       <a href="/dashboard-transactions-details" className=" d-block text-decoration-none">
                                          <Card.Body className="card-body-my">
                                             <Row className="fw-bold">
                                                <Col md={1}>
                                                   <img src="images/product-card-4.png" width="45  " height="45  " alt="" />
                                                </Col>
                                                <Col md={4}>Macbook</Col>
                                                <Col md={3}>Anindira</Col>
                                                <Col md={3}>5 Oktober, 2021</Col>
                                             </Row>
                                          </Card.Body>
                                       </a>
                                    </Card>
                                 </Col>
                              </Row>
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

export default DashTransactions;
