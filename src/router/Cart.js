import React from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import NavbarM from "./NavbarM";
import pc1 from "../images/product-card-1.png";
import pc2 from "../images/product-card-2.png";
import pc3 from "../images/product-card-3.png";
import { useState, useEffect } from "react";

const Cart = () => {
   const [adres1, setAdres1] = useState("Jln Halim Perdanakusuma");
   const [adres2, setAdres2] = useState("Blok 3 No. 35");
   const [pCode, setPCode] = useState("17154");
   const [noPhone, setNoPhone] = useState("087984366758");

   const [city, setCity] = useState("Default");
   const [westJ, setWestJ] = useState(false);
   const [jakr, setJakr] = useState(false);
   const [eastJ, setEastJ] = useState(false);
   const [northS, setNorthS] = useState(false);
   const [papua, setPapua] = useState(false);

   const Jakarta = ["Kepulauan Seribu", "Jakarta Utara", "Jakarta Timur", "Jakarta Barat", "Jakarta Selatan", "Jakarta Pusat"];
   const Jabar = ["Bandung", "Bogor", "Bekasi", "Depok", "Cimahi", "Tasikmalaya", "Banjar", "Cirebon", "Sukabumi", "Cianjur", "Purwakarta"];
   const Jatim = ["Surabaya", "Kediri", "Malang", "Blitar", "Probolinggo", "Mojokerto", "Batu", "Madiun", "Gresik", "Lamongan", "Sidoarjo", "Banyuwangi", "Ponorogo"];
   const Sumut = ["Medan", "Binjai", "Tanjung Balai", "Nias", "Samosir", "Sibolaga", "Karo", "Dairi"];
   const Papua = ["Jayapura", "Merauke", "Serui", "Puncak Jaya", "Asmat", "Intan Jaya", "Nduga", "Jayawijaya"];

   useEffect(() => {
      if (city === "JaBar") {
         setWestJ(true);
         setJakr(false);
         setEastJ(false);
         setNorthS(false);
         setPapua(false);
      } else if (city === "Jakarta") {
         setJakr(true);
         setWestJ(false);
         setEastJ(false);
         setNorthS(false);
         setPapua(false);
      } else if (city === "JaTim") {
         setEastJ(true);
         setJakr(false);
         setWestJ(false);
         setNorthS(false);
         setPapua(false);
      } else if (city === "NorSu") {
         setNorthS(true);
         setJakr(false);
         setWestJ(false);
         setEastJ(false);
         setPapua(false);
      } else if (city === "Papua") {
         setPapua(true);
         setJakr(false);
         setWestJ(false);
         setEastJ(false);
         setNorthS(false);
      }
   }, [city]);

   return (
      <div className="pt-5" style={{ height: "1000px" }}>
         <NavbarM />

         {/* ----------------------------------------------------------------------------------------- | BreadCrumb | ------------------------------------------------------------------------------------------------- */}

         <Container className="mt-5">
            <Row>
               <Col>
                  <nav aria-label="breadcrumb">
                     <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                           <a href="/" className="text-secondary lh-lg  text-decoration-none" style={{ fontSize: "1.1rem" }}>
                              Home
                           </a>
                        </li>
                        <li className="breadcrumb-item text-dark lh-lg fw-bold" style={{ fontSize: "1.1rem" }}>
                           Cart
                        </li>
                     </ol>
                  </nav>
               </Col>
            </Row>
         </Container>

         <Container>
            <Row>
               <Col className="col-12">
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
                              <img src={pc1} width="130" height="90" alt="" class="cart-image" />
                           </td>
                           <td>
                              <h6 className="lead ">Sofa</h6>
                              <p className="text-secondary">By Reza</p>
                           </td>
                           <td>
                              <h6 className="lead ">Rp. 1.000.000</h6>
                              <p className="text-secondary">IDN</p>
                           </td>
                           <td>
                              <Button className="btn-danger">Remove</Button>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <img src={pc2} width="130" height="90" alt="" class="cart-image" />
                           </td>
                           <td>
                              <h6 className="lead ">Camera</h6>
                              <p className="text-secondary">By Ina</p>
                           </td>
                           <td>
                              <h6 className="lead ">Rp. 100.000</h6>
                              <p className="text-secondary">IDN</p>
                           </td>
                           <td>
                              <Button className="btn-danger">Remove</Button>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <img src={pc3} width="130" height="90" alt="" class="cart-image" />
                           </td>
                           <td>
                              <h6 className="lead ">Sniker</h6>
                              <p className="text-secondary">By Rayya</p>
                           </td>
                           <td>
                              <h6 className="lead ">Rp. 2.000.000</h6>
                              <p className="text-secondary">IDN</p>
                           </td>
                           <td>
                              <Button className="btn-danger">Remove</Button>
                           </td>
                        </tr>
                     </tbody>
                  </Table>
               </Col>
            </Row>
            <hr />
            <Row>
               <Col>
                  <h6 className="fw-bold">Shipping Details</h6>
               </Col>
            </Row>
            <Row>
               <Col md={6}>
                  <Form>
                     <Form.Group controlId="formBasicEmail">
                        <Form.Label className="fw-bold mt-4">Address 1</Form.Label>
                        <Form.Control type="text" placeholder="Enter Adress 1" value={adres1} onChange={(e) => setAdres1(e.target.value)} autoComplete="off" />
                     </Form.Group>
                  </Form>
               </Col>
               <Col md={6}>
                  <Form>
                     <Form.Group controlId="formBasicPassword">
                        <Form.Label className="fw-bold mt-4">Adress 2</Form.Label>
                        <Form.Control type="text" placeholder="Enter Adress 2" value={adres2} onChange={(e) => setAdres2(e.target.value)} autoComplete="off" />
                     </Form.Group>
                  </Form>
               </Col>
            </Row>
            <Row>
               <Col md={4}>
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
               <Col md={4}>
                  <Form.Label className="fw-bold mt-4">City</Form.Label>
                  <Form.Select aria-label="Default select example">
                     {city === "Default" ? (
                        <>
                           <option disabled selected>
                              Select Your City
                           </option>
                           {Jabar.map((e) => (
                              <option>{e}</option>
                           ))}
                        </>
                     ) : (
                        ""
                     )}
                     {jakr ? (
                        <>
                           {Jakarta.map((e) => (
                              <option>{e}</option>
                           ))}
                        </>
                     ) : (
                        ""
                     )}
                     {westJ ? (
                        <>
                           {Jabar.map((e) => (
                              <option>{e}</option>
                           ))}
                        </>
                     ) : (
                        ""
                     )}
                     {eastJ ? (
                        <>
                           {Jatim.map((e) => (
                              <option>{e}</option>
                           ))}
                        </>
                     ) : (
                        ""
                     )}
                     {northS ? (
                        <>
                           {Sumut.map((e) => (
                              <option>{e}</option>
                           ))}
                        </>
                     ) : (
                        ""
                     )}
                     {papua ? (
                        <>
                           {Papua.map((e) => (
                              <option>{e}</option>
                           ))}
                        </>
                     ) : (
                        ""
                     )}
                  </Form.Select>
               </Col>
               <Col md={4}>
                  <Form>
                     <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="fw-bold mt-4">Postal Code</Form.Label>
                        <Form.Control type="number" placeholder="Enter Your Postal Code" value={pCode} onChange={(e) => setPCode(e.target.value)} autoComplete="off" />
                     </Form.Group>
                  </Form>
               </Col>
            </Row>
            <Row>
               <Col md={6}>
                  <Form>
                     <Form.Group controlId="formBasicEmail">
                        <Form.Label className="fw-bold mt-4">Country</Form.Label>
                        <Form.Control type="text" placeholder="Enter Country" value="Indonesia" />
                     </Form.Group>
                  </Form>
               </Col>
               <Col md={6}>
                  <Form>
                     <Form.Group controlId="formBasicPassword">
                        <Form.Label className="fw-bold mt-4">No Phone</Form.Label>
                        <Form.Control type="tel" placeholder="Enter Number Phone" value={noPhone} onChange={(e) => setNoPhone(e.target.value)} autoComplete="off" />
                     </Form.Group>
                  </Form>
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
