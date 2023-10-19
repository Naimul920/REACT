import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class Summary extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="summaryBanner p-0">
                    <div className="summaryBannerOverlay">
                        <Container className="text-center " >
                            <Row>
                                <Col lg={8} md={6} sm={12}>
                                    <Row>
                                        <Col >
                                            <h1 style={{color:"white"}} >100</h1>
                                            <h4 style={{color:"white"}} >Total Project</h4>
                                            <hr style={{color:"white", marginLeft:"158px", width:"100px"}}/>
                                        </Col>
                                        <Col>
                                            <h1 style={{color:"white"}} >100</h1>
                                            <h4 style={{color:"white"}} >Total Project</h4>
                                            <hr style={{color:"white", marginLeft:"158px", width:"100px"}}/>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={6} sm={12}>

                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Summary;