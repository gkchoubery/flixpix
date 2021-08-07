import React from 'react';
import { Button, Collapse, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import './index.css';

export interface IProps extends RouteComponentProps<{}> {
    setModalShow: any;
    onLoginHide: any;
    onRegisterHide: any;
    authenticated?: boolean;
    loading: boolean;
};

export type IState = {
    searchText: string;
    search: boolean;
}

export class HeaderComponent extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            search: false,
            searchText: ''
        };
    }

    toggleSearch = async () => {
        const search = !this.state.search;
        await this.setState({
            searchText: '',
            search
        });
    }

    handleSearchText = async (e: any) => {
        await this.setState({
            searchText: e.target.value
        });
    }

    handleSearch = async () => {
        if (this.props.location.pathname !== '/search') {
            this.props.history.push({
                pathname: '/search',
                state: {
                    searchText: this.state.searchText
                }
            })
        } else {
            this.props.history.replace({
                pathname: '/search',
                state: {
                    searchText: this.state.searchText
                }
            })
        }
    }

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
                            <Collapse in={this.state.search} dimension='width'>
                                <div>
                                    <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
                                        <FormControl
                                            value={this.state.searchText}
                                            type="search"
                                            onChange={this.handleSearchText}
                                            required={true}
                                            placeholder="Search"
                                            className="mr-2"
                                            aria-label="Search"
                                        />
                                        <Button onClick={this.handleSearch} disabled={!this.state.searchText} variant="outline-success">Search</Button>
                                    </Form>
                                </div>
                            </Collapse>
                            <a className="nav-link custom" onClick={this.toggleSearch}><i className="fas fa-search"></i></a>
                            {this.props.loading ? <p className="nav-link custom">Loading</p> : this.props.authenticated ?
                                <LinkContainer to="/dashboard">
                                    <Nav.Link>Dashboard</Nav.Link>
                                </LinkContainer>
                                :
                                <>
                                    <a className="nav-link custom" onClick={() => this.props.setModalShow('login')}>Login</a>
                                    <a className="nav-link custom" onClick={() => this.props.setModalShow('register')}>Register</a>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default withRouter(HeaderComponent);