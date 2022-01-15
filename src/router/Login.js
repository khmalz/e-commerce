import React from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import lplc from "../images/login-placeholder.png";
import NavbarM from "./NavbarM";

function Login() {
   const monitor = window.innerWidth < 840 && window.innerWidth > 576;

   return (
      <>
         <NavbarM />

         <Container className="mt-5 pt-5">
            <Row className="align-items-center">
               <Col lg={6} className=" text-center">
                  <img src={lplc} alt="" className="w-50 mb-4 mb-lg-none" />
               </Col>
               <Col lg={5}>
                  <h2>
                     Belanja Kebutuhan Utama <br />
                     menjadi lebih mudah
                  </h2>
                  <Form action="" className="mt-3">
                     <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3 ">
                        <Form.Control type="email" placeholder="name@example.com" autoComplete="off" />
                     </FloatingLabel>
                     <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" autoComplete="off" />
                     </FloatingLabel>
                     <a href="/dashboard" className={monitor ? "btn btn-lg btn-success btn-block w-100 mt-4" : "btn btn-success btn-block w-100 mt-4"}>
                        Sign In to My Account
                     </a>
                     <a href="/register" className={monitor ? "btn btn-lg btn-secondary btn-block w-100 mt-2" : "btn btn-secondary btn-block w-100 mt-2"}>
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
