import React from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import lplc from "../images/login-placeholder.png";
import NavbarM from "./NavbarM";

function Login() {
   return (
      <>
         <NavbarM />

         <Container className="mt-5 pt-5">
            <Row className="align-items-center">
               <Col lg={6} className=" text-center">
                  <img src={lplc} alt="" className="w-50 mb-4 mb-lg-none" />
               </Col>
               <Col lg={6}>
                  <h2>
                     Belanja Kebutuhan Utama <br />
                     menjadi lebih mudah
                  </h2>
                  <Form action="" className="mt-3">
                     <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3 w-75">
                        <Form.Control type="email" placeholder="name@example.com" />
                     </FloatingLabel>
                     <FloatingLabel controlId="floatingPassword" label="Password" className="w-75">
                        <Form.Control type="password" placeholder="Password" />
                     </FloatingLabel>
                     <a href="/dashboard" className="btn btn-success btn-block w-75 mt-4">
                        Sign In to My Account
                     </a>
                     <a href="/register" className="btn btn-secondary btn-block w-75 mt-2">
                        Sign Up
                     </a>
                  </Form>
               </Col>
            </Row>
         </Container>

         {/* ---------------------------------------------------------------------------------------------------- | Footer | -------------------------------------------------------------------------------------------------  */}

         <footer style={{ marginTop: "200px" }}>
            <hr style={{ marginBottom: "3px" }} />
            <div class="container">
               <div class="row">
                  <div class="col-12 text-center text-secondary">
                     <p class="pt-4 pb-2">2022 &copyCopyright Akmal. All Right Reserved</p>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
}

export default Login;
