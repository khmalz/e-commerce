import React from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import NavbarM from "./NavbarM";
import pc1 from "../images/product-card-1.png";
import pc2 from "../images/product-card-2.png";
import pc3 from "../images/product-card-3.png";
import { useState, useEffect } from "react";

const Cart = () => {
   const [city, setCity] = useState("Default");
   const [westJ, setWestJ] = useState(false);
   const [eastJ, setEastJ] = useState(false);
   const [northS, setNorthS] = useState(false);
   const [papua, setPapua] = useState(false);

   const ChangeCity = (e) => {
      setCity(e.target.value);
   };

   useEffect(() => {
      if (city === "WestJava") {
         setWestJ(true);
         setEastJ(false);
         setNorthS(false);
         setPapua(false);
      } else if (city === "EastJava") {
         setWestJ(false);
         setEastJ(true);
         setNorthS(false);
         setPapua(false);
      } else if (city === "NorthSumatra") {
         setWestJ(false);
         setEastJ(false);
         setNorthS(true);
         setPapua(false);
      } else if (city === "Papua") {
         setWestJ(false);
         setEastJ(false);
         setNorthS(false);
         setPapua(true);
      }
   });

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
               <Col>
                  <Form>
                     <Form.Group controlId="formBasicEmail">
                        <Form.Label className="fw-bold mt-4">Address 1</Form.Label>
                        <Form.Control type="text" placeholder="Enter Adress 1" value="Bekasi Timur Regensi" />
                     </Form.Group>
                  </Form>
               </Col>
               <Col>
                  <Form>
                     <Form.Group controlId="formBasicPassword">
                        <Form.Label className="fw-bold mt-4">Adress 2</Form.Label>
                        <Form.Control type="text" placeholder="Enter Adress 2" value="Blok I3 No.35" />
                     </Form.Group>
                  </Form>
               </Col>
            </Row>
            <Row>
               <Col>
                  <Form.Label className="fw-bold mt-4">Province</Form.Label>
                  <Form.Select onChange={ChangeCity} aria-label="Default select example">
                     <option disabled selected>
                        Select Your Province
                     </option>
                     <option value="WestJava">West Java</option>
                     <option value="EastJava">East Java</option>
                     <option value="NorthSumatra">North Sumatra</option>
                     <option value="Papua">Papua</option>
                  </Form.Select>
               </Col>
               <Col>
                  <Form.Label className="fw-bold mt-4">City</Form.Label>
                  <Form.Select aria-label="Default select example">
                     {city === "Default" ? (
                        <>
                           <option disabled selected>
                              Select Your City
                           </option>
                           <option value="1">Bandung</option>
                           <option value="2">Bogor</option>
                           <option value="3">Bekasi</option>
                        </>
                     ) : (
                        ""
                     )}
                     {westJ ? (
                        <>
                           <option value="1">Bandung</option>
                           <option value="2">Bogor</option>
                           <option value="3">Bekasi</option>
                        </>
                     ) : (
                        ""
                     )}
                     {eastJ ? (
                        <>
                           <option value="1">Surabaya</option>
                           <option value="2">Kediri</option>
                           <option value="3">Malang</option>
                        </>
                     ) : (
                        ""
                     )}
                     {northS ? (
                        <>
                           <option value="1">Medan</option>
                           <option value="2">Binjai</option>
                           <option value="3">Tanjung Balai</option>
                        </>
                     ) : (
                        ""
                     )}
                     {papua ? (
                        <>
                           <option value="1">Jayapura</option>
                           <option value="2">Manokwari</option>
                           <option value="3">Serui</option>
                        </>
                     ) : (
                        ""
                     )}
                  </Form.Select>
               </Col>
               <Col>
                  <Form>
                     <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="fw-bold mt-4">Postal Code</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Pastel Code" value="17154" />
                     </Form.Group>
                  </Form>
               </Col>
            </Row>
         </Container>
      </div>
   );
};

export default Cart;
