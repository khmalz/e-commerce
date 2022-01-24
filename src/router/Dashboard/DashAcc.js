import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap";
import NavDashboard from "./NavDashboard";
import us from "../../images/user.jpg";
import ic from "../../images/icon_cart.svg";

const DashAcc = () => {
   const [input, setInput] = useState({ adres1: "Jln. Dermaga Raya", adres2: "005/08 ", pCode: "17154", noPhone: "087984366758" });

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
   const [aktif, setAktif] = useState(false);
   const [stic, setStic] = useState("200px");
   const monitorK = window.innerWidth < 500;

   useEffect(() => {
      if (monitorK) {
         setStic("0");
      }
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
   }, [monitorK, city]);

   const dashClick = () => {
      const wrap = document.querySelector("#wrapper");
      setAktif(!aktif);
      wrap.classList.toggle("toggled");
   };

   return (
      <>
         <div className="page-dashboard overflow-hidden">
            <div className="d-flex" id="wrapper">
               <NavDashboard />

               <div id="page-content-wrapper" style={{ marginLeft: stic }}>
                  <Navbar expand="lg" fixed="top" className="navbar-light navbar-store navbar-fixed-top">
                     <Container fluid>
                        <Button variant={aktif ? "primary" : "outline-primary"} className="d-md-none me-auto me-2" onClick={dashClick} id="menu-toggle">
                           Menu
                        </Button>
                        <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                           <span className="navbar-toggle-icon"></span>
                        </Button>

                        <Navbar.Collapse id="navbarSupportedContent">
                           <ul className="navbar-nav d-none d-lg-flex ms-auto">
                              <li class="nav-item dropdown">
                                 <Nav.Link class="nav-link dropdown-toggle" href="#a" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={us} alt="" className="rounded-circle me-2 profile-picture mb-1" />
                                    <span className="fw-bold" style={{ fontSize: "1.05em" }}>
                                       Hallo, Akmal
                                    </span>
                                 </Nav.Link>
                              </li>
                              <li className="nav-item">
                                 <a href="#a" className="nav-link d-line-block mt-2">
                                    <img src={ic} alt="" />
                                    <div className="cart-badge">3</div>
                                 </a>
                              </li>
                           </ul>

                           <ul className="navbar-nav d-block d-lg-none">
                              <li className="nav-item">
                                 <a href="#a" className="nav-link">
                                    Hallo, Akmal
                                 </a>
                              </li>
                              <li className="nav-item">
                                 <a href="#a" className="nav-link d-inline-block">
                                    Cart
                                 </a>
                              </li>
                           </ul>
                        </Navbar.Collapse>
                     </Container>
                  </Navbar>

                  <div className="section-content section-dashboard-home" style={{ height: "100vh" }}>
                     <Container fluid>
                        <div>
                           <h5 className="fw-bold fs-5">My Account</h5>
                           <p className="dashboard-title fs-6">Update Your Current Profile</p>
                        </div>

                        <Row>
                           <Col>
                              <Form>
                                 <Card style={monitorK ? { width: "95vw" } : { width: "83vw" }}>
                                    <Card.Body>
                                       <Row>
                                          <Col md={6}>
                                             <Form>
                                                <Form.Group controlId="formBasicAddress1">
                                                   <Form.Label className="fw-bold">Address 1</Form.Label>
                                                   <Form.Control type="text" placeholder="Enter Adress 1" value={input.adres1} onChange={(e) => setInput({ ...input, adres1: e.target.value })} autoComplete="off" />
                                                </Form.Group>
                                             </Form>
                                          </Col>
                                          <Col md={6}>
                                             <Form>
                                                <Form.Group controlId="formBasicAddress2">
                                                   <Form.Label className="fw-bold">Adress 2</Form.Label>
                                                   <Form.Control type="text" placeholder="Enter Adress 2" value={input.adres2} onChange={(e) => setInput({ ...input, adres2: e.target.value })} autoComplete="off" />
                                                </Form.Group>
                                             </Form>
                                          </Col>
                                       </Row>

                                       <Row>
                                          <Col md={4}>
                                             <Form.Label className="fw-bold mt-4">Province</Form.Label>
                                             <Form.Select onChange={(e) => setCity(e.target.value)} aria-label="Default select example">
                                                <option disabled>Select Your Province</option>
                                                <option value="Jakarta" selected>
                                                   DKI Jakarta
                                                </option>
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
                                                      <option>Jakarta Timur</option>
                                                      {Jakarta.reduce(function (result, kota) {
                                                         if (kota !== "Jakarta Timur") {
                                                            result.push(kota);
                                                         }
                                                         return result;
                                                      }, []).map((e, index) => (
                                                         <option key={index}>{e}</option>
                                                      ))}
                                                   </>
                                                ) : null}
                                                {jakr ? (
                                                   <>
                                                      {Jakarta.map((e) => (
                                                         <option>{e}</option>
                                                      ))}
                                                   </>
                                                ) : null}
                                                {westJ ? (
                                                   <>
                                                      {Jabar.map((e) => (
                                                         <option>{e}</option>
                                                      ))}
                                                   </>
                                                ) : null}
                                                {eastJ ? (
                                                   <>
                                                      {Jatim.map((e) => (
                                                         <option>{e}</option>
                                                      ))}
                                                   </>
                                                ) : null}
                                                {northS ? (
                                                   <>
                                                      {Sumut.map((e) => (
                                                         <option>{e}</option>
                                                      ))}
                                                   </>
                                                ) : null}
                                                {papua ? (
                                                   <>
                                                      {Papua.map((e) => (
                                                         <option>{e}</option>
                                                      ))}
                                                   </>
                                                ) : null}
                                             </Form.Select>
                                          </Col>
                                          <Col md={4}>
                                             <Form>
                                                <Form.Group className="mb-3" controlId="formBasicPostal">
                                                   <Form.Label className="fw-bold mt-4">Postal Code</Form.Label>
                                                   <Form.Control type="number" placeholder="Enter Your Postal Code" value={input.pCode} onChange={(e) => setInput({ ...input, pCode: e.target.value })} autoComplete="off" />
                                                </Form.Group>
                                             </Form>
                                          </Col>
                                       </Row>

                                       <Row>
                                          <Col md={6}>
                                             <Form>
                                                <Form.Group controlId="formBasicCountry">
                                                   <Form.Label className="fw-bold mt-4">Country</Form.Label>
                                                   <Form.Control type="text" placeholder="Enter Country" value="Indonesia" />
                                                </Form.Group>
                                             </Form>
                                          </Col>
                                          <Col md={6}>
                                             <Form>
                                                <Form.Group controlId="formBasicPhone">
                                                   <Form.Label className="fw-bold mt-4">No Phone</Form.Label>
                                                   <Form.Control type="tel" placeholder="Enter Number Phone" value={input.noPhone} onChange={(e) => setInput({ ...input, noPhone: e.target.value })} autoComplete="off" />
                                                </Form.Group>
                                             </Form>
                                          </Col>
                                       </Row>

                                       <Row>
                                          <Col className="text-end mt-3">
                                             <button type="submit" className="btn btn-success px-5">
                                                Save Now
                                             </button>
                                          </Col>
                                       </Row>
                                    </Card.Body>
                                 </Card>
                              </Form>
                           </Col>
                        </Row>
                     </Container>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default DashAcc;
