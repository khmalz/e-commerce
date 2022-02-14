import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Nav, Navbar, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () => {
   const [input, setInput] = useState({ adres1: "Jln Halim Perdanakusuma", adres2: "Blok 3 No. 35", pCode: "17154", noPhone: "087984366758" });

   const Kota = {
      Jakarta: ["Kepulauan Seribu", "Jakarta Utara", "Jakarta Timur", "Jakarta Barat", "Jakarta Selatan", "Jakarta Pusat"],
      Jabar: ["Bandung", "Bogor", "Bekasi", "Depok", "Cimahi", "Tasikmalaya", "Banjar", "Cirebon", "Sukabumi", "Cianjur", "Purwakarta"],
      Jatim: ["Surabaya", "Kediri", "Malang", "Blitar", "Probolinggo", "Mojokerto", "Batu", "Madiun", "Gresik", "Lamongan", "Sidoarjo", "Banyuwangi", "Ponorogo"],
      Sumut: ["Medan", "Binjai", "Tanjung Balai", "Nias", "Samosir", "Sibolaga", "Karo", "Dairi"],
      Papua: ["Jayapura", "Merauke", "Serui", "Puncak Jaya", "Asmat", "Intan Jaya", "Nduga", "Jayawijaya"],
   };

   const [city, setCity] = useState("Default");

   const [kota, setKota] = useState({ westJ: false, jakr: false, eastJ: false, northS: false, papua: false });

   useEffect(() => {
      if (city === "JaBar") {
         setKota({ ...kota, westJ: true, jakr: false, eastJ: false, northS: false, papua: false });
      } else if (city === "Jakarta") {
         setKota({ ...kota, westJ: false, jakr: true, eastJ: false, northS: false, papua: false });
      } else if (city === "JaTim") {
         setKota({ ...kota, westJ: false, jakr: false, eastJ: true, northS: false, papua: false });
      } else if (city === "NorSu") {
         setKota({ ...kota, westJ: false, jakr: false, eastJ: false, northS: true, papua: false });
      } else if (city === "Papua") {
         setKota({ ...kota, westJ: false, jakr: false, eastJ: false, northS: false, papua: true });
      }
   }, [city, kota]);

   const dashClick = (e) => {
      e.target.classList.toggle("text-decoration-underline");
   };

   return (
      <div className="pt-5" style={{ height: "1000px" }}>
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
                     <Nav.Link className="dropdown">
                        <Nav.Link className="dropdown-toggle" href="#a" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           <img src="images/user.jpg" alt="" className="rounded-circle me-2 mb-1" style={{ maxHeight: "45px", marginLeft: "-20px" }} />
                           <span className="fw-bold" style={{ fontSize: "1.05em" }}>
                              Hallo, Akmal
                           </span>
                        </Nav.Link>
                     </Nav.Link>
                     <Nav.Link className="d-inline-block mt-3" style={{ marginLeft: "-13px " }}>
                        <img src="images/icon_cart.svg" alt="" />
                        <div className="cart">3</div>
                     </Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>

         {/* ----------------------------------------------------------------------------------------- | BreadCrumb | ------------------------------------------------------------------------------------------------- */}

         <Container className="mt-5">
            <Row>
               <Col data-aos="fade-down">
                  <nav aria-label="breadcrumb">
                     <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                           <a href="/" className="text-secondary lh-lg text-decoration-none" onMouseOver={dashClick} onMouseOut={dashClick} style={{ fontSize: "1.1rem" }}>
                              Home
                           </a>
                        </li>
                        <li className="breadcrumb-item text-black lh-lg" style={{ fontSize: "1.1rem" }}>
                           Cart
                        </li>
                     </ol>
                  </nav>
               </Col>
            </Row>
         </Container>

         <Container>
            <Row>
               <Col className="col-12" data-aos="zoom-in">
                  <Table borderless={true}>
                     <thead>
                        <tr>
                           <th style={{ width: "25%" }}>Image</th>
                           <th style={{ width: "30%" }}>Name & Seller</th>
                           <th style={{ width: "30%" }}>Price</th>
                           <th style={{ width: "20%" }}>Menu</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>
                              <img src="images/products-1.jpg" width="160" height="90" alt="" className="ms-5 mb-2" style={{ marginTop: "-10px" }} />
                           </td>
                           <td>
                              <h6 className="lead ">Iphone</h6>
                              <p className="text-secondary">By Leroy</p>
                           </td>
                           <td>
                              <h6 className="lead ">$1.099</h6>
                              <p className="text-secondary">Dolar USD</p>
                           </td>
                           <td>
                              <Button variant="danger">Remove</Button>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <img src="images/product-card-2.png" width="160" height="90" alt="" className="ms-5 mb-2" style={{ marginTop: "-10px" }} />
                           </td>
                           <td>
                              <h6 className="lead ">Camera</h6>
                              <p className="text-secondary">By Divya</p>
                           </td>
                           <td>
                              <h6 className="lead ">$350</h6>
                              <p className="text-secondary">Dolar USD</p>
                           </td>
                           <td>
                              <Button variant="danger">Remove</Button>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <img src="images/products-2.jpg" width="160" height="90" alt="" className="ms-5 mb-2" style={{ marginTop: "-10px" }} />
                           </td>
                           <td>
                              <h6 className="lead ">Sneakers</h6>
                              <p className="text-secondary">By Anindira</p>
                           </td>
                           <td>
                              <h6 className="lead ">$10,6</h6>
                              <p className="text-secondary">Dolar USD</p>
                           </td>
                           <td>
                              <Button variant="danger">Remove</Button>
                           </td>
                        </tr>
                     </tbody>
                  </Table>
               </Col>
            </Row>
            <hr />

            {/* -------------------------------------------------------------------------------------- | Shipping Details | ---------------------------------------------------------------------------------------------------  */}

            <Row>
               <Col data-aos="fade-up">
                  <h6 className="fw-bold">Shipping Details</h6>
               </Col>
            </Row>
            <Row>
               <Col md={6} data-aos="fade-up">
                  <Form>
                     <Form.Group controlId="formBasicAddress1">
                        <Form.Label className="fw-bold mt-4">Address 1</Form.Label>
                        <Form.Control type="text" placeholder="Enter Adress 1" value={input.adres1} onChange={(e) => setInput({ ...input, adres1: e.target.value })} autoComplete="off" />
                     </Form.Group>
                  </Form>
               </Col>
               <Col md={6} data-aos="fade-up">
                  <Form>
                     <Form.Group controlId="formBasicAddress2">
                        <Form.Label className="fw-bold mt-4">Adress 2</Form.Label>
                        <Form.Control type="text" placeholder="Enter Adress 2" value={input.adres2} onChange={(e) => setInput({ ...input, adres2: e.target.value })} autoComplete="off" />
                     </Form.Group>
                  </Form>
               </Col>
            </Row>
            <Row>
               <Col md={4} data-aos="fade-up">
                  <Form.Label className="fw-bold mt-4">Province</Form.Label>
                  <Form.Select onChange={(e) => setCity(e.target.value)} aria-label="Default select example">
                     <option disabled selected>
                        Select Your Province
                     </option>
                     <option value="Jakarta">DKI Jakarta</option>
                     <option value="JaBar">Jawa Barat</option>
                     <option value="JaTim">Jawa Timur</option>
                     <option value="NorSu">Sumatra Utara</option>
                     <option value="Papua">Papua</option>
                  </Form.Select>
               </Col>
               <Col md={4} data-aos="fade-up">
                  <Form.Label className="fw-bold mt-4">City</Form.Label>
                  <Form.Select aria-label="Default select example">
                     {city === "Default" ? (
                        <>
                           <option disabled selected>
                              Select Your City
                           </option>
                           <option disabled>Choose Province First</option>
                        </>
                     ) : null}
                     {kota.jakr ? (
                        <>
                           {Kota.Jakarta.map((e) => (
                              <option>{e}</option>
                           ))}
                        </>
                     ) : null}
                     {kota.westJ ? (
                        <>
                           {Kota.Jabar.map((e) => (
                              <option>{e}</option>
                           ))}
                        </>
                     ) : null}
                     {kota.eastJ ? (
                        <>
                           {Kota.Jatim.map((e) => (
                              <option>{e}</option>
                           ))}
                        </>
                     ) : null}
                     {kota.northS ? (
                        <>
                           {Kota.Sumut.map((e) => (
                              <option>{e}</option>
                           ))}
                        </>
                     ) : null}
                     {kota.papua ? (
                        <>
                           {Kota.Papua.map((e) => (
                              <option>{e}</option>
                           ))}
                        </>
                     ) : null}
                  </Form.Select>
               </Col>
               <Col md={4} data-aos="fade-up">
                  <Form>
                     <Form.Group className="mb-3" controlId="formBasicPostal">
                        <Form.Label className="fw-bold mt-4">Postal Code</Form.Label>
                        <Form.Control type="number" placeholder="Enter Your Postal Code" value={input.pCode} onChange={(e) => setInput({ ...input, pCode: e.target.value })} autoComplete="off" />
                     </Form.Group>
                  </Form>
               </Col>
            </Row>
            <Row>
               <Col md={6} data-aos="fade-up">
                  <Form>
                     <Form.Group controlId="formBasicCountry">
                        <Form.Label className="fw-bold mt-4">Country</Form.Label>
                        <Form.Control type="text" placeholder="Enter Country" value="Indonesia" />
                     </Form.Group>
                  </Form>
               </Col>
               <Col md={6} data-aos="fade-up">
                  <Form>
                     <Form.Group controlId="formBasicPhone">
                        <Form.Label className="fw-bold mt-4">No Phone</Form.Label>
                        <Form.Control type="tel" placeholder="Enter Number Phone" value={input.noPhone} onChange={(e) => setInput({ ...input, noPhone: e.target.value })} autoComplete="off" />
                     </Form.Group>
                  </Form>
               </Col>
            </Row>

            {/* ---------------------------------------------------------------------------------------------- | Payment Information | -------------------------------------------------------------------------------------------------  */}
            <hr />
            <Row>
               <Col data-aos="fade-down" data-aos-delay="100">
                  <h5 className="fw-bold mb-3 pb-2">Payment Informations</h5>
               </Col>
            </Row>
            <Row>
               <Col md={2} className="col-4" data-aos="zoom-out">
                  <p className="mb-0" style={{ fontSize: "1.1rem" }}>
                     $17,94
                  </p>
                  <p className="text-secondary">Country Task</p>
               </Col>
               <Col md={3} className="col-4" data-aos="zoom-out">
                  <p className="mb-0" style={{ fontSize: "1.1rem" }}>
                     $10,5
                  </p>
                  <p className="text-secondary">Product Insurance</p>
               </Col>
               <Col md={2} className="col-4" data-aos="zoom-out">
                  <p className="mb-0" style={{ fontSize: "1.1rem" }}>
                     $48,38
                  </p>
                  <p className="text-secondary">Ship to Jakarta</p>
               </Col>
               <Col md={2} className="col-4" data-aos="zoom-out">
                  <p className="text-success fw-bold mb-0" style={{ fontSize: "1.1rem" }}>
                     $1.536, 42
                  </p>
                  <p className="text-secondary">Total</p>
               </Col>
               <Col md={3} className="col-8 text-center" data-aos="zoom-out">
                  <Button variant="success" className="w-100" style={{ display: "blok" }}>
                     <Link to="/success" className="text-white text-decoration-none">
                        Checkout Now
                     </Link>
                  </Button>
               </Col>
            </Row>

            {/* ---------------------------------------------------------------------------------------------------- | Footer | -------------------------------------------------------------------------------------------------  */}

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
         </Container>
      </div>
   );
};

export default Cart;
