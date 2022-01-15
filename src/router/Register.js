import React from "react";
import { useState } from "react";
import { Button, ButtonGroup, Col, Container, FloatingLabel, Form, Row, ToggleButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarM from "./NavbarM";

function Register() {
   const [checked, setChecked] = useState(true);

   return (
      <div>
         <NavbarM />

         <Container className="mt-5 pt-4">
            <Row className="align-items-center justify-content-center">
               <Col lg={4}>
                  <h2>
                     Memulai untuk Jual beli <br />
                     dengan gaya baru
                  </h2>
                  <Form action="" className="mt-3">
                     <FloatingLabel controlId="floatingInput" label="Full Name" className="mb-3 ">
                        <Form.Control type="text" placeholder="Nakamura" />
                     </FloatingLabel>
                     <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                        <Form.Control type="email" placeholder="name@example.com" />
                     </FloatingLabel>
                     <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" />
                     </FloatingLabel>
                     <hr />
                     <div className="form-group mt-3">
                        <label>Store</label>
                        <p className="text-muted">Apakah anda juga ingin membuka toko?</p>
                     </div>

                     <Row>
                        <Col md>
                           <>
                              <ButtonGroup className="me-3">
                                 <ToggleButton id="checkTrue" type="radio" variant={checked ? "primary" : "outline-primary"} onChange={() => setChecked(true)}>
                                    Iya, Boleh
                                 </ToggleButton>
                              </ButtonGroup>
                           </>
                        </Col>
                        <Col md>
                           <>
                              <ButtonGroup className="ms-md-3 mt-2 mt-md-0">
                                 <ToggleButton id="checkFalse" type="radio" variant={checked ? "outline-danger" : "danger"} onChange={() => setChecked(false)}>
                                    Tidak, Terima Kasih
                                 </ToggleButton>
                              </ButtonGroup>
                           </>
                        </Col>
                     </Row>

                     {checked ? (
                        <>
                           <FloatingLabel controlId="floatingInput" label="Store Name" className="mb-3 mt-2">
                              <Form.Control type="text" placeholder="example" />
                           </FloatingLabel>
                           <FloatingLabel controlId="floatingSelect" label="Kategori" className="my-2">
                              <Form.Select aria-label="Floating label select example">
                                 <option selected disabled>
                                    Pilih Kategori
                                 </option>
                                 <option value="1">Satu</option>
                                 <option value="2">Dua</option>
                                 <option value="3">Tiga</option>
                              </Form.Select>
                           </FloatingLabel>
                        </>
                     ) : (
                        ""
                     )}

                     <Row className=" mt-2">
                        <Button className="btn btn-success mt-4">
                           <Link to="/login" className="text-decoration-none text-white">
                              Sign Up Now
                           </Link>
                        </Button>
                        <Button className="btn btn-secondary mt-1">
                           <Link to="/login" className="text-decoration-none text-white">
                              Back Sign Up
                           </Link>
                        </Button>
                     </Row>
                  </Form>
               </Col>
            </Row>
         </Container>

         {/* ---------------------------------------------------------------------------------------------------- | Footer | -------------------------------------------------------------------------------------------------  */}

         <footer className="mt-5">
            <hr />
            <Container>
               <Row>
                  <Col className="col-12 text-center text-secondary">
                     <p className="pt-4 pb-2">2022 &copy;Copyright Akmal. All Right Reserved</p>
                  </Col>
               </Row>
            </Container>
         </footer>
      </div>
   );
}

export default Register;
