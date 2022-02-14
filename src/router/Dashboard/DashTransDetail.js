import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap";
import NavDashboard from "./NavDashboard";

const DashTransDetail = () => {
   const [aktif, setAktif] = useState(false);
   const [stic, setStic] = useState("235px");
   const monitorK = window.innerWidth < 500;

   useEffect(() => {
      if (monitorK) {
         setStic("0");
      }
   }, [monitorK]);

   const dashClick = () => {
      setAktif(!aktif);
      const sidebar = document.querySelector("#sidebars");
      sidebar.classList.toggle("active-nav");
   };

   const bread = (e) => {
      e.target.classList.toggle("text-decoration-underline");
   };

   return (
      <>
         <div className="overflow-hidden">
            <div className="d-flex">
               <NavDashboard />

               <div style={{ marginLeft: stic, backgroundColor: "#f5f5fb" }}>
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

                  <div className="content" style={monitorK ? { width: "100vw", height: "100vh", marginTop: "70px" } : { width: "83vw", height: "100vh", paddingRight: "1vw" }}>
                     <Container fluid>
                        <div>
                           <h5 className="fw-bold fs-5">#STORE10814</h5>
                           {/* ----------------------------------------------------------------------------------------- | BreadCrumb | ------------------------------------------------------------------------------------------------- */}

                           <Row>
                              <Col>
                                 <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                       <li className="breadcrumb-item">
                                          <a href="/" className="text-secondary lh-lg text-decoration-none" onMouseOver={bread} onMouseOut={bread}>
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
                                 {monitorK ? (
                                    <div className="card flex-row p-2 pt-3">ha</div>
                                 ) : (
                                    <div className="card flex-row p-2 pt-3">
                                       <div className="card-header border-0">
                                          <img src="images/product-detail-dashboard.png" alt="images" width="250" height="205" />
                                       </div>
                                       <div className="px-2 ms-3" style={{ marginRight: "100px" }}>
                                          <Col className="mb-4">
                                             <p className="dashboard-title m-0 mb-1 mt-2">Customer Name</p>
                                             <h5 className="fs-6 fw-bold">Arz</h5>
                                          </Col>
                                          <Col className="mb-4 ">
                                             <p className="dashboard-title m-0 mb-1">Date of Transaction</p>
                                             <h5 className="fs-6 fw-bold">5 Oktober, 2021</h5>
                                          </Col>
                                          <Col className="mb-5">
                                             <p className="dashboard-title m-0 mb-1">Total Amount</p>
                                             <h5 className="fs-6 fw-bold">$45,184</h5>
                                          </Col>
                                       </div>
                                       <div className="px-2 ms-5">
                                          <Col className="mb-4">
                                             <p className="dashboard-title m-0 mb-1 mt-2">Product Name</p>
                                             <h5 className="fs-6 fw-bold">DW Watch</h5>
                                          </Col>
                                          <Col className="mb-4">
                                             <p className="dashboard-title m-0 mb-1">Status</p>
                                             <h5 className="fs-6 fw-bold" style={{ color: "#F32355" }}>
                                                Pending
                                             </h5>
                                          </Col>
                                          <Col className="mb-5">
                                             <p className="dashboard-title m-0 mb-1">Mobile</p>
                                             <h5 className="fs-6 fw-bold">+62 858-3106-7841</h5>
                                          </Col>
                                       </div>
                                    </div>
                                 )}
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
