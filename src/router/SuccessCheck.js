import React from "react";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SuccessCheck = () => {
   const [war, setWar] = useState({ color: "#0dcaf0" });

   return (
      <>
         <Container data-aos="zoom-in">
            <div style={{ marginTop: "120px" }}>
               <div className="row align-item-center justify-content-center" style={{ marginBottom: "180px" }}>
                  <div className="col-lg-6 text-center">
                     <img src="images/success.svg" alt="" className="mb-4" />
                     <h2>Transition Proceed</h2>
                     <p>Silahkan tunggu pesan email dari kami dan kami akan memproses pesanan anda dengan cepat!</p>
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

export default SuccessCheck;
