import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import './index.css';
import { User } from '../../interfaces/user';

export type IState = {
    user: User;
}

class DashboardComponent extends React.Component<RouteComponentProps, IState> {

    constructor(props: RouteComponentProps) {
        super(props);
        const user = localStorage.getItem('user');
        if (!user) {
            this.props.history.goBack();
        } else {
            this.state = {
                user: JSON.parse(user)
            }
        }
    }

    render() {
        return (
            <div id="dashboard">
                <Container>
                    <h1>Dashboard</h1>
                    <div>
                        <Row>
                            <Col>
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" value={this.state.user.firstName} readOnly={true} className="form-control" id="firstName" aria-describedby="firstName" />
                            </Col>
                            <Col>
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" value={this.state.user.lastName} readOnly={true} className="form-control" id="lastName" aria-describedby="lastName" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="email">E-mail Address</label>
                                <input type="email" value={this.state.user.email} readOnly={true} className="form-control" id="email" aria-describedby="email" />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div >
        )
    }
}

export default withRouter(DashboardComponent);