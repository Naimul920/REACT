import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {ResponsiveContainer, BarChart, Bar, XAxis, Tooltip} from "recharts";



class Analysis extends Component {
    constructor() {
        super();
        this.state={
            data:[

                {Technology:'Java', Project:100},
                {Technology:'Kotlin', Project:40},
                {Technology:'Sql', Project:90},
                {Technology:'Bootstrap', Project:95},
                {Technology:'Jquery', Project:60},
                {Technology:'React', Project:90},
                {Technology:'PHP', Project:100},
                {Technology:'Angular', Project:65}

            ]
        }
    }
    render() {

        let blue = "rgba(0,115,230,0.8)";

        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="servicesMainTitle ">TECHNOLOGY USED</h1>
                    <Row>
                        <Col style={{width:'50%', height: '300px'}} >
                            <ResponsiveContainer >
                                <BarChart width={100} height={300} data={this.state.data} >
                                    <XAxis dataKey="Technology"/>
                                    <Tooltip/>
                                    <Bar dataKey="Project" fill={blue}>
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </Col>

                        <Col lg={6} md={12} sm={12}>
                            <p className="text-justify des" style={{textAlign:"justify"}}>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                                making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,<br/><br/>
                                consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                                "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.<br/><br/> This book is a treatise on the theory of ethics, very popular during the Renaissance.
                                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;