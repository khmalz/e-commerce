import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, FloatingLabel, Form, Nav, Navbar, Row } from "react-bootstrap";
import NavDashboard from "./NavDashboard";
import us from "../../images/user.jpg";
import ic from "../../images/icon_cart.svg";

const DashSettings = () => {
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

                  <div className="section-content section-dashboard-home">
                     <Container fluid>
                        <div>
                           <h5 className="dashboard-title fw-bold">Store Settings</h5>
                           <p className="dashboard-subtitle fw-bold fs-6">Make store that profitable</p>
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
                                                <label>Store</label>
                                                <p className="text-muted mt-2">Apakah anda juga ingin membuka toko?</p>
                                                <Row>
                                                   <Col className="text-start">
                                                      <input type="radio" name="flexRadioDefault" />
                                                      <label className="custom-control-label me-3 ms-1">Buka</label>
                                                      <input type="radio" className="ms-2 me-1" name="flexRadioDefault" />
                                                      <label className="custom-control-label">Sementara Tutup</label>
                                                   </Col>
                                                </Row>
                                             </Form.Group>
                                          </Col>
                                       </Row>

                                       <Row>
                                          <Col className="text-end">
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
