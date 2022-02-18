import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap";
import NavDashboard from "./NavDashboard";

const DashAcc = () => {
   const [input, setInput] = useState({ adres1: "Jln. Dermaga Raya", adres2: "005/08 ", pCode: "17154", noPhone: "087984366758" });

   const [city, setCity] = useState("Default");

   const [kota, setKota] = useState({ westJ: false, jakr: false, eastJ: false, northS: false, papua: false });

   const Kota = {
      Jakarta: ["Kepulauan Seribu", "Jakarta Utara", "Jakarta Timur", "Jakarta Barat", "Jakarta Selatan", "Jakarta Pusat"],
      Jabar: ["Bandung", "Bogor", "Bekasi", "Depok", "Cimahi", "Tasikmalaya", "Banjar", "Cirebon", "Sukabumi", "Cianjur", "Purwakarta"],
      Jatim: ["Surabaya", "Kediri", "Malang", "Blitar", "Probolinggo", "Mojokerto", "Batu", "Madiun", "Gresik", "Lamongan", "Sidoarjo", "Banyuwangi", "Ponorogo"],
      Sumut: ["Medan", "Binjai", "Tanjung Balai", "Nias", "Samosir", "Sibolaga", "Karo", "Dairi"],
      Papua: ["Jayapura", "Merauke", "Serui", "Puncak Jaya", "Asmat", "Intan Jaya", "Nduga", "Jayawijaya"],
   };

   const [aktif, setAktif] = useState(false);
   const [stic, setStic] = useState("235px");
   const monitor = window.innerWidth < 800;
   const monitorK = window.innerWidth < 500;

   useEffect(() => {
      if (monitorK) {
         setStic("0");
      }

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
   }, [monitorK, city, kota]);

   const dashClick = () => {
      setAktif(!aktif);
      const sidebar = document.querySelector("#sidebars");
      sidebar.classList.toggle("active-nav");
   };

   return (
      <>
         <div style={monitor ? { marginTop: "-25px" } : { overflow: "hidden" }}>
            <div className="d-flex">
               <NavDashboard />

               <div style={monitorK ? { marginTop: "80px" } : {} && { marginLeft: stic, backgroundColor: "#f5f5fb" }}>
                  <Navbar expand="lg" fixed="top" bg={monitorK ? "light" : ""}>
                     <Container fluid>
                        <Button variant={aktif ? "primary" : "outline-primary"} className="d-md-none me-auto me-2" onClick={dashClick} id="menu-toggle">
                           Menu
                        </Button>
                        <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                           <span className="navbar-toggle-icon"></span>
                        </Button>

                        <Navbar.Collapse id="navbarSupportedContent">
                           <Nav className="d-none d-lg-flex ms-auto">
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

                  <div className="content" style={monitorK ? { height: "100vh" } : { width: "83vw", height: "100vh", paddingRight: "1vw" }}>
                     <Container fluid>
                        <div>
                           <h5 className="fw-bold fs-5">My Account</h5>
                           <p className="dashboard-title fs-6">Update Your Current Profile</p>
                        </div>

                        <Row>
                           <Col>
                              <Form>
                                 <Card>
                                    <Card.Body className="card-body-my">
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
                                                      {Kota.Jakarta.reduce(function (result, kota) {
                                                         if (kota !== "Jakarta Timur") {
                                                            result.push(kota);
                                                         }
                                                         return result;
                                                      }, []).map((e, index) => (
                                                         <option key={index}>{e}</option>
                                                      ))}
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
