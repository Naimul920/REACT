import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import webLogo from '../../asset/image/web.svg';
import mobileLogo from '../../asset/image/mobile.svg';
import graphicLogo from '../../asset/image/graphic.svg';
class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div>
                                <img src={webLogo} />
                                <h2>Web Development</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div>
                                <img src={mobileLogo} />
                                <h2>Mobile Development</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div>
                                <img src={graphicLogo} />
                                <h2>Graphic Designer</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Services;