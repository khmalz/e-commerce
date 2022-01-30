import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, FloatingLabel, Form, Nav, Navbar, Row } from "react-bootstrap";
import NavDashboard from "./NavDashboard";

const DashSettings = () => {
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

   return (
      <>
         <div className="overflow-hidden">
            <div className="d-flex">
               <NavDashboard />

               <div style={monitorK ? { marginTop: "70px" } : {} && { marginLeft: stic, backgroundColor: "#f5f5fb" }}>
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
                           <h5 className="fw-bold fs-5">Store Settings</h5>
                           <p className="dashboard-title fs-6">Make store that profitable</p>
                        </div>
                        <Row>
                           <Col>
                              <Form>
                                 <Card>
                                    <Card.Body>
                                       <Row>
                                          <Col md={6}>
                                             <FloatingLabel controlId="floatingText" label="Store Name" className="mb-3">
                                                <Form.Control type="text" placeholder="example" autoComplete="off" />
                                             </FloatingLabel>
                                          </Col>
                                          <Col md={6}>
                                             <FloatingLabel controlId="floatingSelect" label="Kategori">
                                                <Form.Select aria-label="Floating label select example">
                                                   <option selected disabled>
                                                      Pilih Kategori
                                                   </option>
                                                   <option value="1">Satu</option>
                                                   <option value="2">Dua</option>
                                                   <option value="3">Tiga</option>
                                                </Form.Select>
                                             </FloatingLabel>
                                          </Col>
                                       </Row>
                                       <Row>
                                          <Col md={6}>
                                             <Form.Group>
                                                <label className="mt-3 mt-lg-0">Store</label>
                                                <p className="text-muted mt-2">Apakah anda juga ingin membuka toko?</p>
                                                <Row>
                                                   <Col className="text-start">
                                                      <input type="radio" name="flexRadioDefault" checked />
                                                      <label className="custom-control-label me-3 ms-1">Buka</label>
                                                      <input type="radio" className="ms-2 me-1 " name="flexRadioDefault" />
                                                      <label className="custom-control-label">Sementara Tutup</label>
                                                   </Col>
                                                </Row>
                                             </Form.Group>
                                          </Col>
                                       </Row>

                                       <Row>
                                          <Col className="text-end mt-2">
                                             <button type="submit" className="btn btn-success px-5">
                                                Save Now
                                             </button>
                                          </Col>
                                       </Row>
                                    </Card.Body>
                                 </Card>
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

export default DashSettings;
