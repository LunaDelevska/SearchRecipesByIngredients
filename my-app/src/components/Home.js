import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Home.css'; // Import your custom CSS

function HomePage() {
    return (
        <div>
            {/* Background Section */}
            <div className="background-section" >
                {/* Full-width Navbar */}
                <Navbar className="navbar-transparent bg-body-tertiary justify-content-between ms-1" data-bs-theme="dark">
                    <Container >
                        <Navbar.Brand href="#home">
                            <img
                                src="https://cdn.prod.website-files.com/66d47171e73000e1183f49d9/66d47171e73000e1183f4a54_logo-spoon-white.svg"
                                width="126"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                        <Nav className="justify-content-end ms-1">
                            <Nav.Link href="#home" style={{color:"white"}}>Home</Nav.Link>
                            <Nav.Link href="#features" style={{color:"white"}}>Features</Nav.Link>
                            <Nav.Link href="#pricing" style={{color:"white"}}>Pricing</Nav.Link>
                            <Button variant="outline-light" size="lg">Light</Button>{' '}
                        </Nav>
                    </Container>
                </Navbar>


                {/* Overlay Text */}
                <div className="overlay-text">
                    <h1 className="display-4 font-h1">Cook with What You Have!</h1>
                    <p className="lead ibm-plex-mono-regular">Discover recipes that match your ingredients.</p>
                    <Button variant="success" size="lg">Get started</Button>{' '}

                </div>
            </div>

            {/* Content Section */}
            <div className="content-section">
                <div className="text-start container">
                    <Container >
                    <Row>
                        <Col>
                            <p className="libre-franklin-24">Unlock Your Pantry's potential:</p> <p className="libre-franklin-light">An innovative recipe app that generates personalized recipes based on the ingredients that you have at home.</p>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
                    {/* Add more content here */}

                </div>
                <div className="content-section">
                    <Container>
                        <Row>
                            <Col>
                                <Row>
                                <Col sm={4}>sm=8</Col>
                                <Col sm={8}>sm=4</Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                <Col sm={4}>sm=8</Col>
                                <Col sm={8}>sm=4</Col>
                            </Row></Col>
                            <Col>
                                <Row>
                                    <Col sm={4}>sm=8</Col>
                                    <Col sm={8}>sm=4</Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>

                </div>
            </div>
        </div>
    );
}

export default HomePage;
