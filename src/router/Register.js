import React from "react";
import { useState } from "react";
import { Button, ButtonGroup, Col, Container, FloatingLabel, Form, Row, ToggleButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarM from "./NavbarM";

function Register() {
   const [checked, setChecked] = useState(false);
   const [action, setAction] = useState("");
   const [input, setInput] = useState({ fullName: "Akmal", email: "", password: "" });
   const [notif, setNotif] = useState(false);

   const formFname = (e) => {
      setInput({ ...input, fullName: e.target.value });
      if (e.target.value.length > 3) {
         e.target.classList.add("is-valid");
         e.target.classList.remove("is-invalid");
      } else {
         e.target.classList = "form-control is-invalid";
      }
   };

   const formEmail = (e) => {
      setInput({ ...input, email: e.target.value });
      if (e.target.value.length > 5) {
         e.target.classList.add("is-valid");
         e.target.classList.remove("is-invalid");
      } else {
         e.target.classList = "form-control is-invalid";
      }
   };

   const formPassw = (e) => {
      setInput({ ...input, password: e.target.value });
      if (e.target.value.length > 5) {
         e.target.classList.add("is-valid");
         e.target.classList.remove("is-invalid");
      } else {
         e.target.classList = "form-control is-invalid";
      }
   };

   const validasi = () => {
      if (input.fullName.length > 3 && input.email.length > 5 && input.password > 5) {
         setAction("/success-register");
      } else {
         setNotif(true);
      }
   };

   return (
      <div>
         <NavbarM />

         {/* ---------------------------------------------------------------------------------------------- | Form Sign Up | --------------------------------------------------------------------------------------------------  */}

         <Container className="mt-5 pt-5" style={{ height: "800px" }}>
            <Row className="align-items-center justify-content-center">
               <Col lg={4}>
                  {notif ? alert("Anda harus mengisi data sesuai dengan syarat") : null}

                  <h2>
                     Memulai untuk Jual beli <br />
                     dengan gaya baru
                  </h2>
                  <Form onSubmit={validasi} action={action} className="mt-3">
                     <FloatingLabel controlId="floatingInput" label="Full Name" className="mb-3 ">
                        <Form.Control className="is-valid" type="text" placeholder="Khairul Akmal" autoComplete="off" value={input.fullName} onChange={formFname} />
                        <Form.Text className="text-muted">Minimal banyak huruf untuk Nama adalah 4.</Form.Text>
                     </FloatingLabel>
                     <FloatingLabel controlId="floatingEmail" label="Email address" className="mb-3">
                        <Form.Control className="" type="email" placeholder="name@example.com" autoComplete="off" value={input.email} onChange={formEmail} />
                        <Form.Text className="text-muted">Minimal banyak huruf untuk Email adalah 6.</Form.Text>
                     </FloatingLabel>
                     <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control className="" type="password" placeholder="Password" autoComplete="off" value={input.password} onChange={formPassw} />
                        <Form.Text className="text-muted">Minimal banyak huruf untuk Password adalah 6.</Form.Text>
                     </FloatingLabel>
                     <hr />

                     {/* -------------------------------------------------------------------------------- | Form Make New Shop | -------------------------------------------------------------------------------------------------  */}

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
                           <FloatingLabel controlId="floatingText" label="Store Name" className="mb-3 mt-3">
                              <Form.Control type="text" placeholder="example" autoComplete="off" />
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
                        <Button type="submit" variant="success" className="mt-2">
                           Sign Up Now
                        </Button>
                        <Button variant="secondary" className="mt-2">
                           <Link to="/login" className="text-decoration-none text-white">
                              Back Sign In
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
