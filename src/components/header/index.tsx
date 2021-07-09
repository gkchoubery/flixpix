import { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './index.css';

interface IProps {
    setModalShow: Function;
    onLoginHide: Function;
    onRegisterHide: Function
}

export default class HeaderComponent extends Component<IProps> {
    
    render() {
        return (
            <Navbar className="fixed-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>FlixPix</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/browse">
                                <Nav.Link>Browse</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav>
                            <a className="nav-link custom" onClick={() => this.props.setModalShow('login')}>Login</a>
                            <a className="nav-link custom" onClick={() => this.props.setModalShow('register')}>Register</a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}