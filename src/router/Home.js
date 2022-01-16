import { Carousel, Col, Container, Row } from "react-bootstrap";
import banner from "../images/banner.jpg";
import c1 from "../images/categories-1.svg";
import c2 from "../images/categories-2.svg";
import c3 from "../images/categories-3.svg";
import c4 from "../images/categories-4.svg";
import c5 from "../images/categories-5.svg";
import c6 from "../images/categories-6.svg";
import p1 from "../images/products-1.jpg";
import p2 from "../images/products-2.jpg";
import p3 from "../images/products-3.jpg";
import p4 from "../images/products-4.jpg";
import p5 from "../images/products-5.jpg";
import p6 from "../images/products-6.jpg";
import p7 from "../images/products-7.jpg";
import p8 from "../images/products-8.jpg";
import NavbarM from "./NavbarM";

function Home() {
   const monitor = window.innerWidth > 768;

   return (
      <div>
         <NavbarM />

         {/* ------------------------------------------------------------------------------------------ | Banner | ---------------------------------------------------------------------------------------  */}

         <Container className="mt-5 pt-3">
            <Carousel controls={false} indicators={monitor ? true : false}>
               <Carousel.Item>
                  <img className="d-block w-100" src={banner} alt="First slide" />
               </Carousel.Item>
               <Carousel.Item>
                  <img className="d-block w-100" src={banner} alt="Second slide" />
               </Carousel.Item>
               <Carousel.Item>
                  <img className="d-block w-100" src={banner} alt="Third slide" />
               </Carousel.Item>
            </Carousel>
         </Container>

         {/* ---------------------------------------------------------------------------------------- | Categories | ---------------------------------------------------------------------------------------  */}

         <Container>
            <Row className="mt-3">
               <Col>
                  <h4>Trend Categories</h4>
               </Col>
            </Row>

            <Row className="justify-content-center mt-3 text-center text-md-start pointer">
               <Col md={4} lg={2} className="col-6 scale">
                  <div className="card border mb-2 bg-abu card-shadow">
                     <div className="card-body text-center">
                        <div>
                           <img src={c1} alt="" className="w-50" />
                        </div>
                        <h5 className="card-title mt-2">Gadgets</h5>
                     </div>
                  </div>
               </Col>
               <Col md={4} lg={2} className="col-md-4 col-6 col-lg-2 scale">
                  <div className="card border mb-2 bg-abu card-shadow">
                     <div className="card-body text-center">
                        <div>
                           <img src={c2} alt="" className="w-50" />
                        </div>
                        <h5 className="card-title mt-2">Furniture</h5>
                     </div>
                  </div>
               </Col>
               <Col md={4} lg={2} className="col-md-4 col-6 col-lg-2 scale">
                  <div className="card border mb-2 bg-abu card-shadow">
                     <div className="card-body text-center">
                        <div>
                           <img src={c3} alt="" className="w-50" />
                        </div>
                        <h5 className="card-title mt-2">Make Up</h5>
                     </div>
                  </div>
               </Col>
               <Col md={4} lg={2} className="col-md-4 col-6 col-lg-2 mb-2 scale">
                  <div className="card border mb-2 bg-abu card-shadow">
                     <div className="card-body text-center">
                        <div>
                           <img src={c4} alt="" className="w-50" />
                        </div>
                        <h5 className="card-title mt-2">Sneaker</h5>
                     </div>
                  </div>
               </Col>
               <Col md={4} lg={2} className="col-md-4 col-6 col-lg-2 mb-2 scale">
                  <div className="card border mb-2 bg-abu card-shadow">
                     <div className="card-body text-center">
                        <div>
                           <img src={c5} alt="" className="w-50" />
                        </div>
                        <h5 className="card-title mt-2">Tools</h5>
                     </div>
                  </div>
               </Col>
               <Col md={4} lg={2} className="col-md-4 col-6 col-lg-2 mb-2 scale">
                  <div className="card border mb-2 bg-abu card-shadow">
                     <div className="card-body text-center">
                        <div>
                           <img src={c6} alt="" className="w-50" />
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
                     <img src={p1} className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title text-dark">Apple 12 Pro Max</h5>
                        <p className="card-text text-harga fw-bold">$1.099</p>
                     </div>
                  </a>
               </Col>
               <Col md={4} lg={3} className="col-6">
                  <a href="/detail" className="card border-0 text-decoration-none text-dark">
                     <img src={p2} className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title text-dark">Sneakers</h5>
                        <p className="card-text text-harga fw-bold">$49,82</p>
                     </div>
                  </a>
               </Col>
               <Col md={4} lg={3} className="col-6">
                  <a href="/detail" className="card border-0 text-decoration-none text-dark">
                     <img src={p3} className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title text-dark">Sofa</h5>
                        <p className="card-text text-harga fw-bold">$296,67</p>
                     </div>
                  </a>
               </Col>
               <Col md={4} lg={3} className="col-6">
                  <a href="/detail" className="card border-0 text-decoration-none text-dark">
                     <img src={p4} className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title text-dark">Parfume</h5>
                        <p className="card-text text-harga fw-bold">$254,40</p>
                     </div>
                  </a>
               </Col>
               <Col md={4} lg={3} className="col-6">
                  <a href="/detail" className="card border-0 text-decoration-none text-dark">
                     <img src={p5} className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title text-dark">Jam</h5>
                        <p className="card-text text-harga fw-bold">$45,184</p>
                     </div>
                  </a>
               </Col>
               <Col md={4} lg={3} className="col-6">
                  <a href="/detail" className="card border-0 text-decoration-none text-dark">
                     <img src={p6} className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title text-dark">Camera</h5>
                        <p className="card-text text-harga fw-bold">$262,15</p>
                     </div>
                  </a>
               </Col>
               <Col md={4} lg={3} className="col-6">
                  <a href="/detail" className="card border-0 text-decoration-none text-dark">
                     <img src={p7} className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title text-dark">Bag</h5>
                        <p className="card-text text-harga fw-bold">$3,60</p>
                     </div>
                  </a>
               </Col>
               <Col md={4} lg={3} className="col-6">
                  <a href="/detail" className="card border-0 text-decoration-none text-dark">
                     <img src={p8} className="card-img-top" alt="..." />
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

export default Home;
