import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, FloatingLabel, Form, Nav, Navbar, Row } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import NavDashboard from "./NavDashboard";

const DashProductDetail = () => {
   const [input, setInput] = useState({ productName: "Dw Watch", price: "$100.00" });

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
         <div>
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
                                    <Card.Body className="card-body-my">
                                       <Row className="mt-2 mb-3">
                                          <Col md={6}>
                                             <FloatingLabel controlId="floatingText" label="Store Name" className="mb-3">
                                                <Form.Control type="text" value={input.productName} onChange={(e) => setInput({ ...input, productName: e.target.value })} placeholder="example" autoComplete="off" />
                                             </FloatingLabel>
                                          </Col>
                                          <Col md={6}>
                                             <FloatingLabel controlId="floatingText" label="Price" className="mb-3">
                                                <Form.Control type="text" value={input.price} onChange={(e) => setInput({ ...input, price: e.target.value })} placeholder="example" autoComplete="off" />
                                             </FloatingLabel>
                                          </Col>
                                       </Row>
                                       <Row>
                                          <Col>
                                             <FloatingLabel controlId="floatingSelect" label="Kategori">
                                                <Form.Select aria-label="Floating label select example">
                                                   <option disabled>Pilih Kategori</option>
                                                   <option selected value="1">
                                                      Shipping
                                                   </option>
                                                   <option value="2">Dua</option>
                                                   <option value="3">Tiga</option>
                                                </Form.Select>
                                             </FloatingLabel>
                                          </Col>
                                       </Row>
                                       <Row>
                                          <Col>
                                             <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Label className="ms-1 fw-bold" style={{ fontSize: "0.8rem" }}>
                                                   Description
                                                </Form.Label>
                                                {/* <Form.Control as="textarea" rows={3} /> */}
                                                <CKEditor
                                                   editor={ClassicEditor}
                                                   data="<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo perspiciatis nemo ab deserunt magni, officiis nisi quidem. Laborum assumenda beatae accusamus quidem nam odio magni voluptates veniam neque provident laudantium culpa, earum, deserunt illo nobis iusto tempore? Esse culpa reprehenderit perspiciatis cupiditate corporis aliquid quidem? Quod odio praesentium saepe neque, vitae quibusdam et fugit esse ea reiciendis.</p>"
                                                />
                                             </Form.Group>
                                          </Col>
                                       </Row>

                                       <Row>
                                          <Col className="mt-5">
                                             <button type="submit" className="btn btn-success px-5 w-100">
                                                Update Product
                                             </button>
                                          </Col>
                                       </Row>
                                    </Card.Body>
                                 </Card>
                              </Form>
                           </Col>
                        </Row>
                        <Row className="mt-5">
                           <Col>
                              <Card>
                                 <Card.Body className="card-body-my">
                                    <Row className="justify-content-between">
                                       <Col md={3}>
                                          <div className="position-relative">
                                             <span className="position-absolute bg-merah-x rounded-circle pointer " style={{ right: "62px", top: "-5px", fontSize: "0.8rem" }}>
                                                ❌
                                             </span>
                                             <img src="images/product-card-1.png" alt="" />
                                          </div>
                                       </Col>
                                       <Col md={3}>
                                          <div className="position-relative">
                                             <span className="position-absolute bg-merah-x rounded-circle pointer" style={{ right: "62px", top: "-5px", fontSize: "0.8rem" }}>
                                                ❌
                                             </span>
                                             <img src="images/product-card-2.png" alt="" />
                                          </div>
                                       </Col>
                                       <Col md={3}>
                                          <div className="position-relative">
                                             <span className="position-absolute bg-merah-x rounded-circle pointer" style={{ right: "62px", top: "-5px", fontSize: "0.8rem" }}>
                                                ❌
                                             </span>
                                             <img src="images/product-card-3.png" alt="" />
                                          </div>
                                       </Col>
                                    </Row>
                                    <Row>
                                       <Col className="mt-5">
                                          <button type="submit" className="btn btn-secondary px-5 w-100">
                                             Add Product
                                          </button>
                                       </Col>
                                    </Row>
                                 </Card.Body>
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

export default DashProductDetail;
