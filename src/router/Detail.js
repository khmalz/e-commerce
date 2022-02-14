import React from "react";
import { Button, Col, Container, Navbar, Row } from "react-bootstrap";
import { Nav } from "react-bootstrap";

const Detail = () => {
   const imgClick = (e) => {
      const jumbo = document.querySelector(".jumbo");
      const thumbs = document.querySelectorAll(".thumb");

      if (e.target.className === "thumb") {
         jumbo.src = e.target.src;
         jumbo.classList.add("fade-out");
         setTimeout(() => {
            jumbo.classList.remove("fade-out");
         }, 400);

         thumbs.forEach((thumb) => {
            thumb.classList = "thumb";
         });

         e.target.classList.add("actived");
      }
   };

   const dashClick = (e) => {
      e.target.classList.toggle("text-decoration-underline");
   };

   const monitor = window.innerWidth;

   return (
      <>
         <Navbar bg="light" expand="lg" fixed="top">
            <Container>
               <Navbar.Brand href="#home">
                  <img src="images/logo.svg" alt="Logo" />
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                     <Nav.Link href="/">Home</Nav.Link>
                     <Nav.Link href="/categories">Categories</Nav.Link>
                     <Nav.Link href="/rewards">Rewards</Nav.Link>
                  </Nav>
                  <Nav className="d-none d-lg-flex">
                     <Nav.Link className="nav-item dropdown">
                        <Nav.Link className="dropdown-toggle" href="#a" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           <img src="images/user.jpg" alt="" className="rounded-circle me-2 mb-1" style={{ maxHeight: "45px", marginLeft: "-20px" }} />
                           <span className="fw-bold" style={{ fontSize: "1.05em" }}>
                              Hallo, Akmal
                           </span>
                        </Nav.Link>
                     </Nav.Link>
                     <Nav.Link className="nav-link d-inline-block mt-3" style={{ marginLeft: "-13px " }}>
                        <img src="images/icon_cart.svg" alt="" />
                        <div className="cart">3</div>
                     </Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>

         {/* ----------------------------------------------------------------------------------------- | BreadCrumb | ------------------------------------------------------------------------------------------------- */}

         <Container className="pt-5 mt-5">
            <Row>
               <Col>
                  <nav aria-label="breadcrumb">
                     <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                           <a href="/" className="text-secondary lh-lg  text-decoration-none" onMouseOver={dashClick} onMouseOut={dashClick} style={{ fontSize: "1.1rem" }}>
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
               <Col lg={7} data-aos="zoom-in">
                  <img src="images/product-detail-1.jpg" className="w-100 h-100 jumbo" alt="" />
               </Col>
               <Col lg={2}>
                  <Row>
                     <Col lg={12} className="col-3 mt-2 mt-lg-0" data-aos="zoom-in">
                        <img className="thumb" src="images/product-detail-1.jpg" alt="" />
                     </Col>
                     <Col lg={12} className="col-3 mt-2 mt-lg-0" data-aos="zoom-in">
                        <img className="thumb" src="images/product-detail-2.jpg" alt="" />
                     </Col>
                     <Col lg={12} className="col-3 mt-2 mt-lg-0" data-aos="zoom-in">
                        <img className="thumb" src="images/product-detail-3.jpg" alt="" />
                     </Col>
                     <Col lg={12} className="col-3 mt-2 mt-lg-0" data-aos="zoom-in">
                        <img className="thumb" src="images/product-detail-4.jpg" alt="" />
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
                     $113,3
                  </div>
               </Col>
               <Col lg={3} className="ms-0 ms-lg-1 mt-3">
                  <Button variant="success" href="/cart" className={`px-5 text-white mb-3 text-wrap ${monitor < 500 ? `w-100` : ``} ${monitor > 501 && monitor < 900 ? `btn-lg ` : ``}`}>
                     Add to Cart
                  </Button>
               </Col>
            </Row>
            <Row>
               <Col lg={7} className="col-12 text-justify" data-aos="fade-up" data-aos-delay="100">
                  <hr className="shadow-lg border-dark" />
                  <h6 className="fw-bold">Deskripsi Produk</h6>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatem incidunt voluptas tempore veritatis facere quos, saepe dolor magnam sunt, quod officia ratione ut consequatur! Consequatur, vero? Doloremque, in id.
                  </p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consequatur ullam iste illum recusandae adipisci veritatis aut ipsam fuga! Doloremque qui eius facilis.</p>
               </Col>
            </Row>

            {/* ------------------------------------------------------------------------------------------------- | Review | --------------------------------------------------------------------------------------------------- */}

            <Row>
               <Col data-aos="fade-up">
                  <h6 className="fw-bold pointer mt-3">Costumer Review (3)</h6>
               </Col>
            </Row>
            <Row>
               <Col lg={7} data-aos="fade-up">
                  <ul className="list-unstyled">
                     <li className="d-flex mt-4 mb-1">
                        <img src="images/customer-review-1.png" className="pointer me-2 rounded circle" width="50" height="40" alt="" />
                        <div>
                           <h6 className="fw-bold mt-2">Anindira</h6>
                           <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque magnam possimus iusto harum quasi quis, vero laboriosam molestias dolore!</p>
                        </div>
                     </li>
                     <li className="d-flex mb-1">
                        <img src="images/customer-review-2.png" className="pointer me-2 rounded circle" width="50" height="40" alt="" />
                        <div>
                           <h6 className="fw-bold mt-2">Leroy</h6>
                           <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quaerat assumenda excepturi eos. Temporibus consectetur tempore totam ex praesentium assumenda fuga repellendus?</p>
                        </div>
                     </li>
                     <li className="d-flex mb-1">
                        <img src="images/customer-review-3.png" className="pointer me-2 rounded circle" width="50" height="40" alt="" />
                        <div>
                           <h6 className="fw-bold mt-2">Divya</h6>
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
