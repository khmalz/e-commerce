import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import pd1 from "../images/product-detail-1.jpg";
import pd2 from "../images/product-detail-2.jpg";
import pd3 from "../images/product-detail-3.jpg";
import pd4 from "../images/product-detail-4.jpg";
import cr1 from "../images/customer-review-1.png";
import cr2 from "../images/customer-review-2.png";
import cr3 from "../images/customer-review-3.png";
import NavbarM from "./NavbarM";

const Detail = () => {
   const imgClick = (e) => {
      const jumbo = document.querySelector(".jumbo");
      const thumbs = document.querySelectorAll(".thumb");

      if (e.target.className === "thumb") {
         jumbo.src = e.target.src;
         jumbo.classList.add("fade");
         setTimeout(() => {
            jumbo.classList.remove("fade");
         }, 400);

         thumbs.forEach((thumb) => {
            thumb.classList = "thumb";
         });
         e.target.classList.add("actived");
      }
   };

   return (
      <>
         <NavbarM />

         {/* ----------------------------------------------------------------------------------------- | BreadCrumb | ------------------------------------------------------------------------------------------------- */}

         <Container className="pt-5 mt-5">
            <Row>
               <Col>
                  <nav aria-label="breadcrumb">
                     <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                           <a href="/" className="text-secondary lh-lg  text-decoration-none" style={{ fontSize: "1.1rem" }}>
                              Home
                           </a>
                        </li>
                        <li className="breadcrumb-item text-dark lh-lg" style={{ fontSize: "1.1rem" }}>
                           Product Details
                        </li>
                     </ol>
                  </nav>
               </Col>
            </Row>
         </Container>

         {/* ------------------------------------------------------------------------------------------- | Images | ------------------------------------------------------------------------------------------------- */}

         <Container className="container-img" onClick={imgClick}>
            <Row>
               <Col lg={7}>
                  <img src={pd1} className="w-100 h-100 jumbo" alt="" />
               </Col>
               <Col lg={2}>
                  <Row>
                     <Col lg={12} className="col-3 mt-2 mt-lg-0">
                        <img className="thumb" src={pd1} alt="" />
                     </Col>
                     <Col lg={12} className="col-3 mt-2 mt-lg-0">
                        <img className="thumb" src={pd2} alt="" />
                     </Col>
                     <Col lg={12} className="col-3 mt-2 mt-lg-0">
                        <img className="thumb" src={pd3} alt="" />
                     </Col>
                     <Col lg={12} className="col-3 mt-2 mt-lg-0">
                        <img className="thumb" src={pd4} alt="" />
                     </Col>
                  </Row>
               </Col>
            </Row>

            {/* ----------------------------------------------------------------------------------------- | Description | --------------------------------------------------------------------------------------------------- */}

            <Row>
               <Col lg={7}>
                  <h3 className="mt-3">Sofa</h3>
                  <div className="text-secondary" style={{ marginTop: "-5px" }}>
                     By Tortilas
                  </div>
                  <div style={{ color: "#ff7158", fontSize: "1.2rem" }} className="fw-bold">
                     Rp. 1.000.000
                  </div>
               </Col>
               <Col lg={2} className="ms-0 ms-lg-1 mt-3">
                  <a href="/cart" class="btn btn-success px-5 text-white btn-block mb-3">
                     Add to Cart
                  </a>
               </Col>
            </Row>

            <Row className="mt-3">
               <Col lg={7} className="col-12 text-justify">
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatem incidunt voluptas tempore veritatis facere quos, saepe dolor magnam sunt, quod officia ratione ut consequatur! Consequatur, vero? Doloremque, in id.
                  </p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consequatur ullam iste illum recusandae adipisci veritatis aut ipsam fuga! Doloremque qui eius facilis.</p>
               </Col>
            </Row>

            {/* ------------------------------------------------------------------------------------------------- | Review | --------------------------------------------------------------------------------------------------- */}

            <Row>
               <Col>
                  <h6 className="fw-bold pointer">Costumer Review (3)</h6>
               </Col>
            </Row>
            <Row>
               <Col lg={7}>
                  <ul className="list-unstyled">
                     <li className="d-flex mt-4 mb-1">
                        <img src={cr1} className="pointer me-2 rounded circle" width="50" height="40" alt="" />
                        <div>
                           <h6 className="fw-bold mt-2">Rayya</h6>
                           <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque magnam possimus iusto harum quasi quis, vero laboriosam molestias dolore!</p>
                        </div>
                     </li>
                     <li className="d-flex mb-1">
                        <img src={cr2} className="pointer me-2 rounded circle" width="50" height="40" alt="" />
                        <div>
                           <h6 className="fw-bold mt-2">Reza</h6>
                           <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quaerat assumenda excepturi eos. Temporibus consectetur tempore totam ex praesentium assumenda fuga repellendus?</p>
                        </div>
                     </li>
                     <li className="d-flex mb-1">
                        <img src={cr3} className="pointer me-2 rounded circle" width="50" height="40" alt="" />
                        <div>
                           <h6 className="fw-bold mt-2">Ina</h6>
                           <p className="text-justify">
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, dignissimos illum exercitationem sapiente sequi voluptatum delectus iure minima necessitatibus ex nobis doloribus ut mollitia minus repudiandae, eaque in
                              fugit.
                           </p>
                        </div>
                     </li>
                  </ul>
               </Col>
            </Row>
         </Container>

         {/* ---------------------------------------------------------------------------------------------------- | Footer | -------------------------------------------------------------------------------------------------  */}

         <footer>
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

export default Detail;
