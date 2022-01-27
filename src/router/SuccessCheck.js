import React from "react";
import { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SuccessCheck = () => {
   const [war, setWar] = useState({ color: "#0dcaf0" });

   return (
      <>
         <Container>
            <div className="page-success" style={{ marginTop: "120px" }}>
               <div className="section-success">
                  <div className="row align-item-center row-login justify-content-center">
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
            </div>
         </Container>

         <footer>
            <div className="container">
               <div className="row">
                  <div className="col-12 text-center">
                     <p className="pt-4 pb-2">2021 Copyright Nakamura . All Right Reserved</p>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};

export default SuccessCheck;
