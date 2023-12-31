import React, {Component, Fragment} from 'react';
import {Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import navBarLogoScroll from '../../asset/image/logo-b.png'
import navBarLogo from '../../asset/image/logo-w.png'
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'

class TopNavigation extends Component {
    constructor() {
        super();
        this.state={
            navBarTitle:"navTitle",
            navBarLogo:[navBarLogo],
            navBarBack:"navBarBack",
            navItem:"navItem"

        }
    }
    onScroll=()=>{
        if (window.scrollY>100)
        {
           this.setState({navBarTitle:"navTitleScroll", navBarLogo:[navBarLogoScroll], navBarBack:"navBarBackScroll", navItem:"navItemScroll"})
        }
        else if (window.scrollY<100)
        {
            this.setState({navBarTitle:"navTitle", navBarLogo:[navBarLogo], navBarBack:"navBarBack", navItem:"navItem"})
        }
}
componentDidMount() {
        window.addEventListener("scroll", this.onScroll)
}

    render() {
        return (
            <Fragment>
                <Navbar  fixed="top" collapseOnSelect expand="lg"  className={this.state.navBarBack}>
                    <Container>
                        <Navbar.Brand className={this.state.navBarTitle}><img src={this.state.navBarLogo} /> NAIMUL ISLAM </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                            </Nav>
                            <Nav>
                                <Nav.Link className={this.state.navItem} href="#deets">HOME</Nav.Link>
                                <Nav.Link className={this.state.navItem} href="#deets">SERVICES</Nav.Link>
                                <Nav.Link className={this.state.navItem} href="#deets">COURSES</Nav.Link>
                                <Nav.Link className={this.state.navItem} href="#deets">PROTFOLIO</Nav.Link>
                                <Nav.Link className={this.state.navItem} href="#deets">CONTACT</Nav.Link>
                                <Nav.Link className={this.state.navItem} href="#deets">ABOUT</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;