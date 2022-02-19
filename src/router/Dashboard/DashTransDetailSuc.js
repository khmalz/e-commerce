import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap";
import NavDashboard from "./NavDashboard";

const DashTransDetailSuc = () => {
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
         <div>
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
                                          <a href="/dashboard-transactions" className="text-secondary lh-lg text-decoration-none" onMouseOver={bread} onMouseOut={bread}>
                                             Transactions
                                          </a>
                                       </li>
                                       <li className="breadcrumb-item lh-lg fw-bold">Details</li>
                                    </ol>
                                 </nav>
                              </Col>
                           </Row>
                        </div>

                        <div className="h-100 bg-white p-3">
                           <Row>
                              <Col>
                                 <Card className="border-0 gap-3" style={{ flexDirection: "row" }}>
                                    <Card.Img style={{ width: "250px" }} height="200" variant="top" src="images/product-detail-dashboard.png" />
                                    <Card.Body className="ms-5" style={{ marginTop: "-10px", color: "#C5C5C5" }}>
                                       <p className="dashboard-title m-0 mb-1 mt-2">Customer Name</p>
                                       <h5 className="fs-6 fw-bold">Arz</h5>
                                       <p className="dashboard-title m-0 mb-1 mt-2">Date of Transaction</p>
                                       <h5 className="fs-6 fw-bold">5 Oktober, 2021</h5>
                                       <p className="dashboard-title m-0 mb-1 mt-2">Total Amount</p>
                                       <h5 className="fs-6 fw-bold">$45,184</h5>
                                    </Card.Body>
                                    <Card.Body style={{ marginTop: "-10px", color: "#C5C5C5", marginLeft: "-50px" }}>
                                       <p className="dashboard-title m-0 mb-1 mt-2">Product Name</p>
                                       <h5 className="fs-6 fw-bold">DW Watch</h5>
                                       <p className="dashboard-title m-0 mb-1 mt-2">Status</p>
                                       <h5 className="fs-6 fw-bold" style={{ color: "#29A867" }}>
                                          Success
                                       </h5>
                                       <p className="dashboard-title m-0 mb-1 mt-2">Mobile</p>
                                       <h5 className="fs-6 fw-bold">+62 858-3106-7841</h5>
                                    </Card.Body>
                                 </Card>
                              </Col>
                           </Row>
                           <Row>
                              <Col>
                                 <h5 className="fw-bold mt-2 mb-0">Shipping Information</h5>
                              </Col>
                           </Row>
                           <Row>
                              <Col md={6}>
                                 <Card className="border-0 mb-3 gap-3" style={{ flexDirection: "row" }}>
                                    <Card.Body style={{ color: "#C5C5C5" }}>
                                       <p className="dashboard-title m-0 mb-1">Adress I</p>
                                       <h5 className="fs-6 fw-bold mb-3">Jln. Dermaga Raya</h5>
                                       <p className="dashboard-title m-0 mb-1 mt-2">Province</p>
                                       <h5 className="fs-6 fw-bold mb-3">DKI Jakarta</h5>
                                       <p className="dashboard-title m-0 mb-1 mt-2">Postal Code</p>
                                       <h5 className="fs-6 fw-bold">17154</h5>
                                       <p className="dashboard-title m-0 mb-1 mt-3">Status</p>
                                       <div className="d-flex gap-4">
                                          <Form.Select aria-label="Default select example" className="w-50 fw-bold">
                                             <option value="1">Pending</option>
                                             <option selected value="2">
                                                Shipping
                                             </option>
                                          </Form.Select>
                                          <Form.Control size="sm" type="text" className="fw-bold" value="JP023314918464900 083748" />
                                       </div>
                                    </Card.Body>
                                    <Card.Body style={{ color: "#C5C5C5", marginLeft: "-20px" }}>
                                       <p className="dashboard-title m-0 mb-1">Adress II</p>
                                       <h5 className="fs-6 fw-bold mb-3">No 24</h5>
                                       <p className="dashboard-title m-0 mb-1 mt-2">City</p>
                                       <h5 className="fs-6 fw-bold mb-3">Jakarta Timur</h5>
                                       <p className="dashboard-title m-0 mb-1 mt-2">Country</p>
                                       <h5 className="fs-6 fw-bold">Indonesia</h5>
                                    </Card.Body>
                                 </Card>
                              </Col>
                           </Row>
                           <Row>
                              <Col className="text-end mt-3">
                                 <Button variant="success" className="px-5 py-2">
                                    Save Now
                                 </Button>
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

export default DashTransDetailSuc;
