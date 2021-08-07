import React from 'react';
import HeaderComponent from '../../components/header';
import FooterComponent from '../../components/footer';
import LoginModalComponent from '../../components/login';
import RegisterModalComponent from '../../components/register';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Api from '../../utils/api';

interface IState {
    loginModalShow: boolean;
    registerModalShow: boolean;
    isAuthenticated: boolean;
    loading: boolean;
}

class ContainerComponent extends React.Component<RouteComponentProps, IState> {

    api: Api;

    constructor(props: RouteComponentProps) {
        super(props);
        this.api = new Api();
        this.state = {
            loginModalShow: false,
            registerModalShow: false,
            isAuthenticated: false,
            loading: true
        };
    }

    async componentDidMount() {
        const id = localStorage.getItem('user');
        if (id) {
            try {
                await this.api.getUserDetails();
                await this.setState({
                    loading: false
                })
                await this.onLogin();
            } catch(e) {
                console.info('User token expired');
            }
        }
    }

    setModalShow = (type: 'login' | 'register') => {
        this.setState({
            loginModalShow: type === 'login',
            registerModalShow: type === 'register'
        });
    }

    onLoginHide = () => {
        this.setState({
            loginModalShow: false
        });
    }

    onRegisterHide = () => {
        this.setState({
            registerModalShow: false
        });
    }

    onLogin = async () => {
        await this.setState({
            isAuthenticated: true
        });
        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <>
                <HeaderComponent loading={this.state.loading} authenticated={this.state.isAuthenticated} setModalShow={this.setModalShow} onLoginHide={this.onLoginHide} onRegisterHide={this.onRegisterHide} />
                {this.props.children}
                {this.state.isAuthenticated ? '' :
                    <>
                        <LoginModalComponent onLogin={this.onLogin} onHide={this.onLoginHide} show={this.state.loginModalShow} />
                        <RegisterModalComponent onHide={this.onRegisterHide} show={this.state.registerModalShow} />
                    </>}
                <FooterComponent />
            </>
        );
    }
}

export default withRouter(ContainerComponent);