import { Component } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import Api from '../../utils/api';

interface IProps {
  show: boolean;
  onHide: Function;
}

export type RegisterType = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

interface IState {
  loading: boolean;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  repassword: string;
}

export default class RegisterModalComponent extends Component<IProps, IState> {

  api: Api;

  constructor(props: IProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      repassword: '',
      loading: false,
    }
    this.api = new Api();
  }

  isFormValid = () => {
    return !!this.state.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/) &&
      this.state.password.trim().length > 3 &&
      this.state.repassword === this.state.password &&
      this.state.firstName.trim().length > 3 &&
      this.state.lastName.trim().length > 3;
  }

  formInput = (type: string, value: string) => {
    this.setState({
      [type]: value
    } as unknown as IState);
  }

  onFormSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    await this.setState({
      loading: true
    });
    await this.api.postRegister({
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName
    }).catch(e => {
      console.error(e);
    }).finally(() => {
      this.props.onHide();
      this.setState({
        loading: false
      });
    });
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
            Register
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" onChange={(e) => this.formInput('firstName', e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" onChange={(e) => this.formInput('lastName', e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => this.formInput('email', e.target.value)} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => this.formInput('password', e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicRePassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" onChange={(e) => this.formInput('repassword', e.target.value)} />
            </Form.Group>
            <Button className="float-right" variant="primary" type="submit" onClick={this.onFormSubmit} disabled={!this.isFormValid() || this.state.loading}>
              Sign Up
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    )
  };
}