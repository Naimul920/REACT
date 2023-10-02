import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class Analysis extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h1 className="servicesMainTitle text-center">TECHNOLOGY USED</h1>
                    <Row>
                        <Col lg={6} md={12} sm={12}>

                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <p className="text-justify des">There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form,
                                by injected humour, or randomised words which don't look even slightly. If you are going use a passage of Lorem Ipsum,
                                you need be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
                                predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a
                                handful of model sentence structures, to generate.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;