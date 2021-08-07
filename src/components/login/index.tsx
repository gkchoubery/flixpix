import { Component } from 'react';
import './index.css';
import { Alert, Button, Form, Modal } from 'react-bootstrap';
import Api from '../../utils/api';

interface IProps {
    show: boolean;
    onHide: Function;
    onLogin: Function;
}

interface IState {
    email: string;
    password: string;
    loading: boolean;
    error: boolean;
    errorMessage: string;
}

export default class LoginModalComponent extends Component<IProps, IState> {

    api: Api;

    constructor(props: IProps) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loading: false,
            error: false,
            errorMessage: 'Invalid Email Address or Password. Please try again.'
        }

        this.api = new Api();
    }

    isFormValid = () => {
        return !!this.state.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/) && this.state.password.trim().length > 3;
    }

    formInput = (type: 'email' | 'password', value: string) => {
        this.setState({
            [type]: value
        } as unknown as IState);
    }

    onFormSubmit = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        await this.setState({
            loading: true
        });
        try {
            await this.api.postLogin(this.state.email, this.state.password);
            this.props.onLogin();
            this.props.onHide();
            await this.setState({
                loading: false
            });
        } catch (e) {
            this.setState({
                error: true
            });
        }
    }

    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                contentClassName="user-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Welcome Back!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {this.state.error ? <Alert variant="danger">{this.state.errorMessage}</Alert> : ''}
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => this.formInput('email', e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => this.formInput('password', e.target.value)} />
                        </Form.Group>
                        <Button className="float-right" type="submit" onClick={this.onFormSubmit} disabled={!this.isFormValid()}>
                            Login
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    };
}