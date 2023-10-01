import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import webLogo from '../../asset/image/web.png';
import mobileLogo from '../../asset/image/mobile.png';
import graphicLogo from '../../asset/image/graphic.png';
class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container >
                    <h1 className="text-center servicesMainTitle ">MY SERVICES</h1>
                    <Row>

                        <Col lg={4} md={6} sm={12}>
                            <div className="servicesCard text-center">
                                <img src={webLogo} />
                                <h2 className="servicesName">Web Development</h2>
                                <p className="servicesDescription">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="servicesCard text-center">
                                <img src={mobileLogo} />
                                <h2 className="servicesName">Mobile Development</h2>
                                <p className="servicesDescription">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="servicesCard text-center">
                                <img src={graphicLogo} />
                                <h2 className="servicesName">Graphic Designer</h2>
                                <p className="servicesDescription">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Services;