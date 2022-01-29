import React from "react";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SuccessRegister = () => {
   const [war, setWar] = useState({ color: "#0dcaf0" });

   return (
      <>
         <Container>
            <div className="page-success" style={{ marginTop: "120px" }}>
               <div className="section-success">
                  <div className="row align-item-center row-login justify-content-center">
                     <div className="col-lg-6 text-center">
                        <img src="images/success.svg" alt="" className="mb-4" />
                        <h2 className="fw-bold">Welcome To Store</h2>
                        <p>
                           Kamu Sudah Berhasil Terdaftar Bersama Kami <br /> Let's Grow Up Now
                        </p>
                        <Row className="justify-content-center">
                           <Link to="/dashboard" className="text-decoration-none">
                              <Button variant="outline-success" className="w-75">
                                 My Dashboard
                              </Button>
                           </Link>
                        </Row>
                        <Row className="justify-content-center mt-4">
                           <Link to="/" className="text-decoration-none">
                              <Button variant="outline-info" style={{ color: war.color }} className="w-75" onMouseOver={() => setWar({ color: "#fff" })} onMouseOut={() => setWar({ color: "#0dcaf0" })}>
                                 Go To Shopping
                              </Button>
                           </Link>
                        </Row>
                     </div>
                  </div>
               </div>
            </div>
         </Container>

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
      </>
   );
};

export default SuccessRegister;
