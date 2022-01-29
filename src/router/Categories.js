import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/main.css";

function Categories() {
   return (
      <div>
         <nav class="navbar navbar-expand-lg navbar-light navbar-store fixed-top navbar-fixed-top" data-aos="fade-down">
            <div class="container">
               <a class="navbar-brand" href="#j">
                  <img src="images/logo.svg" alt="Logo" />
               </a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                  <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarResponsive">
                  <ul class="navbar-nav ms-auto">
                     <li class="nav-item ">
                        <a href="/" class="nav-link">
                           Home
                        </a>
                     </li>
                     <li class="nav-item ">
                        <a href="/categories" class="nav-link activation">
                           Categories
                        </a>
                     </li>
                     <li class="nav-item">
                        <a href="/rewards" class="nav-link">
                           Rewards
                        </a>
                     </li>
                  </ul>
                  <ul class="navbar-nav d-none d-lg-flex">
                     <li class="nav-item dropdown">
                        <Nav.Link class="nav-link dropdown-toggle" href="#a" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           <img src="images/user.jpg" alt="" className="rounded-circle me-2 profile-picture mb-1" />
                           <span className="fw-bold" style={{ fontSize: "1.05em" }}>
                              Hallo, Akmal
                           </span>
                        </Nav.Link>
                     </li>
                     <li class="nav-item">
                        <a href="#a" class="nav-link d-inline-block mt-3">
                           <img src="images/icon_cart_empty.svg" alt="" />
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>

         {/* ---------------------------------------------------------------------------------------------- | Categories | --------------------------------------------------------------------------------------------------  */}

         <Container>
            <Row className="mt-4 pt-5">
               <Col>
                  <h4>All Categories</h4>
               </Col>
            </Row>

            <Row className="justify-content-center mt-3 text-center text-md-start pointer">
               <Col md={4} lg={2} className="col-6 scale">
                  <div className="card border mb-2 bg-abu card-shadow">
                     <div className="card-body text-center">
                        <div>
                           <img src="images/categories-1.svg" alt="" className="w-50" />
                        </div>
                        <h5 className="card-title mt-2">Gadgets</h5>
                     </div>
                  </div>
               </Col>
               <Col md={4} lg={2} className="col-md-4 col-6 col-lg-2 scale">
                  <div className="card border mb-2 bg-abu card-shadow">
                     <div className="card-body text-center">
                        <div>
                           <img src="images/categories-2.svg" alt="" className="w-50" />
                        </div>
                        <h5 className="card-title mt-2">Furniture</h5>
                     </div>
                  </div>
               </Col>
               <Col md={4} lg={2} className="col-md-4 col-6 col-lg-2 scale">
                  <div className="card border mb-2 bg-abu card-shadow">
                     <div className="card-body text-center">
                        <div>
                           <img src="images/categories-3.svg" alt="" className="w-50" />
                        </div>
                        <h5 className="card-title mt-2">Make Up</h5>
                     </div>
                  </div>
               </Col>
               <Col md={4} lg={2} className="col-md-4 col-6 col-lg-2 mb-2 scale">
                  <div className="card border mb-2 bg-abu card-shadow">
                     <div className="card-body text-center">
                        <div>
                           <img src="images/categories-4.svg" alt="" className="w-50" />
                        </div>
                        <h5 className="card-title mt-2">Sneaker</h5>
                     </div>
                  </div>
               </Col>
               <Col md={4} lg={2} className="col-md-4 col-6 col-lg-2 mb-2 scale">
                  <div className="card border mb-2 bg-abu card-shadow">
                     <div className="card-body text-center">
                        <div>
                           <img src="images/categories-5.svg" alt="" className="w-50" />
                        </div>
                        <h5 className="card-title mt-2">Tools</h5>
                     </div>
                  </div>
               </Col>
               <Col md={4} lg={2} className="col-md-4 col-6 col-lg-2 mb-2 scale">
                  <div className="card border mb-2 bg-abu card-shadow">
                     <div className="card-body text-center">
                        <div>
                           <img src="images/categories-6.svg" alt="" className="w-50" />
                        </div>
                        <h5 className="card-title mt-2">Baby</h5>
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>

         {/* ----------------------------------------------------------------------------------------- | New Products | ---------------------------------------------------------------------------------------  */}

         <Container className="mb-5">
            <Row className="mt-3">
               <div className="col">
                  <h4>New Products</h4>
               </div>
            </Row>
            <Row>
               <Col md={4} lg={3} className="col-6">
                  <a href="/detail" className="card border-0 text-decoration-none text-dark">
                     <img src="images/products-1.jpg" className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title text-dark">Apple 12 Pro Max</h5>
                        <p className="card-text text-harga fw-bold">$1.099</p>
                     </div>
                  </a>
               </Col>
               <Col md={4} lg={3} className="col-6">
                  <a href="/detail" className="card border-0 text-decoration-none text-dark">
                     <img src="images/products-2.jpg" className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title text-dark">Sneakers</h5>
                        <p className="card-text text-harga fw-bold">$49,82</p>
                     </div>
                  </a>
               </Col>
               <Col md={4} lg={3} className="col-6">
                  <a href="/detail" className="card border-0 text-decoration-none text-dark">
                     <img src="images/products-3.jpg" className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title text-dark">Sofa</h5>
                        <p className="card-text text-harga fw-bold">$296,67</p>
                     </div>
                  </a>
               </Col>
               <Col md={4} lg={3} className="col-6">
                  <a href="/detail" className="card border-0 text-decoration-none text-dark">
                     <img src="images/products-4.jpg" className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title text-dark">Parfume</h5>
                        <p className="card-text text-harga fw-bold">$254,40</p>
                     </div>
                  </a>
               </Col>
               <Col md={4} lg={3} className="col-6">
                  <a href="/detail" className="card border-0 text-decoration-none text-dark">
                     <img src="images/products-5.jpg" className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title text-dark">Jam</h5>
                        <p className="card-text text-harga fw-bold">$45,184</p>
                     </div>
                  </a>
               </Col>
               <Col md={4} lg={3} className="col-6">
                  <a href="/detail" className="card border-0 text-decoration-none text-dark">
                     <img src="images/products-6.jpg" className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title text-dark">Camera</h5>
                        <p className="card-text text-harga fw-bold">$262,15</p>
                     </div>
                  </a>
               </Col>
               <Col md={4} lg={3} className="col-6">
                  <a href="/detail" className="card border-0 text-decoration-none text-dark">
                     <img src="images/products-7.jpg" className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title text-dark">Bag</h5>
                        <p className="card-text text-harga fw-bold">$3,60</p>
                     </div>
                  </a>
               </Col>
               <Col md={4} lg={3} className="col-6">
                  <a href="/detail" className="card border-0 text-decoration-none text-dark">
                     <img src="images/products-8.jpg" className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title text-dark">Make Up</h5>
                        <p className="card-text text-harga fw-bold">$31,42</p>
                     </div>
                  </a>
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
      </div>
   );
}

export default Categories;
