import React, { useState } from "react";
import { Button, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarM from "./NavbarM";

function Login() {
   const monitor = window.innerWidth < 840 && window.innerWidth > 576;
   const [action, setAction] = useState("");
   const [input, setInput] = useState({ email: "", password: "" });
   const [notif, setNotif] = useState({ notif1: false, notif2: false });

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
      if (input.email === "akmal@gmail.com" && input.password === "123456") {
         setAction("/dashboard");
      } else {
         if (input.email === "" && input.password === "") {
            setNotif({ ...notif, notif1: true, notif2: false });
         } else {
            setNotif({ ...notif, notif1: false, notif2: true });
         }
      }
   };

   return (
      <>
         <NavbarM />

         {/* ------------------------------------------------------------------------------------------ | Form Login | -------------------------------------------------------------------------------------------------------  */}

         <Container className="mt-5 pt-5">
            {notif.notif1 ? alert("Anda belum memasukkan Email atau Password") : null}
            {notif.notif2 ? alert("Anda salah dalam memasukkan Email atau Password") : null}

            <Row className="align-items-center">
               <Col lg={6} className=" text-center">
                  <img src="images/login-placeholder.png" alt="" className="w-50 mb-4 mb-lg-none" />
               </Col>
               <Col lg={5}>
                  <h2>
                     Belanja Kebutuhan Utama <br />
                     menjadi lebih mudah
                  </h2>
                  <Form action={action} onSubmit={validasi} className="mt-3">
                     <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3 ">
                        <Form.Control type="email" placeholder="name@example.com" autoComplete="off" value={input.email} onChange={formEmail} />
                     </FloatingLabel>
                     <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" autoComplete="off" value={input.password} onChange={formPassw} />
                     </FloatingLabel>
                     <Button type="submit" className={monitor ? "btn-lg btn-success btn-block w-100 mt-4" : "btn-success btn-block w-100 mt-4"}>
                        Sign Up Now
                     </Button>
                     <Button variant="secondary" className={monitor ? "btn btn-lg btn-secondary btn-block w-100 mt-2" : "btn btn-secondary btn-block w-100 mt-2"}>
                        <Link to="/register" className="text-decoration-none text-white">
                           Back Sign Up
                        </Link>
                     </Button>
                  </Form>
               </Col>
            </Row>
         </Container>

         {/* ----------------------------------------------------------------------------------------- | Footer | ---------------------------------------------------------------------------------------------------------  */}

         <footer style={{ marginTop: "200px" }}>
            <hr style={{ marginBottom: "3px" }} />
            <div class="container">
               <div class="row">
                  <div class="col-12 text-center text-secondary">
                     <p class="pt-4 pb-2">2022 &copy;Copyright Akmal. All Right Reserved</p>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
}

export default Login;
