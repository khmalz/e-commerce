import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import NavbarM from "./NavbarM";

function Home() {
   const monitor = window.innerWidth > 768;

   return (
      <div>
         <NavbarM />

         {/* ------------------------------------------------------------------------------------------ | Banner | ---------------------------------------------------------------------------------------  */}

         <Container className="mt-5 pt-3">
            <Carousel controls={false} indicators={monitor ? true : false} data-aos="zoom-in" data-aos-duration="300">
               <Carousel.Item>
                  <img className="d-block w-100" src="images/banner.jpg" alt="First slide" />
               </Carousel.Item>
               <Carousel.Item>
                  <img className="d-block w-100" src="images/banner.jpg" alt="Second slide" />
               </Carousel.Item>
               <Carousel.Item>
                  <img className="d-block w-100" src="images/banner.jpg" alt="Third slide" />
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
                  <Card className="border mb-2 bg-abu card-shadow">
                     <Card.Body className=" text-center">
                        <div>
                           <img src="images/categories-1.svg" alt="" className="w-50" />
                        </div>
                        <h5 className="mt-2">Gadgets</h5>
                     </Card.Body>
                  </Card>
               </Col>
               <Col md={4} lg={2} className="col-md-4 col-6 col-lg-2 scale">
                  <Card className="border mb-2 bg-abu card-shadow">
                     <Card.Body className=" text-center">
                        <div>
                           <img src="images/categories-2.svg" alt="" className="w-50" />
                        </div>
                        <h5 className="mt-2">Furniture</h5>
                     </Card.Body>
                  </Card>
               </Col>
               <Col md={4} lg={2} className="col-md-4 col-6 col-lg-2 scale">
                  <Card className="border mb-2 bg-abu card-shadow">
                     <Card.Body className=" text-center">
                        <div>
                           <img src="images/categories-3.svg" alt="" className="w-50" />
                        </div>
                        <h5 className="mt-2">Make Up</h5>
                     </Card.Body>
                  </Card>
               </Col>
               <Col md={4} lg={2} className="col-md-4 col-6 col-lg-2 mb-2 scale">
                  <Card className="border mb-2 bg-abu card-shadow">
                     <Card.Body className=" text-center">
                        <div>
                           <img src="images/categories-4.svg" alt="" className="w-50" />
                        </div>
                        <h5 className="mt-2">Sneaker</h5>
                     </Card.Body>
                  </Card>
               </Col>
               <Col md={4} lg={2} className="col-md-4 col-6 col-lg-2 mb-2 scale">
                  <Card className="border mb-2 bg-abu card-shadow">
                     <Card.Body className=" text-center">
                        <div>
                           <img src="images/categories-5.svg" alt="" className="w-50" />
                        </div>
                        <h5 className="mt-2">Tools</h5>
                     </Card.Body>
                  </Card>
               </Col>
               <Col md={4} lg={2} className="col-md-4 col-6 col-lg-2 mb-2 scale">
                  <Card className="border mb-2 bg-abu card-shadow">
                     <Card.Body className=" text-center">
                        <div>
                           <img src="images/categories-6.svg" alt="" className="w-50" />
                        </div>
                        <h5 className="mt-2">Baby</h5>
                     </Card.Body>
                  </Card>
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
               <Col md={4} lg={3} className="col-6" data-aos="fade-right" data-aos-delay="100">
                  <a href="/detail" className="text-decoration-none">
                     <Card href="/detail" className="border-0 text-decoration-none text-dark zoom">
                        <img src="images/products-1.jpg" className="card-img-top" alt="..." />
                        <Card.Body>
                           <h5 className=" text-dark">Apple 12 Pro Max</h5>
                           <p className="card-text text-harga fw-bold">$1.099</p>
                        </Card.Body>
                     </Card>
                  </a>
               </Col>
               <Col md={4} lg={3} className="col-6" data-aos="fade-down" data-aos-delay="100">
                  <a href="/detail" className="text-decoration-none">
                     <Card href="/detail" className="border-0 text-decoration-none text-dark zoom">
                        <img src="images/products-2.jpg" className="card-img-top" alt="..." />
                        <Card.Body>
                           <h5 className=" text-dark">Sneakers</h5>
                           <p className="card-text text-harga fw-bold">$49,82</p>
                        </Card.Body>
                     </Card>
                  </a>
               </Col>
               <Col md={4} lg={3} className="col-6" data-aos="fade-down" data-aos-delay="100">
                  <a href="/detail" className="text-decoration-none">
                     <Card href="/detail" className="border-0 text-decoration-none text-dark zoom">
                        <img src="images/products-3.jpg" className="card-img-top" alt="..." />
                        <Card.Body>
                           <h5 className=" text-dark">Sofa</h5>
                           <p className="card-text text-harga fw-bold">$296,67</p>
                        </Card.Body>
                     </Card>
                  </a>
               </Col>
               <Col md={4} lg={3} className="col-6" data-aos="fade-left" data-aos-delay="100">
                  <a href="/detail" className="text-decoration-none">
                     <Card href="/detail" className="border-0 text-decoration-none text-dark zoom">
                        <img src="images/products-4.jpg" className="card-img-top" alt="..." />
                        <Card.Body>
                           <h5 className=" text-dark">Parfume</h5>
                           <p className="card-text text-harga fw-bold">$254,40</p>
                        </Card.Body>
                     </Card>
                  </a>
               </Col>
               <Col md={4} lg={3} className="col-6" data-aos="fade-right" data-aos-delay="200">
                  <a href="/detail" className="text-decoration-none">
                     <Card href="/detail" className="border-0 text-decoration-none text-dark zoom">
                        <img src="images/products-5.jpg" className="card-img-top" alt="..." />
                        <Card.Body>
                           <h5 className=" text-dark">Jam</h5>
                           <p className="card-text text-harga fw-bold">$45,184</p>
                        </Card.Body>
                     </Card>
                  </a>
               </Col>
               <Col md={4} lg={3} className="col-6" data-aos="fade-up" data-aos-delay="200">
                  <a href="/detail" className="text-decoration-none">
                     <Card href="/detail" className="border-0 text-decoration-none text-dark zoom">
                        <img src="images/products-6.jpg" className="card-img-top" alt="..." />
                        <Card.Body>
                           <h5 className=" text-dark">Camera</h5>
                           <p className="card-text text-harga fw-bold">$175</p>
                        </Card.Body>
                     </Card>
                  </a>
               </Col>
               <Col md={4} lg={3} className="col-6" data-aos="fade-up" data-aos-delay="200">
                  <a href="/detail" className="text-decoration-none">
                     <Card href="/detail" className="border-0 text-decoration-none text-dark zoom">
                        <img src="images/products-7.jpg" className="card-img-top" alt="..." />
                        <Card.Body>
                           <h5 className=" text-dark">Bag</h5>
                           <p className="card-text text-harga fw-bold">$3,60</p>
                        </Card.Body>
                     </Card>
                  </a>
               </Col>
               <Col md={4} lg={3} className="col-6" data-aos="fade-left" data-aos-delay="200">
                  <a href="/detail" className="text-decoration-none">
                     <Card href="/detail" className="border-0 text-decoration-none text-dark zoom">
                        <img src="images/products-8.jpg" className="card-img-top" alt="..." />
                        <Card.Body>
                           <h5 className=" text-dark">Make Up</h5>
                           <p className="card-text text-harga fw-bold">$31,42</p>
                        </Card.Body>
                     </Card>
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
